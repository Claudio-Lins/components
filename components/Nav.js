import Link from "next/link";
import Image from "next/image";

//export default function Nav() {
//return (
const Nav = () => {
  return (
    <nav className="bg-gray-100 py-4">
      <div className="max-w-5xl px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex justify-between items-center space-x-6">
            <div>
              <Image
                src="/logo-algoritmo-digital-70pct.png"
                alt="Algoritmo Digital"
                width={180}
                height={45}
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
              
              {/* Link 03 */}
              <div className="ml-10">
                <Link href="#">
                  <a>
                    <h3>Link 03</h3>
                  </a>
                </Link>
              </div>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Menu Mobile */}
        <div id='mobile-menu' className="hidden md:hidden">
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


}

export default Nav;

if (typeof window !== "undefined") {
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");



  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}
