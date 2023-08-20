import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Components/Layout'
import Dashboard from './Pages/Dashboard'
import Contact from './Pages/Contact'


function App() {
  // Routing ------------------------------------------------- start
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Contact />} />   
        {/* this will  only run  dashboard on load   */}
        <Route path='/chart' element={<Dashboard/>} />
      </Route>
      <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
}
// Routing ---------------------------------------------------- end

export default App