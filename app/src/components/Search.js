function Search() {
  return (
    <div className="search">
         <header className="absolute top-5 right-8">
                    <div className="flex items-center  bg-red-300 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
                         <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse" />
                         <input type="text" className="bg-transparent text-white border-none lg:w-full focus:ring-0 outline-none placeholder-[#fafafa] text-xs" placeholder="Search.." />
                           {/* search */}
                    </div>
                </header>
    </div>
  );
}

export default Search;