import { Button } from '@/components/ui/button';
import { Target, History, Heart } from 'lucide-react';

export function About() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-slate-900 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">About Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Dedicated to improving patient care through innovative technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Mission</span>
              <h2 className="text-3xl font-black text-slate-900 mb-6">Empowering Caregivers, Protecting Patients</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                At SmartGuard Innovations, we believe that effective communication is the backbone of exceptional healthcare. Our mission is to provide hospitals and clinics with the most reliable, easy-to-use, and advanced call systems available.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <Target className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold text-slate-900">Precision</h3>
                    <p className="text-sm text-slate-500">Zero-latency alerts</p>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <Heart className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold text-slate-900">Care-First</h3>
                    <p className="text-sm text-slate-500">Patient centered design</p>
                 </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop" 
                alt="Medical Team Meeting" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History/Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl border-b border-slate-200 pb-16">
           <History className="w-12 h-12 text-primary mx-auto mb-6" />
           <h2 className="text-3xl font-black text-slate-900 mb-6">Our Legacy</h2>
           <p className="text-slate-600 text-lg leading-relaxed">
             Founded in 2005, we started with a simple buzzer system. Today, we power communication for over 500 hospitals across the globe, integrating AI and IoT into daily patient care workflow.
           </p>
        </div>
      </section>
      
      {/* Team CTA */}
      <section className="py-20 bg-white text-center">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-slate-900 mb-8">Join the Revolution in Healthcare</h2>
           <Button className="rounded-full px-8 h-12">View Careers</Button>
         </div>
      </section>
    </div>
  );
}
