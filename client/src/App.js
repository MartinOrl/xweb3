import { Routes, Route, useNavigate, useLocation } from 'react-router';
import './App.css';
import Home from './pages/home/home';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Dashboard from './pages/dashboard/dashboard';
import PreviewTemplate from './pages/previewTemplate/previewTemplate';
import EditPage from './pages/edit/edit';
import { selectActiveUser } from './redux/user/userReducer';


function App() {


  const navigate = useNavigate()
  const location = useLocation()
  const user = useSelector(selectActiveUser)


  useEffect(() => {
    // checks if user is logged in and redirects to dashboard directly instead of wallet connect page if true
    if(user){
      if(location.pathname === "/"){
        navigate('/dashboard')
      }
    }
    else{
      navigate("/")
 
    }
    return () => {
      
    }
  }, [user, location.pathname, navigate])

  useEffect(() => {
    window.scrollTo(0,0,{behavior: 'smooth'})
    return () => {
      
    }
  }, [location.pathname])

  return (
    <>
      <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preview" element={<PreviewTemplate />} />
          <Route path="/edit" element={<EditPage />} />
       
      </Routes>
    </>
  );
}



export default App;
