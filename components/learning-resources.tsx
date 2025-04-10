"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Share2, Video } from "lucide-react"
import { motion } from "framer-motion"

export default function LearningResources() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const resources = [
    {
      icon: <Video className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      iconBg: "bg-blue-100 dark:bg-blue-900",
      title: "Video Tutorial",
      description: "Belajar melalui tutorial video dari langkah awal hingga mahir.",
      buttonText: "Lihat Semua Video",
      buttonLink: "#",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      iconBg: "bg-blue-100 dark:bg-blue-900",
      title: "Artikel & Tutorial",
      description: "Pelajari konsep programming melalui artikel yang disusun secara terstruktur.",
      buttonText: "Baca Artikel",
      buttonLink: "#",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      iconBg: "bg-blue-100 dark:bg-blue-900",
      title: "Tantangan Koding",
      description: "Uji kemampuan koding kamu dengan tantangan yang menyenangkan dan menantang.",
      buttonText: "Mulai Tantangan",
      buttonLink: "#",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <Share2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      iconBg: "bg-blue-100 dark:bg-blue-900",
      title: "Sharing Session",
      description: "Ikuti sesi berbagi pengalaman dari programmer berpengalaman dan belajar dari pengalaman mereka.",
      buttonText: "Jadwal Session",
      buttonLink: "#",
      color: "from-blue-500 to-blue-700",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="sumber-belajar" className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-400/5 to-transparent blur-3xl" />
      </div>

      <div className="container px-4 md:px-6" ref={ref}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
              Sumber{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Belajar</span>
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              Akses berbagai materi belajar yang akan membantu kamu menguasai konsep programming dengan cara yang
              menyenangkan.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-background p-6 transition-all hover:shadow-lg"
              variants={itemVariants}
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/50 to-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ${resource.iconBg}`}
                >
                  {resource.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{resource.title}</h3>
                <p className="mb-6 text-muted-foreground">{resource.description}</p>
                <Button variant="link" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                  {resource.buttonText} →
                </Button>
              </div>

              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-10 group-hover:-translate-x-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Resource */}
        <motion.div
          className="mt-20 rounded-xl overflow-hidden border bg-background/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                Rekomendasi Terbaik
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Kursus Lengkap Web Development</h3>
              <p className="text-muted-foreground mb-6">
                Pelajari HTML, CSS, JavaScript, React, dan Node.js dalam satu kursus komprehensif yang dirancang untuk
                pemula hingga tingkat menengah.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90">
                  Mulai Kursus
                </Button>
                <Button variant="outline">Lihat Silabus</Button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-400/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-background transition-colors">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
