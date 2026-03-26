import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import contactRoutes from './routes/contactRoutes.js'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 5000)
const allowedOrigins = (process.env.FRONTEND_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
)
app.use(compression())
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        callback(null, true)
        return
      }

      callback(new Error('Origin not allowed by CORS'))
    },
  }),
)
app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
    service: 'contact-api',
    timestamp: new Date().toISOString(),
  })
})

app.use('/api/contact', contactRoutes)

app.use((error, _request, response, _next) => {
  if (error instanceof Error && error.message === 'Origin not allowed by CORS') {
    response.status(403).json({ message: error.message })
    return
  }

  response.status(500).json({ message: 'Unexpected server error.' })
})

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`)
})
