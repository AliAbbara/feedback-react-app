import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/post/:id/:name" element={<Post />} />
        <Route path="/post/*" element={<Post />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
