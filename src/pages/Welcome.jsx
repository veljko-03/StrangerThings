// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import useFireReveal from "../hooks/useFireReveal"
import "../styles/Welcome.css"

const Welcome = () => {
  const navigate = useNavigate()
  const {
    revealRef,
    onMouseMove,
    onMouseLeave,
    onTouchMove,
    onTouchEnd,
  } = useFireReveal()

    const handleEnter = () => {
    navigate('/home')
  }

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
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
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

          <motion.button className="st-btn" variants={itemVariants} onClick={handleEnter}>
            Enter the Upside Down
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="fire-reveal" ref={revealRef} />
    </div>
  )
}

export default Welcome
