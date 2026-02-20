import { Shield, FileCheck, Scale, Users } from 'lucide-react';

function Governance() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">About Us / Corporate Governance</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Corporate Governance
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              As a trusted steward, we actively promote the best corporate governance practices 
              across our organization and portfolio companies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Governance Framework */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-6">
                Our Governance Framework
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Our governance framework prioritizes the creation and maximization of returns to 
                its shareholders and places the institution at the center of its operations. 
                Transparency and adherence to regulations are fundamental principles within our 
                governance framework.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Our Board and Management team diligently uphold these principles by complying with 
                the provisions of the Companies Act and other relevant rules and regulations.
              </p>
              <div className="flex items-center gap-4 p-4 bg-[#F4F2EE] rounded-xl">
                <div className="w-12 h-12 bg-[#0B1E3C] rounded-lg flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-[#C69B3C]" />
                </div>
                <div>
                  <p className="font-medium text-[#111827]">FDI Approved</p>
                  <p className="text-sm text-[#6B7280]">Ministry of Commerce, Government of India</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/team_meeting.jpg" 
                alt="Governance" 
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>

          {/* Governance Pillars */}
          <div className="mb-20">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Governance Pillars
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Transparency',
                  description: 'We maintain complete transparency in all our operations, financial reporting, and decision-making processes.',
                },
                {
                  icon: Scale,
                  title: 'Accountability',
                  description: 'Clear lines of accountability ensure responsible stewardship of resources and investments.',
                },
                {
                  icon: Users,
                  title: 'Board Oversight',
                  description: 'Experienced board members provide strategic direction and guidance to the management team.',
                },
              ].map((pillar) => (
                <div key={pillar.title} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-[#0B1E3C] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <pillar.icon className="w-8 h-8 text-[#C69B3C]" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-xl text-[#111827] mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial Mandate */}
          <div className="bg-[#0B1E3C] rounded-3xl p-10 mb-16">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-6">Commercial Mandate</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-white/70 leading-relaxed mb-4">
                  We own and manage our portfolio with full commercial discretion and flexibility 
                  including investment, divestment and business decisions under the guidance of our Board.
                </p>
                <p className="text-white/70 leading-relaxed">
                  We adopt a prudent and strategic approach to managing our portfolio as responsible 
                  investors and asset owners.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  'Full commercial discretion and flexibility',
                  'Prudent and strategic portfolio management',
                  'Responsible investment practices',
                  'Active ownership approach',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#C69B3C]" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Governance of Portfolio Companies */}
          <div>
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8">
              Governance of Portfolio Companies
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              As an active owner and principal shareholder, we promote best corporate governance 
              practices in our portfolio companies. We appoint Board of Directors and CEOs who are 
              professionally qualified, well-experienced, highly motivated and of high integrity.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Professionally qualified board appointments',
                'Performance target setting and monitoring',
                'Sound business management practices',
                'Financial control and accountability',
                'Regular performance benchmarking',
                'Ethical business conduct standards',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow">
                  <div className="w-8 h-8 bg-[#C69B3C]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C69B3C] font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-[#111827]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Governance;
