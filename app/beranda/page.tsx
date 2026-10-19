"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Beranda() {
  const router = useRouter();
  const [isSurveyOpen, setIsSurveyOpen] = useState(true);
  
  // State baru untuk mengontrol buka/tutup sidebar (default: terbuka)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { label: "Home", href: "/beranda" },
    { label: "Jadwal Kuliah", href: "/jadwal" },
    { label: "Nilai Per Semester", href: "/nilai" },
    { label: "Biodata", href: "/biodata" },
    { label: "Daftar Tarif Kuliah", href: "/tarif" }
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      
      {/* 
        ========================================
        SIDEBAR KIRI (Dinamis)
        ========================================
      */}
      <aside 
        className={`bg-[#4c518e] text-white flex flex-col justify-between shadow-lg relative z-10 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-72" : "w-20" // Lebar berubah sesuai state
        }`}
      >
        <div>
          {/* Tombol Hamburger */}
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

          {/* Daftar Menu navigasi */}
          <nav className="flex flex-col mt-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`py-3 font-semibold hover:bg-[#3a3e75] transition-colors duration-200 flex items-center overflow-hidden ${
                  isSidebarOpen ? "px-6" : "px-0 justify-center"
                }`}
                title={item.label} // Munculkan nama menu saat di-hover walau sidebar tertutup
              >
                {isSidebarOpen ? (
                  <span className="whitespace-nowrap">{item.label}</span>
                ) : (
                  // Jika sidebar ditutup, tampilkan huruf pertama dari menu
                  <span className="text-xl opacity-70">{item.label.charAt(0)}</span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Tombol Logout */}
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
              // Icon sederhana untuk logout saat sidebar tertutup
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
            )}
          </button>
        </div>
      </aside>

      {/* 
        ========================================
        AREA KONTEN UTAMA (KANAN)
        ========================================
      */}
      <main className="flex-1 relative flex flex-col">
        
        {/* Notifikasi Survey di Pojok Kanan Atas */}
        {isSurveyOpen ? (
          <div className="absolute top-8 right-0 flex shadow-md">
            <button 
              onClick={() => setIsSurveyOpen(false)}
              className="bg-[#b3b6df] text-gray-700 px-2 py-4 hover:bg-[#9ca0cf]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            <div className="bg-[#4c518e] text-white p-4 font-semibold text-sm w-64">
              Luangkan waktumu sebentar untuk mengisi survey dari kampus
            </div>
          </div>
        ) : (
          <div className="absolute top-24 right-0">
             <button 
              onClick={() => setIsSurveyOpen(true)}
              className="bg-[#b3b6df] text-gray-700 px-2 py-4 shadow-md hover:bg-[#9ca0cf]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
          </div>
        )}

        {/* Konten Tengah (Judul Sistem Informasi) */}
        <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#001738] mb-2 underline decoration-blue-600 decoration-4 underline-offset-4">
            Sistem Informasi Akademik
          </h1>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#001738] underline decoration-blue-600 decoration-4 underline-offset-4">
            Universitas Sanata Dharma
          </h2>
        </div>

      </main>
    </div>
  );
}