// A useful component when your product is challenging the status quo.
// Highlight the current pain points (left) and how your product is solving them (right)

import { CheckIcon, XIcon } from "lucide-react";

// Try to match the lines from left to right, so the user can easily compare the two columns
const Compare = () => {
    return (
      <section className="bg-base-100">
        <div className="max-w-5xl mx-auto px-8 py-16 md:py-32 ">
          <h2 className="text-center font-chillax text-3xl md:text-5xl tracking-tight mb-12 md:mb-20">
            Tired of guessing where to go?
          </h2>
  
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12 font-synonym">
            <div className="bg-error/20 text-accent p-8 md:p-12 rounded-lg w-full ">
              <h3 className="font-bold text-lg mb-4">
                Without CareRoute
              </h3>
  
              <ul className="list-disc list-inside space-y-1.5 ">
                {/* Pains the user is experiencing by not using your product */}
                {[
                  "Stress and uncertainty about what to do",
                  "Time wasted searching or second guessing symptoms",
                  "Risk of unnecessary visits or delaying real care.",
                 
                ].map((item, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <div className="flex items-center justify-center bg-error/30 rounded-full p-2">
                   <XIcon className="w-4 h-4 shrink-0"/>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="bg-success/20 text-primary p-8 md:p-12 rounded-lg w-full font-synonym">
              <h3 className="font-bold text-lg mb-4">
                With CareRoute
              </h3>
  
              <ul className="list-disc list-inside space-y-1.5 ">
                {/* Features of your product fixing the pain (try to match each with/withot lines) */}
                {[
                  "Clear guidance in under a minute.",
                  "Confidence in knowing whether to rest, call, or go in.",
                  "Peace of mind that you’re making the right choice",
                 
                  
                ].map((item, index) => (
                  <li key={index} className="flex gap-2 items-center">
                    <div className="flex items-center justify-center bg-success/30 rounded-full p-2">
                   <CheckIcon className="w-4 h-4 shrink-0"/>
                    </div>
  
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Compare;