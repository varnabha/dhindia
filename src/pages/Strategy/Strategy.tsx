import { Link } from '../../components/Router';
import { Target, TrendingUp, Lightbulb, PieChart, ArrowRight } from 'lucide-react';

function Strategy() {
  const strategies = [
    {
      icon: PieChart,
      title: 'Portfolio Management Strategy',
      description: 'Our approach to managing existing portfolio companies for optimal performance and growth.',
      path: '/strategy/portfolio',
    },
    {
      icon: TrendingUp,
      title: 'Investment Strategy',
      description: 'Future-focused investment approach targeting high-growth sectors and opportunities.',
      path: '/strategy/investment',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Strategy',
      description: 'Building a knowledge-based innovation ecosystem for sustainable competitive advantage.',
      path: '/strategy/innovation',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">Our Strategy</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Our Strategy for Growth
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              A 3-pronged approach focusing on managing the existing portfolio, making 
              future-focused investments, and establishing a knowledge-based innovation ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Strategy Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-6">
                Strategic Vision
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                DHI India operates across industries ranging from Infrastructure, Energy, 
                Minerals, and Enterprise. It is now imperative to strategize the next-generation 
                industries not only to ensure future relevance but also to take the opportunity 
                of the exponential growth of technology and the global industrial era.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                With the current global economic progress, the world is on the edge of a revolution 
                which could redefine economies and global power, and DHI India should be ready to 
                leapfrog toward building a sustainable future.
              </p>
              <div className="flex items-center gap-4 p-4 bg-[#F4F2EE] rounded-xl">
                <div className="w-12 h-12 bg-[#0B1E3C] rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#C69B3C]" />
                </div>
                <div>
                  <p className="font-medium text-[#111827]">Strategic Focus</p>
                  <p className="text-sm text-[#6B7280]">3-pronged approach to growth</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/team_meeting.jpg" 
                alt="Strategy" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* The 3 Pillars */}
          <div className="mb-20">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              The Three Pillars of Our Strategy
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  number: '01',
                  title: 'Manage Existing Portfolio',
                  description: 'Optimize performance of current investments and portfolio companies.',
                },
                {
                  number: '02',
                  title: 'Future-Focused Investments',
                  description: 'Identify and invest in high-growth sectors and emerging opportunities.',
                },
                {
                  number: '03',
                  title: 'Innovation Ecosystem',
                  description: 'Build knowledge-based capabilities for sustainable competitive advantage.',
                },
              ].map((pillar) => (
                <div key={pillar.number} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-5xl font-bold text-[#C69B3C]/20 mb-4">{pillar.number}</div>
                  <h3 className="font-['Montserrat'] font-bold text-xl text-[#111827] mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Strategy Areas */}
          <div>
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Explore Our Strategic Areas
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {strategies.map((strategy) => (
                <Link
                  key={strategy.title}
                  to={strategy.path}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-14 h-14 bg-[#F4F2EE] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0B1E3C] transition-colors">
                    <strategy.icon className="w-7 h-7 text-[#C69B3C]" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827] mb-3">
                    {strategy.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm mb-4">{strategy.description}</p>
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

export default Strategy;
