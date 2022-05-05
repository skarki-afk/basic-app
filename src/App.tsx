import {useState} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login  from './components/Login';
import SignUp from './components/SignUp';
import Browse from "./components/browse/Browse"
import "./index.css"
import Home from "./components/home/Home"
import Search from './components/home/search/Search';
import Detail from './components/home/search/Detail';


const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false)
    const handleDark =()=>{
      setDarkMode(prevDarkMode=> !prevDarkMode)
    }
    const [sidebar,setSidebar] = useState<boolean>(false)
    const handleSidebar =()=>{
        setSidebar(prevSidebar => !prevSidebar)
    }
    return(
      <Router>
      <div className='flex justify-center overflow-hidden'>
        <Routes>
        <Route path="/browse" element={<Browse darkMode={darkMode}/>}></Route>
        <Route path='/login' element={<Login darkMode={darkMode}/>}></Route>
        <Route path='/signup' element={<SignUp darkMode={darkMode}/>}></Route>
        <Route path='/' element={<Home 
        darkMode={darkMode}
        handleDark ={handleDark}
        sidebar={sidebar}
        handleSidebar={handleSidebar}
         />}>
         </Route>
        <Route path="/search" element={<Search 
        darkMode={darkMode}
        handleDark ={handleDark}
        sidebar={sidebar}
        onClick={handleSidebar}
        />}>
        </Route>
        
        <Route path="/detail/:id" element={<Detail 
          darkMode={darkMode}
          handleDark ={handleDark}
          sidebar={sidebar}
          handleSidebar={handleSidebar}
        />}>
        </Route>
      </Routes>
      </div>
      </Router>
    )
}


export default App;
