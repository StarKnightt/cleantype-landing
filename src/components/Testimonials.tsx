import { Tweet } from 'react-tweet';

const tweetIds = [
  "1912805209153347690",
  "1912798862282244439",
  "1912807855742190073",
  "1912819020081868947",
  "1912814032077095010"
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-base-100 overflow-hidden pb-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          What People Say
        </h2>
        <p className="text-base-content/70 text-lg text-center mb-12">
          Log kya kahenge?
        </p>
        
        {/* Tweets Marquee Container */}
        <div className="relative w-full">
          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-base-100 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-base-100 to-transparent z-10" />
          
          {/* Marquee Track */}
          <div className="flex gap-8 overflow-hidden">
            {/* First set of tweets */}
            <div className="flex gap-8 animate-[marquee_40s_linear_infinite]">
              {tweetIds.map((id) => (
                <div key={id} className="flex-none w-[350px]">
                  <Tweet id={id} />
                </div>
              ))}
            </div>
            
            {/* Duplicated set for seamless loop */}
            <div className="flex gap-8 animate-[marquee_40s_linear_infinite]">
              {tweetIds.map((id) => (
                <div key={`${id}-dup`} className="flex-none w-[350px]">
                  <Tweet id={id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;