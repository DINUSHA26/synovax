import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Zap, Shield } from 'lucide-react';

const products = [
  { id: 1, name: "Synova ERP", desc: "Enterprise resource planning simplified.", icon: <Zap className="text-orange-500" /> },
  { id: 2, name: "EcoCommerce", desc: "Next-gen e-commerce platform.", icon: <ShoppingBag className="text-blue-500" /> },
  { id: 3, name: "SecureVault", desc: "Advanced data encryption service.", icon: <Shield className="text-green-500" /> },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft size={18} /> Back to Home
          </Button>
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-4">Our Products</h1>
      <p className="text-slate-600 mb-12">Innovative software solutions built for excellence.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {product.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-slate-500 mb-6">{product.desc}</p>
            <Button className="w-full">Learn More</Button>
          </div>
        ))}
      </div>
    </div>
  );
}