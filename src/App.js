import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import Blog from './components/pages/Blog';
import  Layout  from './components/pages/navbarL';
import Chatbot from './components/pages/chat';
import KundaliGenerator from './components/pages/kundali';


function App() {
  return (
   
      <Router>
   <Layout>
          <Routes>
            {/* Default routes accessible to everyone */}
            <Route path="/" element={< Home/>} />
            <Route path="/blog" element={< Blog/>} />
            <Route path="/chat" element={< Chatbot/>} />
            <Route path="/kund" element={<  KundaliGenerator/>} />
          </Routes>
          </Layout>
      </Router>
  );
}

export default App;
