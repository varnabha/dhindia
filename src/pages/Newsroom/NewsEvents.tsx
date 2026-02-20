import { Calendar, MapPin } from 'lucide-react';

function NewsEvents() {
  const news = [
    {
      title: 'DHI India Announces Strategic Partnership',
      date: 'January 15, 2024',
      excerpt: 'DHI India announces a new strategic partnership to enhance cross-border trade facilitation between Bhutan and India.',
      category: 'Partnership',
    },
    {
      title: 'Expansion into Clean Energy Sector',
      date: 'December 20, 2023',
      excerpt: 'DHI India expands its portfolio with new investments in renewable energy projects, aligning with Bhutan\'s carbon neutrality goals.',
      category: 'Investment',
    },
    {
      title: 'Annual Report 2023-24 Released',
      date: 'November 30, 2023',
      excerpt: 'DHI India releases its first annual report highlighting key achievements, financial performance, and growth trajectory.',
      category: 'Report',
    },
    {
      title: 'New Office Inauguration in Kolkata',
      date: 'October 15, 2023',
      excerpt: 'DHI India inaugurates its corporate office in Kolkata, marking a significant milestone in its India operations.',
      category: 'Milestone',
    },
    {
      title: 'Partnership with Kusum Group Formalized',
      date: 'September 1, 2023',
      excerpt: 'DHI India formalizes its partnership with Kusum Group, bringing together 150+ years of business expertise.',
      category: 'Partnership',
    },
  ];

  const events = [
    {
      title: 'India-Bhutan Business Forum',
      date: 'March 15, 2024',
      location: 'New Delhi',
      description: 'Annual business forum bringing together stakeholders from India and Bhutan.',
    },
    {
      title: 'Investment Summit 2024',
      date: 'April 20, 2024',
      location: 'Kolkata',
      description: 'Showcasing investment opportunities in the India-Bhutan corridor.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">Newsroom / News & Events</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              News & Events
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Stay updated with the latest announcements, news, and upcoming events from DHI India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* News */}
          <div className="mb-20">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8">
              Latest News
            </h2>
            <div className="space-y-6">
              {news.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-[#C69B3C]/10 text-[#C69B3C] text-sm rounded-full">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-2 text-[#6B7280] text-sm">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-xl text-[#111827] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#6B7280]">{item.excerpt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Events */}
          <div>
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8">
              Upcoming Events
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event) => (
                <div key={event.title} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 text-[#C69B3C] font-medium mb-4">
                    <Calendar className="w-5 h-5" />
                    {event.date}
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-xl text-[#111827] mb-3">
                    {event.title}
                  </h3>
                  <p className="text-[#6B7280] mb-4">{event.description}</p>
                  <div className="flex items-center gap-2 text-[#6B7280] text-sm">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsEvents;
