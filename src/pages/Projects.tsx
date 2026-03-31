import React, { useState } from 'react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Turnkey', 'Ongoing'];

  const projects = [
    { id: 1, img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2950&auto=format&fit=crop', title: 'The Horizon Villa', category: 'Residential', location: 'Beverly Hills, CA', size: '8,500 sq ft', timeline: '14 Months' },
    { id: 2, img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop', title: 'Nexus Commercial Center', category: 'Commercial', location: 'Downtown Metro', size: '120,000 sq ft', timeline: '24 Months' },
    { id: 3, img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2953&auto=format&fit=crop', title: 'Oakwood Residences', category: 'Residential', location: 'Westside District', size: '45 Units', timeline: '18 Months' },
    { id: 4, img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop', title: 'Tech Hub Alpha', category: 'Turnkey', location: 'Silicon Valley', size: '55,000 sq ft', timeline: '12 Months' },
    { id: 5, img: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop', title: 'Riverfront Tower', category: 'Ongoing', location: 'Chicago, IL', size: '32 Stories', timeline: 'Est. 2027' },
    { id: 6, img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2940&auto=format&fit=crop', title: 'Modern Estate Renovation', category: 'Residential', location: 'Hamptons, NY', size: '12,000 sq ft', timeline: '8 Months' },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-graphite-950 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Our Portfolio</h1>
          <p className="text-xl text-graphite-300 max-w-3xl mx-auto leading-relaxed">
            Explore our featured projects. From bespoke private residences to large-scale commercial developments.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <Section>
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors ${
                filter === cat ? 'bg-brand-500 text-white' : 'bg-graphite-100 text-graphite-600 hover:bg-graphite-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/90 via-graphite-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="grid grid-cols-2 gap-4 text-white mb-4">
                    <div>
                      <span className="block text-xs text-graphite-400 uppercase tracking-wider mb-1">Size</span>
                      <span className="font-semibold">{project.size}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-graphite-400 uppercase tracking-wider mb-1">Timeline</span>
                      <span className="font-semibold">{project.timeline}</span>
                    </div>
                  </div>
                  <Button variant="primary" size="sm" fullWidth>View Case Study</Button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-graphite-950 mb-1">{project.title}</h3>
                  <p className="text-graphite-500">{project.location}</p>
                </div>
                <Badge variant="outline" className="border-graphite-200 text-graphite-600">{project.category}</Badge>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="light" className="text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-graphite-950 mb-6">Ready to add your project to our portfolio?</h2>
        <p className="text-xl text-graphite-600 mb-10 max-w-2xl mx-auto">
          Contact our engineering team to discuss your specific requirements and receive a detailed cost estimate.
        </p>
        <Button href="/contact" size="lg" className="bg-brand-500 text-white hover:bg-brand-600">
          Start Your Project
        </Button>
      </Section>
    </div>
  );
}
