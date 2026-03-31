import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Card, CardContent } from '../components/ui/Card';

export default function ContactPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-graphite-950 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Contact Us</h1>
          <p className="text-xl text-graphite-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Get in touch with our team for a free consultation and detailed cost estimate.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <SectionHeader 
              title="Let's Build Something Great Together" 
              subtitle="Get In Touch"
              className="mb-8"
            />
            <p className="text-graphite-600 text-lg mb-10 leading-relaxed">
              Whether you have a fully developed architectural plan or just an idea, our team is ready to help you bring it to life. We aim to respond to all inquiries within 24 hours.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-500 shrink-0 mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-graphite-950 mb-1">Phone</h4>
                  <p className="text-graphite-600 mb-2">Mon-Fri from 8am to 6pm.</p>
                  <a href="tel:+15551234567" className="text-xl font-bold text-brand-500 hover:text-brand-600">+1 (555) 123-4567</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-500 shrink-0 mt-1">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-graphite-950 mb-1">WhatsApp</h4>
                  <p className="text-graphite-600 mb-2">Fastest way to reach us.</p>
                  <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="text-xl font-bold text-brand-500 hover:text-brand-600">Message Us</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-500 shrink-0 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-graphite-950 mb-1">Email</h4>
                  <p className="text-graphite-600 mb-2">We'll respond within 24 hours.</p>
                  <a href="mailto:hello@apexbuild.com" className="text-xl font-bold text-brand-500 hover:text-brand-600">hello@apexbuild.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-500 shrink-0 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-graphite-950 mb-1">Office</h4>
                  <p className="text-graphite-600">
                    123 Construction Ave, Suite 400<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-graphite-50 p-6 rounded-xl border border-graphite-100">
              <h4 className="font-bold text-graphite-950 mb-2 flex items-center gap-2">
                <Clock size={20} className="text-brand-500" /> Business Hours
              </h4>
              <ul className="space-y-2 text-graphite-600">
                <li className="flex justify-between"><span>Monday - Friday:</span> <span>8:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <Card className="shadow-xl border-0 h-full">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-graphite-950 mb-6">Request a Free Estimate</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-graphite-900">First Name *</label>
                      <Input placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-graphite-900">Last Name *</label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-graphite-900">Email Address *</label>
                      <Input type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-graphite-900">Phone Number *</label>
                      <Input type="tel" placeholder="+1 (555) 000-0000" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-graphite-900">Project Type *</label>
                    <select className="flex h-12 w-full rounded-md border border-graphite-200 bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500" required>
                      <option value="">Select a project type...</option>
                      <option value="private-house">Private House Construction</option>
                      <option value="residential-building">Residential Building</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="turnkey">Turnkey Project</option>
                      <option value="renovation">Renovation / Reconstruction</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-graphite-900">Estimated Budget</label>
                      <select className="flex h-12 w-full rounded-md border border-graphite-200 bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                        <option value="">Select budget range...</option>
                        <option value="under-500k">Under $500k</option>
                        <option value="500k-1m">$500k - $1M</option>
                        <option value="1m-5m">$1M - $5M</option>
                        <option value="5m-plus">$5M+</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-graphite-900">Project Location</label>
                      <Input placeholder="City, State or Zip Code" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-graphite-900">Project Details *</label>
                    <Textarea 
                      placeholder="Please describe your project, timeline, and any specific requirements..." 
                      className="min-h-[150px]" 
                      required 
                    />
                  </div>
                  
                  <Button type="button" size="lg" fullWidth>Submit Request</Button>
                  <p className="text-xs text-graphite-500 text-center mt-4">
                    Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}
