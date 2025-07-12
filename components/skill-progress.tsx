"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface SkillProgressProps {
  skill: string
  level: number
  delay?: number
}

export function SkillProgress({ skill, level, delay = 0 }: SkillProgressProps) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-stone-700 dark:text-stone-300">{skill}</span>
        <motion.span
          className="text-sm text-stone-500 dark:text-stone-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-2.5">
        <motion.div
          className="h-2.5 rounded-full"
          style={{ backgroundColor: "#a5ab8e" }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
