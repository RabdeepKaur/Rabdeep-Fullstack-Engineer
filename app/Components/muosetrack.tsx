"use client";
import { useEffect, useRef } from "react";

export default function FireflyScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let enableBloom = true;

    class Star {
      x: number;
      y: number;
      baseAlpha: number;
      twinkleSpeed: number;
      phase: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.pow(Math.random(), 2.5) * canvas.height * 0.7;
        this.baseAlpha = 0.3 + Math.random() * 0.7;
        this.twinkleSpeed = 0.01 + Math.random() * 0.003;
        this.phase = Math.random() * Math.PI * 2;
        this.size = Math.random() * 2 + 0.03;
      }

      draw(time: number, fireflyPos: { x: number; y: number }, flicker: number) {
        this.phase += this.twinkleSpeed;
        const twinkle = 0.6 + 0.4 * Math.sin(this.phase + time * 0.001);

        const baseDimRadius = 250;
        const dimRadius = baseDimRadius * (0.7 + flicker * 0.8);
        const distToFirefly = Math.hypot(
          fireflyPos.x - this.x,
          fireflyPos.y - this.y
        );

        let dimFactor = 1;
        if (distToFirefly < dimRadius) {
          dimFactor = 0.3 + 0.7 * (distToFirefly / dimRadius);
        }

        const alpha = this.baseAlpha * twinkle * dimFactor;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.5;
        this.length = 15 + Math.random() * 100;
        this.speed = 4 + Math.random() * 2;
        this.angle = Math.PI /4; 
        this.opacity = 0.4 + Math.random() * 0.3;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x + this.length * Math.cos(this.angle),
          this.y + this.length * Math.sin(this.angle)
        );
        ctx.stroke();
        ctx.restore();

        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);

  
        if (this.x > canvas.width || this.y > canvas.height) {
          this.reset();
        }
      }
    }

    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];

    function initStars(count = 400) {
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push(new Star());
      }
    }

    function initShootingStars(count = 1) {
      shootingStars = [];
      for (let i = 0; i < count; i++) {
        shootingStars.push(new ShootingStar());
      }
    }

    const particle = {
      x: window.innerWidth,
      y: window.innerHeight,
      radius: 5,
      glowRadius: 30,
      angle: 0,
    };

    const mouse = { x: particle.x, y: particle.y };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function drawGlowLayer(glow: number, flicker: number) {
      const maxLayers = 4;
      for (let i = 1; i <= maxLayers; i++) {
        const radius = glow * (i * 0.8);
        const alpha = 0.12 / i;
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          radius
        );
        gradient.addColorStop(0, `rgba(200, 255, 150, ${alpha * flicker})`);
        gradient.addColorStop(1, "rgba(255,255,150,0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function animate(time = 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // firefly smooth follow
      particle.x += (mouse.x - particle.x) * 0.1;
      particle.y += (mouse.y - particle.y) * 0.1;

      particle.angle += 0.1;
      const flicker = 0.5 + 0.5 * Math.sin(particle.angle * 2);
      const glow = particle.glowRadius * flicker;

      // stars twinkle
      for (const star of stars) {
        star.draw(time, particle, flicker);
      }

      // shooting stars
      for (const s of shootingStars) {
        s.draw();
      }

      // glowing aura
      if (enableBloom) {
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        drawGlowLayer(glow, flicker);
        ctx.restore();
      }

      // core glow
      const coreGlow = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        glow
      );
      coreGlow.addColorStop(0, "rgba(255,255,180,0.6)");
      coreGlow.addColorStop(1, "rgba(255,255,150,0)");
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, glow, 0, Math.PI * 2);
      ctx.fill();

      // firefly body
      ctx.beginPath();
      ctx.fillStyle = "rgb(255, 255, 180)";
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();

      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
      initShootingStars();
    });

    initStars();
    initShootingStars();
    animate();

    return () => {
      window.removeEventListener("resize", () => {});
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black pointer-events-none z-10">
      <canvas
        ref={canvasRef}
        id="fireflyCanvas"
        className="absolute top-0 left-0 w-screen h-screen"
      ></canvas>
    </div>
  );
}
