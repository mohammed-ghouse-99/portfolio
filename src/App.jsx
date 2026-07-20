import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./index.jsx";
import CaseStudy from "./components/CaseStudy.jsx";
import ResearchPapers from "./ResearchPapers.jsx";
import PortfolioBot from "./components/PortfolioBot.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:id" element={<CaseStudy />} />
        <Route path="/research-papers" element={<ResearchPapers />} />
      </Routes>

      {/* Global floating bot — appears on all pages */}
      <PortfolioBot />
    </Router>
  );
}

export default App;
