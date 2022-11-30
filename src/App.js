import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Cvdetails from "./Components/Cvdetails";
import Errorpage from "./Components/Errorpage";
import CvReview from "./Components/CvReview";
// import { Children } from "react";
// import Personaldata from "./Components/Personaldata";

const router = createBrowserRouter([
  {path: "/", element: <Home />, errorElement:<Errorpage />},
  {path: "/createcv", element: <Cvdetails />}, 
  {path: "/reviewcv", element: <CvReview />}]);
  

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
