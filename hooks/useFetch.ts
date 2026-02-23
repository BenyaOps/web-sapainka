import { useEffect, useState } from 'react'

export default function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetch(url)
      .then((r) => r.json())
      .then((d) => {
        if (mounted) setData(d)
      })
      .catch(() => {
        /* noop */
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [url])

  return { data, loading }
}
