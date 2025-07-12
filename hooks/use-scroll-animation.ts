"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"

export function useScrollAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return { ref, isInView }
}
