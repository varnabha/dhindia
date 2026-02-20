import { PieChart, TrendingUp, Shield, Target } from 'lucide-react';

function PortfolioStrategy() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">Our Strategy / Portfolio Management</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Portfolio Management Strategy
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              A disciplined approach to managing our portfolio companies for sustainable 
              growth and long-term value creation.
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
                Managing for Excellence
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Our portfolio management strategy focuses on actively managing our investments 
                to maximize returns while minimizing risks. We work closely with our portfolio 
                companies to enhance their operational efficiency, governance standards, and 
                market competitiveness.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                We track our portfolio's performance to ensure sound business management and 
                financial control by setting performance targets and benchmarks and holding 
                them responsible for meeting them.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/portfolio_kp.jpg" 
                alt="Portfolio" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Key Principles */}
          <div className="mb-20">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Key Principles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  title: 'Performance Focus',
                  description: 'Setting clear targets and benchmarks for portfolio companies.',
                },
                {
                  icon: Shield,
                  title: 'Risk Management',
                  description: 'Prudent risk assessment and mitigation strategies.',
                },
                {
                  icon: TrendingUp,
                  title: 'Growth Orientation',
                  description: 'Focusing on sustainable long-term growth.',
                },
                {
                  icon: PieChart,
                  title: 'Diversification',
                  description: 'Balanced portfolio across sectors and geographies.',
                },
              ].map((principle) => (
                <div key={principle.title} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-14 h-14 bg-[#0B1E3C] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="w-7 h-7 text-[#C69B3C]" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827] mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Companies */}
          <div className="bg-[#0B1E3C] rounded-3xl p-10">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-6">
              Our Portfolio Companies
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-white/70 leading-relaxed mb-6">
                  We actively manage our portfolio companies to ensure they meet the highest 
                  standards of corporate governance and operational excellence. Our approach 
                  includes:
                </p>
                <ul className="space-y-3">
                  {[
                    'Regular performance reviews and benchmarking',
                    'Strategic guidance and support',
                    'Governance oversight and compliance',
                    'Operational efficiency improvements',
                    'Market expansion support',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/70">
                      <div className="w-2 h-2 rounded-full bg-[#C69B3C]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Kusum Products Limited', sector: 'Manufacturing' },
                  { name: 'Kusum Logistics', sector: 'Logistics' },
                  { name: 'Kusum Realty', sector: 'Real Estate' },
                  { name: 'DHI Bhutan Ventures', sector: 'Investments' },
                ].map((company) => (
                  <div key={company.name} className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                    <span className="text-white font-medium">{company.name}</span>
                    <span className="text-[#C69B3C] text-sm">{company.sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioStrategy;
