"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Tarif() {
  const router = useRouter();
  // Sidebar di-setting false (tertutup) agar sama dengan gambar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Menambahkan menu "Tarif"
  const menuItems = [
    { label: "Home", href: "/beranda" },
    { label: "Jadwal Kuliah", href: "/jadwal" },
    { label: "Nilai Per Semester", href: "/nilai" },
    { label: "Biodata", href: "/biodata" },
    { label: "Daftar Tarif Kuliah", href: "/tarif" }
  ];

  // Data Tabel Tarif Kuliah
  const tarifData = [
    { kode: "SDEV201", nama: "Administrasi Basis Data", sks: "3", tarif: "795,000.00", highlight: true },
    { kode: "SEDU121", nama: "Advance Grammar in Use", sks: "3", tarif: "795,000.00" },
    { kode: "SEDU122", nama: "Advance Listening and Speaking", sks: "4", tarif: "1,060,000.00" },
    { kode: "SEDU122", nama: "Advance Listening and Writing", sks: "4", tarif: "1,060,000.00" },
    { kode: "GEA151P",  nama: "AI Generatif", sks: "3", tarif: "795,000.00" },
    { kode: "MKKK601", nama: "Akuntansi Keuangan Dasar 1", sks: "4", tarif: "1,060,000.00" },
    { kode: "PROG11W", nama: "Algoritma dan Pemrograman Dasar", sks: "6", tarif: "1,590,000.00" },
  ];

  return (
    <div className="flex h-screen bg-[#f4f5f7] font-sans overflow-hidden">
      
      {/* SIDEBAR */}
      <aside 
        className={`bg-[#4c518e] text-white flex flex-col justify-between shadow-lg relative z-10 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-72" : "w-20"
        }`}
      >
        {/* Bagian Atas Sidebar (Menu & Hamburger) */}
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
               } ${item.label === "Tarif" ? "bg-[#3a3e75]" : ""}`}
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

        {/* Bagian Bawah Sidebar (TOMBOL LOGOUT YANG KEMBALI MUNCUL) */}
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
      <main className="flex-1 relative flex flex-col items-center pt-12 px-8 overflow-y-auto">
        
        {/* Kontainer Tabel */}
        <div className="w-full max-w-4xl flex flex-col items-center">
          
          <table className="w-full border-collapse text-white text-sm md:text-base shadow-sm">
            <thead>
              {/* Judul Tabel (Warna Gelap) */}
              <tr>
                <th colSpan={4} className="bg-[#535894] border border-[#2a2d52] py-4 font-bold text-xl">
                  Daftar Tarif Kuliah
                </th>
              </tr>
              {/* Header Kolom (Warna Terang) */}
              <tr className="bg-[#8186d5]">
                <th className="border border-[#2a2d52] py-3 font-bold w-[15%]">Kode</th>
                <th className="border border-[#2a2d52] py-3 font-bold w-[55%]">Mata Kuliah</th>
                <th className="border border-[#2a2d52] py-3 font-bold w-[10%]">SKS</th>
                <th className="border border-[#2a2d52] py-3 font-bold w-[20%]">Tarif (Rp)</th>
              </tr>
            </thead>
            
            <tbody>
              {tarifData.map((row, idx) => (
                <tr key={idx} className="bg-[#8186d5] font-semibold text-center hover:brightness-105 transition-all">
                  <td className="border border-[#2a2d52] py-3">{row.kode}</td>
                  
                  {/* Kondisi khusus untuk memberikan border biru pada "Administrasi Basis Data" */}
                  <td className={`border border-[#2a2d52] py-3 ${
                    row.highlight ? "ring-2 ring-[#00a3ff] ring-inset" : ""
                  }`}>
                    {row.nama}
                  </td>
                  
                  <td className="border border-[#2a2d52] py-3">{row.sks}</td>
                  <td className="border border-[#2a2d52] py-3">{row.tarif}</td>
                </tr>
              ))}
              
              {/* Baris Kosong Tambahan di bagian bawah (sesuai gambar) */}
              <tr className="bg-[#8186d5] h-12">
                <td className="border border-[#2a2d52]"></td>
                <td className="border border-[#2a2d52]"></td>
                <td className="border border-[#2a2d52]"></td>
                <td className="border border-[#2a2d52]"></td>
              </tr>
            </tbody>
          </table>

          {/* Tombol Download Tarif Kuliah */}
          <div className="mt-8 pb-12 shrink-0">
            <button className="flex items-center gap-2 bg-[#8186d5] hover:bg-[#6a6ebd] text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-md text-base md:text-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download Tarif Kuliah
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}