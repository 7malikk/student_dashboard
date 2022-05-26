import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/user/Dashboard';
import Courses from './components/user/Courses';
import StudentProfile from './components/user/StudentProfile';
import SingleCourse from './components/user/SingleCourse';
import SignUp from './components/SignUp';
import User from './components/user/User';
import Logout from './components/Logout';

function App() {
  return (
    <div>
      <div className="content">
        <Routes>
          <Route exact path="/students_dashboard" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route path="" element={<User />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:coursename/:id" element={<SingleCourse />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
