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
      <div className="flex flex-row gap-4 fixed top-6 left-6 place-items-center">
      <BsFillLightbulbOffFill className={`${theme === light ? "opacity-0" : "opacity-100"}`} />
          <input onChange={e => {
              setTheme(theme === dark ? light : dark)
          }} type="checkbox" className="toggle" checked={theme === light} />
      <BsFillLightbulbFill className={`${theme !== light ? "opacity-0" : "opacity-100"}`} />
    </div>
  )
}

export default ThemeSwitch