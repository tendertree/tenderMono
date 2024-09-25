import React, { useState, useEffect, useRef } from 'react';

export default function CanvasTyping() {
  const [text, setText] = useState('');
  const [cursorPosition, setCursorPosition] = useState({ x: 10, y: 24 });
  const canvasRef = useRef(null);
  const textareaRef = useRef(null);
  const containerRef = useRef(null);

  const fontSize = 20;
  const lineHeight = 24;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = 'black';

    const drawTextAndCursor = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const lines = text.split('\n');
      lines.forEach((line, index) => {
        ctx.fillText(line, 10, (index + 1) * lineHeight);
      });

      if (document.activeElement === textareaRef.current && Math.floor(Date.now() / 500) % 2 === 0) {
        ctx.fillRect(cursorPosition.x, cursorPosition.y - fontSize + 2, 2, fontSize);
      }
    };

    let animationId;
    const animate = () => {
      drawTextAndCursor();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [text, cursorPosition]);

  const handleContainerClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const lines = text.split('\n');
    let lineIndex = Math.floor(y / lineHeight);
    if (lineIndex >= lines.length) lineIndex = lines.length - 1;
    if (lineIndex < 0) lineIndex = 0;

    const ctx = canvasRef.current.getContext('2d');
    const line = lines[lineIndex];
    let charIndex = 0;
    let lastWidth = 0;

    for (let i = 0; i < line.length; i++) {
      const width = ctx.measureText(line.substring(0, i + 1)).width;
      if (x >= 10 + lastWidth && x <= 10 + width) {
        charIndex = i;
        break;
      }
      lastWidth = width;
    }

    if (x > 10 + lastWidth) charIndex = line.length;

    const newCursorX = 10 + ctx.measureText(line.substring(0, charIndex)).width;
    const newCursorY = (lineIndex + 1) * lineHeight;

    setCursorPosition({ x: newCursorX, y: newCursorY });

    // Update textarea cursor position
    const newPosition = lines.slice(0, lineIndex).join('\n').length + charIndex + lineIndex;
    textareaRef.current.setSelectionRange(newPosition, newPosition);
    textareaRef.current.focus();
  };

  const handleTextareaChange = (e) => {
    setText(e.target.value);
    updateCursorPosition();
  };

  const updateCursorPosition = () => {
    const textarea = textareaRef.current;
    const cursorIndex = textarea.selectionStart;
    const textBeforeCursor = textarea.value.substring(0, cursorIndex);
    const lines = textBeforeCursor.split('\n');
    const lineIndex = lines.length - 1;
    const charIndex = lines[lineIndex].length;

    const ctx = canvasRef.current.getContext('2d');
    const newCursorX = 10 + ctx.measureText(lines[lineIndex]).width;
    const newCursorY = (lineIndex + 1) * lineHeight;

    setCursorPosition({ x: newCursorX, y: newCursorY });
  };

  return (
    <div ref={containerRef} onClick={handleContainerClick} style={{ position: 'relative' }}>
      <canvas ref={canvasRef} width={800} height={600} style={{ border: '1px solid black' }} />
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleTextareaChange}
        onKeyUp={updateCursorPosition}
        onClick={updateCursorPosition}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0,
          resize: 'none',
        }}
      />
    </div>
  );
}
