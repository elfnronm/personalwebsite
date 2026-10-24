// Adapted from React Bits ClickSpark: https://reactbits.dev/animations/click-spark
// License: see LICENSE.md in this directory.
import { useEffect, useRef } from "react";

export default function ClickSpark({ children, sparkColor = "#72417e" }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);
  const frameRef = useRef(0);
  const clearRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return undefined;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * ratio);
      canvas.height = Math.round(rect.height * ratio);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameRef.current);
      clearTimeout(clearRef.current);
    };
  }, []);

  const animate = (now) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    sparksRef.current = sparksRef.current.filter((spark) => {
      const progress = Math.min((now - spark.start) / 440, 1);
      if (progress >= 1) return false;
      const eased = progress * (2 - progress);
      const distance = eased * 29;
      const length = 12 * (1 - eased);
      const x1 = spark.x + distance * Math.cos(spark.angle);
      const y1 = spark.y + distance * Math.sin(spark.angle);
      ctx.strokeStyle = sparkColor;
      ctx.lineWidth = 2.5;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(
        x1 + length * Math.cos(spark.angle),
        y1 + length * Math.sin(spark.angle),
      );
      ctx.stroke();
      return true;
    });

    frameRef.current = sparksRef.current.length
      ? requestAnimationFrame(animate)
      : 0;
  };

  const handleClick = (event) => {
    const rect = containerRef.current.getBoundingClientRect();
    const keyboard = event.detail === 0;
    const x = keyboard ? rect.width / 2 : event.clientX - rect.left;
    const y = keyboard ? rect.height / 2 : event.clientY - rect.top;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.fillStyle = sparkColor;
      for (let index = 0; index < 8; index += 1) {
        const angle = (Math.PI * 2 * index) / 8;
        ctx.beginPath();
        ctx.arc(x + 16 * Math.cos(angle), y + 16 * Math.sin(angle), 2, 0, Math.PI * 2);
        ctx.fill();
      }
      clearTimeout(clearRef.current);
      clearRef.current = setTimeout(() => ctx.clearRect(0, 0, rect.width, rect.height), 500);
      return;
    }
    const start = performance.now();
    sparksRef.current.push(
      ...Array.from({ length: 8 }, (_, index) => ({
        x,
        y,
        angle: (Math.PI * 2 * index) / 8,
        start,
      })),
    );
    if (!frameRef.current) frameRef.current = requestAnimationFrame(animate);
  };

  return (
    <div className="click-spark" ref={containerRef} onClick={handleClick}>
      <canvas className="click-spark__canvas" ref={canvasRef} aria-hidden="true" />
      {children}
    </div>
  );
}
