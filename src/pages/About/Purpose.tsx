import { Target, Eye, Heart } from 'lucide-react';

function Purpose() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">About Us / Our Purpose</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Our Purpose
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              To create a seamless and sustainable economic bridge between Bhutan and India, 
              enabling shared prosperity for both nations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Purpose Statement */}
          <div className="bg-white rounded-3xl p-12 shadow-xl mb-16">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-[#0B1E3C] rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-[#C69B3C]" />
              </div>
              <div>
                <h2 className="font-['Montserrat'] font-bold text-2xl text-[#111827] mb-4">
                  Our Purpose Statement
                </h2>
                <p className="text-[#6B7280] text-lg leading-relaxed">
                  To safeguard and enhance economic wealth for all generations through prudent 
                  investments, while fostering a strong bilateral relationship between Bhutan and India 
                  that benefits both nations' economies and people.
                </p>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#0B1E3C] rounded-3xl p-10">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#C69B3C]" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To become the most trusted India-based platform for Bhutan's global business expansion, 
                creating a seamless and sustainable economic bridge between Bhutan and India that 
                serves as a model for bilateral economic cooperation.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="w-14 h-14 bg-[#F4F2EE] rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-[#C69B3C]" />
              </div>
              <h3 className="font-['Montserrat'] font-bold text-2xl text-[#111827] mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {[
                  'Enable smooth business operations for DHI group in India',
                  'Enhance exports from Bhutan to Indian markets',
                  'Build long-term India-Bhutan economic partnerships',
                  'Support sustainable and responsible trade practices',
                  'Provide market intelligence & strategic direction',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#6B7280]">
                    <div className="w-2 h-2 rounded-full bg-[#C69B3C] mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Trust',
                  description: 'Building relationships based on integrity, transparency, and mutual respect.',
                },
                {
                  title: 'Long-term Vision',
                  description: 'Focusing on sustainable growth rather than short-term gains.',
                },
                {
                  title: 'Sustainability',
                  description: 'Aligning with Bhutan\'s Gross National Happiness philosophy for balanced development.',
                },
                {
                  title: 'Regional Prosperity',
                  description: 'Creating shared value that benefits both Bhutan and India.',
                },
                {
                  title: 'Excellence',
                  description: 'Striving for the highest standards in everything we do.',
                },
                {
                  title: 'Collaboration',
                  description: 'Working together across borders to achieve common goals.',
                },
              ].map((value) => (
                <div key={value.title} className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="mt-16 text-center">
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-2xl text-[#111827] italic leading-relaxed mb-4">
                "This partnership is not merely transactional. It is built on shared values — 
                trust, long-term vision, sustainability and regional prosperity."
              </p>
              <footer className="text-[#C69B3C] font-medium">— DHI India Philosophy</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Purpose;
