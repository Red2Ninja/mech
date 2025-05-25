import React, { useEffect, useRef } from 'react';

// Clean Space Background Component - No dummy content
const SpaceBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5; // Reduced from 3+1 to 1.5+0.5
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.hue = Math.random() * 60 + 200; // Blue to cyan range
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around screen
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
        
        // Twinkling effect
        this.opacity += Math.sin(Date.now() * this.twinkleSpeed) * 0.01;
        this.opacity = Math.max(0.1, Math.min(1, this.opacity));
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Create gradient for glow effect (smaller glow)
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 80%, 1)`);
        gradient.addColorStop(1, `hsla(${this.hue}, 100%, 80%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Bright center
        ctx.fillStyle = `hsla(${this.hue}, 100%, 90%, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Shooting star class
    class ShootingStar {
      constructor() {
        this.reset();
        this.opacity = 0;
        this.life = 0;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.5;
        this.speedX = Math.random() * 8 + 4;
        this.speedY = Math.random() * 4 + 2;
        this.length = Math.random() * 60 + 40;
        this.opacity = 0;
        this.life = 0;
        this.maxLife = Math.random() * 60 + 60;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life++;
        
        if (this.life < this.maxLife * 0.3) {
          this.opacity = this.life / (this.maxLife * 0.3);
        } else if (this.life > this.maxLife * 0.7) {
          this.opacity = (this.maxLife - this.life) / (this.maxLife * 0.3);
        } else {
          this.opacity = 1;
        }
        
        if (this.life > this.maxLife || this.x > canvas.width + 100) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        const gradient = ctx.createLinearGradient(
          this.x, this.y,
          this.x - this.length, this.y - this.length * 0.5
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(1, 'rgba(135, 206, 250, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.length, this.y - this.length * 0.5);
        ctx.stroke();
        
        ctx.restore();
      }
    }

    // Nebula effect
    class NebulaCloud {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 200 + 100;
        this.opacity = Math.random() * 0.1 + 0.05;
        this.hue = Math.random() * 60 + 180; // Blue to purple range
        this.drift = Math.random() * 0.2 + 0.1;
      }

      update() {
        this.x += Math.sin(Date.now() * 0.0001 + this.drift) * 0.5;
        this.y += Math.cos(Date.now() * 0.0001 + this.drift) * 0.3;
        this.opacity = (Math.sin(Date.now() * 0.001 + this.drift) + 1) * 0.05 + 0.02;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        gradient.addColorStop(0, `hsla(${this.hue}, 60%, 50%, 0.3)`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 70%, 40%, 0.1)`);
        gradient.addColorStop(1, `hsla(${this.hue}, 80%, 30%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Initialize particles
    const particles = [];
    const shootingStars = [];
    const nebulaClouds = [];
    
    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle());
    }
    
    // Create shooting stars
    for (let i = 0; i < 3; i++) {
      shootingStars.push(new ShootingStar());
    }
    
    // Create nebula clouds
    for (let i = 0; i < 5; i++) {
      nebulaClouds.push(new NebulaCloud());
    }

    // Animation loop
    const animate = () => {
      // Create space gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0a0a2e');
      gradient.addColorStop(0.3, '#16213e');
      gradient.addColorStop(0.7, '#0f1419');
      gradient.addColorStop(1, '#000000');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw nebula clouds first (background layer)
      nebulaClouds.forEach(cloud => {
        cloud.update();
        cloud.draw();
      });
      
      // Draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw shooting stars
      shootingStars.forEach(star => {
        star.update();
        star.draw();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

// Usage: Simply import and add <SpaceBackground /> to your component
export default SpaceBackground;