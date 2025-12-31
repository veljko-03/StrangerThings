import { useEffect, useRef } from 'react'

const useFireReveal = () => {
  const revealRef = useRef(null)

  const mouse = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const visible = useRef(false)

  useEffect(() => {
    const reveal = revealRef.current
    if (!reveal) return

    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.05
      current.current.y += (mouse.current.y - current.current.y) * 0.05

      reveal.style.setProperty('--x', `${current.current.x}px`)
      reveal.style.setProperty('--y', `${current.current.y}px`)

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    mouse.current.x = e.clientX - rect.left
    mouse.current.y = e.clientY - rect.top

    if (!visible.current) {
      visible.current = true
      revealRef.current?.classList.add('active')
    }
  }

  const onMouseLeave = () => {
    visible.current = false
    revealRef.current?.classList.remove('active')
  }

  return {
    revealRef,
    onMouseMove,
    onMouseLeave,
  }
}

export default useFireReveal
