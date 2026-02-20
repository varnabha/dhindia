import { FileText, Download, Calendar } from 'lucide-react';

function Financials() {
  const reports = [
    {
      year: '2023-24',
      title: 'Annual Report 2023-24',
      description: 'Comprehensive annual report covering our first year of operations.',
      type: 'Annual Report',
    },
    {
      year: '2023-24',
      title: 'Financial Statements',
      description: 'Audited financial statements for the fiscal year.',
      type: 'Financial',
    },
    {
      year: '2024',
      title: 'Q1 Quarterly Report',
      description: 'First quarter performance and operational update.',
      type: 'Quarterly',
    },
    {
      year: '2024',
      title: 'Q2 Quarterly Report',
      description: 'Second quarter performance and operational update.',
      type: 'Quarterly',
    },
  ];

  const disclosures = [
    { title: 'Corporate Governance Report', date: '2024' },
    { title: 'Related Party Transactions', date: '2024' },
    { title: 'Shareholding Pattern', date: '2024' },
    { title: 'Board Meeting Minutes', date: '2024' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">Our Story / Our Financials</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Our Financials
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Access our financial reports, annual statements, and disclosures. 
              We are committed to transparency in all our financial dealings.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Financial Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { label: 'Total Assets', value: '₹2,000+ Cr' },
              { label: 'Revenue (FY24)', value: '₹500+ Cr' },
              { label: 'Net Worth', value: '₹1,200+ Cr' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="font-['Montserrat'] font-bold text-3xl text-[#C69B3C] mb-2">
                  {item.value}
                </div>
                <div className="text-[#6B7280]">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Reports */}
          <div className="mb-16">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8">
              Financial Reports
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {reports.map((report) => (
                <div key={report.title} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#0B1E3C] rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-[#C69B3C]" />
                    </div>
                    <span className="px-3 py-1 bg-[#F4F2EE] rounded-full text-sm text-[#111827]">
                      {report.type}
                    </span>
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827] mb-2">
                    {report.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm mb-4">{report.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#6B7280] text-sm">
                      <Calendar className="w-4 h-4" />
                      {report.year}
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#0B1E3C] text-white text-sm rounded-lg hover:bg-[#0B1E3C]/90 transition-colors">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Disclosures */}
          <div className="mb-16">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8">
              Regulatory Disclosures
            </h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {disclosures.map((disclosure, index) => (
                <div 
                  key={disclosure.title}
                  className={`flex items-center justify-between p-6 ${
                    index !== disclosures.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <div>
                    <h3 className="font-medium text-[#111827]">{disclosure.title}</h3>
                    <span className="text-[#6B7280] text-sm">{disclosure.date}</span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#0B1E3C] text-[#0B1E3C] text-sm rounded-lg hover:bg-[#0B1E3C] hover:text-white transition-colors">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-[#C69B3C] rounded-3xl p-10 text-center">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-4">
              Investor Relations
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              For investor-related queries or to request additional financial information, 
              please contact our investor relations team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:investor@dhiindia.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#C69B3C] font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Investor Relations
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Financials;
