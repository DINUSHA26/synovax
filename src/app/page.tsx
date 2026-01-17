import ThreeBoxAnimation from '@/components/threeBoxAnimation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket, Palette, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      
      {/* --- Hero Section --- */}
      <section className="relative w-full py-20 lg:py-32 bg-gradient-to-b from-white to-slate-100 text-center flex flex-col items-center">
        
        {/* Background Decoration (Glow Effect) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200/40 rounded-full blur-[100px] -z-0 animate-pulse"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl lg:text-8xl font-extrabold tracking-tight text-slate-900 mb-6">
            Future of <span className="text-blue-600">Technology</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed">
            SynovaX offers cutting-edge software solutions to transform your business digitally. 
            Modern, fast, and secure.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <Link href="/services">
              <Button className="group px-8 py-6 text-lg rounded-2xl shadow-xl shadow-blue-500/20 flex items-center gap-2">
                Explore Our Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/company">
              <Button variant="outline" className="px-8 py-6 text-lg rounded-2xl">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Interactive Animation - Hero Section */}
          <div className="relative inline-block mt-4">
             <ThreeBoxAnimation />
             <div className="flex items-center justify-center gap-2 mt-2">
                <Zap size={14} className="text-blue-500 fill-blue-500" />
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                    Interactive Experience
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 text-balance">Why Choose Us?</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "High Performance", 
              icon: <Rocket className="text-blue-600" size={32} />, 
              desc: "Optimized for speed and efficiency using the latest technologies." 
            },
            { 
              title: "Modern Design", 
              icon: <Palette className="text-blue-600" size={32} />, 
              desc: "Clean, attractive and user-friendly interfaces for all devices." 
            },
            { 
              title: "Rock Solid Security", 
              icon: <ShieldCheck className="text-blue-600" size={32} />, 
              desc: "Your data is safe with our enterprise-grade security protocols." 
            }
          ].map((service, i) => (
            <div 
              key={i} 
              className="group p-10 border border-slate-100 rounded-[2.5rem] bg-white shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Call to Action (CTA) --- */}
      <section className="w-full py-20 px-4">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-blue-200 overflow-hidden relative">
          {/* Decorative Circle for CTA */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <h2 className="text-4xl font-bold mb-6">Ready to innovate your business?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Contact us today for a free consultation and let's build the future together.
          </p>
          <Link href="/contact">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg flex items-center gap-2 mx-auto">
              Get Started Now
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}