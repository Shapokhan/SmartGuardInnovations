import { Button } from '@/components/ui/button';
import { ArrowRight, Wifi, Bell, Smartphone, Monitor } from 'lucide-react';

export function Products() {
  const products = [
    {
      id: 1,
      name: 'SmartLink Wireless Paging',
      description:
        'Instant notification system for nurses on the move. Features vibration, text alerts, and zone tracking.',
      icon: Wifi,
      image:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80',
    },
    {
      id: 2,
      name: 'Bedside Console Pro',
      description:
        'Patient-accessible bedside unit with two-way communication, pain scale reporting, and entertainment controls.',
      icon: Bell,
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Mobile Care App',
      description:
        'Smartphone integration allowing staff to receive alerts, coordinate tasks, and log patient interactions.',
      icon: Smartphone,
      image:
        'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Central Station Hub',
      description:
        'The command center for the entire floor. Visualize all calls, emergency codes, and staff locations in real-time.',
      icon: Monitor,
      image:
        'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000&auto=format&fit=crop',
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our Products
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Cutting-edge technology designed for the unique demands of
            healthcare environments.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-slate-100 flex flex-col"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur p-2 rounded-lg text-primary">
                    <product.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                    {product.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full font-bold group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                  >
                    View Specifications <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
