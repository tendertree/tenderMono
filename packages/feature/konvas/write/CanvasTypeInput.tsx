"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Text } from 'react-konva';


export default function CanvasTypeing() {
    const [inputText, setInputText] = useState('');
    const [stageSize, setStageSize] = useState({ width: 300, height: 150 });
    const [cursorPosition, setCursorPosition] = useState({ x: 10, y: 30 });
    const canvasRef = useRef(null);
    const hiddenInputRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                setStageSize({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {

                // Clear the canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Set text properties
                ctx.font = '20px Arial';
                ctx.fillStyle = 'black';

                // Draw the text
                ctx.fillText(inputText, 10, 30);

                // Draw the cursor
                ctx.fillRect(cursorPosition.x, cursorPosition.y, 2, 20);
            }
        }
    }, [inputText, cursorPosition]);


    const handleCanvasClick = () => {
        hiddenInputRef.current.focus();
    };

    const handleInput = (e) => {
        const newText = e.target.value;
        setInputText(newText);
        // Update cursor position (very basic, assumes monospace font)
        setCursorPosition({ x: 10 + newText.length * 12, y: 10 });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Backspace') {
            setInputText(prev => prev.slice(0, -1));
            setCursorPosition(prev => ({ ...prev, x: Math.max(10, prev.x - 12) }));
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4 p-4">
            <input
                ref={hiddenInputRef}
                type="text"
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                className="opacity-0 absolute top-0 left-0 w-full h-full"
                aria-hidden="true"
                value={inputText}
                placeholder="텍스트를 입력하세요"
            />
            <div ref={containerRef} className="w-full max-w-md h-40 border border-gray-300">
                <Stage width={stageSize.width} height={stageSize.height}>
                    <Layer>
                        <Text
                            text={inputText}
                            x={10}
                            y={10}
                            fontSize={20}
                            fill="black"
                        />
                    </Layer>
                </Stage>
            </div>
        </div>
    );
};

