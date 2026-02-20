import { RouterProvider, useRouter } from './components/Router';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About/About';
import Purpose from './pages/About/Purpose';
import Governance from './pages/About/Governance';
import Leadership from './pages/About/Leadership';
import Team from './pages/About/Team';
import Strategy from './pages/Strategy/Strategy';
import PortfolioStrategy from './pages/Strategy/PortfolioStrategy';
import InvestmentStrategy from './pages/Strategy/InvestmentStrategy';
import InnovationStrategy from './pages/Strategy/InnovationStrategy';
import Story from './pages/Story/Story';
import PortfolioPerformance from './pages/Story/PortfolioPerformance';
import Financials from './pages/Story/Financials';
import Opportunity from './pages/Opportunity/Opportunity';
import InvestorGuide from './pages/Opportunity/InvestorGuide';
import Careers from './pages/Opportunity/Careers';
import Internships from './pages/Opportunity/Internships';
import BizAP from './pages/Opportunity/BizAP';
import Newsroom from './pages/Newsroom/Newsroom';
import NewsEvents from './pages/Newsroom/NewsEvents';
import Publications from './pages/Newsroom/Publications';

function RouterContent() {
  const { currentPath } = useRouter();

  // Map paths to components
  const routeMap: Record<string, React.ComponentType> = {
    '/': Home,
    '/about': About,
    '/about/purpose': Purpose,
    '/about/governance': Governance,
    '/about/leadership': Leadership,
    '/about/team': Team,
    '/strategy': Strategy,
    '/strategy/portfolio': PortfolioStrategy,
    '/strategy/investment': InvestmentStrategy,
    '/strategy/innovation': InnovationStrategy,
    '/story': Story,
    '/story/performance': PortfolioPerformance,
    '/story/financials': Financials,
    '/opportunity': Opportunity,
    '/opportunity/investor-guide': InvestorGuide,
    '/opportunity/careers': Careers,
    '/opportunity/internships': Internships,
    '/opportunity/bizap': BizAP,
    '/newsroom': Newsroom,
    '/newsroom/news-events': NewsEvents,
    '/newsroom/publications': Publications,
  };

  const Component = routeMap[currentPath] || Home;

  return (
    <Layout>
      <Component />
    </Layout>
  );
}

function App() {
  return (
    <RouterProvider>
      <RouterContent />
    </RouterProvider>
  );
}

export default App;
