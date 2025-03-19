import Dashboard from "./componets/Dashboard";
import Home from "./pages/Home";
import Input from "./pages/Input";
import List from "./pages/List";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/List" element={<List/>}/>
        <Route path="/Input" element={<Input/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
