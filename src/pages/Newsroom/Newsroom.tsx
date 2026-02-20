import { Link } from '../../components/Router';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

function Newsroom() {
  const latestNews = [
    {
      title: 'DHI India Announces Strategic Partnership',
      date: 'January 15, 2024',
      excerpt: 'DHI India announces a new strategic partnership to enhance cross-border trade facilitation.',
      category: 'Partnership',
    },
    {
      title: 'Expansion into Clean Energy Sector',
      date: 'December 20, 2023',
      excerpt: 'DHI India expands its portfolio with new investments in renewable energy projects.',
      category: 'Investment',
    },
    {
      title: 'Annual Report 2023-24 Released',
      date: 'November 30, 2023',
      excerpt: 'DHI India releases its first annual report highlighting key achievements and growth.',
      category: 'Report',
    },
  ];

  const sections = [
    {
      title: 'News & Events',
      description: 'Stay updated with the latest news, announcements, and events from DHI India.',
      path: '/newsroom/news-events',
    },
    {
      title: 'Publications',
      description: 'Access our reports, whitepapers, and thought leadership publications.',
      path: '/newsroom/publications',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0B1E3C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="dhi-label mb-4 block text-[#C69B3C]">Newsroom</span>
            <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl text-white mb-6">
              Newsroom
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Stay updated with the latest news, announcements, and insights from DHI India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Latest News */}
          <div className="mb-20">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8">
              Latest News
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {latestNews.map((news) => (
                <div key={news.title} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#C69B3C]/10 text-[#C69B3C] text-sm rounded-full">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-lg text-[#111827] mb-3">
                    {news.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm mb-4">{news.excerpt}</p>
                  <div className="flex items-center gap-2 text-[#6B7280] text-sm">
                    <Calendar className="w-4 h-4" />
                    {news.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Explore More */}
          <div className="mb-16">
            <h2 className="font-['Montserrat'] font-bold text-3xl text-[#111827] mb-8 text-center">
              Explore More
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {sections.map((section) => (
                <Link
                  key={section.title}
                  to={section.path}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-14 h-14 bg-[#F4F2EE] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0B1E3C] transition-colors">
                    <Newspaper className="w-7 h-7 text-[#C69B3C]" />
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-xl text-[#111827] mb-3">
                    {section.title}
                  </h3>
                  <p className="text-[#6B7280] mb-4">{section.description}</p>
                  <span className="inline-flex items-center gap-1 text-[#C69B3C] font-medium">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Subscribe */}
          <div className="bg-[#C69B3C] rounded-3xl p-10 text-center">
            <h3 className="font-['Montserrat'] font-bold text-2xl text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Subscribe to our newsletter to receive the latest news and updates from DHI India 
              directly in your inbox.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg w-72"
              />
              <button className="px-6 py-3 bg-white text-[#C69B3C] font-medium rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Newsroom;
