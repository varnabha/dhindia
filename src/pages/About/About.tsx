import { Link } from '../../components/Router';
import { Globe, FileCheck, Ship, Truck, Handshake, ArrowRight } from 'lucide-react';

function About() {
  const sections = [
    {
      icon: Globe,
      title: 'Our Purpose',
      description: 'Discover the fundamental purpose that drives DHI India and our commitment to creating value.',
      path: '/about/purpose',
    },
    {
      icon: FileCheck,
      title: 'Corporate Governance',
      description: 'Learn about our governance framework, board structure, and commitment to transparency.',
      path: '/about/governance',
    },
    {
      icon: Handshake,
      title: 'Leadership',
      description: 'Meet the visionary leaders guiding DHI India towards sustainable growth.',
      path: '/about/leadership',
    },
    {
      icon: Ship,
      title: 'Our Team',
      description: 'Get to know the dedicated professionals behind our success.',
      path: '/about/team',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">About Us</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Druk Holding India Private Limited (DHI India) is a joint venture promoted by 
              Druk Holding & Investments (Bhutan) and Kusum Limited, India—bringing together 
              sovereign stewardship with multi-decade operating expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-6">
                Two Legacies. One Vision.
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Today is not just a meeting between two organizations. It is the coming together 
                of two legacies — one rooted in the peaceful and progressive kingdom of Bhutan, 
                and the other built over generations of enterprise in India.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Bhutan, under the visionary philosophy of Gross National Happiness, has created 
                a development model that balances economic growth with environmental sustainability 
                and social well-being.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                On the Indian side, Kusum and the Dugar Family bring a legacy of over 
                <strong className="text-[#111827]"> 150 years of business experience</strong> 
                with deep capabilities across manufacturing, trading, logistics, infrastructure 
                and real estate across India.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/bhutan_landscape.jpg" 
                alt="Bhutan" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Promoters */}
          <div className="mb-20">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Our Promoters
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-[#0B1E3C] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-[#C69B3C] font-bold text-2xl">D</span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl text-[#111827] mb-4">
                  Druk Holding & Investments
                </h3>
                <p className="text-[#6B7280] text-sm mb-2">Bhutan</p>
                <p className="text-[#6B7280] leading-relaxed">
                  At the center of Bhutan's economic vision stands Druk Holding & Investments — 
                  the commercial arm of the Royal Government of Bhutan — nurturing national assets 
                  across energy, natural resources, infrastructure, manufacturing, and global partnerships. 
                  DHI represents stability, integrity, and long-term nation-building.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-[#0B1E3C] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-[#C69B3C] font-bold text-2xl">K</span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl text-[#111827] mb-4">
                  Kusum Limited & Dugar Family
                </h3>
                <p className="text-[#6B7280] text-sm mb-2">India</p>
                <p className="text-[#6B7280] leading-relaxed">
                  With roots in Tezpur, Assam, and headquartered in Kolkata, the family has built 
                  deep capabilities across manufacturing, trading, logistics, infrastructure and 
                  real estate across India. Over decades, the family has successfully built and 
                  revived large industrial operations.
                </p>
              </div>
            </div>
          </div>

          {/* Our Role */}
          <div className="mb-16">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-[#111827] mb-8">Our Role</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: Globe, title: 'India Market Entry', desc: 'Strategic expansion into Indian markets' },
                { icon: FileCheck, title: 'Government Coordination', desc: 'Regulatory & policy support' },
                { icon: Ship, title: 'Trade Facilitation', desc: 'Smooth cross-border operations' },
                { icon: Truck, title: 'Logistics Support', desc: 'Infrastructure & supply chain' },
                { icon: Handshake, title: 'Partnerships', desc: 'Strategic JV opportunities' },
              ].map((item) => (
                <div key={item.title} className="text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-[#F4F2EE] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0B1E3C] transition-colors">
                    <item.icon className="w-6 h-6 text-[#C69B3C]" />
                  </div>
                  <h4 className="font-['Montserrat'] font-semibold text-[#111827] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#6B7280]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section Links */}
          <div>
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Explore More About Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sections.map((section) => (
                <Link
                  key={section.title}
                  to={section.path}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 bg-[#F4F2EE] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0B1E3C] transition-colors">
                    <section.icon className="w-6 h-6 text-[#C69B3C]" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827] mb-2">
                    {section.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm mb-4">{section.description}</p>
                  <span className="inline-flex items-center gap-1 text-[#C69B3C] text-sm font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
