import butterPixel from "./img/butter-pixel.gif";

const BehindTheScreen = () => {
  return (
    <section className="w-full relative max-w-screen-lg p-8 sm:p-8 border-2 custom-border py-8">
      <span className="absolute -top-3 left-4 sm:left-6 px-2 font-mono text-grey bg-black">
        behind the screen
      </span>

      <div className="flex flex-row flex-wrap items-start gap-12">
        <div>
          <img
            className="max-w-[110px] max-h-[110px]"
            src={butterPixel}
            alt="White Butterflies Pixel gif"
          />
        </div>
        <div className="whitespace-normal break-words">
          <h2 className="font-medium text-lg">
            hi! I'm Teresa, I design & code.
          </h2>
          <p className="mt-4">
            Welcome to my blog! I'll share behind the scenes of my projects{" "}
            <br></br> and insights into what I'm up to!
          </p>

          <div className="mt-10">
            <ul className="flex flex-wrap items-start gap-8 text-sm cursor-pointer">
              <li className="hover:text-bright">
                <a
                  href="https://github.com/teresaakin"
                  target="_blank"
                  rel="noopener noreferrer"
                >[github]</a>
              </li>
              <li className="hover:text-bright">
                <a
                  href="https://twitter.com/UI2FLY"
                  target="_blank"
                  rel="noopener noreferrer"
                >[twitter]</a>
              </li>
              <li className="hover:text-bright">
                <a
                  href="https://www.twitch.tv/ui2fly"
                  target="_blank"
                  rel="noopener noreferrer"
                >[twitch]</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheScreen;
