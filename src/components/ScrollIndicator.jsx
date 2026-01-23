import { useEffect, useRef, useState } from "react"

function ScrollBar() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const hideTimeout = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const percent = (scrollTop / docHeight) * 100
      setProgress(percent)

      // показываем
      setVisible(true)

      // сбрасываем таймер
      clearTimeout(hideTimeout.current)

      // скрываем через 3 сек
      hideTimeout.current = setTimeout(() => {
        setVisible(false)
      }, 3000)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(hideTimeout.current)
    }
  }, [])

  return (
    <div
      className={`
        fixed right-4 top-1/2 -translate-y-1/2
        h-40 w-[3px] rounded-full
        bg-white/20 backdrop-blur
        transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0"}
      `}
    >
      <div
        className="w-full rounded-full bg-orange-400 transition-all duration-150"
        style={{ height: `${progress}%`}}
      />
    </div>
  )
}

export default ScrollBar