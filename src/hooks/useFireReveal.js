import { useEffect, useRef } from 'react'

const useFireReveal = () => {
  const revealRef = useRef(null)

  const target = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })
  const visible = useRef(false)

  useEffect(() => {
    const reveal = revealRef.current
    if (!reveal) return

    const friction = 0.85   // how fast velocity decays
    const attraction = 0.12 // pull toward cursor

    const animate = () => {
      // Apply velocity
      velocity.current.x += (target.current.x - position.current.x) * attraction
      velocity.current.y += (target.current.y - position.current.y) * attraction

      velocity.current.x *= friction
      velocity.current.y *= friction

      position.current.x += velocity.current.x
      position.current.y += velocity.current.y

      reveal.style.setProperty('--x', `${position.current.x}px`)
      reveal.style.setProperty('--y', `${position.current.y}px`)

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  const updateTarget = (x, y, element) => {
    const rect = element.getBoundingClientRect()

    target.current.x = x - rect.left
    target.current.y = y - rect.top

    if (!visible.current) {
      visible.current = true
      revealRef.current?.classList.add('active')
    }
  }

  const onMouseMove = (e) => {
    updateTarget(e.clientX, e.clientY, e.currentTarget)
  }

  const onTouchMove = (e) => {
    if (!e.touches.length) return
    const touch = e.touches[0]
    updateTarget(touch.clientX, touch.clientY, e.currentTarget)
  }

  const hide = () => {
    visible.current = false
    revealRef.current?.classList.remove('active')
  }

  return {
    revealRef,
    onMouseMove,
    onMouseLeave: hide,
    onTouchMove,
    onTouchEnd: hide,
  }
}

export default useFireReveal
