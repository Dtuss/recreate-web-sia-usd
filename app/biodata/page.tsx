"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Biodata() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/beranda" },
    { label: "Jadwal Kuliah", href: "/jadwal" },
    { label: "Nilai Per Semester", href: "/nilai" },
    { label: "Biodata", href: "/biodata" },
    { label: "Daftar Tarif Kuliah", href: "/tarif" },
    { label: "Bantuan", href: "#" },
  ];

  return (
    <div className="flex h-screen bg-[#f4f5f7] font-sans overflow-hidden">
      
      {/* SIDEBAR */}
      <aside 
        className={`bg-[#4c518e] text-white flex flex-col justify-between shadow-lg relative z-10 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-72" : "w-20"
        }`}
      >
        <div>
          <div className={`p-6 pb-2 flex ${isSidebarOpen ? "justify-start" : "justify-center"}`}>
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-300 hover:text-white mb-6 focus:outline-none transition-transform hover:scale-110"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <nav className="flex flex-col mt-2">
            {menuItems.map((item, index) => (
               <Link
               key={index}
               href={item.href}
               className={`py-3 font-semibold hover:bg-[#3a3e75] transition-colors duration-200 flex items-center overflow-hidden ${
                 isSidebarOpen ? "px-6" : "px-0 justify-center"
               } ${item.label === "Bio Data" ? "bg-[#3a3e75]" : ""}`}
               title={item.label}
             >
               {isSidebarOpen ? (
                 <span className="whitespace-nowrap">{item.label}</span>
               ) : (
                 <span className="text-xl opacity-70">{item.label.charAt(0)}</span>
               )}
             </Link>
            ))}
          </nav>
        </div>

        <div className={`p-6 flex ${isSidebarOpen ? "justify-start" : "justify-center"}`}>
          <button
            onClick={() => {
              if (window.confirm("Ingin logout?")) {
                router.push("/login");
              }
            }}
            className="text-[#ffb7a1] font-bold hover:text-orange-200 transition-colors"
            title="Logout"
          >
            {isSidebarOpen ? (
              <span className="text-xl">Logout</span>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
            )}
          </button>
        </div>
      </aside>

      {/* AREA KONTEN UTAMA */}
      <main className="flex-1 flex flex-col items-center justify-center p-8 bg-[#f4f5f7]">
        
        {/* Kotak Utama Biodata dengan border biru di sisi kiri dan kanan */}
        <div className="bg-[#535894] w-full max-w-5xl h-[80vh] border-x-4 border-[#00a3ff] flex flex-col p-8 md:p-12 text-white shadow-xl">
          
          {/* Judul */}
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Bio Data
          </h1>

          {/* Grid Layout untuk Teks Kiri dan Foto Kanan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            
            {/* Bagian Kiri: Informasi Teks */}
            <div className="flex flex-col justify-between">
              
              {/* Data Pribadi Utama */}
              <div className="space-y-6 text-lg md:text-xl font-bold">
                <p>235314007</p>
                <p>Benedictus Ditus Atmarestanto</p>
                <p>Laki-Laki</p>
                <p>Jambi, 22 Mei 2005</p>
                <p>JL. ST BAHARUDIN NO.33</p>
              </div>

              {/* Data Kontak */}
              <div className="mt-16 space-y-4 text-sm md:text-base text-gray-200">
                <div className="grid grid-cols-[200px_1fr]">
                  <span>No. Hp (bisa di sms)</span>
                  <span>: 083183237849</span>
                </div>
                <div className="grid grid-cols-[200px_1fr]">
                  <span>No. Hp (bisa di wa)</span>
                  <span>: 083183237849</span>
                </div>
                <div className="grid grid-cols-[200px_1fr]">
                  <span>No,. Telp Orangtua/Wali</span>
                  <span>: 08127808020</span>
                </div>
              </div>

            </div>

            {/* Bagian Kanan: Foto Profil */}
            <div className="flex justify-center items-start pt-2">
              <div className="relative w-64 h-80 md:w-72 md:h-96 shadow-lg border-2 border-[#2a2d52]">
                <Image 
                  src="/profil.jpg" // <--- Pastikan nama file ini sama persis dengan yang ada di folder public
                  alt="Foto Profil Benedictus"
                  fill // Membuat gambar otomatis mengisi penuh kontainer div induknya
                  className="object-cover" // Memastikan aspek rasio foto tidak terdistorsi
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}