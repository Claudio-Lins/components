import FlipClock from '../components/Flip-clock'

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen mt-4 py-2">
      <main className="items-center justify-center px-20 text-center">
        <h1 className="text-3xl font-bold">
          Components{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Tailwind CSS
          </a>
        </h1>

        <FlipClock />
      </main>
    </div>
  );
}
