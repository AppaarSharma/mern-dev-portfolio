import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { z } from 'zod'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDirectory = path.resolve(__dirname, '../data')
const submissionsPath = path.resolve(dataDirectory, 'contact-submissions.json')

const contactSchema = z.object({
  name: z.string().trim().min(2).max(60),
  email: z.string().trim().email().max(120),
  company: z.string().trim().max(80).optional().default(''),
  message: z.string().trim().min(24).max(1600),
  website: z.string().trim().optional().default(''),
})

async function ensureDataFile() {
  await mkdir(dataDirectory, { recursive: true })

  try {
    await readFile(submissionsPath, 'utf-8')
  } catch {
    await writeFile(submissionsPath, '[]', 'utf-8')
  }
}

async function readSubmissions() {
  await ensureDataFile()
  const fileContents = await readFile(submissionsPath, 'utf-8')
  return JSON.parse(fileContents)
}

export async function submitContactMessage(request, response) {
  const parsedBody = contactSchema.safeParse(request.body)

  if (!parsedBody.success) {
    response.status(400).json({ message: 'Please complete all required fields correctly.' })
    return
  }

  const submission = parsedBody.data

  if (submission.website) {
    response.status(200).json({ message: 'Message received.' })
    return
  }

  try {
    const existingSubmissions = await readSubmissions()
    const nextSubmission = {
      id: crypto.randomUUID(),
      name: submission.name,
      email: submission.email,
      company: submission.company,
      message: submission.message,
      createdAt: new Date().toISOString(),
    }

    existingSubmissions.push(nextSubmission)
    await writeFile(submissionsPath, JSON.stringify(existingSubmissions, null, 2), 'utf-8')

    response.status(201).json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Failed to persist contact submission', error)
    response.status(500).json({ message: 'Unable to save your message right now.' })
  }
}
