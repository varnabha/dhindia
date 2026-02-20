import { Link } from '../../components/Router';
import { Briefcase, Users, GraduationCap, Rocket, ArrowRight } from 'lucide-react';

function Opportunity() {
  const opportunities = [
    {
      icon: Briefcase,
      title: 'Investor Guide',
      description: 'Learn about investment opportunities and how to partner with DHI India.',
      path: '/opportunity/investor-guide',
    },
    {
      icon: Users,
      title: 'Careers',
      description: 'Join our team and be part of building the Bhutan-India economic bridge.',
      path: '/opportunity/careers',
    },
    {
      icon: GraduationCap,
      title: 'Internships',
      description: 'Gain valuable experience through our internship programs.',
      path: '/opportunity/internships',
    },
    {
      icon: Rocket,
      title: 'Business Acceleration Program',
      description: 'Accelerate your business growth with our support and resources.',
      path: '/opportunity/bizap',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">Opportunity</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Opportunities at DHI India
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Explore opportunities to invest, partner, learn, and grow with DHI India. 
              We are building a platform for shared success.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-6">
              Let's Build Together
            </h2>
            <p className="text-[#6B7280] leading-relaxed">
              If you're building in infrastructure, energy, or enterprise, we'd love to hear from you. 
              Explore the various opportunities to engage with DHI India and be part of our journey 
              to strengthen Bhutan-India economic ties.
            </p>
          </div>

          {/* Opportunity Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {opportunities.map((opp) => (
              <Link
                key={opp.title}
                to={opp.path}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-16 h-16 bg-[#0B1E3C] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#C69B3C] transition-colors">
                  <opp.icon className="w-8 h-8 text-[#C69B3C] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl text-[#111827] mb-3">
                  {opp.title}
                </h3>
                <p className="text-[#6B7280] mb-4">{opp.description}</p>
                <span className="inline-flex items-center gap-1 text-[#C69B3C] font-medium">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          {/* Why Partner */}
          <div className="bg-[#0B1E3C] rounded-3xl p-10 mb-16">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-6 text-center">
              Why Partner with DHI India?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Strategic Access',
                  description: 'Access to both Bhutan and India markets with deep local expertise.',
                },
                {
                  title: 'Strong Network',
                  description: 'Leverage our 150+ years of business relationships and connections.',
                },
                {
                  title: 'Shared Values',
                  description: 'Partner with an organization built on trust, sustainability, and long-term vision.',
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <h4 className="font-['Montserrat'] font-bold text-lg text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-[#111827] mb-4">
              Have Questions?
            </h3>
            <p className="text-[#6B7280] max-w-2xl mx-auto mb-6">
              Reach out to us to learn more about opportunities at DHI India. 
              We are always open to meaningful conversations.
            </p>
            <a 
              href="mailto:drukholdingindia@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C69B3C] text-white font-medium rounded-lg hover:bg-[#B58A2B] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Opportunity;
