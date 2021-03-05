import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="bg-blue-600 py-4 relative">
      <div className="max-w-5xl px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex justify-between items-center space-x-6">
            <div>
              <Image
                src="/tailwindcss-800-188.png"
                alt="Tailwind CSS"
                width={200}
                height={47}
              />
            </div>

            <div className="hidden md:flex space-x-6 justify-around">
              <div className="ml-10">
                <Link href="/">
                  <a className="hover:text-green-600">
                    <h3>Link 01</h3>
                  </a>
                </Link>
              </div>
              {/*  */}
              {/* Link 02 */}
              <div className="ml-10">
                <Link href="#">
                  <a className="hover:text-green-500">
                    <h3>Link 02</h3>
                  </a>
                </Link>
              </div>
              {/*  */}

              {/* Dropdown */}
                <nav className="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:flex-row">
                  <div className="relative group">
                    <button className="flex flex-row text-left items-center bg-transparent rounded-lg md:w-full md:inline md:mt-0 md:ml-0 focus:outline-none">
                      <a className="hover:font-bold px-4">Dropdown</a>
                    </button>
                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                      <div className="pt-2 rounded-md shadow-lg">
                        <div className="grid grid-cols-1">
                          <div className="hover:text-green-700 hover:font-bold mb-0 py-2">
                            <Link href="#">
                              <a className="">Submenu 01</a>
                            </Link>
                          </div>

                          <div className="hover:text-green-700 hover:font-bold mb-0 py-2">
                            <Link href="#">
                              <a className="inline-block">Submenu 02</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              {/*  */}
              {/* Link 04 */}
              <div className="ml-10">
                <Link href="#">
                  <a>
                    <h3>Link 04</h3>
                  </a>
                </Link>
              </div>
              {/*  */}
              {/* Link 05 */}
              <div>
                <Link href="/qui-sommes-nous">
                  <a>
                    <h3>Link 05</h3>
                  </a>
                </Link>
              </div>
              {/*  */}
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button id="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Menu Mobile */}
        <div id="mobile-menu" className="hidden md:hidden">
          <div className="ml-4">
            <Link href="/">
              <a className="text-blue-500 no-underline dark:text-blue-300">
                <h3>Home</h3>
              </a>
            </Link>
          </div>
          <div className="ml-4">
            <Link href="/">
              <a className="text-blue-500 no-underline dark:text-blue-300">
                <h3>Home</h3>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

if (typeof window !== "undefined") {
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

//  <nav aria-label="primary" class="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
