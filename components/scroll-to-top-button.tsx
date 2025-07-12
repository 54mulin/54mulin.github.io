"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // 監聽滾動事件
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        // 當滾動超過 300px 時顯示按鈕
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  // 滾動到頂部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 平滑滾動
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-10 right-10 z-[1000]" // 調整位置並提高 z-index
    >
      <Button
        size="icon"
        onClick={scrollToTop}
        className="rounded-full bg-[#a5ab8e] text-white hover:bg-[#8e947a] dark:bg-[#a5ab8e] dark:hover:bg-[#8e947a] shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUpCircle className="h-6 w-6" />
      </Button>
    </motion.div>
  )
}
