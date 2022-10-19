import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Darshboard from "./components/darshboard";

function App() {
  return (
    <main className="App">
      <header className="text-white p-4 border-b-[1px] border-gray-500">Book Application</header>
      <Router>
        <Routes>
          <Route path="/" element={<Darshboard />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
