import Home from './components/home.js';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Manlogin from './components/login.js';
import Dashboard from './components/dashboard.js';
import Equipmentdetails from './components/equipmentdetails.js';
import TaskManagement from './components/task_management.js';
import Reports from './components/reports.js';
function App() {
  return (
    <div class="app">
      <BrowserRouter>
      <Routes>
        <Route
          path={"/"}
          element={<Home/>}
        />
        <Route
          path={"/login"}
          element={<Manlogin/>}
        />
        <Route
          path={"/dashboard"}
          element={<Dashboard/>}
        />
        <Route
          path={"/equipmentdetails"}
          element={<Equipmentdetails/>}
        />
        <Route
          path={"/task_management"}
          element={<TaskManagement/>}
        />
        <Route
          path={"/reports"}
          element={<Reports/>}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;