/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillLightbulbOffFill, BsFillLightbulbFill } from "react-icons/bs";

const light = "light";
const dark = "dark";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function switchTheme() {
    setTheme(theme === dark ? light : dark);
  }

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);

    if (theme === "system") setTheme(dark);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      onClick={switchTheme}
      className="flex flex-row gap-2 fixed top-4 left-4 place-items-center bg-base-300 p-1.5 rounded-full opacity-25 hover:opacity-100 hover:cursor-pointer"
    >
      <input type="checkbox" className="toggle" checked={theme === light} />
      {theme !== light ? <BsFillLightbulbOffFill /> : null}
      {theme === light ? <BsFillLightbulbFill /> : null}
    </div>
  );
};

export default ThemeSwitch;
