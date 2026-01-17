import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Users, Target, Rocket } from 'lucide-react';

export default function CompanyPage() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-5xl">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft size={18} /> Back to Home
          </Button>
        </Link>
      </div>

      <section className="text-center mb-20">
        <h1 className="text-5xl font-extrabold mb-6">About <span className="text-blue-600">SynovaX</span></h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          SynovaX is a cutting-edge software development firm dedicated to empowering businesses 
          through innovative digital transformation and high-quality engineering.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users size={30} />
          </div>
          <h3 className="text-xl font-bold mb-2">Our Team</h3>
          <p className="text-slate-500 text-sm">Experts in modern web and cloud technologies.</p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target size={30} />
          </div>
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-slate-500 text-sm">To provide scalable and secure software for everyone.</p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Rocket size={30} />
          </div>
          <h3 className="text-xl font-bold mb-2">Our Vision</h3>
          <p className="text-slate-500 text-sm">To be a global leader in digital innovation.</p>
        </div>
      </div>

      <div className="mt-20 p-10 bg-slate-900 rounded-[3rem] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
        <p className="mb-8 text-slate-400">Let's build something amazing together.</p>
        <Link href="/contact">
          <Button className="bg-blue-600 hover:bg-blue-700 border-none px-10 py-6 text-lg">
            Contact Us Now
          </Button>
        </Link>
      </div>
    </div>
  );
}