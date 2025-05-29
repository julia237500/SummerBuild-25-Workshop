import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<Home />} /> //this is one component
          <Route path="/create" element={<CreatePost />} /> //another component
          <Route path="/post/:id" element={<PostDetail />} /> //another component 
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
