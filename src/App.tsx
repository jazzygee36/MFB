import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/pages/register';
import LandingPage from './components/pages/landingPage';
import SignIn from './components/pages/signIn';
import PasswordReset from './components/pages/passwordReset';
import OtpVerification from './components/pages/passwordReset/otp-verification';
import Dashboard from './components/pages/market';

const App = () => {
  // PrivateRoute component
  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = !!localStorage.getItem('token');
    return isAuthenticated ? <>{children}</> : (window.location.href = '/');
  };
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect from the root to /welcome */}
        <Route path='/' element={<Navigate to='/welcome' />} />
        <Route path='/welcome' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/password-reset' element={<PasswordReset />} />
        <Route path='/otp-verification' element={<OtpVerification />} />
        <Route
          path='/market'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
