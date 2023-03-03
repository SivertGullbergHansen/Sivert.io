/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsFillLightbulbOffFill, BsFillLightbulbFill } from 'react-icons/bs'

const light = 'light'
const dark = 'dark'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  console.log(theme);
  

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)

    if (theme === 'system') setTheme(dark)
  }, [])

  if (!mounted) {
    return null
  }

  return (
      <div className="flex flex-row gap-2 fixed top-6 left-6 place-items-center bg-base-300 px-1.5 py-1.5 rounded-full opacity-25 hover:opacity-100">
          <input onChange={e => {
            setTheme(theme === dark ? light : dark)
          }} type="checkbox" className="toggle" checked={theme === light} />
      {theme !== light ? <BsFillLightbulbOffFill /> : null}
      {theme === light ? <BsFillLightbulbFill /> : null}
    </div>
  )
}

export default ThemeSwitch