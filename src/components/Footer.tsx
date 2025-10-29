// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-6 mt-12 text-center text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>
          &copy; {new Date().getFullYear()} Deepesh Dangi. All Rights Reserved.
        </p>
        <p className="mt-1">
          Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
        <div className="mt-2 space-x-4">
          <Link href="/contact" className="hover:text-gray-700 transition">
            Contact
          </Link>
          <Link href="https://github.com/Deepesh70" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}