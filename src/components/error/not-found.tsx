"use client"

import { type FC, useEffect, useState } from "react"
import { motion, AnimatePresence, type Variants, type Easing } from "framer-motion"
import Link from "next/link"
import { Home, MessageSquare, Users, Sparkles, Hash, TrendingUp } from "lucide-react"

interface NotFoundProps {
  onGoBack?: () => void
}

const NotFound: FC<NotFoundProps> = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIcon, setCurrentIcon] = useState(0)

  const communityIcons = [MessageSquare, Users, Hash, TrendingUp]

  const easeOut: Easing = "easeOut"
  const easeInOut: Easing = "easeInOut"

  useEffect(() => {
    setIsVisible(true)
    const iconInterval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % communityIcons.length)
    }, 2000)

    return () => clearInterval(iconInterval)
  }, [communityIcons.length])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  }

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: easeInOut,
      },
    },
  }

  const pulseVariants: Variants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: easeInOut,
      },
    },
  }

  const CurrentIcon = communityIcons[currentIcon]

  return (
    <div className="h-screen flex items-center justify-center p-4 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: easeInOut,
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center max-w-2xl mx-auto"
          >
            {/* Main 404 Display */}
            <motion.div variants={itemVariants} className="relative mb-6">
              {/* Background 404 */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-purple-600/10 opacity-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="text-[12rem] font-black leading-none">404</span>
              </motion.div>

              {/* Foreground Content */}
              <div className="relative z-10 py-8">
                {/* Animated Icon */}
                <motion.div variants={floatingVariants} animate="animate" className="mb-6 flex justify-center">
                  <div className="relative">
                    <motion.div
                      variants={pulseVariants}
                      animate="animate"
                      className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl"
                    />
                    <div className="relative bg-gray-900 border-gray-800 p-6 rounded-full shadow-2xl border-2">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentIcon}
                          initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                          animate={{ opacity: 1, rotate: 0, scale: 1 }}
                          exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                          transition={{ duration: 0.5 }}
                        >
                          <CurrentIcon className="w-12 h-12 text-purple-500" />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>

                {/* 404 Text */}
                <motion.h1
                  variants={itemVariants}
                  className="text-6xl md:text-9xl font-black text-white mb-3 tracking-tight"
                >
                  404
                </motion.h1>

                {/* Community Message */}
                <motion.div variants={itemVariants} className="mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Discussion Not Found</h2>
                  <p className="text-lg text-gray-300 max-w-md mx-auto leading-relaxed">
                    Looks like this discussion thread doesn't exist or has been moved. Let's get you back to the
                    StreamFi community!
                  </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/forums"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg bg-purple-600 hover:bg-purple-700 text-white border-2 border-purple-600 w-64 transition-colors"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Back to Forums
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white border-2 border-gray-700 hover:border-gray-600 w-64 transition-colors"
                    >
                      <Home className="w-5 h-5" />
                      Go Home
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Community Activity Indicator */}
                <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-gray-700">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="w-3 h-3 bg-green-500 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-400">Community is active</span>
                  </div>
                  <div className="flex items-center justify-center gap-6">
                    {[
                      {
                        icon: Users,
                        label: "2.4k members",
                        color: "text-blue-400",
                      },
                      { icon: MessageSquare, label: "156 discussions", color: "text-green-400" },
                      {
                        icon: Sparkles,
                        label: "Active now",
                        color: "text-purple-400",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                        <span className="text-sm text-gray-500">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NotFound
