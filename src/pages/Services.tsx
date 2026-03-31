import React from 'react';
import { Home, Building2, Factory, Ruler, Wrench, HardHat, CheckCircle2, ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

export default function ServicesPage() {
  const services = [
    {
      id: 'custom-homes',
      icon: <Home size={40} />,
      title: 'Custom House Construction',
      desc: 'We build bespoke, high-end private residences tailored to your exact lifestyle and aesthetic preferences. From modern minimalist villas to classic estates.',
      benefits: ['Personalized architectural design support', 'Premium material sourcing', 'Energy-efficient building systems', 'Dedicated project manager'],
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2950&auto=format&fit=crop'
    },
    {
      id: 'residential',
      icon: <Building2 size={40} />,
      title: 'Residential Buildings',
      desc: 'Multi-unit residential construction for developers and investors. We deliver high-density housing projects on time and within budget, maximizing ROI.',
      benefits: ['Scalable construction methodologies', 'Strict adherence to zoning laws', 'Cost-effective material procurement', 'Fast-track scheduling options'],
      img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2953&auto=format&fit=crop'
    },
    {
      id: 'commercial',
      icon: <Factory size={40} />,
      title: 'Commercial Construction',
      desc: 'State-of-the-art commercial facilities including office buildings, retail spaces, and industrial warehouses designed for operational efficiency.',
      benefits: ['Heavy-duty structural engineering', 'Advanced HVAC and electrical systems', 'Minimal business disruption', 'Compliance with commercial codes'],
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop'
    },
    {
      id: 'turnkey',
      icon: <Ruler size={40} />,
      title: 'Turnkey Solutions',
      desc: 'The ultimate hands-off experience. We handle everything from the initial concept and permitting to construction, interior design, and final cleaning.',
      benefits: ['Single point of contact', 'Guaranteed fixed pricing', 'Accelerated project timelines', 'Move-in ready delivery'],
      img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-graphite-950 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Our Services</h1>
          <p className="text-xl text-graphite-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction and engineering solutions delivered with uncompromising quality and strict adherence to deadlines.
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-500 mb-8">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-graphite-950 mb-6">{service.title}</h2>
                  <p className="text-lg text-graphite-600 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <div className="mb-10">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-graphite-950 mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="text-brand-500 shrink-0 mt-0.5" size={20} />
                          <span className="text-graphite-700 font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button href="/contact" variant="primary">Request a Quote</Button>
                </div>
                
                <div className={`relative ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                  <div className={`absolute inset-0 bg-brand-500 rounded-2xl transform ${index % 2 !== 0 ? '-translate-x-4' : 'translate-x-4'} translate-y-4 -z-10`}></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <Section bg="brand" className="text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Need a custom solution?</h2>
        <p className="text-xl text-brand-50 mb-10 max-w-2xl mx-auto">
          We also handle specialized structural works, complex renovations, and industrial facilities. Contact our engineering team to discuss your specific requirements.
        </p>
        <Button href="/contact" size="lg" className="bg-graphite-950 text-white hover:bg-graphite-800">
          Discuss Your Project
        </Button>
      </Section>
    </div>
  );
}
