import "./App.css";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

function App() {
  return (
    <div className="App">
      <h1 className="App-header">menu with dropdown</h1>
      <Menu>
        <MenuItem name="Level 1 home" />
        <MenuItem name="Level 1 services">
          <MenuItem name="Level 2 with children" >
            <MenuItem name="Level 3a" />
            <MenuItem name="Level 3b" />
            <MenuItem name="Level 3c" />
            <MenuItem name="Level 3d_the_last_of_3rd" />
          </MenuItem>
          <MenuItem name="Level 2 SEO" />
          <MenuItem name="Level 2 DESIGN" />
        </MenuItem>
        <MenuItem name="Level 1 JOBS" />
      </Menu>
    </div>
  );
}

export default App;
