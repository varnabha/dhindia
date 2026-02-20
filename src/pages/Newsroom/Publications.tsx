import { FileText, Download, Calendar } from 'lucide-react';

function Publications() {
  const publications = [
    {
      title: 'Annual Report 2023-24',
      type: 'Annual Report',
      date: '2024',
      description: 'Comprehensive annual report covering our first year of operations.',
    },
    {
      title: 'Investment Strategy Whitepaper',
      type: 'Whitepaper',
      date: '2024',
      description: 'Our approach to investments in the India-Bhutan corridor.',
    },
    {
      title: 'Cross-Border Trade Guide',
      type: 'Guide',
      date: '2024',
      description: 'A comprehensive guide to trade between Bhutan and India.',
    },
    {
      title: 'Sustainability Report',
      type: 'Report',
      date: '2024',
      description: 'Our commitment to sustainable and responsible business practices.',
    },
    {
      title: 'Market Intelligence Report Q4 2023',
      type: 'Report',
      date: '2023',
      description: 'Quarterly market analysis and insights.',
    },
    {
      title: 'Corporate Governance Framework',
      type: 'Framework',
      date: '2023',
      description: 'Our governance principles and practices.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">Newsroom / Publications</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Publications
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Access our reports, whitepapers, guides, and thought leadership publications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Publications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub) => (
              <div key={pub.title} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#0B1E3C] rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#C69B3C]" />
                  </div>
                  <span className="px-3 py-1 bg-[#F4F2EE] rounded-full text-sm text-[#111827]">
                    {pub.type}
                  </span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827] mb-2">
                  {pub.title}
                </h3>
                <p className="text-[#6B7280] text-sm mb-4">{pub.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#6B7280] text-sm">
                    <Calendar className="w-4 h-4" />
                    {pub.date}
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#0B1E3C] text-white text-sm rounded-lg hover:bg-[#0B1E3C]/90 transition-colors">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-16 bg-[#C69B3C] rounded-3xl p-10 text-center">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-4">
              Request a Publication
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Can't find what you're looking for? Contact us to request specific publications 
              or reports.
            </p>
            <a 
              href="mailto:communications@dhiindia.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#C69B3C] font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Publications;
