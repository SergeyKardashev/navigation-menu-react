import "./App.css";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

function App() {
  return (
    <div className="App">
      <h1 className="App-header">header</h1>
      <Menu>
        <MenuItem label="home" />
        <MenuItem label="pages">
          <MenuItem label="London">
            <MenuItem label="Downtown" />
            <MenuItem label="Outskirts" />
          </MenuItem>
          <MenuItem label="Oslo" />
        </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
