import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Resumedetails from "./Components/Resumedetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          {/* <Route path='/buildresume' element={<Resumedetails/>}/> */}
          {/* <Route path='/product' element={<Product/>}/>
          <Route path='/contact' element={<Contact/>}/> */}
        </Routes>
        {/* <Footer/> */}
      </Router>
      <Home/>
    </div>
  );
}

export default App;
