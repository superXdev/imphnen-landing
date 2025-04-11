"use client";

import { useEffect, useState } from "react";
import { useMotionValue, animate } from "framer-motion";

type CounterProps = {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
};

export default function Counter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
}: CounterProps) {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from.toFixed(decimals));

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      onUpdate(value) {
        setDisplay(value.toFixed(decimals));
      },
    });

    return controls.stop;
  }, [count, to, duration, decimals]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
