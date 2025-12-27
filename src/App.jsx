import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./index.jsx";
import ResearchPapers from "./ResearchPapers.jsx";
import PortfolioBot from "./components/PortfolioBot";

function App() {
  return (
    <Router>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/research-papers" element={<ResearchPapers />} />
      </Routes>

      {/* Floating Recruiter Bot (Global) */}
      <PortfolioBot />
    </Router>
  );
}

export default App;
