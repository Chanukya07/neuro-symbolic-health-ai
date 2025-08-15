import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Analyze from "./pages/Analyze";

function Disclaimer() {
  return (
    <div className="text-xs text-gray-500 mt-4 text-center">
      <strong>Disclaimer:</strong> This app is for demonstration only. No real medical advice or PHI is provided.
    </div>
  );
}

function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200"
    >
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Neuro-Symbolic Health AI
      </motion.h1>
      <motion.p className="mb-8 text-lg text-gray-700 max-w-xl text-center">
        Welcome! This demo blends symbolic reasoning and neural networks for health insights. Try the Analyze page!
      </motion.p>
      <Link to="/analyze" className="px-6 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700 transition">Analyze</Link>
      <Disclaimer />
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/analyze" element={<Analyze />} />
      </Routes>
    </Router>
  );
}

export default App;
