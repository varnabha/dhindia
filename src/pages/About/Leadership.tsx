import { Linkedin, Mail } from 'lucide-react';

function Leadership() {
  const leaders = [
    {
      name: 'TBD',
      role: 'Chairman',
      description: 'Leading the strategic vision and governance of DHI India.',
      image: '/hero_handshake.jpg',
    },
    {
      name: 'TBD',
      role: 'Managing Director',
      description: 'Overseeing day-to-day operations and business development.',
      image: '/thesis_meeting.jpg',
    },
    {
      name: 'TBD',
      role: 'Director - Strategy',
      description: 'Driving investment strategy and portfolio management.',
      image: '/ecosystem_map.jpg',
    },
    {
      name: 'TBD',
      role: 'Director - Operations',
      description: 'Managing logistics, trade facilitation, and cross-border operations.',
      image: '/team_meeting.jpg',
    },
  ];

  const boardMembers = [
    {
      name: 'Representative',
      role: 'Druk Holding & Investments',
      description: 'Bringing sovereign wealth fund expertise and Bhutan market insights.',
    },
    {
      name: 'Representative',
      role: 'Kusum Group',
      description: 'Contributing decades of Indian business and operational expertise.',
    },
    {
      name: 'Independent Director',
      role: 'External Advisor',
      description: 'Providing independent perspective on governance and strategy.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">About Us / Leadership</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Leadership
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Meet the visionary leaders guiding DHI India towards sustainable growth and 
              strengthening Bhutan-India economic ties.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Executive Team */}
          <div className="mb-20">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Executive Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leaders.map((leader) => (
                <div key={leader.name} className="bg-white rounded-2xl overflow-hidden shadow-lg group">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827]">
                      {leader.name}
                    </h3>
                    <p className="text-[#C69B3C] text-sm font-medium mb-3">{leader.role}</p>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{leader.description}</p>
                    <div className="flex gap-3 mt-4">
                      <button className="w-8 h-8 bg-[#F4F2EE] rounded-lg flex items-center justify-center hover:bg-[#0B1E3C] transition-colors group/btn">
                        <Linkedin className="w-4 h-4 text-[#6B7280] group-hover/btn:text-[#C69B3C]" />
                      </button>
                      <button className="w-8 h-8 bg-[#F4F2EE] rounded-lg flex items-center justify-center hover:bg-[#0B1E3C] transition-colors group/btn">
                        <Mail className="w-4 h-4 text-[#6B7280] group-hover/btn:text-[#C69B3C]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Board of Directors */}
          <div className="mb-20">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Board of Directors
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {boardMembers.map((member) => (
                <div key={member.name} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-20 h-20 bg-[#0B1E3C] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-[#C69B3C] font-bold text-2xl">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827] text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#C69B3C] text-sm font-medium text-center mb-4">
                    {member.role}
                  </p>
                  <p className="text-[#6B7280] text-sm leading-relaxed text-center">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Philosophy */}
          <div className="bg-[#0B1E3C] rounded-3xl p-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-6">
                  Leadership Philosophy
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Our leadership team brings together decades of experience from both Bhutan and India, 
                  combining sovereign wealth management expertise with deep Indian market knowledge.
                </p>
                <div className="space-y-4">
                  {[
                    'Strategic vision aligned with bilateral interests',
                    'Deep understanding of both markets',
                    'Commitment to sustainable growth',
                    'Focus on stakeholder value creation',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#C69B3C]" />
                      <span className="text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/thesis_meeting.jpg" 
                  alt="Leadership" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Leadership;
