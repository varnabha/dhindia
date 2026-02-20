import { TrendingUp, Building2, Zap, Handshake } from 'lucide-react';

function PortfolioPerformance() {
  const performance = [
    { metric: '₹2,000+ Cr', label: 'Assets Under Management', change: '+15%' },
    { metric: '15+', label: 'Portfolio Companies', change: '+3' },
    { metric: '25%', label: 'Avg. Annual Growth', change: 'Stable' },
    { metric: '3', label: 'Core Sectors', change: 'Expanding' },
  ];

  const companies = [
    {
      name: 'Kusum Products Limited',
      sector: 'Manufacturing',
      performance: 'Strong',
      description: 'Edible oils and fats with pan-India distribution.',
    },
    {
      name: 'Kusum Logistics',
      sector: 'Logistics',
      performance: 'Growing',
      description: 'Bulk liquid handling and port-based infrastructure.',
    },
    {
      name: 'Kusum Realty',
      sector: 'Real Estate',
      performance: 'Stable',
      description: 'Commercial real estate developments across major cities.',
    },
    {
      name: 'DHI Bhutan Ventures',
      sector: 'Investments',
      performance: 'Expanding',
      description: 'Cross-border investment and partnership initiatives.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">Our Story / Portfolio Performance</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Portfolio Performance
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Track the performance of our portfolio companies and investments as we 
              build value across sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {performance.map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="font-['Montserrat'] font-bold text-3xl text-[#C69B3C] mb-2">
                  {item.metric}
                </div>
                <div className="text-[#6B7280] text-sm mb-2">{item.label}</div>
                <div className="text-green-600 text-sm font-medium">{item.change}</div>
              </div>
            ))}
          </div>

          {/* Sector Performance */}
          <div className="mb-16">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Performance by Sector
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Building2, name: 'Infrastructure', growth: '+18%', status: 'Strong' },
                { icon: Zap, name: 'Energy', growth: '+22%', status: 'Growing' },
                { icon: Handshake, name: 'Enterprise', growth: '+12%', status: 'Stable' },
                { icon: TrendingUp, name: 'Trade', growth: '+25%', status: 'Expanding' },
              ].map((sector) => (
                <div key={sector.name} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-14 h-14 bg-[#0B1E3C] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <sector.icon className="w-7 h-7 text-[#C69B3C]" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827] mb-2">
                    {sector.name}
                  </h3>
                  <div className="text-2xl font-bold text-green-600 mb-1">{sector.growth}</div>
                  <div className="text-[#6B7280] text-sm">{sector.status}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Companies */}
          <div className="mb-16">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8">
              Portfolio Companies
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {companies.map((company) => (
                <div key={company.name} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827]">
                        {company.name}
                      </h3>
                      <span className="text-[#C69B3C] text-sm">{company.sector}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      company.performance === 'Strong' ? 'bg-green-100 text-green-700' :
                      company.performance === 'Growing' ? 'bg-blue-100 text-blue-700' :
                      company.performance === 'Expanding' ? 'bg-purple-100 text-purple-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {company.performance}
                    </span>
                  </div>
                  <p className="text-[#6B7280] text-sm">{company.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Highlights */}
          <div className="bg-[#0B1E3C] rounded-3xl p-10">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-6">
              Performance Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  {[
                    'Consistent year-over-year growth across all sectors',
                    'Strong performance in logistics and infrastructure',
                    'Expanding presence in energy and clean technology',
                    'Successful cross-border trade facilitation',
                    'Growing portfolio of strategic investments',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/70">
                      <div className="w-2 h-2 rounded-full bg-[#C69B3C] mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/portfolio_kl.jpg" 
                  alt="Portfolio" 
                  className="w-full h-full object-cover min-h-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioPerformance;
