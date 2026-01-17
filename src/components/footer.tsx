export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        <div>
          <h3 className="text-white text-xl font-bold mb-4">SynovaX</h3>
          <p className="text-sm">Innovating the future with precision software engineering.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/services" className="hover:text-blue-400 transition">Services</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm">info@synovax.tech</p>
          <p className="text-sm">+94 7X XXX XXXX</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Socials</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <span className="hover:text-white cursor-pointer transition">FB</span>
            <span className="hover:text-white cursor-pointer transition">LI</span>
            <span className="hover:text-white cursor-pointer transition">TW</span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
        © 2026 SynovaX. All rights reserved.
      </div>
    </footer>
  );
}