'use client';

import { useEffect, useRef, useState } from 'react';

const LETTERS = ['A', 'M', 'A', 'N'];

/* Animated brand mark — rolls A → M → A → N on a loop.
   Rendered visibly on the site (where animation always plays). */
export default function AnimatedMark({
  size = 28,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setI((p) => (p + 1) % LETTERS.length);
    }, 700);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span
      className={`font-display uppercase inline-flex items-center justify-center text-red leading-none ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.85 }}
      aria-label="Aman"
    >
      {LETTERS[i]}
    </span>
  );
}

/* Drives the browser tab favicon by drawing each letter to a canvas and
   pushing it as a data-URL <link>. Reliable while the tab is visible. */
export function useAnimatedFavicon() {
  const frame = useRef(0);

  useEffect(() => {
    const link =
      document.querySelector("link[rel~='icon']") ||
      (() => {
        const el = document.createElement('link');
        el.rel = 'icon';
        document.head.appendChild(el);
        return el;
      })();
    if (!(link instanceof HTMLLinkElement)) return;

    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      const letter = LETTERS[frame.current % LETTERS.length];
      ctx.clearRect(0, 0, 64, 64);
      ctx.fillStyle = '#0c0c0c';
      roundRect(ctx, 0, 0, 64, 64, 12);
      ctx.fill();
      ctx.fillStyle = '#e10600';
      ctx.font = "bold 44px Impact, 'Arial Narrow', sans-serif";
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(letter, 32, 36);
      link.href = canvas.toDataURL('image/png');
    };

    render();
    const id = window.setInterval(() => {
      frame.current += 1;
      render();
    }, 700);

    return () => window.clearInterval(id);
  }, []);
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
