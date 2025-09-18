import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-4">
        {/* Bedrijfsnaam */}
        <h4 className="text-xl font-semibold text-gray-800">
          © {new Date().getFullYear()} Unik-Solutions
        </h4>
        <p className="text-gray-500">Alle rechten voorbehouden.</p>


        {/* Optionele links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mt-4">
          <a href="/privacy" className="hover:underline">Privacybeleid</a>
          <a href="/terms" className="hover:underline">Algemene voorwaarden</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
