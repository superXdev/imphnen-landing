"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });

   const testimonials = [
      {
         quote: "Saya yang tadinya tidak mengerti apa-apa tentang programming, sekarang bisa membuat website sendiri dengan mudah. Terima kasih IMPHNEN!",
         name: "Budi Santoso",
         role: "Web Developer Pemula",
         avatar: "/placeholder.svg?height=64&width=64",
      },
      {
         quote: "Komunitas yang sangat supportif! Setiap pertanyaan selalu dijawab dengan cepat dan jelas. Diskusi programnya mudah dipahami.",
         name: "Anita Ratna",
         role: "Mobile App Developer",
         avatar: "/placeholder.svg?height=64&width=64",
      },
      {
         quote: "Server Discord IMPHNEN adalah tempat belajar terbaik untuk programmer pemula seperti saya. Materinya lengkap dan komunitasnya sangat membantu!",
         name: "Dedi Permana",
         role: "Data Scientist",
         avatar: "/placeholder.svg?height=64&width=64",
      },
   ];

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
         },
      },
   };

   const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: { duration: 0.5 },
      },
   };

   return (
      <section
         id="testimoni"
         className="w-full py-20 md:py-32 bg-muted relative overflow-hidden"
      >
         {/* Background Elements */}
         <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(96,165,250,0.1),transparent_50%)]" />
         </div>

         <div className="container px-4 md:px-6" ref={ref}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
               <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                     isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5 }}
               >
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                     Testimoni{" "}
                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                        Member
                     </span>
                  </h2>
                  <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
                     Apa kata mereka yang telah bergabung dengan komunitas
                     IMPHNEN?
                  </p>
               </motion.div>
            </div>

            <motion.div
               className="grid gap-8 md:grid-cols-3"
               variants={containerVariants}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
            >
               {testimonials.map((testimonial, index) => (
                  <motion.div
                     key={index}
                     className="group relative overflow-hidden rounded-xl border bg-background p-6 transition-all hover:shadow-lg"
                     variants={itemVariants}
                  >
                     <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors">
                        <Quote className="h-8 w-8" />
                     </div>

                     <div className="relative z-10">
                        <p className="mb-6 text-muted-foreground italic">
                           "{testimonial.quote}"
                        </p>

                        <div className="flex items-center gap-4">
                           <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
                              <Image
                                 src={testimonial.avatar || "/placeholder.svg"}
                                 alt={testimonial.name}
                                 width={48}
                                 height={48}
                                 className="object-cover"
                              />
                           </div>
                           <div>
                              <h4 className="font-bold">{testimonial.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                 {testimonial.role}
                              </p>
                           </div>
                        </div>
                     </div>

                     <div className="absolute -bottom-1 -left-1 w-20 h-20 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
               ))}
            </motion.div>

            {/* Testimonial Stats */}
            <motion.div
               className="mt-20 rounded-xl overflow-hidden border bg-background/50 backdrop-blur-sm p-8 md:p-12"
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 0.5, delay: 0.3 }}
            >
               <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                     <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Bergabunglah dengan{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                           10,000+
                        </span>{" "}
                        programmer Indonesia lainnya
                     </h3>
                     <p className="text-muted-foreground">
                        Komunitas kami terus berkembang dengan programmer dari
                        berbagai latar belakang dan tingkat keahlian.
                        Bersama-sama, kita belajar, berbagi, dan tumbuh sebagai
                        profesional.
                     </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="rounded-lg border p-4 text-center">
                        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                           98%
                        </div>
                        <div className="text-sm text-muted-foreground">
                           Tingkat Kemalasan
                        </div>
                     </div>
                     <div className="rounded-lg border p-4 text-center">
                        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                           4.9/5
                        </div>
                        <div className="text-sm text-muted-foreground">
                           Rating Drama
                        </div>
                     </div>
                     <div className="rounded-lg border p-4 text-center">
                        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                           85%
                        </div>
                        <div className="text-sm text-muted-foreground">
                           Mendapat Pekerjaan
                        </div>
                     </div>
                     <div className="rounded-lg border p-4 text-center">
                        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                           24/7
                        </div>
                        <div className="text-sm text-muted-foreground">
                           Yapping
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
