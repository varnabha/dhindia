import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';

function Careers() {
  const openings = [
    {
      title: 'Investment Manager',
      department: 'Strategy & Investments',
      location: 'Kolkata',
      type: 'Full-time',
    },
    {
      title: 'Operations Analyst',
      department: 'Operations',
      location: 'Kolkata',
      type: 'Full-time',
    },
    {
      title: 'Government Relations Officer',
      department: 'Government Relations',
      location: 'Kolkata',
      type: 'Full-time',
    },
    {
      title: 'Finance Analyst',
      department: 'Finance',
      location: 'Kolkata',
      type: 'Full-time',
    },
  ];

  const benefits = [
    'Competitive salary and performance bonuses',
    'Health insurance for employees and dependents',
    'Professional development opportunities',
    'Flexible work arrangements',
    'Paid time off and holidays',
    'Employee wellness programs',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">Opportunity / Careers</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Careers at DHI India
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Join our team and be part of building the Bhutan-India economic bridge. 
              We are looking for passionate individuals who share our vision.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Why Join */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-6">
                Why Join DHI India?
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                At DHI India, you will have the opportunity to work on meaningful projects 
                that strengthen economic ties between Bhutan and India. We offer a collaborative 
                work environment where your contributions make a real impact.
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
                alt="Team" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8">
              Open Positions
            </h2>
            <div className="space-y-4">
              {openings.map((job) => (
                <div key={job.title} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827]">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-[#6B7280]">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
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

          {/* No Positions */}
          <div className="bg-[#F4F2EE] rounded-2xl p-8 text-center">
            <h3 className="font-['Montserrat'] font-bold text-xl text-[#111827] mb-4">
              Don't See a Suitable Role?
            </h3>
            <p className="text-[#6B7280] max-w-2xl mx-auto mb-6">
              We are always interested in hearing from talented individuals. 
              Send us your resume and we will keep you in mind for future opportunities.
            </p>
            <a 
              href="mailto:careers@dhiindia.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C69B3C] text-white font-medium rounded-lg hover:bg-[#B58A2B] transition-colors"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
