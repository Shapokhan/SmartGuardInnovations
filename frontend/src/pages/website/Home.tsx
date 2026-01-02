import { HeroSection } from '@/components/website/Hero';
import { ArrowRight, Settings, Users, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Why Choose SmartGuard</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                Advanced Features for <br/>Modern Healthcare
              </h2>
              <p className="text-slate-600 text-lg">
                Our nurse call systems are designed to bridge the gap between patients and caregivers, ensuring timely care and safety.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Settings, 
                  title: "Smart Integration", 
                  desc: "Seamlessly integrates with your existing hospital management and paging systems." 
                },
                { 
                  icon: Shield, 
                  title: "Reliable Safety", 
                  desc: "Built with triple-redundancy fail-safes to ensure calls never go unheard." 
                },
                { 
                  icon: Clock, 
                  title: "Real-time Analytics", 
                  desc: "Monitor response times and staff efficiency with comprehensive reporting tools." 
                }
              ].map((feature, idx) => (
                <div key={idx} className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{feature.desc}</p>
                  <Link to="/products" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* About Section Split */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1">
               <div className="relative">
                 <img 
                   src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop" 
                   alt="Modern Hospital Equipment" 
                   className="rounded-2xl shadow-2xl"
                 />
                 <div className="absolute -bottom-6 -right-6 w-2/3 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                   <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                       <Users className="w-6 h-6" />
                     </div>
                     <div>
                       <p className="font-bold text-slate-900 text-lg">500+ Hospitals</p>
                       <p className="text-sm text-slate-500">Trusted worldwide</p>
                     </div>
                   </div>
                   <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                     <div className="h-full bg-green-500 w-[50%]"></div>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="order-1 lg:order-2">
               <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">About SmartGuard</span>
               <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                 Revolutionizing Patient-Staff Communication
               </h2>
               <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                 Founded by healthcare veterans and engineers, SmartGuard Innovations is dedicated to solving the communication bottlenecks in modern medical facilities.
               </p>
               <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                 Our systems don't just alert staff—they provide context, priority, and confirmed delivery, ensuring that critical patient needs are addressed immediately.
               </p>
               
               <Button className="rounded-full px-8 h-12">More About Us</Button>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to upgrade your facility?</h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Get a free consultation and demo of our nurse call systems. See how much efficient your team can be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full px-10 h-14 text-primary font-bold text-lg hover:bg-white">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-black border-white/30 hover:bg-white/10 font-bold text-lg hover:text-white">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
