import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // ✅ nieuwe import

export default function Layout() {
  return (
    <div className="pt-26 max-sm:pt-38 w-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow w-full">
        <Outlet />
      </div>
      <Footer /> {/* ✅ hier toevoegen */}
      <ScrollRestoration />
    </div>
  );
}
