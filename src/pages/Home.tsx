import { useEffect, useState } from 'react';
import { Link } from '../components/Router';
import { ArrowRight, Building2, TrendingUp, Handshake, Globe } from 'lucide-react';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { value: '15+', label: 'Portfolio Companies' },
    { value: '150+', label: 'Years of Legacy' },
    { value: '₹2000+ Cr', label: 'Assets Managed' },
    { value: '3', label: 'Core Sectors' },
  ];

  const focusAreas = [
    {
      icon: Building2,
      title: 'Infrastructure & Logistics',
      description: 'Ports, roads, and supply chain assets that keep economies moving.',
    },
    {
      icon: TrendingUp,
      title: 'Energy & Resources',
      description: 'Power, fuel, and resource-linked businesses with durable demand.',
    },
    {
      icon: Handshake,
      title: 'Enterprise & FMCG',
      description: 'Consumer brands and B2B platforms with strong distribution moats.',
    },
    {
      icon: Globe,
      title: 'Cross-Border Trade',
      description: 'Seamless trade facilitation between Bhutan and India.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E3C] via-[#0B1E3C]/95 to-[#0B1E3C]/90" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/bhutan_landscape.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block px-4 py-2 bg-[#C69B3C]/20 text-[#C69B3C] text-sm font-medium rounded-full mb-6">
                Druk Holding India Private Limited
              </span>
            </div>
            
            <h1 className={`font-['Montserrat'] font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Connecting Bhutan's Strengths with India's Opportunities
            </h1>
            
            <p className={`text-xl text-white/80 leading-relaxed mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              DHI India is the strategic India arm of Druk Holding & Investments (Bhutan), 
              enabling seamless trade, logistics, investments and market access between Bhutan and India.
            </p>
            
            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C69B3C] text-white font-medium rounded-lg hover:bg-[#B58A2B] transition-colors">
                About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/opportunity" className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                Explore Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="text-center"
              >
                <div className="font-['Montserrat'] font-bold text-4xl text-[#C69B3C] mb-2">{stat.value}</div>
                <div className="text-[#6B7280] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="dhi-label mb-4 block">Our Focus</span>
            <h2 className="font-['Montserrat'] font-bold text-3xl sm:text-4xl text-[#111827]">
              Where We Invest
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area) => (
              <div 
                key={area.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 bg-[#0B1E3C] rounded-xl flex items-center justify-center mb-6">
                  <area.icon className="w-7 h-7 text-[#C69B3C]" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827] mb-3">{area.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-[#0B1E3C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="dhi-label mb-4 block text-[#C69B3C]">About DHI India</span>
              <h2 className="font-['Montserrat'] font-bold text-3xl sm:text-4xl text-white mb-6">
                Two Legacies. One Vision.
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                DHI India is promoted by Druk Holding & Investments (Bhutan) and the Dugar 
                family's Kusum Group—bringing together sovereign stewardship with multi-decade 
                operating expertise.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                It is the coming together of two legacies — one rooted in the peaceful and 
                progressive kingdom of Bhutan, and the other built over generations of enterprise in India.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-[#C69B3C] font-medium hover:gap-3 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="/hero_handshake.jpg" 
                alt="Partnership" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#C69B3C] rounded-3xl p-12 lg:p-16 text-center">
            <h2 className="font-['Montserrat'] font-bold text-3xl sm:text-4xl text-white mb-4">
              Let's Build Together
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              If you're building in infrastructure, energy, or enterprise, we'd love to hear from you. 
              Explore opportunities to partner with DHI India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/opportunity" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#C69B3C] font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Explore Opportunities
              </Link>
              <Link 
                to="/opportunity/careers" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                View Careers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
