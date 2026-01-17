import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          SynovaX
        </Link>
        <div className="hidden space-x-8 md:flex font-medium">
          <Link href="/products" className="hover:text-blue-600 transition">Products</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link href="/company" className="hover:text-blue-600 transition">Company</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>
        <button className="rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}