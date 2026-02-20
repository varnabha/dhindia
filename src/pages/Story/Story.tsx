import { Link } from '../../components/Router';
import { BookOpen, TrendingUp, FileText, ArrowRight } from 'lucide-react';

function Story() {
  const milestones = [
    {
      year: '2023',
      title: 'Foundation',
      description: 'DHI India established as a joint venture between Druk Holding & Investments and Kusum Group.',
    },
    {
      year: '2023',
      title: 'FDI Approval',
      description: 'Received FDI approval from Ministry of Commerce, Government of India.',
    },
    {
      year: '2024',
      title: 'Operations Begin',
      description: 'Commenced operations with focus on minerals, logistics, and cross-border trade.',
    },
    {
      year: '2024',
      title: 'Portfolio Expansion',
      description: 'Expanded portfolio to include energy, agro-processing, and infrastructure sectors.',
    },
  ];

  const sections = [
    {
      icon: TrendingUp,
      title: 'Portfolio Performance',
      description: 'Track the performance of our portfolio companies and investments.',
      path: '/story/performance',
    },
    {
      icon: FileText,
      title: 'Our Financials',
      description: 'Access our financial reports, annual statements, and disclosures.',
      path: '/story/financials',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">Our Story</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Our Journey
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              The story of DHI India is one of vision, partnership, and commitment to 
              strengthening economic ties between Bhutan and India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story Introduction */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-6">
                The Beginning of a Partnership
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                DHI India was born from a shared vision—to create a seamless platform that enables 
                Druk Holding & Investments and its group companies to operate in India with greater 
                ease, efficiency, and impact.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                As trade and cooperation between Bhutan and India continue to grow, there is a clear 
                opportunity to create a structured, dedicated platform that understands both markets deeply.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                It is on the strong foundation of trust, experience, and infrastructure built over 
                150 years by the Dugar family that DHI India is being envisioned.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/hero_handshake.jpg" 
                alt="Partnership" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Our Journey So Far
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#C69B3C]/20" />
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.title}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
                        <span className="text-[#C69B3C] font-bold text-sm">{milestone.year}</span>
                        <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827] mt-1 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-[#6B7280] text-sm">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-[#C69B3C] rounded-full relative z-10" />
                    <div className="w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Philosophy */}
          <div className="bg-[#0B1E3C] rounded-3xl p-10 mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <BookOpen className="w-12 h-12 text-[#C69B3C] mx-auto mb-6" />
              <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-4">
                Our Philosophy
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                We look forward to building not just a business relationship, but a long-term 
                partnership based on shared growth, shared values, and shared success.
              </p>
              <p className="text-white/70 leading-relaxed">
                Bhutan offers natural resources, stability, and a progressive economic outlook. 
                India offers scale, markets, technology, and connectivity. Together, through DHI India, 
                these strengths can be harmonized into a powerful and mutually beneficial growth story.
              </p>
            </div>
          </div>

          {/* Explore More */}
          <div>
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Explore Our Story
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {sections.map((section) => (
                <Link
                  key={section.title}
                  to={section.path}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-14 h-14 bg-[#F4F2EE] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0B1E3C] transition-colors">
                    <section.icon className="w-7 h-7 text-[#C69B3C]" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-xl text-[#111827] mb-3">
                    {section.title}
                  </h3>
                  <p className="text-[#6B7280] mb-4">{section.description}</p>
                  <span className="inline-flex items-center gap-1 text-[#C69B3C] font-medium">
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

export default Story;
