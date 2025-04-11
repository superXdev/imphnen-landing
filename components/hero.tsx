"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
   const [scrollY, setScrollY] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
         setScrollY(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50" />

            {/* Animated Gradient Orbs */}
            <div
               className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-primary/20 to-blue-400/20 blur-3xl"
               style={{
                  transform: `translate(${scrollY * 0.1}px, ${
                     scrollY * -0.05
                  }px)`,
                  opacity: Math.max(0.2, 1 - scrollY * 0.001),
               }}
            />
            <div
               className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-primary/20 blur-3xl"
               style={{
                  transform: `translate(${scrollY * -0.1}px, ${
                     scrollY * 0.05
                  }px)`,
                  opacity: Math.max(0.2, 1 - scrollY * 0.001),
               }}
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
         </div>

         <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
               <motion.div
                  className="flex flex-col justify-center space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
                     <Sparkles className="mr-1 h-3.5 w-3.5 text-primary" />
                     <span>Komunitas Programmer Indonesia</span>
                  </div>

                  <div className="space-y-4">
                     <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">
                        Programmer Handal, <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                           Tanpa Ribet
                        </span>
                     </h1>
                     <p className="max-w-[600px] text-muted-foreground md:text-xl">
                        Temukan potensi programming Anda bersama komunitas yang
                        mendukung, tutorial interaktif, dan sumber daya
                        berkualitas tinggi.
                     </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                     <a href="https://facebook.com">
                        <Button
                           size="lg"
                           className="bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90 transition-all duration-300"
                        >
                           Mulai Belajar
                        </Button>
                     </a>
                     <Button
                        size="lg"
                        variant="outline"
                        className="group relative overflow-hidden border-primary"
                     >
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        <span className="relative">Gabung Discord</span>
                     </Button>
                  </div>

                  <div className="flex items-center gap-8">
                     <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                           100K+
                        </div>
                        <div className="text-xs text-muted-foreground">
                           Member
                        </div>
                     </div>
                     <div className="h-10 border-r border-border"></div>
                     <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                           500+
                        </div>
                        <div className="text-xs text-muted-foreground">
                           Tutorial
                        </div>
                     </div>
                     <div className="h-10 border-r border-border"></div>
                     <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                           24/7
                        </div>
                        <div className="text-xs text-muted-foreground">
                           Yapping
                        </div>
                     </div>
                  </div>
               </motion.div>

               <motion.div
                  className="relative mx-auto lg:ml-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
               >
                  <div className="relative">
                     {/* Decorative Elements */}
                     <div className="absolute -top-6 -left-6 w-12 h-12 rounded-lg border border-primary/30 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                        <Code className="h-6 w-6 text-primary" />
                     </div>
                     <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-lg border border-blue-400/30 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                        <Users className="h-6 w-6 text-blue-400" />
                     </div>

                     {/* Main Image */}
                     <div className="relative z-10 rounded-2xl overflow-hidden border shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-400/10" />
                        <Image
                           src="/hero.jpeg"
                           width={600}
                           height={500}
                           alt="IMPHNEN Programming Community"
                           className="w-full h-auto object-cover"
                        />
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
