import "./App.css";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Menu with dropdown</h1>
      <Menu>
        <MenuItem name="Level 1 home" to="/" />
        <MenuItem name="Level 1 services" to="/services">
          <MenuItem name="Level 2 SEO" to="/seo" />
          <MenuItem name="Level 2 DESIGN" to="/design" />
          {/* <MenuItem name="Level 2 with children" >
          <MenuItem name="Level 3a" />
          <MenuItem name="Level 3b" />
          <MenuItem name="Level 3c" />
          <MenuItem name="Level 3d_the_last_of_3rd" />
          </MenuItem> */}
        </MenuItem>
        <MenuItem name="Level 1 JOBS" to="/jobs" />
      </Menu>
    </div>
  );
}
export default App;
