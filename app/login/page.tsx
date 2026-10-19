"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-sm">
        <p className="mb-8 text-center text-2xl font-bold text-slate-700">
          Sistem Informasi Akademik
        </p>
        <section className="w-full rounded-xl bg-white p-8 shadow-md">
          <h1 className="mb-2 text-center text-2xl font-bold text-slate-800">
            Login SIA Kemahasiswaan
          </h1>
          <p className="mb-6 text-center text-sm text-slate-500">
            Masukkan NIM dan password untuk melanjutkan.
          </p>
          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const nim = formData.get("nim");
              const password = formData.get("password");

              if (nim === "235314007" && password === "12345678") {
                router.push("/beranda");
                return;
              }

              setError("NIM atau password salah.");
            }}
          >
            <div>
              <label
                className="mb-1 block text-sm font-medium text-slate-700"
                htmlFor="nim"
              >
                NIM
              </label>
              <input
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                id="nim"
                name="nim"
                type="text"
                autoComplete="username"
                required
              />
            </div>
            <div>
              <label
                className="mb-1 block text-sm font-medium text-slate-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
            </div>
            {error && (
              <p className="text-sm text-red-600" role="alert">
                {error}
              </p>
            )}
            <button
              className="w-full rounded-md bg-blue-600 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              type="submit"
            >
              Masuk
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}