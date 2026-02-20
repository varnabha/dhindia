import { Phone, Mail } from 'lucide-react';

function InvestorGuide() {
  const steps = [
    {
      number: '01',
      title: 'Initial Inquiry',
      description: 'Submit your investment proposal or express interest in partnering with DHI India.',
    },
    {
      number: '02',
      title: 'Evaluation',
      description: 'Our team will evaluate your proposal based on our investment criteria and strategic fit.',
    },
    {
      number: '03',
      title: 'Due Diligence',
      description: 'Comprehensive due diligence process including financial, legal, and operational review.',
    },
    {
      number: '04',
      title: 'Partnership',
      description: 'Upon successful completion, we formalize the partnership and begin collaboration.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">Opportunity / Investor Guide</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Investor Guide
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Learn about investment opportunities and how to partner with DHI India 
              to create shared value.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Investment Criteria */}
          <div className="mb-20">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Investment Criteria
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Strategic Fit', desc: 'Alignment with our vision and sector focus' },
                { title: 'Growth Potential', desc: 'Clear path to scalable growth' },
                { title: 'Strong Governance', desc: 'Professional management and transparency' },
                { title: 'Market Position', desc: 'Competitive advantage in target market' },
              ].map((criterion) => (
                <div key={criterion.title} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827] mb-2">
                    {criterion.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm">{criterion.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Process */}
          <div className="mb-20">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Investment Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-[#C69B3C]/20 mb-4">{step.number}</div>
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Focus Sectors */}
          <div className="bg-[#0B1E3C] rounded-3xl p-10 mb-16">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-6 text-center">
              Focus Sectors
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Infrastructure & Logistics',
                'Energy & Resources',
                'Minerals & Mining',
                'Agro & Food Processing',
                'Clean Technology',
                'Cross-Border Trade',
              ].map((sector) => (
                <div key={sector} className="flex items-center gap-3 p-4 bg-white/10 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-[#C69B3C]" />
                  <span className="text-white">{sector}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-[#111827] mb-6">
              Ready to Explore?
            </h3>
            <p className="text-[#6B7280] max-w-2xl mx-auto mb-8">
              Contact our investment team to discuss potential partnership opportunities 
              and learn more about how we can work together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:investments@dhiindia.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C69B3C] text-white font-medium rounded-lg hover:bg-[#B58A2B] transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Investment Team
              </a>
              <a 
                href="tel:+919330092578"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#0B1E3C] text-[#0B1E3C] font-medium rounded-lg hover:bg-[#0B1E3C] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InvestorGuide;
