"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nilai() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/beranda" },
    { label: "Jadwal Kuliah", href: "/jadwal" },
    { label: "Nilai Per Semester", href: "/nilai" },
    { label: "Biodata", href: "/biodata" },
    { label: "Daftar Tarif Kuliah", href: "/tarif" },
    { label: "Bantuan", href: "#" },
  ];

  // Data baris mata kuliah sesuai dengan desain gambar
  const gradeData = [
    { kode: "PPKMB 1", nama: "Algoritma dan Pemrograman", sks: "3", nilai: "A-", bg: "bg-[#4c518e]" },
    { kode: "INFO101", nama: "Pendamping Mahasiswa Baru 1", sks: "0", nilai: "A", bg: "bg-[#535894]" },
    { kode: "MATE101", nama: "Logika Matematika", sks: "2", nilai: "C+", bg: "bg-[#4c518e]" },
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
                } ${item.label === "Nilai" ? "bg-[#3a3e75]" : ""}`}
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
          <button className="text-[#ffb7a1] font-bold hover:text-orange-200 transition-colors" title="Logout">
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
      <main className="flex-1 relative flex flex-col items-center justify-center px-4 md:px-8">
        
        {/* Wraper untuk menjejalkan Tabel dan Tombol Kiri-Kanan */}
        <div className="flex items-center justify-center gap-3 md:gap-6 w-full max-w-5xl">
          
          {/* Tombol Kiri (Carousel Semester) */}
          <button className="bg-[#8186d5] hover:bg-[#6a6ebd] text-white w-12 h-24 md:w-16 md:h-32 rounded-full flex items-center justify-center shadow-md transition-colors shrink-0">
            <svg className="w-8 h-8 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          {/* Tabel Nilai */}
          <div className="flex-1 overflow-x-auto shadow-sm">
            <table className="w-full border-collapse border border-[#2a2d52] text-white text-sm md:text-base">
              
              {/* Header Info Kumulatif */}
              <thead>
                <tr>
                  <th colSpan={5} className="bg-[#535894] border border-[#2a2d52] py-3 font-bold text-lg text-center">
                    Nilai Per Semester
                  </th>
                </tr>
                <tr>
                  <td colSpan={5} className="bg-[#4c518e] border border-[#2a2d52] py-2 px-6 font-bold">
                    <div className="grid grid-cols-[220px_1fr]">
                      <span>Jumlah SKS Kumulatif</span>
                      <span>: 120</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={5} className="bg-[#535894] border border-[#2a2d52] py-2 px-6 font-bold">
                    <div className="grid grid-cols-[220px_1fr]">
                      <span>Jumlah SKS Lulus</span>
                      <span>: 120</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={5} className="bg-[#4c518e] border border-[#2a2d52] py-2 px-6 font-bold">
                    <div className="grid grid-cols-[220px_1fr]">
                      <span>IPK</span>
                      <span>: 3.7</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th colSpan={5} className="bg-[#8186d5] border border-[#2a2d52] py-2 text-center font-bold text-base">
                    Semester 1
                  </th>
                </tr>
                
                {/* Header Kolom Tabel */}
                <tr className="bg-[#8186d5] font-bold">
                  <th className="border border-[#2a2d52] py-3 w-[15%]">Kode</th>
                  <th className="border border-[#2a2d52] py-3 w-[50%]">Nama Mata Kuliah</th>
                  <th className="border border-[#2a2d52] py-3 w-[10%]">SKS</th>
                  <th className="border border-[#2a2d52] py-3 w-[10%]">Nilai</th>
                  <th className="border border-[#2a2d52] py-3 w-[15%]">Evaluasi</th>
                </tr>
              </thead>

              {/* Isi Tabel (Data Mata Kuliah) */}
              <tbody>
                {gradeData.map((row, idx) => (
                  <tr key={idx} className={`${row.bg} font-bold text-center`}>
                    <td className="border border-[#2a2d52] py-3">{row.kode}</td>
                    <td className="border border-[#2a2d52] py-3">{row.nama}</td>
                    <td className="border border-[#2a2d52] py-3">{row.sks}</td>
                    <td className="border border-[#2a2d52] py-3">{row.nilai}</td>
                    <td className="border border-[#2a2d52] py-3">
                      <a href="#" className="underline decoration-1 underline-offset-2 hover:text-blue-300">Klik</a>
                    </td>
                  </tr>
                ))}
                {/* Baris Kosong Tambahan di paling bawah */}
                <tr className="bg-[#8186d5] h-16">
                  <td className="border border-[#2a2d52]"></td>
                  <td className="border border-[#2a2d52]"></td>
                  <td className="border border-[#2a2d52]"></td>
                  <td className="border border-[#2a2d52]"></td>
                  <td className="border border-[#2a2d52]"></td>
                </tr>
              </tbody>

            </table>
          </div>

          {/* Tombol Kanan (Carousel Semester) */}
          <button className="bg-[#8186d5] hover:bg-[#6a6ebd] text-white w-12 h-24 md:w-16 md:h-32 rounded-full flex items-center justify-center shadow-md transition-colors shrink-0">
            <svg className="w-8 h-8 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

        </div>

        {/* Tombol Download Nilai */}
        <div className="mt-8">
          <button className="flex items-center gap-3 bg-[#8186d5] hover:bg-[#6a6ebd] text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-md text-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download Nilai
          </button>
        </div>

      </main>
    </div>
  );
}