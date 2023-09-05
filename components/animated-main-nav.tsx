"use client"

import { animate, motion } from "framer-motion"
import { MainNav } from "./main-nav-portfolio"

export default function AnimatedNav({ config }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .2 }}
        >
            <MainNav items={config} />
        </motion.div>
    )
}