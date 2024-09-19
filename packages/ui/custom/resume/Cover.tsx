/**
 * @module magazine sytle cover text. it overlay parent div
 */

import React from 'react';

interface CoverProps {
  date: string;
  secretTitle: string[];
  modusOperandi: string;
  subtitle: string;
  invocationText: string[];
  footerText: string;
}

export default function Cover({
  date,
  secretTitle,
  modusOperandi,
  subtitle,
  invocationText,
  footerText,
}: CoverProps) {
  return (
    <div className="absolute top-0 left-0 z-10 w-full h-screen flex-1 order-1">
      <svg viewBox="0 0 583 720" fill={"white"} xmlns="http://www.w3.org/2000/svg">
        <path fill="#E8B059" d="M50.5 61h9v9h-9zM50.5 50.5h9v9h-9zM40 50.5h9v9h-9z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M61 40H50.5v9H61v10.5h9V40h-9z" fill="#E8B059" />

        {/* Date */}
        <text
          style={{ whiteSpace: 'pre' }}
          fontFamily="Inter"
          fontSize={6}
          fontWeight="bold"
          letterSpacing="-.02em"
        >
          <tspan x={328} y={46.182} children={date} />
        </text>

        {/* Secret Title */}
        <text
          style={{ whiteSpace: 'pre' }}
          fontFamily="Inter"
          fontSize={6}
          fontWeight="bold"
          letterSpacing="-.02em"
        >
          {secretTitle.map((line, index) => (
            <tspan key={index} x={392} y={46.182 + index * 8} children={line} />
          ))}
        </text>

        {/* Modus Operandi */}
        <text
          style={{ whiteSpace: 'pre' }}
          fontFamily="Inter"
          fontSize={10.5}
          fontWeight={500}
          letterSpacing="0em"
        >
          <tspan x={40} y={175.318} children={modusOperandi} />
        </text>

        {/* Subtitle */}
        <text
          fill="#E8B059"
          style={{ whiteSpace: 'pre' }}
          fontFamily="Inter"
          fontSize={52}
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x={40} y={257.909} children={subtitle} />
        </text>

        {/* Invocation Text */}
        <text
          style={{ whiteSpace: 'pre' }}
          fontFamily="Inter"
          fontSize={48}
          fontWeight="bold"
          letterSpacing="0em"
        >
          {invocationText.map((line, index) => (
            <tspan key={index} x={40} y={321.909 + index * 51} children={line} />
          ))}
        </text>

        {/* Footer Text */}
        <text
          style={{ whiteSpace: 'pre' }}
          fontFamily="Inter"
          fontSize={10.5}
          fontWeight={500}
          letterSpacing="0em"
        >
          <tspan x={326} y={640.318} children={footerText} />
        </text>
      </svg>
    </div>
  );
}

