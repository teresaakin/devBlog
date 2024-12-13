import butterPixel from "./img/butter-pixel.gif";

const BehindTheScreen = () => {
    return (
      <section className="relative max-w-screen-lg mx-auto p-8 sm:p-8 my-8 border-2 custom-border mt-20">
        <span className="absolute -top-3 left-4 sm:left-6 px-2 font-mono text-grey bg-black">
          behind the screen
        </span>
        
        <div className="flex flex-row items-start gap-12">
          <div className="flex-shrink-0">
            <img
              className="max-w-[110px] max-h-[110px]"
              src={butterPixel}
              alt="White Butterflies Pixel gif"
            />
          </div>
          
          <div className="flex-grow">
            <h2 className="font-medium text-lg">
              hi! I'm Teresa, a designer & engineer.
            </h2>
            <p className="mt-4">
              Welcome to my blog! I'll share behind the scenes of my projects <br></br> and
              insights into what I'm up to!
            </p>
  
            <div className="mt-10">
              <ul className="flex items-start gap-20 text-sm cursor-pointer">
                <li className="hover:text-sky-200">github</li>
                <li className="hover:text-sky-200">twitter</li>
                <li className="hover:text-sky-200">twitch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BehindTheScreen;
