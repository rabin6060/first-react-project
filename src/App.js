import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import Notfound from './Notfound';

function App() {
  return (
    <Router>
      <div className="App">
       <Navbar />
       <div className="content">
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/blog/:id' element={<BlogDetails/>}></Route>
          <Route path='*' element={<Notfound/>}></Route>
        </Routes>
       </div>
      </div>
    </Router>
  );
}

export default App;