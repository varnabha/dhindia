import { Rocket, Target, Users, Zap } from 'lucide-react';

function BizAP() {
  const features = [
    {
      icon: Target,
      title: 'Strategic Guidance',
      description: 'Expert mentorship and strategic advice to help you navigate the market.',
    },
    {
      icon: Users,
      title: 'Network Access',
      description: 'Connect with our extensive network of industry leaders and partners.',
    },
    {
      icon: Zap,
      title: 'Resource Support',
      description: 'Access to resources, infrastructure, and operational support.',
    },
    {
      icon: Rocket,
      title: 'Growth Acceleration',
      description: 'Fast-track your business growth with our acceleration programs.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">Opportunity / BizAP</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Business Acceleration Program (BizAP)
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Accelerate your business growth with our support, resources, and network. 
              We help promising businesses scale and succeed.
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
                Accelerate Your Growth
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                The Business Acceleration Program (BizAP) is designed to help promising businesses 
                in the India-Bhutan corridor scale their operations and achieve sustainable growth. 
                We provide comprehensive support including mentorship, resources, and access to our 
                extensive network.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                Whether you are a startup looking to expand or an established business seeking new 
                growth avenues, BizAP can help you achieve your goals faster.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/team_meeting.jpg" 
                alt="BizAP" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Features */}
          <div className="mb-20">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-14 h-14 bg-[#0B1E3C] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-[#C69B3C]" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div className="bg-[#0B1E3C] rounded-3xl p-10 mb-16">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-6">
              Who Can Apply?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-3">
                {[
                  'Early-stage startups with innovative solutions',
                  'Businesses in infrastructure, energy, or trade sectors',
                  'Companies looking to expand in India or Bhutan',
                  'Entrepreneurs with scalable business models',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/70">
                    <div className="w-2 h-2 rounded-full bg-[#C69B3C]" />
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {[
                  'Businesses with clear growth potential',
                  'Teams committed to long-term success',
                  'Companies aligned with sustainable practices',
                  'Entrepreneurs open to mentorship and guidance',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/70">
                    <div className="w-2 h-2 rounded-full bg-[#C69B3C]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Application */}
          <div className="text-center">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-[#111827] mb-4">
              Ready to Accelerate?
            </h3>
            <p className="text-[#6B7280] max-w-2xl mx-auto mb-6">
              Apply to the Business Acceleration Program and take your business to the next level. 
              Our team will review your application and get in touch with you.
            </p>
            <a 
              href="mailto:bizap@dhiindia.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C69B3C] text-white font-medium rounded-lg hover:bg-[#B58A2B] transition-colors"
            >
              Apply to BizAP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BizAP;
