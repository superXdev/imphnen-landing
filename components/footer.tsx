import Image from "next/image";
import Link from "next/link";

export default function Footer() {
   return (
      <footer className="w-full border-t bg-background py-12 md:py-16">
         <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
               <div className="space-y-4">
                  <div className="flex items-center gap-2">
                     <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                        IMPHNEN
                     </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                     Ingin Menjadi Programmer Handal merupakan komunitas
                     Programmer Indonesia.
                  </p>
                  <div className="flex space-x-4">
                     <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="20"
                           height="20"
                           fill="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                     </Link>
                     <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="20"
                           height="20"
                           fill="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                     </Link>
                     <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="20"
                           height="20"
                           fill="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                     </Link>
                     <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="20"
                           height="20"
                           fill="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                     </Link>
                  </div>
               </div>
               <div className="space-y-4">
                  <h3 className="text-lg font-bold">Tautan Cepat</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link
                           href="#fitur"
                           className="text-sm text-muted-foreground hover:text-foreground"
                        >
                           Fitur
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#komunitas"
                           className="text-sm text-muted-foreground hover:text-foreground"
                        >
                           Komunitas
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#sumber-belajar"
                           className="text-sm text-muted-foreground hover:text-foreground"
                        >
                           Sumber Belajar
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#testimoni"
                           className="text-sm text-muted-foreground hover:text-foreground"
                        >
                           Testimoni
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h3 className="text-lg font-bold">Sumber Belajar</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link
                           href="#"
                           className="text-sm text-muted-foreground hover:text-foreground"
                        >
                           Video Tutorial
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="text-sm text-muted-foreground hover:text-foreground"
                        >
                           Artikel
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="text-sm text-muted-foreground hover:text-foreground"
                        >
                           Tantangan Koding
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="text-sm text-muted-foreground hover:text-foreground"
                        >
                           Sharing Session
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <h3 className="text-lg font-bold">Bahasa Pemrograman</h3>
                  <div className="flex flex-wrap gap-2">
                     <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-400/20">
                        PHP
                     </span>
                     <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/10 dark:bg-yellow-900/30 dark:text-yellow-400 dark:ring-yellow-400/20">
                        JavaScript
                     </span>
                     <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-400/20">
                        Python
                     </span>
                     <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-400/20">
                        C#
                     </span>
                     <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 dark:bg-red-900/30 dark:text-red-400 dark:ring-red-400/20">
                        Java
                     </span>
                     <span className="inline-flex items-center rounded-md bg-cyan-50 px-2 py-1 text-xs font-medium text-cyan-700 ring-1 ring-inset ring-cyan-600/10 dark:bg-cyan-900/30 dark:text-cyan-400 dark:ring-cyan-400/20">
                        Go
                     </span>
                     <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/10 dark:bg-orange-900/30 dark:text-orange-400 dark:ring-orange-400/20">
                        Rust
                     </span>
                     <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-400/20">
                        HTML
                     </span>
                  </div>

                  <div className="mt-6">
                     <h3 className="text-lg font-bold mb-2">Newsletter</h3>
                     <p className="text-sm text-muted-foreground mb-2">
                        Dapatkan update terbaru dari kami
                     </p>
                     <div className="flex gap-2">
                        <input
                           type="email"
                           placeholder="Email Anda"
                           className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <button className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                           Daftar
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="mt-8 border-t pt-8 text-center">
               <p className="text-xs text-muted-foreground">
                  © {new Date().getFullYear()} IMPHNEN - Ingin Menjadi
                  Programmer Handal, Namun Enggan Ngoding. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   );
}
