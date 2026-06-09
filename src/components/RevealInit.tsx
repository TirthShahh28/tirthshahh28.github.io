"use client";

import { useEffect } from "react";
import { startRevealManager } from "@/lib/hooks";

export default function RevealInit() {
  useEffect(() => {
    startRevealManager();
  }, []);
  return null;
}
