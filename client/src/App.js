import TopBar from "./components/TopBar";
import Write from "./components/Write";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const user = false;
  return ( <>
  <Router> 
    <TopBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/register" element={user ? <Home /> : <Register/>} />
          <Route path="/login" element={user ? <Home /> : <Login/>} />
          <Route path="/write" element={user ? <Write /> : <Login/>} />
          <Route path="/settings" element={user ? <Settings/> : <Login/>} />
          <Route path="/post/:postId" element={<Single/>} />
        </Routes>
    </Router>
 
    </>
  )
}

export default App;
