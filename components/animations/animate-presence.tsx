"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface Props {
  children: ReactNode | React.ReactElement;
}

export function AnimatePresence({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
