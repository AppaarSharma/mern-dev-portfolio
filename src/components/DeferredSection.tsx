import {
  type ComponentType,
  type LazyExoticComponent,
  Suspense,
  useEffect,
  useRef,
  useState,
} from 'react'

type DeferredSectionProps<P extends object> = {
  sectionId: string
  component: LazyExoticComponent<ComponentType<P>>
  componentProps: P
  placeholderLabel: string
}

export function DeferredSection<P extends object>({
  sectionId,
  component: Component,
  componentProps,
  placeholderLabel,
}: DeferredSectionProps<P>) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = containerRef.current

    if (!element || shouldLoad) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '220px 0px' },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [shouldLoad])

  return (
    <div ref={containerRef} id={sectionId}>
      {shouldLoad ? (
        <Suspense
          fallback={
            <div className="section-shell min-h-[280px] animate-pulse text-sm text-[var(--text-muted)]">
              {placeholderLabel}...
            </div>
          }
        >
          <Component {...componentProps} />
        </Suspense>
      ) : (
        <div className="section-shell flex min-h-[280px] items-center justify-center text-sm uppercase tracking-[0.32em] text-[var(--text-muted)]">
          {placeholderLabel}
        </div>
      )}
    </div>
  )
}
