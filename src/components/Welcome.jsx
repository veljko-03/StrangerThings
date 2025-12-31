import { useEffect, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import '../styles/Welcome.css'

const Welcome = () => {
  const heroRef = useRef(null)
  const revealRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const reveal = revealRef.current
    if (!hero || !reveal) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0
    let isVisible = false

    const animate = () => {
      currentX += (mouseX - currentX) * 0.05
      currentY += (mouseY - currentY) * 0.05

      reveal.style.setProperty('--x', `${currentX}px`)
      reveal.style.setProperty('--y', `${currentY}px`)

      requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top

      if (!isVisible) {
        isVisible = true
        reveal.classList.add('active')
      }
    }

    const handleMouseLeave = () => {
      isVisible = false
      reveal.classList.remove('active')
    }

    animate()
    hero.addEventListener('mousemove', handleMouseMove)
    hero.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove)
      hero.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 12,
      },
    },
  }

  return (
    <div className="hero" ref={heroRef}>
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="left" variants={itemVariants}>
          <img src="/strangerthings.svg" alt="Stranger Things Logo" />

          <motion.p className="st-desc" variants={itemVariants}>
            When the lights begin to flicker and reality bends,
            a hidden world awakens beneath Hawkins.
            Some doors, once opened, can never be closed.
          </motion.p>

          <motion.button className="st-btn" variants={itemVariants}>
            Enter the Upside Down
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="fire-reveal" ref={revealRef} />
    </div>
  )
}

export default Welcome
