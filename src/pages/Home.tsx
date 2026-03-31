import React from 'react';
import { ArrowRight, CheckCircle2, Building2, Home, Factory, Ruler, HardHat, ShieldCheck, Clock, Trophy, Users, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Section, SectionHeader } from '../components/ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';

export default function HomePage() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1931&auto=format&fit=crop" 
            alt="Modern construction site" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-graphite-950/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <Badge variant="brand" className="mb-6">Premium Construction & Engineering</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Building Excellence. <br />
              <span className="text-brand-500">Delivering Trust.</span>
            </h1>
            <p className="text-lg md:text-xl text-graphite-200 mb-10 max-w-2xl leading-relaxed">
              We are a modern construction company specializing in premium private houses, residential buildings, commercial structures, and turnkey projects. Engineering precision meets uncompromising quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg" className="text-lg">Get Free Estimate</Button>
              <Button href="/projects" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-graphite-950 text-lg">
                View Our Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-brand-500 py-8 relative z-20 -mt-8 mx-4 sm:mx-6 lg:mx-8 rounded-xl shadow-xl max-w-7xl xl:mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 text-center divide-x divide-brand-600/50">
          <div className="px-4">
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">15+</div>
            <div className="text-brand-950 font-semibold text-sm uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="px-4">
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">250+</div>
            <div className="text-brand-950 font-semibold text-sm uppercase tracking-wider">Projects Completed</div>
          </div>
          <div className="px-4">
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">100%</div>
            <div className="text-brand-950 font-semibold text-sm uppercase tracking-wider">On-Time Delivery</div>
          </div>
          <div className="px-4">
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">10yr</div>
            <div className="text-brand-950 font-semibold text-sm uppercase tracking-wider">Structural Warranty</div>
          </div>
        </div>
      </div>

      {/* ABOUT / COMPANY INTRO */}
      <Section className="pt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              title="We Build Structures That Stand The Test Of Time" 
              subtitle="Who We Are"
              className="mb-6"
            />
            <p className="text-graphite-600 text-lg mb-6 leading-relaxed">
              Apex Build is not just another contractor. We are a team of dedicated engineers, architects, and master builders committed to elevating the standard of modern construction.
            </p>
            <p className="text-graphite-600 text-lg mb-8 leading-relaxed">
              Whether it's a bespoke private residence or a complex commercial facility, we bring the same level of rigorous project management, transparent communication, and uncompromising quality control to every site.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Fully licensed, bonded, and insured',
                'In-house engineering and design support',
                'Strict adherence to safety and building codes',
                'Transparent pricing with no hidden fees'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-500 shrink-0 mt-1" size={20} />
                  <span className="text-graphite-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button href="/about" variant="outline">Learn More About Us</Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-brand-500 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop" 
              alt="Architectural planning" 
              className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* SERVICES SECTION */}
      <Section bg="light">
        <SectionHeader 
          title="Comprehensive Construction Services" 
          subtitle="What We Build"
          align="center"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Home size={32} />, title: 'Custom Houses', desc: 'Bespoke residential homes built to your exact specifications with premium finishes.' },
            { icon: <Building2 size={32} />, title: 'Residential Buildings', desc: 'Multi-unit residential complexes designed for modern living and durability.' },
            { icon: <Factory size={32} />, title: 'Commercial Projects', desc: 'Offices, retail spaces, and industrial facilities built for business performance.' },
            { icon: <Ruler size={32} />, title: 'Turnkey Construction', desc: 'End-to-end solutions from initial design and permits to final interior finishing.' }
          ].map((service, i) => (
            <Card key={i} className="group hover:border-brand-500 transition-colors duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-graphite-50 rounded-xl flex items-center justify-center text-brand-500 mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-graphite-600 mb-6">{service.desc}</p>
                <Button href="/services" variant="ghost" className="p-0 h-auto hover:bg-transparent text-brand-500 hover:text-brand-600 font-semibold group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2940&auto=format&fit=crop" 
              alt="Construction worker" 
              className="rounded-xl w-full h-64 object-cover"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2940&auto=format&fit=crop" 
              alt="Building site" 
              className="rounded-xl w-full h-64 object-cover mt-8"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader 
              title="The Apex Advantage" 
              subtitle="Why Choose Us"
              className="mb-8"
            />
            
            <div className="space-y-6">
              {[
                { icon: <ShieldCheck />, title: 'Transparent Pricing', desc: 'Detailed, fixed-price contracts with no hidden surprises or unexplained variations.' },
                { icon: <HardHat />, title: 'Engineering Precision', desc: 'Every project is overseen by qualified engineers ensuring structural integrity.' },
                { icon: <Clock />, title: 'Deadline Commitment', desc: 'We respect your time. Our rigorous project management ensures on-time delivery.' },
                { icon: <Trophy />, title: 'Premium Quality', desc: 'We source only top-tier materials and employ master craftsmen for flawless execution.' }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-500 shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-graphite-950 mb-2">{feature.title}</h4>
                    <p className="text-graphite-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section bg="dark">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeader 
            title="Our Recent Work" 
            subtitle="Featured Projects"
            className="mb-0"
          />
          <Button href="/projects" variant="outline" className="border-graphite-700 text-white hover:bg-white hover:text-graphite-950 mt-6 md:mt-0">
            View All Projects
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2950&auto=format&fit=crop', title: 'The Horizon Villa', category: 'Private House', location: 'Beverly Hills, CA' },
            { img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop', title: 'Nexus Commercial Center', category: 'Commercial', location: 'Downtown Metro' },
            { img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2953&auto=format&fit=crop', title: 'Oakwood Residences', category: 'Residential Building', location: 'Westside District' }
          ].map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button variant="primary" size="sm">View Details</Button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-graphite-400">{project.location}</p>
                </div>
                <Badge variant="outline" className="border-graphite-700 text-graphite-300">{project.category}</Badge>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA BLOCK */}
      <Section bg="brand" className="relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-graphite-950 opacity-10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to start your next construction project?
          </h2>
          <p className="text-xl text-brand-50 mb-10">
            Contact us today for a free consultation and detailed cost estimate. Our experts are ready to discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" size="lg" className="bg-graphite-950 text-white hover:bg-graphite-800 text-lg">
              Request Free Estimate
            </Button>
            <Button href="tel:+15551234567" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-600 text-lg">
              Call +1 (555) 123-4567
            </Button>
          </div>
        </div>
      </Section>

      {/* FAQ SECTION */}
      <Section>
        <SectionHeader 
          title="Frequently Asked Questions" 
          subtitle="Clear Answers"
          align="center"
        />
        
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: 'How much does construction cost per square meter?', a: 'Costs vary significantly based on project type, materials, and location. For a standard private house, prices typically start at $1,500/sqm. Contact us for a precise, customized estimate based on your specific requirements.' },
            { q: 'Do you offer turnkey construction services?', a: 'Yes, our turnkey service covers everything from initial architectural design and securing permits to construction, interior finishing, and final handover. You simply turn the key and walk in.' },
            { q: 'How long does it take to build a custom house?', a: 'A typical custom home takes between 8 to 14 months to complete, depending on the size, complexity, and permitting processes. We provide a strict timeline before construction begins.' },
            { q: 'Do you handle building permits and approvals?', a: 'Absolutely. Our team manages the entire bureaucratic process, including zoning approvals, building permits, and final inspections, ensuring full legal compliance.' }
          ].map((faq, i) => (
            <div key={i} className="border border-graphite-200 rounded-xl p-6 hover:border-brand-500 transition-colors">
              <h4 className="text-lg font-bold text-graphite-950 mb-3">{faq.q}</h4>
              <p className="text-graphite-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CONTACT SECTION */}
      <Section bg="light" id="contact-form">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader 
              title="Let's Discuss Your Project" 
              subtitle="Get In Touch"
              className="mb-8"
            />
            <p className="text-graphite-600 text-lg mb-10">
              Fill out the form with your project details, and one of our senior project managers will contact you within 24 hours to schedule a consultation.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-500">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-graphite-500 font-medium">Call Us Directly</div>
                  <a href="tel:+15551234567" className="text-xl font-bold text-graphite-950 hover:text-brand-500">+1 (555) 123-4567</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-500">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-graphite-500 font-medium">Email Us</div>
                  <a href="mailto:hello@apexbuild.com" className="text-xl font-bold text-graphite-950 hover:text-brand-500">hello@apexbuild.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-graphite-500 font-medium">Visit Our Office</div>
                  <div className="text-lg font-bold text-graphite-950">123 Construction Ave, NY 10001</div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-graphite-950 text-white rounded-t-xl">
              <CardTitle className="text-2xl">Request an Estimate</CardTitle>
              <p className="text-graphite-400 mt-2">Fast, free, and no obligation.</p>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-graphite-900">Full Name *</label>
                    <Input placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-graphite-900">Phone Number *</label>
                    <Input type="tel" placeholder="+1 (555) 000-0000" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-graphite-900">Email Address *</label>
                  <Input type="email" placeholder="john@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-graphite-900">Project Type</label>
                  <select className="flex h-12 w-full rounded-md border border-graphite-200 bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                    <option>Private House Construction</option>
                    <option>Commercial Building</option>
                    <option>Turnkey Project</option>
                    <option>Renovation</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-graphite-900">Project Details</label>
                  <Textarea placeholder="Tell us about your location, budget, and timeline..." className="min-h-[150px]" />
                </div>
                
                <Button type="button" size="lg" fullWidth>Submit Request</Button>
                <p className="text-xs text-graphite-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
