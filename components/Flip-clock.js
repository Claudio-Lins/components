export default function FlipClock() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-indigo-500 to-indigo-800">
      {/* Flip Clock container */}
      <div className="relative border-8 border-yellow-100 rounded shadow-2xl text-8xl text-white font-mono grid grid-cols-2 gap-x-px">
        
        {/* Stand */}
        <div className='absolute inset-x-0 -bottom-5 mx-auto flex justify-center'>
            <div className='w-3/4 bg-yellow-700 h-5 rounded'></div>
        </div>
        
        {/* left side */}
        <div className=" relative bg-black p-8">
          {/* Background grid of black square */}
          <div className="absolute inset-0 grid grid-rows-2">
            <div className=" bg-gradient-to-br from-gray-700 to-black"></div>
            <div className=" bg-gradient-to-br from-gray-700 to-black"></div>
          </div>
          {/* time number */}
          <span className="relative">{hs}</span>
          <div className='absolute inset-0 flex items-center'>
              <div className='h-px w-full bg-black'></div>
          </div>
        </div>
        <div className=" relative bg-black p-8">
            {/* Background grid of black square */}
          <div className="absolute inset-0 grid grid-rows-2">
            <div className=" bg-gradient-to-br from-gray-700 to-black"></div>
            <div className=" bg-gradient-to-br from-gray-700 to-black"></div>
          </div>
          <span>{mn}</span>
          <div className='absolute inset-0 flex items-center'>
              <div className='h-px w-full bg-black'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

let myDate = new Date();
let hs = myDate.getHours();
let mn = zeroEsquerda(myDate.getMinutes());

function zeroEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
  }
