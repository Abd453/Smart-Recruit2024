import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Jobs from './components/Job';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';

import Login from './components/Login';
import LoginT from './pages/TeamLead/LoginT';
import Signup from './components/Signup';
import TeamleadL from './pages/TeamLead/LoginT';
import TeamleadH from './pages/TeamLead/Home';
import Navbart from './pages/TeamLead/navbarT';
import Newjobs from './pages/TeamLead/newjobs';

import ManagerL from './pages/Manager/LoginM';
import ManagerH from './pages/Manager/Home';
import Jobstobe from './pages/Manager/jobstobe';

import EmployeeL from './components/Login';
import EmployeeH from './pages/Employee/Home';
// import Apply  from "./pages/Manager/jobstobe";

import MyProfile from './pages/Employee/myProfile';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <div className="max-w-7xl mx-auto pt-20 px-6"> */}
                <Navbar />
                <div className="max-w-7xl mx-auto pt-20 px-6">
                  <HeroSection />
                  <Jobs />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/loginteam" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/teamlead" element={<TeamleadL />} />
          <Route path="/teamleadhome" element={<TeamleadH />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/navbart" element={<Navbart />} />
          <Route path="/newjobs" element={<Newjobs />} />
          <Route path="/jobstobe" element={<Jobstobe />} />
          <Route path="/manager" element={<ManagerL />} />
          <Route path="/managerhome" element={<ManagerH />} />
          <Route path="/employee" element={<EmployeeL />} />
          <Route path="/employeehome" element={<EmployeeH />} />
          <Route path="/userprofile" element={<MyProfile />} />

          {/* <Route path="*" element={<h1 className="m-auto items-center justify-center">404 Page not Found</h1>}/> */}
          <Route
            path="*"
            element={
              <h1 className="flex items-center justify-center min-h-screen text-4xl font-bold text-gray-800">
                404 Page not Found
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
