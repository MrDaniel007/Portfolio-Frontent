export default function Header({ setHoverText }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-sm overflow-x-hidden z-40">
      <div className="max-w-[2560px] mx-auto flex justify-start items-center h-16 px-6 relative">

        {/* LOGO */}
        <div 
          className="text-2xl md:text-3xl xl:text-4xl font-bold cursor-pointer text-white"
          onMouseEnter={() => setHoverText(true)}
          onMouseLeave={() => setHoverText(false)}
          onClick={() => document.getElementById("home").scrollIntoView({behavior: "smooth"})}
        >
          Daniel<span className="text-orange-500">.</span>
        </div>

        {/* STATUS */}
<div   className="hidden md:flex items-center gap-2 text-sm md:text-base lg:text-lg text-gray-600 absolute top-6 left-[65%]
 md:left-[70%] lg:left-[77%] xl:left-[82%] 3xl:left-[95%]  cursor-pointer">
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