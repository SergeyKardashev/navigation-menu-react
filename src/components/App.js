import "./App.css";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">header</header>
      <Menu>
        <MenuItem />
      </Menu>
    </div>
  );
}

export default App;
