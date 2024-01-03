import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";

const theme = atomWithStorage("dark", false);

function App() {
  const [appTheme, setAppTheme] = useAtom(theme);
  const handleClick = () => setAppTheme(!appTheme);
  return (
    <div className={appTheme ? "dark" : "light"}>
      <h1>This is a theme switcher</h1>
      <button onClick={handleClick}>{appTheme ? "DARK" : "LIGHT"}</button>
    </div>
  );
}

export default App;
