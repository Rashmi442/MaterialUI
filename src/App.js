import logo from "./logo.svg";
import "./App.css";
import BasicAppBar from './components/BasicAppBar';
import BasicTable from "./components/BasicTable";
import Drawer from './components/Drawer';
// import { Drawer } from "@mui/material";
// import { Drawer } from "@mui/material";

function App() {
  return (
    <div className="App">
      <BasicAppBar />
      <BasicTable/>
      <Drawer/>
    </div>
  );
}

export default App;
