import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLayout from "./Layout/Auth-layout/auth";
import Dashboard from "./Pages/Dashboard/dashboard";
import HomePage from "./Pages/Home/homepage";


const App = () => {
  return (
    <Router>
      <Routes> 
        <Route element={<AuthLayout />}>
          <Route path="/Dash" element={<Dashboard />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
