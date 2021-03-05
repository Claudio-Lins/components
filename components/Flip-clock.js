export default function FlipClock() {
  return (
    <div className="flex justify-center mb-4">
      <div className="relative border-8 border-black rounded shadow-2xl text-8xl text-blue-400 font-mono grid grid-cols-3 gap-x-px">
        <div className="absolute inset-x-0 -bottom-5 mx-auto flex justify-center">
          <div className="w-3/4 bg-black h-5 rounded"></div>
        </div>

        <div className=" relative w-full bg-black p-8">
          <div className="absolute inset-0 grid grid-rows-2">
            <div className=" bg-gradient-to-br from-gray-700 to-black"></div>
            <div className=" bg-gradient-to-br from-gray-700 to-black"></div>
          </div>
          <span className="relative">{hs}</span>
          <div className="absolute inset-0 flex items-center">
            <div className="h-px w-full bg-black"></div>
          </div>
        </div>
        <div className=" relative bg-black p-8">
          <div className="absolute inset-0 grid grid-rows-2">
            <div className=" bg-gradient-to-br from-gray-700 to-black"></div>
            <div className=" bg-gradient-to-br from-gray-700 to-black"></div>
          </div>
          <span className="relative">{mn}</span>
          <div className="absolute inset-0 flex items-center">
            <div className="h-px w-full bg-black"></div>
          </div>
        </div>
        <div className=" relative bg-black p-8">
          <div className="absolute inset-0 grid grid-rows-2">
            <div className=" bg-gradient-to-br from-gray-700 to-black"></div>
            <div className=" bg-gradient-to-br from-gray-700 to-black"></div>
          </div>
          <span className="relative">{sg}</span>
          <div className="absolute inset-0 flex items-center">
            <div className="h-px w-full bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

let myDate = new Date();
let hs = zeroEsquerda(myDate.getHours());
let mn = zeroEsquerda(myDate.getMinutes());
let sg = zeroEsquerda(myDate.getSeconds());

function zeroEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}
