import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLayout from "./Layout/Auth-layout/auth";
import Dashboard from "./Pages/Dashboard/dashboard";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
