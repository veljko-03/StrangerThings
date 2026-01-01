import { useEffect, useRef } from 'react'
import '../styles/HomePage.css'
import Navbar from '../components/NavBar'

class Tree {
  constructor(canvas) {
    this.canvas = canvas
    this.width = Math.random() * 100 + 10
    this.height = canvas.height
    this.positionX = Math.random() * (canvas.width - 200) + 200
  }
}

class Dust {
  constructor(canvas) {
    this.canvas = canvas
    this.width = Math.random() * 5 + 1
    this.positionX = Math.random() * canvas.width * 0.9
    this.positionY = Math.random() * canvas.height * 0.7
    this.opacity = 0
  }
}

const HomePage = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    let treeArray = []
    let dustArray = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const createObjects = (array, Type, count) => {
      for (let i = 0; i < count; i++) {
        array.push(new Type(canvas))
      }
      array.sort((a, b) => a.width - b.width)
    }

    const moveTree = (tree) => {
      tree.positionX += (tree.width / 150) * 3 + 1
      if (tree.positionX > canvas.width) {
        tree.positionX = -tree.width
      }
    }

    const moveDust = (dust) => {
      dust.positionX += (dust.width / 4) * 3 + 1
      dust.positionY -= 1

      if (dust.positionX > canvas.width) dust.positionX = -dust.width
      if (dust.positionY < 0) {
        dust.positionY = canvas.height - dust.width
        dust.opacity = 0
      } else if (dust.opacity < 1) {
        dust.opacity += 0.005
      }
    }

    const drawTree = (tree) => {
      const baseGradient = context.createLinearGradient(
        tree.positionX,
        0,
        tree.positionX + tree.width,
        2
      )

      baseGradient.addColorStop(0.5, 'hsl(204, 80%, 10%)')
      baseGradient.addColorStop(0.9, 'hsl(204, 95%, 15%)')
      baseGradient.addColorStop(1, 'hsl(204, 90%, 12.5%)')

      const depthOverlay = Math.abs(tree.width / 100 - 1)
      tree.height =
        canvas.height * (tree.width / 100) + canvas.height * 0.6

      const overlayGradient = context.createLinearGradient(
        0,
        canvas.height,
        0,
        20
      )

      overlayGradient.addColorStop(0.2, 'hsla(204, 80%, 15%, 1)')
      overlayGradient.addColorStop(
        0.9,
        `hsla(204, 10%, ${30 * depthOverlay}%, ${depthOverlay})`
      )

      context.fillStyle = baseGradient
      context.fillRect(tree.positionX, 0, tree.width, tree.height)

      context.fillStyle = overlayGradient
      context.fillRect(tree.positionX, 0, tree.width, tree.height)

      moveTree(tree)
    }

    const drawDust = (dust) => {
      moveDust(dust)

      context.save()
      context.beginPath()
      context.arc(dust.positionX, dust.positionY, dust.width, 0, Math.PI * 2)
      context.fillStyle = `rgba(255,255,255,${dust.opacity})`
      context.shadowBlur = 10
      context.shadowColor = 'white'
      context.fill()
      context.closePath()
      context.restore()
    }

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0, m = 0; i < dustArray.length; i++) {
        if (i % 6 === 0) {
          drawTree(treeArray[m])
          m++
        }
        drawDust(dustArray[i])
      }

      requestAnimationFrame(draw)
    }

    createObjects(treeArray, Tree, 15)
    createObjects(dustArray, Dust, 90)
    draw()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="home">
        <Navbar />
      <canvas ref={canvasRef} />
    </div>
  )
}

export default HomePage
