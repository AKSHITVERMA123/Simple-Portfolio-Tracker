import "./Components/style.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DashBoard from './Components/DashBoard';
import EditForm from "./Components/EditForm";
import TableData from "./Components/TableData";

function App() {

  document.body.style.background = "#0b0a3b";

  return (
    <div>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<DashBoard></DashBoard>}></Route>
            <Route path="/add" element={<DashBoard />}></Route>
            <Route path="/Edit" element={<EditForm />}></Route>
            <Route path="/Table" element={<TableData />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App;