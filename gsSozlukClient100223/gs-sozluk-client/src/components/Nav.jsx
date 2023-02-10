import React from 'react'

const Nav = () => {
  return (
    <div>
    <nav className="flex space-x-6 items-center pb-4 pt-4">
      <div className="text-left pl-6 text-2xl basis-1/4 font-body text-yellow-500">
        Galatasaray Sozluk
      </div>
      <div className="flex border border-white basis-1/2 rounded-sm ">
        <input
          className="bg-white w-full placeholder:text-gray-700 rounded-sm placeholder:pl-3"
          placeholder="topic #entry @nick"
          type="text"
        />
        <div className="bg-yellow-400 flex items-center">
          <a href="#" className="p-1">
            Getir
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="p-1 w-6 h-6 text-black "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </div>
      <div className="text-white">
        <div className="flex items-center space-x-4 basis-1/4 text-sm ">
            
          <a className='hover:brightness-125 cursor-pointer font-verdana text-nav font-bold'>Ben</a>
          <a href='#'>Mesaj</a>
          <a href='#' className="border p-1 bg-yellow-400 text-black rounded hover:brightness-125">Cop</a>
          <a href='#' className="border rounded p-1 font-verdana text-nav font-bold">Takip</a>

          <div>...</div>
        </div>
      </div>
    </nav>

    <div className="flex border-b-2 mb-4 border-gray-800">
        <div className="basis-1/2 pb-2">
          <div className="font-verdana text-nav font-bold flex space-x-4 pl-1 text-sm">
            <div className="border-r-2 pr-4 hover:underline border-slate-500">Bugun</div>
            <div className="border-r-2 pr-4 border-slate-500">Gundem</div>
            <div className="border-r-2 pr-4 border-slate-500">10</div>
            <div className="border-r-2 pr-4 border-slate-500">Kadro</div>
            <div className="border-r-2 pr-4 pl-2 border-slate-500">...</div>
          </div>
        </div>

        <div className="flex justify-end basis-1/2 text-white">
          <div className="flex space-x-4 pl-1 text-sm pb-2">
          <div className="border-r-2 border-l-2 pl-4 pr-4 border-slate-500">
              Match Center
            </div>
            <div className="border-r-2 pr-4 border-slate-500">
              Control Center
            </div>
            <div className="border-r-2 pr-4 border-slate-500">Fan-Zone</div>
            <div className="border-r-2 pr-4 border-slate-500"> Who's in</div>
            <div className="border-r-2 pr-4 border-slate-500">Stats</div>
          </div>
        </div>
      </div>


    
  </div>
  )
}

export default Nav