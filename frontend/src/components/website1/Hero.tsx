import { Button } from '@/components/ui/button';
import { CheckCircle2, Activity, Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-1/4"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
              <Activity className="w-3 h-3" />
              Advanced Healthcare Solutions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              Next Gen <span className="text-primary">Nurse Call</span> Systems for Modern Hospitals
            </h1>

            <p className="text-lg text-slate-600 md:text-xl max-w-lg leading-relaxed">
              Enhance patient care and improve response times with our state-of-the-art wireless communication systems designed for efficiency and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full font-bold px-8 h-12">
                Explore Products
              </Button>
              <Button size="lg" variant="outline" className="rounded-full font-bold px-8 h-12 bg-white hover:bg-slate-50 border-slate-200">
                <Play className="w-4 h-4 mr-2 fill-current" /> View Demo
              </Button>
            </div>

            <div className="pt-8 border-t border-slate-200 grid grid-cols-2 gap-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">24/7 Reliability</h4>
                  <p className="text-sm text-slate-500">Uninterrupted uptime</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Easy Integration</h4>
                  <p className="text-sm text-slate-500">Works with existing systems</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-in slide-in-from-right-10 duration-700 fade-in delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Placeholder for Hero Image */}
              <div className="aspect-[4/3] bg-slate-200 w-full object-cover">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
                  alt="Medical Staff"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Response Time</p>
                    <p className="text-xl font-bold text-slate-900">-40% <span className="text-sm font-normal text-slate-500">improvement</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
