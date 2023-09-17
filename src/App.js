import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Calendar from './components/Calendar';
import Vacations from './components/Vacations'; 
import Staff from './components/Staff';
import Messenger from './components/Messenger';
import Info from './components/Info';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content-container">
          <Sidebar />
          <Routes>
           <Route path="/projects" element={<Projects />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/Vacations" element={<Vacations />} />
            <Route path="/Staff" element={<Staff />} />
            <Route path="/Messenger" element={<Messenger />} />
            <Route path="/Info" element={<Info />} />
            <Route path="/"  element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;