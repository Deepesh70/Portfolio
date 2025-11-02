// src/app/components/Navbar.tsx
import Link from 'next/link';

export function Navbar() {
  const navItems = [
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition">
          Deepesh Dangi.
        </Link>
        <div className="space-x-6 flex items-center">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
            >
              {item.name}
            </Link>
          ))}
          {/* We'll add the GitHub link later, but keep the navigation clean here */}
        </div>
      </nav>
    </header>
  );
}