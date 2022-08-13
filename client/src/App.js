import { Routes, Route, useNavigate, useLocation } from 'react-router';
import './App.css';
import Home from './pages/home/home';
import { createStructuredSelector } from 'reselect';
import { selectActiveUser } from './redux/user/userSelectors';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import Dashboard from './pages/dashboard/dashboard';
import PreviewTemplate from './pages/previewTemplate/previewTemplate';
import EditPage from './pages/edit/edit';


function App({user}) {


  const navigate = useNavigate()
  const location = useLocation()


  useEffect(() => {
    // checks if user is logged in and redirects to dashboard if true else to home
    if(user){
      if(location.pathname === "/"){
        navigate('/dashboard')
      }
    }
    else{
      navigate("/")
 
    }
    return () => {
      console.log("unmounting")
    }
  }, [user])

  useEffect(() => {
    window.scrollTo(0,0,{behavior: 'smooth'})
    return () => {
      console.log("unmount scroll")
    }
  }, [location.pathname])

  return (
    <div>
      <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preview" element={<PreviewTemplate />} />
          <Route path="/edit" element={<EditPage />} />
       
      </Routes>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectActiveUser
})

export default connect(mapStateToProps,null)(App);
