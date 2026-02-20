import { TrendingUp, Target, Globe, Zap } from 'lucide-react';

function InvestmentStrategy() {
  const sectors = [
    {
      name: 'Infrastructure & Logistics',
      description: 'Ports, roads, and supply chain assets that keep economies moving.',
      opportunities: ['Port infrastructure', 'Logistics parks', 'Supply chain solutions'],
    },
    {
      name: 'Energy & Resources',
      description: 'Power, fuel, and resource-linked businesses with durable demand.',
      opportunities: ['Renewable energy', 'Minerals trading', 'Resource development'],
    },
    {
      name: 'Enterprise & FMCG',
      description: 'Consumer brands and B2B platforms with strong distribution moats.',
      opportunities: ['Food processing', 'Consumer goods', 'Distribution networks'],
    },
    {
      name: 'Cross-Border Trade',
      description: 'Facilitating seamless trade between Bhutan and India.',
      opportunities: ['Trade facilitation', 'Customs coordination', 'Market access'],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">Our Strategy / Investment Strategy</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Investment Strategy
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Future-focused investment approach targeting high-growth sectors and 
              emerging opportunities in the India-Bhutan corridor.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-6">
                Investment Philosophy
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                We back businesses with predictable cash flows, strong governance, and clear 
                paths to scale—then support them with capital, connections, and discipline. 
                Our investment approach is guided by long-term value creation rather than 
                short-term gains.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                With the current global economic progress, we are positioned to capitalize on 
                emerging opportunities in the India-Bhutan corridor, leveraging our unique 
                position and expertise.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/minerals_operations.jpg" 
                alt="Investment" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Investment Criteria */}
          <div className="mb-20">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Investment Criteria
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  title: 'Strategic Fit',
                  description: 'Alignment with our vision and sector focus.',
                },
                {
                  icon: TrendingUp,
                  title: 'Growth Potential',
                  description: 'Clear path to scalable growth and expansion.',
                },
                {
                  icon: Globe,
                  title: 'Market Position',
                  description: 'Strong competitive advantage in target market.',
                },
                {
                  icon: Zap,
                  title: 'Operational Excellence',
                  description: 'Proven track record of execution.',
                },
              ].map((criterion) => (
                <div key={criterion.title} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-14 h-14 bg-[#0B1E3C] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <criterion.icon className="w-7 h-7 text-[#C69B3C]" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827] mb-2">
                    {criterion.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm">{criterion.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Focus Sectors */}
          <div>
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Focus Sectors
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {sectors.map((sector) => (
                <div key={sector.name} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="font-['Montserrat'] font-bold text-xl text-[#111827] mb-3">
                    {sector.name}
                  </h3>
                  <p className="text-[#6B7280] mb-4">{sector.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {sector.opportunities.map((opp) => (
                      <span 
                        key={opp}
                        className="px-3 py-1 bg-[#F4F2EE] rounded-full text-sm text-[#111827]"
                      >
                        {opp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#C69B3C] rounded-3xl p-10 text-center">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-4">
              Investment Opportunities
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Interested in exploring investment opportunities with DHI India? 
              Connect with our investment team to discuss potential partnerships.
            </p>
            <a 
              href="#/opportunity/investor-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#C69B3C] font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Investor Guide
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InvestmentStrategy;
