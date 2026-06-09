"use client";

import { ElementType, ReactNode } from "react";

interface RevealProps {
  as?: ElementType;
  delay?: number;
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
}

export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  style,
}: RevealProps) {
  return (
    <Tag
      className={`reveal ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
