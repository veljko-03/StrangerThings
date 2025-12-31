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

  const updatePosition = (x, y, target) => {
    const rect = target.getBoundingClientRect()
    mouse.current.x = x - rect.left
    mouse.current.y = y - rect.top

    if (!visible.current) {
      visible.current = true
      revealRef.current?.classList.add('active')
    }
  }

  const onMouseMove = (e) => {
    updatePosition(e.clientX, e.clientY, e.currentTarget)
  }

  const onTouchMove = (e) => {
    if (!e.touches.length) return
    const touch = e.touches[0]
    updatePosition(touch.clientX, touch.clientY, e.currentTarget)
  }

  const onMouseLeave = () => {
    visible.current = false
    revealRef.current?.classList.remove('active')
  }

  const onTouchEnd = () => {
    visible.current = false
    revealRef.current?.classList.remove('active')
  }

  return {
    revealRef,
    onMouseMove,
    onMouseLeave,
    onTouchMove,
    onTouchEnd,
  }
}

export default useFireReveal
