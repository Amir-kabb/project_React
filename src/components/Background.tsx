import React, { useEffect, useRef } from 'react';

interface BackgroundProps {
  isDarkMode: boolean;
}

const Background: React.FC<BackgroundProps> = ({ isDarkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const shapes: { x: number; y: number; size: number; speed: number; type: 'circle' | 'square' }[] = [];
    for (let i = 0; i < 15; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 100 + 50,
        speed: Math.random() * 0.5 + 0.1,
        type: Math.random() > 0.5 ? 'circle' : 'square'
      });
    }

    const drawShapes = () => {
      ctx.save();
      ctx.filter = 'blur(50px)';
      ctx.fillStyle = isDarkMode ? 'rgba(255, 215, 0, 0.05)' : 'rgba(128, 0, 128, 0.05)';
      shapes.forEach((shape) => {
        ctx.beginPath();
        if (shape.type === 'circle') {
          ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
        } else {
          ctx.rect(shape.x - shape.size / 2, shape.y - shape.size / 2, shape.size, shape.size);
        }
        ctx.fill();
      });
      ctx.restore();
    };

    const updateShapes = () => {
      shapes.forEach((shape) => {
        shape.y += shape.speed;
        if (shape.y - shape.size > canvas.height) {
          shape.y = -shape.size;
          shape.x = Math.random() * canvas.width;
        }
      });
    };

    const binaryRain: { x: number; y: number; value: string; speed: number }[] = [];
    for (let i = 0; i < 100; i++) {
      binaryRain.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        value: Math.random() > 0.5 ? '0' : '1',
        speed: Math.random() * 2 + 1,
      });
    }

    const drawBinaryRain = () => {
      ctx.font = '12px monospace';
      ctx.fillStyle = isDarkMode ? 'rgba(255, 215, 0, 0.5)' : 'rgba(128, 0, 128, 0.5)';
      binaryRain.forEach((drop) => {
        ctx.fillText(drop.value, drop.x, drop.y);
      });
    };

    const updateBinaryRain = () => {
      binaryRain.forEach((drop) => {
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = 0;
          drop.x = Math.random() * canvas.width;
        }
      });
    };

    const drawGrid = () => {
      ctx.strokeStyle = isDarkMode ? 'rgb(255, 215, 0)' : 'rgb(128, 0, 128)';
      ctx.lineWidth = 3;

      // Left vertical line
      ctx.beginPath();
      ctx.moveTo(60, 0);
      ctx.lineTo(60, canvas.height);
      ctx.stroke();

      // Top horizontal line
      ctx.beginPath();
      ctx.moveTo(0, 60);
      ctx.lineTo(canvas.width, 60);
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawShapes();
      updateShapes();
      drawBinaryRain();
      updateBinaryRain();
      drawGrid();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDarkMode]);

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />
      <div className="fixed top-0 left-0 w-[60px] h-full bg-transparent border-r-2 border-yellow-400 dark:border-purple-800 z-[10000]" />
    </>
  );
};

export default Background;