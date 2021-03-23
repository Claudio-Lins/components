import FlipClock from "../components/Flip-clock";
import Nav from "../components/Nav";
import NavDrop from "../components/NavDrop";
import Post from "../components/Post";

export default function Home() {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">
          Components <span className="text-blue-600">Tailwind CSS</span>
        </h1>
      </div>
      <div className="justify-center border-2 mt-4  mx-auto px-8 py-4">
        <div className="text-center flex justify-center">
          <h2 className="font-bold text-2xl mb-4">FlipClock</h2>
        </div>
        <div>
          <FlipClock />
        </div>
      </div>

      <div className="justify-center border-2 mt-4 w-auto mx-auto px-8 py-4">
        <div className="text-center flex justify-center">
          <h2 className="font-bold text-2xl mb-4">Nav</h2>
        </div>
        <div>
          <Nav />
          <NavDrop />
          <Post />
        </div>
      </div>
    </>
  );
}
