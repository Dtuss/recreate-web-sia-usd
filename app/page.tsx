import { redirect } from 'next/navigation';

export default function Home() {
  // Kode ini akan otomatis melempar (redirect) pengunjung 
  // dari halaman utama langsung menuju ke halaman /login
  redirect('/login');
}