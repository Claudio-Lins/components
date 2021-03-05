import Link from "next/link";

const NavDrop = () => {
  return (
    <div>
      <nav className="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:flex-row">
        <div className="relative group">
          <button className="flex flex-row text-left items-center bg-transparent rounded-lg md:w-full md:inline md:mt-0 md:ml-0 focus:outline-none">
            <a className='hover:font-bold px-4'>Dropdown</a>
          </button>
          <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
            <div className="pt-2 rounded-md shadow-lg">
              <div className="grid grid-cols-1">
                <div className="hover:text-green-700 hover:font-bold mb-0 py-2">
                  <Link href="#">
                    <a className=''>Submenu 01</a>
                  </Link>
                </div>
                
                <div className="hover:text-green-700 hover:font-bold mb-0 py-2">
                  <Link href="#">
                    <a className='inline-block'>Submenu 02</a>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavDrop;
