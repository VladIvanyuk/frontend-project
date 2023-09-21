import "./styles/index.scss";
import { classNames } from "../helpers/classNames/classNames";
import { useTheme } from "shared/config/themeContext";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar/ui/Navbar";


export const App = () => {

  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>SWITCH THEME</button>
    </div>
  );
};
