import React from 'react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { ClipboardList, Map, PenTool, Calculator, HardHat, CheckSquare, Key } from 'lucide-react';

export default function ProcessPage() {
  const steps = [
    {
      icon: <ClipboardList size={32} />,
      title: 'Initial Consultation',
      desc: 'We begin by understanding your vision, requirements, budget, and timeline. This is a no-obligation meeting to determine project feasibility.'
    },
    {
      icon: <Map size={32} />,
      title: 'Site Review & Analysis',
      desc: 'Our engineers conduct a thorough site inspection, analyzing topography, zoning laws, and environmental factors to mitigate risks early.'
    },
    {
      icon: <PenTool size={32} />,
      title: 'Design & Planning',
      desc: 'Collaborating with top architects, we develop detailed blueprints and 3D models. We handle all necessary permits and municipal approvals.'
    },
    {
      icon: <Calculator size={32} />,
      title: 'Cost Estimate & Agreement',
      desc: 'You receive a transparent, itemized cost breakdown. Once approved, we sign a fixed-price contract to guarantee no hidden surprises.'
    },
    {
      icon: <HardHat size={32} />,
      title: 'Construction Phase',
      desc: 'Our master builders break ground. You receive weekly progress reports and have a dedicated project manager available 24/7.'
    },
    {
      icon: <CheckSquare size={32} />,
      title: 'Quality Control',
      desc: 'Rigorous multi-point inspections are conducted at every major milestone to ensure structural integrity and flawless finishing.'
    },
    {
      icon: <Key size={32} />,
      title: 'Final Handover',
      desc: 'A comprehensive walkthrough ensures your 100% satisfaction. We hand over the keys along with all warranties and maintenance guides.'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-graphite-950 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Our Process</h1>
          <p className="text-xl text-graphite-300 max-w-3xl mx-auto leading-relaxed">
            A transparent, step-by-step methodology designed to eliminate uncertainty and deliver exceptional results on time and on budget.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-graphite-200 before:to-transparent">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-brand-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-graphite-100 shadow-sm group-hover:border-brand-500 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-xl text-graphite-950">{step.title}</h3>
                    <span className="text-brand-500 font-extrabold text-lg opacity-50">0{index + 1}</span>
                  </div>
                  <p className="text-graphite-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="brand" className="text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready for Step 1?</h2>
        <p className="text-xl text-brand-50 mb-10 max-w-2xl mx-auto">
          Schedule your initial consultation today. Let's discuss your vision and see how we can bring it to life.
        </p>
        <Button href="/contact" size="lg" className="bg-graphite-950 text-white hover:bg-graphite-800">
          Book Consultation
        </Button>
      </Section>
    </div>
  );
}
