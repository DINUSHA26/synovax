import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          අප හා සම්බන්ධ වන්න
        </h1>
        <p className="text-slate-600 text-lg">
          SynovaX සමඟින් ඔබේ මීළඟ ව්‍යාපෘතිය අදම ආරම්භ කරන්න.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg">Email Us</h4>
              <p className="text-slate-600">hello@synovax.tech</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg">Call Us</h4>
              <p className="text-slate-600">+94 7X XXX XXXX</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg">Location</h4>
              <p className="text-slate-600">Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                label="සම්පූර්ණ නම" 
                placeholder="ඔබේ නම ඇතුළත් කරන්න" 
                type="text" 
                required
              />
              <Input 
                label="ඊමේල් ලිපිනය" 
                placeholder="example@mail.com" 
                type="email" 
                required
              />
            </div>
            <Input 
              label="විෂය" 
              placeholder="අපි ඔබට උදව් කරන්නේ කෙසේද?" 
              type="text" 
            />
            <Textarea 
              label="පණිවිඩය" 
              placeholder="ඔබේ පණිවිඩය මෙහි ලියන්න..." 
              required
            />
            
            <button className="group w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-200">
              පණිවිඩය යොමු කරන්න
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}