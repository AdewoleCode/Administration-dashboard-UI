import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/newPage/New";
import Single from "./pages/singleUser/Single";
import List from "./pages/list/List";

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/users" element={<List/>} />
        <Route path="users/:userId" element={<Single/>} />
        <Route path="users/new" element={<New/>} />
        <Route path="/products" element={<List/>} />
        <Route path="/products/:productId" element={<Single/>} />
        <Route path="/products/new" element={<New/>} />




      </Routes>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
