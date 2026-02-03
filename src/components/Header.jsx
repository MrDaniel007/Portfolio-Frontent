import Contact from "./Contact";

export default function Header({ setHoverText }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-sm overflow-x-hidden z-40">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center h-16 px-6 relative">

        {/* LOGO */}
        <div 
          className="text-2xl font-bold cursor-pointer text-white"
          onMouseEnter={() => setHoverText(true)}
          onMouseLeave={() => setHoverText(false)}
          onClick={() => document.getElementById("home").scrollIntoView({behavior: "smooth"})}
        >
          Daniel<span className="text-orange-500">.</span>
        </div>

        {/* STATUS */}
<div   className="hidden md:flex items-center gap-2 text-sm text-gray-600 absolute top-6 left-[65%] md:left-[75%] lg:left-[80%]">
  <span className="relative flex h-3 w-3">
    {/* пульсация */}
    <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></span>

    {/* центральная точка */}
    <span className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-green-500"></span>
  </span>

   <span onClick={() => document.getElementById("contact").scrollIntoView({behavior: "smooth"})}>Open to work</span>
</div>

      </div>
    </header>
  );
}