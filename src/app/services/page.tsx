import { Cpu, Globe, Layout, ShieldCheck } from 'lucide-react';

const services = [
  { title: "Web Development", desc: "Modern, SEO friendly web apps.", icon: <Globe /> },
  { title: "UI/UX Design", desc: "User-centric modern interfaces.", icon: <Layout /> },
  { title: "Cyber Security", desc: "Enterprise level security solutions.", icon: <ShieldCheck /> },
  { title: "Cloud Solutions", desc: "Scalable cloud infrastructure.", icon: <Cpu /> },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
      <p className="text-center text-slate-600 mb-12 max-w-xl mx-auto">
        We provide top-notch software solutions to scale your business.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group p-8 bg-white border border-slate-100 rounded-3xl hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-slate-500 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}