"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SimpleThemeToggle } from "@/components/simple-theme-toggle";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <header
         className={cn(
            "sticky top-0 z-50 w-full transition-all duration-300",
            isScrolled
               ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
               : "bg-transparent"
         )}
      >
         <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
               <div className="relative overflow-hidden rounded">
                  <Image
                     src="/logo.png"
                     alt="IMPHNEN Logo"
                     width={64}
                     height={64}
                     className="object-cover"
                  />
               </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
               <Link
                  href="#fitur"
                  className="text-sm font-medium relative group"
               >
                  <span className="transition-colors hover:text-primary">
                     Fitur
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
               </Link>
               <Link
                  href="#komunitas"
                  className="text-sm font-medium relative group"
               >
                  <span className="transition-colors hover:text-primary">
                     Komunitas
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
               </Link>
               <Link
                  href="#sumber-belajar"
                  className="text-sm font-medium relative group"
               >
                  <span className="transition-colors hover:text-primary">
                     Sumber Belajar
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
               </Link>
               <Link
                  href="#testimoni"
                  className="text-sm font-medium relative group"
               >
                  <span className="transition-colors hover:text-primary">
                     Testimoni
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
               </Link>
            </nav>

            <div className="flex items-center gap-4">
               <SimpleThemeToggle />
               <Button className="hidden md:flex bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90 transition-all duration-300">
                  Gabung Discord
               </Button>

               {/* Mobile Menu Button */}
               <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               >
                  {mobileMenuOpen ? (
                     <X className="h-6 w-6" />
                  ) : (
                     <Menu className="h-6 w-6" />
                  )}
               </Button>
            </div>
         </div>

         {/* Mobile Menu */}
         {mobileMenuOpen && (
            <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
               <nav className="container flex flex-col py-4 text-center">
                  <Link
                     href="#fitur"
                     className="py-3 text-sm font-medium border-b border-border/50"
                     onClick={() => setMobileMenuOpen(false)}
                  >
                     Fitur
                  </Link>
                  <Link
                     href="#komunitas"
                     className="py-3 text-sm font-medium border-b border-border/50"
                     onClick={() => setMobileMenuOpen(false)}
                  >
                     Komunitas
                  </Link>
                  <Link
                     href="#sumber-belajar"
                     className="py-3 text-sm font-medium border-b border-border/50"
                     onClick={() => setMobileMenuOpen(false)}
                  >
                     Sumber Belajar
                  </Link>
                  <Link
                     href="#testimoni"
                     className="py-3 text-sm font-medium"
                     onClick={() => setMobileMenuOpen(false)}
                  >
                     Testimoni
                  </Link>
                  <Button className="mt-4 bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90">
                     Gabung Discord
                  </Button>
               </nav>
            </div>
         )}
      </header>
   );
}
