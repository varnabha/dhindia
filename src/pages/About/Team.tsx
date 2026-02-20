import { Mail } from 'lucide-react';

function Team() {
  const departments = [
    {
      name: 'Strategy & Investments',
      members: [
        { name: 'Team Member', role: 'Head of Strategy', email: 'strategy@dhiindia.com' },
        { name: 'Team Member', role: 'Investment Analyst', email: 'investments@dhiindia.com' },
      ],
    },
    {
      name: 'Operations & Logistics',
      members: [
        { name: 'Team Member', role: 'Head of Operations', email: 'operations@dhiindia.com' },
        { name: 'Team Member', role: 'Logistics Manager', email: 'logistics@dhiindia.com' },
      ],
    },
    {
      name: 'Government Relations',
      members: [
        { name: 'Team Member', role: 'Director - Govt Relations', email: 'govt@dhiindia.com' },
        { name: 'Team Member', role: 'Liaison Officer', email: 'liaison@dhiindia.com' },
      ],
    },
    {
      name: 'Finance & Compliance',
      members: [
        { name: 'Team Member', role: 'CFO', email: 'finance@dhiindia.com' },
        { name: 'Team Member', role: 'Compliance Officer', email: 'compliance@dhiindia.com' },
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">About Us / Our Team</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Our Team
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Meet the dedicated professionals working to strengthen Bhutan-India economic ties 
              and create value for all stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Team Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-6">
                A Team Built for Excellence
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Our team brings together professionals with diverse expertise across investments, 
                operations, government relations, and finance. Together, we work towards creating 
                a seamless bridge between Bhutan and India.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                With deep understanding of both markets and a commitment to excellence, our team 
                is dedicated to delivering value to our stakeholders while fostering strong 
                bilateral relationships.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/team_meeting.jpg" 
                alt="Our Team" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Departments */}
          <div className="mb-16">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8">
              Our Departments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {departments.map((dept) => (
                <div key={dept.name} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="font-['Montserrat'] font-bold text-xl text-[#111827] mb-6">
                    {dept.name}
                  </h3>
                  <div className="space-y-4">
                    {dept.members.map((member) => (
                      <div key={member.email} className="flex items-center justify-between p-4 bg-[#F4F2EE] rounded-xl">
                        <div>
                          <p className="font-medium text-[#111827]">{member.name}</p>
                          <p className="text-sm text-[#6B7280]">{member.role}</p>
                        </div>
                        <a 
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-[#0B1E3C] transition-colors group"
                        >
                          <Mail className="w-4 h-4 text-[#6B7280] group-hover:text-[#C69B3C]" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join Us CTA */}
          <div className="bg-[#C69B3C] rounded-3xl p-10 text-center">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-4">
              Join Our Team
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              We're always looking for talented individuals who share our vision of creating 
              a strong economic bridge between Bhutan and India.
            </p>
            <a 
              href="#/opportunity/careers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#C69B3C] font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
