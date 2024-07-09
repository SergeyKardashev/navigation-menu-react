import "./App.css";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

function App() {
  return (
    <div className="App">
      <h1 className="App-header">header with dropdown</h1>
      <Menu>
        <MenuItem name="Home" />
        <MenuItem name="Level 1">
          <MenuItem name="Level 2 with children" >
            <MenuItem name="Level 3a" />
            <MenuItem name="Level 3b" />
            <MenuItem name="Level 3c" />
            <MenuItem name="Level 3d_the_last_of_3rd" />
          </MenuItem>
          <MenuItem name="Level 2" />
          <MenuItem name="Level 2 " />
        </MenuItem>
        <MenuItem name="contacts" />
      </Menu>
    </div>
  );
}

export default App;
