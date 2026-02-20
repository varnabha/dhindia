import { type ReactNode, useState, useEffect } from 'react';
import { Link, useRouter } from './Router';
import { ChevronDown, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { currentPath } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [currentPath]);

  const navItems = [
    {
      label: 'About Us',
      path: '/about',
      children: [
        { label: 'Our Purpose', path: '/about/purpose' },
        { label: 'Corporate Governance', path: '/about/governance' },
        { label: 'Leadership', path: '/about/leadership' },
        { label: 'Our Team', path: '/about/team' },
      ],
    },
    {
      label: 'Our Strategy',
      path: '/strategy',
      children: [
        { label: 'Our Strategy', path: '/strategy' },
        { label: 'Portfolio Management', path: '/strategy/portfolio' },
        { label: 'Investment Strategy', path: '/strategy/investment' },
        { label: 'Innovation Strategy', path: '/strategy/innovation' },
      ],
    },
    {
      label: 'Our Story',
      path: '/story',
      children: [
        { label: 'Our Story', path: '/story' },
        { label: 'Portfolio Performance', path: '/story/performance' },
        { label: 'Our Financials', path: '/story/financials' },
      ],
    },
    {
      label: 'Opportunity',
      path: '/opportunity',
      children: [
        { label: 'Opportunity', path: '/opportunity' },
        { label: 'Investor Guide', path: '/opportunity/investor-guide' },
        { label: 'Careers', path: '/opportunity/careers' },
        { label: 'Internships', path: '/opportunity/internships' },
        { label: 'BizAP', path: '/opportunity/bizap' },
      ],
    },
    {
      label: 'Newsroom',
      path: '/newsroom',
      children: [
        { label: 'Newsroom', path: '/newsroom' },
        { label: 'News & Events', path: '/newsroom/news-events' },
        { label: 'Publications', path: '/newsroom/publications' },
      ],
    },
  ];

  const isActive = (path: string) => {
    return currentPath === path || currentPath.startsWith(path + '/');
  };

  return (
    <div className="min-h-screen bg-[#F4F2EE]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.jpeg" alt="DHI India" className="h-12 w-auto" />
              <span className="font-['Montserrat'] font-bold text-xl text-[#0B1E3C]">DHI India</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-[#C69B3C]'
                        : 'text-[#111827] hover:text-[#C69B3C]'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  
                  {/* Dropdown */}
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl py-2 animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            currentPath === child.path
                              ? 'text-[#C69B3C] bg-[#F4F2EE]'
                              : 'text-[#111827] hover:text-[#C69B3C] hover:bg-[#F4F2EE]'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-1">
                  <Link
                    to={item.path}
                    className="block px-4 py-2 font-medium text-[#111827] hover:text-[#C69B3C] hover:bg-[#F4F2EE] rounded-lg"
                  >
                    {item.label}
                  </Link>
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-[#6B7280] hover:text-[#C69B3C] hover:bg-[#F4F2EE] rounded-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0B1E3C] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.jpeg" alt="DHI India" className="h-10 w-auto" />
                <span className="font-bold text-lg">DHI India</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Strategic India arm supporting Druk Holding & Investments (Bhutan) 
                for trade, investment and market access.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-white/70 hover:text-[#C69B3C] text-sm">About Us</Link></li>
                <li><Link to="/strategy" className="text-white/70 hover:text-[#C69B3C] text-sm">Our Strategy</Link></li>
                <li><Link to="/story" className="text-white/70 hover:text-[#C69B3C] text-sm">Our Story</Link></li>
                <li><Link to="/opportunity" className="text-white/70 hover:text-[#C69B3C] text-sm">Opportunity</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/newsroom" className="text-white/70 hover:text-[#C69B3C] text-sm">Newsroom</Link></li>
                <li><Link to="/opportunity/investor-guide" className="text-white/70 hover:text-[#C69B3C] text-sm">Investor Guide</Link></li>
                <li><Link to="/story/financials" className="text-white/70 hover:text-[#C69B3C] text-sm">Financials</Link></li>
                <li><Link to="/newsroom/publications" className="text-white/70 hover:text-[#C69B3C] text-sm">Publications</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>9, Brabourne Road, 2nd Floor</li>
                <li>Kolkata 700001, India</li>
                <li>+91 93300 92578</li>
                <li>drukholdingindia@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} DHI India. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/" className="text-white/50 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/" className="text-white/50 hover:text-white text-sm">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
