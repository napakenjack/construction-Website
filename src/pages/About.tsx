import React from 'react';
import { CheckCircle2, Award, Users, ShieldCheck, HardHat, Target } from 'lucide-react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-graphite-950 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop" 
            alt="Construction blueprint" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">About Apex Build</h1>
          <p className="text-xl text-graphite-300 max-w-2xl leading-relaxed">
            We are a premium construction and engineering firm dedicated to building structures that define modern excellence, safety, and durability.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              title="Our Story & Vision" 
              subtitle="The Foundation"
              className="mb-8"
            />
            <div className="prose prose-lg text-graphite-600 space-y-6">
              <p>
                Founded on the principles of engineering precision and uncompromising quality, Apex Build has grown into one of the region's most trusted construction partners. We started with a simple mission: to eliminate the uncertainty and stress from the construction process.
              </p>
              <p>
                Over the past 15 years, we have successfully delivered over 250 projects, ranging from bespoke private residences to complex commercial facilities. Our growth is driven by our commitment to transparency, strict adherence to deadlines, and a relentless pursuit of perfection.
              </p>
              <p>
                We believe that a building is more than just concrete and steel; it is a legacy. That's why we employ only master craftsmen, utilize top-tier materials, and implement rigorous quality control at every stage of the build.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop" 
              alt="Construction site" 
              className="rounded-xl w-full h-64 object-cover"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2940&auto=format&fit=crop" 
              alt="Engineering team" 
              className="rounded-xl w-full h-64 object-cover mt-8"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section bg="light">
        <SectionHeader 
          title="What Drives Us" 
          subtitle="Our Core Values"
          align="center"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck size={32} />, title: 'Uncompromising Quality', desc: 'We never cut corners. Every material sourced and every technique applied meets the highest industry standards.' },
            { icon: <Target size={32} />, title: 'Engineering Precision', desc: 'Our in-house engineering team ensures structural integrity and optimal performance for every building.' },
            { icon: <Users size={32} />, title: 'Client Transparency', desc: 'Clear communication, honest pricing, and regular progress updates. No hidden fees, no surprises.' }
          ].map((value, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-graphite-100 text-center">
              <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center text-brand-500 mx-auto mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-graphite-950 mb-4">{value.title}</h3>
              <p className="text-graphite-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership / Team */}
      <Section>
        <SectionHeader 
          title="Meet The Leadership" 
          subtitle="Our Experts"
          align="center"
        />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: 'Michael Sterling', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop' },
            { name: 'Sarah Jenkins', role: 'Chief Engineer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop' },
            { name: 'David Chen', role: 'Head of Operations', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop' }
          ].map((member, i) => (
            <div key={i} className="text-center group">
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/5]">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-graphite-950">{member.name}</h3>
              <p className="text-brand-600 font-medium uppercase tracking-wider text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section bg="dark">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              title="Certified Excellence" 
              subtitle="Standards & Safety"
              className="mb-8"
            />
            <p className="text-graphite-300 text-lg mb-8 leading-relaxed">
              Safety and compliance are non-negotiable. We adhere to the strictest international building codes and maintain comprehensive insurance coverage for all our projects.
            </p>
            <ul className="space-y-4">
              {[
                'ISO 9001:2015 Quality Management Certified',
                'OSHA Compliant Safety Protocols',
                'Fully Licensed General Contractor',
                'Comprehensive Liability Insurance ($10M+)'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <Award className="text-brand-500 shrink-0" size={24} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-graphite-900 p-10 rounded-2xl border border-graphite-800">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to build with the best?</h3>
            <p className="text-graphite-400 mb-8">
              Schedule a consultation with our engineering team to discuss your project requirements, timeline, and budget.
            </p>
            <Button href="/contact" variant="primary" size="lg" fullWidth>
              Request a Consultation
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
