import { GraduationCap, Calendar, MapPin, ArrowRight } from 'lucide-react';

function Internships() {
  const programs = [
    {
      title: 'Investment Analysis Intern',
      department: 'Strategy & Investments',
      duration: '3-6 months',
      location: 'Kolkata',
    },
    {
      title: 'Operations Intern',
      department: 'Operations',
      duration: '3-6 months',
      location: 'Kolkata',
    },
    {
      title: 'Market Research Intern',
      department: 'Strategy',
      duration: '3-6 months',
      location: 'Kolkata',
    },
  ];

  const benefits = [
    'Hands-on experience in cross-border trade and investment',
    'Mentorship from industry experts',
    'Exposure to both Bhutan and India markets',
    'Networking opportunities',
    'Certificate of completion',
    'Potential for full-time employment',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">Opportunity / Internships</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Internship Programs
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Gain valuable experience and kickstart your career with hands-on learning 
              at DHI India.
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
                Learn. Grow. Contribute.
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Our internship programs offer students and recent graduates the opportunity 
                to gain practical experience in cross-border trade, investment, and business 
                operations between Bhutan and India.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#6B7280]">
                    <div className="w-2 h-2 rounded-full bg-[#C69B3C]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/team_meeting.jpg" 
                alt="Internships" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Programs */}
          <div className="mb-16">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8">
              Available Programs
            </h2>
            <div className="space-y-4">
              {programs.map((program) => (
                <div key={program.title} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827]">
                        {program.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-[#6B7280]">
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" />
                          {program.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {program.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {program.location}
                        </span>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#0B1E3C] text-white rounded-lg hover:bg-[#0B1E3C]/90 transition-colors">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div className="bg-[#0B1E3C] rounded-3xl p-10 mb-16">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-6">
              Eligibility Criteria
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-3">
                {[
                  'Currently enrolled in a recognized university program',
                  'Strong academic record',
                  'Excellent communication skills',
                  'Interest in cross-border business and trade',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/70">
                    <div className="w-2 h-2 rounded-full bg-[#C69B3C]" />
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {[
                  'Ability to work independently and in teams',
                  'Proficiency in Microsoft Office',
                  'Analytical and problem-solving skills',
                  'Willingness to learn and adapt',
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
              How to Apply
            </h3>
            <p className="text-[#6B7280] max-w-2xl mx-auto mb-6">
              Send your resume and a cover letter explaining your interest in the internship 
              program to our HR team.
            </p>
            <a 
              href="mailto:internships@dhiindia.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C69B3C] text-white font-medium rounded-lg hover:bg-[#B58A2B] transition-colors"
            >
              Apply for Internship
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Internships;
