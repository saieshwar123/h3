import Dashboard from "../src/pages/Dashboard"
import Signin from "../src/pages/Signin"
import Signup from "../src/pages/Signup"
import Transfer from "../src/pages/Transfer"
import  { BrowserRouter,Routes,Route, Link } from "react-router-dom"
function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/transfer" element={<Transfer/>}/>
        \
        {/* <Link to="/transfer"><Transfer/></Link> */}
      </Routes>
      
      </BrowserRouter>
        
        
        
        
    </div>
  )
}

export default App
