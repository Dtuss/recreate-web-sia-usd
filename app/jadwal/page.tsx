"use client";

import Link from "next/link";
import { useState } from "react";

export default function Jadwal() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/beranda" },
    { label: "Jadwal Kuliah", href: "/jadwal" },
    { label: "Nilai Per Semester", href: "/nilai" },
    { label: "Biodata", href: "/biodata" },
    { label: "Daftar Tarif Kuliah", href: "/tarif" },
    { label: "Bantuan", href: "#" },
  ];

  // Data Tabel Jadwal Kuliah diperbarui hingga jam 17-18
  // UI/UX sekarang menempati jam 13-14, 14-15, dan 15-16
  const scheduleData = [
    { time: "06 - 07", subject: "", classStr: "", room: "", rowBg: "bg-[#535894]", highlightClass: true },
    { time: "07 - 08", subject: "Metopen", classStr: "R", room: "Lab Basis Data D", rowBg: "bg-[#8186d5]" },
    { time: "08 - 09", subject: "Metopen", classStr: "R", room: "Lab Basis Data D", rowBg: "bg-[#8186d5]" },
    { time: "09 - 10", subject: "Metopen", classStr: "R", room: "Lab Basis Data D", rowBg: "bg-[#8186d5]" },
    { time: "10 - 11", subject: "Metopen", classStr: "R", room: "Lab Basis Data D", rowBg: "bg-[#8186d5]" },
    { time: "11 - 12", subject: "", classStr: "", room: "", rowBg: "bg-[#535894]" },
    { time: "12 - 13", subject: "", classStr: "", room: "", rowBg: "bg-[#535894]" },
    { time: "13 - 14", subject: "UI/UX", classStr: "A", room: "K.205", rowBg: "bg-[#8186d5]" },
    { time: "14 - 15", subject: "UI/UX", classStr: "A", room: "K.205", rowBg: "bg-[#8186d5]" },
    { time: "15 - 16", subject: "UI/UX", classStr: "A", room: "K.205", rowBg: "bg-[#8186d5]" },
    { time: "16 - 17", subject: "", classStr: "", room: "", rowBg: "bg-[#535894]" },
    { time: "17 - 18", subject: "", classStr: "", room: "", rowBg: "bg-[#535894]" },
  ];

  return (
    <div className="flex h-screen bg-[#f4f5f7] font-sans overflow-hidden">
      
      {/* SIDEBAR (Tetap sama) */}
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
                } ${item.label === "Jadwal" ? "bg-[#3a3e75]" : ""}`}
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
      <main className="flex-1 relative flex flex-col items-center pt-10 px-8 overflow-hidden">
        
        <div className="w-full max-w-4xl flex flex-col h-full">
          
          {/* KOTAK TABEL YANG BISA DI-SCROLL */}
          {/* max-h-[60vh] mengatur tinggi kotak, overflow-y-auto mengaktifkan scroll */}
          <div className="max-h-[65vh] overflow-y-auto border border-[#2a2d52] shadow-sm relative scroll-smooth">
            <table className="w-full border-collapse text-white text-sm md:text-base">
              {/* thead dibuat lengket (sticky) agar judul tabel tidak ikut ter-scroll */}
              <thead className="sticky top-0 z-20">
                <tr>
                  <th colSpan={4} className="bg-[#535894] border border-[#2a2d52] py-3 font-bold text-lg">
                    Jadwal Kuliah Mahasiswa
                  </th>
                </tr>
                <tr>
                  <th colSpan={4} className="bg-[#8186d5] border border-[#2a2d52] py-2 font-bold text-base">
                    Selasa
                  </th>
                </tr>
                <tr className="bg-[#8186d5]">
                  <th className="border border-[#2a2d52] py-3 font-bold w-[15%]">Jam</th>
                  <th className="border border-[#2a2d52] py-3 font-bold w-[40%]">Mata Kuliah</th>
                  <th className="border border-[#2a2d52] py-3 font-bold w-[15%]">Kelas</th>
                  <th className="border border-[#2a2d52] py-3 font-bold w-[30%]">Ruang</th>
                </tr>
              </thead>
              
              <tbody>
                {scheduleData.map((row, idx) => (
                  <tr key={idx} className={`${row.rowBg} font-semibold hover:brightness-110 transition-all`}>
                    <td className="border border-[#2a2d52] py-4 text-center">{row.time}</td>
                    <td className="border border-[#2a2d52] py-4 text-center">{row.subject}</td>
                    <td className={`border border-[#2a2d52] py-4 text-center ${
                      row.highlightClass ? 'ring-2 ring-[#00a3ff] ring-inset' : '' 
                    }`}>
                      {row.classStr}
                    </td>
                    <td className="border border-[#2a2d52] py-4 text-center">{row.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tombol Download Jadwal */}
          <div className="mt-8 flex justify-center pb-12 shrink-0">
            <button className="flex items-center gap-2 bg-[#8186d5] hover:bg-[#6a6ebd] text-white px-6 py-2.5 rounded-lg font-bold transition-colors shadow-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download Jadwal
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}