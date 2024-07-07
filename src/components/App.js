import "./App.css";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

function App() {
  return (
    <div className="App">
      <h1 className="App-header">header with dropdown</h1>
      <Menu>
        <MenuItem name="Home" />
        <MenuItem name="Parent" hasSubMenu={true} children>
          <MenuItem name="Child 1" />
          <MenuItem name="Child 2" />
          <MenuItem name="Child Last" />
        </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
