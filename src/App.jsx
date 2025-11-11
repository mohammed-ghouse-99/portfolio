import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./index.jsx";
import ResearchPapers from "./ResearchPapers.jsx";


function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Portfolio />} />
        
        {/* Research papers page */}
        <Route path="/research-papers" element={<ResearchPapers />} />
      </Routes>
    </Router>
  );
}

export default App;
