// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import useFireReveal from '../hooks/useFireReveal'
import '../styles/Welcome.css'

const Welcome = () => {
  const { revealRef, onMouseMove, onMouseLeave } = useFireReveal()

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
    <div
      className="hero"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
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
