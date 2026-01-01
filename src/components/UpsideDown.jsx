import { useEffect, useRef } from "react";
import "../styles/UpsideDown.css";

class Tree {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = Math.random() * 100 + 10;
    this.height = canvas.height;
    this.positionX = Math.random() * (canvas.width - 200) + 200;
  }
}

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = Math.random() * 5 + 1;
    this.positionX = Math.random() * canvas.width * 0.9;
    this.positionY = Math.random() * canvas.height * 0.7;
    this.opacity = 0;
  }
}

const UpsideDown = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let trees = [];
    let particles = [];
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const create = (arr, Type, count) => {
      arr.length = 0;
      for (let i = 0; i < count; i++) arr.push(new Type(canvas));
      arr.sort((a, b) => a.width - b.width);
    };

    const moveTree = (t) => {
      t.positionX += (t.width / 150) * 3 + 1;
      if (t.positionX > canvas.width) t.positionX = -t.width;
    };

    const moveParticle = (p) => {
      p.positionX += (p.width / 4) * 3 + 1;
      p.positionY -= 1;

      if (p.positionX > canvas.width) p.positionX = -p.width;
      if (p.positionY < 0) {
        p.positionY = canvas.height - p.width;
        p.opacity = 0;
      } else if (p.opacity < 1) {
        p.opacity += 0.005;
      }
    };

    const drawTree = (t) => {
      const base = ctx.createLinearGradient(
        t.positionX,
        0,
        t.positionX + t.width,
        2
      );
      base.addColorStop(0.5, "hsl(204, 80%, 10%)");
      base.addColorStop(0.9, "hsl(204, 95%, 15%)");
      base.addColorStop(1, "hsl(204, 90%, 12.5%)");

      const depth = Math.abs(t.width / 100 - 1);
      t.height = canvas.height * (t.width / 100) + canvas.height * 0.6;

      const overlay = ctx.createLinearGradient(0, canvas.height, 0, 20);
      overlay.addColorStop(0.2, "hsla(204, 80%, 15%, 1)");
      overlay.addColorStop(0.9, `hsla(204, 10%, ${30 * depth}%, ${depth})`);

      ctx.fillStyle = base;
      ctx.fillRect(t.positionX, 0, t.width, t.height);
      ctx.fillStyle = overlay;
      ctx.fillRect(t.positionX, 0, t.width, t.height);

      moveTree(t);
    };

    const drawParticle = (p) => {
      moveParticle(p);
      ctx.save();
      ctx.beginPath();
      ctx.arc(p.positionX, p.positionY, p.width, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "white";
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0, m = 0; i < particles.length; i++) {
        if (i % 6 === 0 && trees[m]) {
          drawTree(trees[m]);
          m++;
        }
        drawParticle(particles[i]);
      }

      animationId = requestAnimationFrame(animate);
    };

    create(trees, Tree, 15);
    create(particles, Particle, 90);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="bg">
      <canvas ref={canvasRef} className="upside-down-canvas" />
    </div>
  );
};

export default UpsideDown;
