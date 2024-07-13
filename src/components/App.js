import "./App.css";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

function App() {
  const siteName = "My Site";

  // другое - это StaticPages
  // const staticPages = [
  //   { url: "/prices", desc: "nav.footer.prices" },
  //   { url: "/feedback", desc: "nav.footer.feedback" },
  // ];

  return (
    <div className="App">
      <h1 className="App-header">Menu with dropdown</h1>
      <p style={{ margin: 30, fontSize: 20, border: "1px solid red" }}>
        • лого и название, • Древо, • Статьи ▼, • Смежные страницы ▼, • Другое ▼,• Уведомления, • Закладки, • профиль
        (аватар и фио) ▼
      </p>

      {/* Меню содержит
      • лого и название
      • Древо
      • Статьи ▼
      • Смежные страницы ▼
      • Другое ▼
      • Уведомления
      • Закладки
      • профиль (аватар и фио) ▼
      */}
      <Menu>
        {/* лого и название */}
        <MenuItem text={siteName} to="/">
          <img src="./images/site-logo.svg" alt="лого сайта" />
          <span>{siteName}</span>
        </MenuItem>

        {/* древо */}
        <MenuItem text={T.translate("nav.tree")} disabled to="/tree" />

        {/* статьи ▼*/}
        <MenuItem text={T.translate("nav.articles")} hasSubMenu>
          {/* заменить потомков на метод map */}
          {/* <MenuItem text="1st article" to="/articles/1st-article" />
          <MenuItem text="2nd article" to="/articles/2nd-article" /> */}
        </MenuItem>

        {/* смежные страницы ▼ */}
        <MenuItem text={T.translate("nav.otherSites")} hasSubMenu>
          {/* заменить потомков на метод map */}
          {/* <MenuItem text="site1" to="/site1" />
          <MenuItem text="site2" to="/site2" /> */}
        </MenuItem>

        {/* Другое ▼ */}
        <MenuItem text={T.translate("nav.other")} hasSubMenu>
          {/* заменить потомков на метод map по массиву pages*/}
          {/* <MenuItem text="какой-то site1" to="/site1" />
          <MenuItem text="какой-то site2" to="/site2" /> */}
        </MenuItem>

        <MenuItem text={T.translate("nav.messages")} className="flex">
          {/* Уведомления - в одной обертке счетчик и иконка */}
          {/* <MenuItem text={T.translate("nav.messages")} to="notifications" /> */}
          <div text="icons wrap">
            <div className="counter">2</div>
            <img className="bell-icon" src={bell} alt={T.translate("nav.messages")} />
          </div>
        </MenuItem>

        {/* Закладки */}
        <MenuItem text={T.translate("nav.bookmarks")} to="bookmarks">
          <img src={bookmark} alt={T.translate("nav.bookmarks")} />
          {/* в семантике есть пропсы inline spaced */}
        </MenuItem>

        {/* Разделитель */}
        <MenuItem>
          <span>hr</span>
        </MenuItem>

        {/* выпадающее меню профиля */}
        {/* переименовать MenuItem в Dropdown ??? */}
        <MenuItem text="todo user dropdown" hasSubMenu>
          <img src={avatar} alt={T.translate("userParams.firstName")} />
          <div>{T.translate("userParams.firstName")}</div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
