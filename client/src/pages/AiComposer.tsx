import { useEffect, useState } from "react";
import { dummyGenerationData } from "../assets/assets";

const AiComposer = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [tone, setTone] = useState<string>("");
  const [generateImage, setGenerateIamge] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [generations, setGenerations] = useState<any[]>([]);

  //Scheduling state
  const [activeScheduler, setActiveScheduler] = useState<any>(null);

  const fetchGeneration = async () => {
    setGenerations(dummyGenerationData);
  };
  useEffect(() => {
    fetchGeneration();
  }, []);

  const tones = ["Professional", "Creative", "Funny", "Minimalist", "Excited"];

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20 animate-in fade-in duration-700 ">
      {/* input section*/}
      <div className="space-y-6 text-center mt-20">
        <h1 className="text-3xl text-slate-700 tracking-tight">
          What Should We Create Today?
        </h1>
        <div className="relative group mt-12">
          <textarea
            className="w-full px-6 py-6 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 outline-none focus:border-slate-400 transition resize-none h-40"
            placeholder="Share your idea...(e.g. A post about the launch of our new eco-friendly coffe beans)"
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
          />
          <div className="absolute bottom-4 right-2.5 flex items-center gap-3 text-sm">
            <button className="flex items-center gap-3 bg-red-50 py-2 px-3 rounded-lg">
              <span>Ai Image</span>
              <div
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${generateImage ? "bg-red-500" : "bg-slate-200"}`}
              >
                <span
                  className={`pointer-events-none size-4 transform translate-y-0.5 rounded-full bg-white transition ${generateImage ? "translate-x-4.5" : "translate-x-0.5"}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Ai Generated Poats*/}
      {/* Scheduler Modal*/}
    </div>
  );
};

export default AiComposer;
