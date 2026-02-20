import { Lightbulb, Cpu, Leaf, TrendingUp } from 'lucide-react';

function InnovationStrategy() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">Our Strategy / Innovation Strategy</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Innovation Strategy
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Building a knowledge-based innovation ecosystem for sustainable competitive 
              advantage in the evolving economic landscape.
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
                Innovation for the Future
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                With the current global technological progress, the world is on the edge of a 
                revolution which could redefine economies and global power. DHI India is committed 
                to building a knowledge-based innovation ecosystem that positions us at the forefront 
                of this transformation.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                Our innovation strategy focuses on adopting new technologies, fostering creative 
                solutions, and building capabilities that create sustainable competitive advantages 
                for our portfolio companies and stakeholders.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/clean_energy.jpg" 
                alt="Innovation" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Innovation Pillars */}
          <div className="mb-20">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Innovation Pillars
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Lightbulb,
                  title: 'Digital Transformation',
                  description: 'Leveraging technology to enhance operations and customer experience.',
                },
                {
                  icon: Cpu,
                  title: 'Process Innovation',
                  description: 'Continuous improvement of business processes and workflows.',
                },
                {
                  icon: Leaf,
                  title: 'Sustainable Solutions',
                  description: 'Developing eco-friendly products and practices aligned with GNH.',
                },
                {
                  icon: TrendingUp,
                  title: 'Market Innovation',
                  description: 'Creating new market opportunities and business models.',
                },
              ].map((pillar) => (
                <div key={pillar.title} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-14 h-14 bg-[#0B1E3C] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <pillar.icon className="w-7 h-7 text-[#C69B3C]" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Focus Areas */}
          <div className="bg-[#0B1E3C] rounded-3xl p-10 mb-16">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-6">
              Innovation Focus Areas
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-white/70 leading-relaxed mb-6">
                  We are focused on building capabilities in key areas that will drive future growth:
                </p>
                <ul className="space-y-3">
                  {[
                    'Clean energy and renewable technologies',
                    'Digital platforms for trade facilitation',
                    'Sustainable agriculture and food processing',
                    'Smart logistics and supply chain solutions',
                    'Data analytics for market intelligence',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/70">
                      <div className="w-2 h-2 rounded-full bg-[#C69B3C]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/agro_processing.jpg" 
                  alt="Innovation Focus" 
                  className="w-full h-full object-cover min-h-[250px]"
                />
              </div>
            </div>
          </div>

          {/* Partnership Approach */}
          <div>
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Collaboration & Partnerships
            </h2>
            <p className="text-[#6B7280] text-center max-w-3xl mx-auto mb-8">
              We believe in the power of collaboration. Our innovation strategy includes 
              partnerships with technology providers, research institutions, and industry 
              leaders to accelerate our innovation journey.
            </p>
            <div className="flex justify-center">
              <a 
                href="#/opportunity"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B1E3C] text-white font-medium rounded-lg hover:bg-[#0B1E3C]/90 transition-colors"
              >
                Explore Partnership Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InnovationStrategy;
