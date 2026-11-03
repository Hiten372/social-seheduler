import { useEffect, useState } from "react";
import { dummyGenerationData } from "../assets/assets";
import { ArrowRightIcon, HistoryIcon, Loader2Icon } from "lucide-react";

const AiComposer = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [tone, setTone] = useState<string>("");
  const [generateImage, setGenerateImage] = useState<boolean>(true);
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

  const handleGenerate = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

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
            <button
              onClick={() => setGenerateImage(!generateImage)}
              className="flex items-center gap-3 bg-red-50 py-2 px-3 rounded-lg"
            >
              <span>Ai Image</span>
              <div
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${generateImage ? "bg-red-500" : "bg-slate-200"}`}
              >
                <span
                  className={`pointer-events-none size-4 transform translate-y-0.5 rounded-full bg-white transition ${generateImage ? "translate-x-4.5" : "translate-x-0.5"}`}
                />
              </div>
            </button>
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-2 px-4 py-2 rounded-lg"
            >
              {loading ? (
                <>
                  <Loader2Icon className="size-4 animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  Generate
                  <ArrowRightIcon className="size-4" />
                </>
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {tones.map((items) => (
            <button
              key={items}
              onClick={() => setTone(items)}
              className={`px-4 py-1.5 rounded-full text-sm transsition-all border ${tone === items ? "bg-red-500 text-white border-red-500" : "bg-white border-slate-500 hover:border-slate-300"}`}
            >
              {items}
            </button>
          ))}
        </div>
      </div>

      {/* Ai Generated Poats*/}
      <div className="space-y-6 pt-12 border-t border-slate-300">
        <div>
          <div className="flex items-center gap-2">
            <HistoryIcon className="size-5" />
            <h2 className="text-xl">Recent Generations</h2>
          </div>
          <span>{generations.length} total</span>
        </div>
      </div>
      {/* Scheduler Modal*/}
    </div>
  );
};

export default AiComposer;
