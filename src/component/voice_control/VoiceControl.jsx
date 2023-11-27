import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect } from "react";

const data = "";

export const VoiceControl = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      console.log(transcript);
      // data.concat(transcript);
      // console.log(data);
    }
  }, [transcript]);

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
    console.log("Is Working");
  }, []);
  return (
    <>
      <div className="flex items-center justify-center p-20 bg-slate-500">
        <div className="w-1/2 bg-red-300 p-10 flex flex-col items-center justify-center gap-4">
          <div className="w-full text-center">
            <input
              className="px-5 py-3 bg-slate-700 text-white"
              type="text"
              value={transcript}
            />
          </div>

          <button
            onClick={resetTranscript}
            className=" w-1/5 py-3 px-30 bg-slate-950 text-white"
          >
            Clear Text
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              SpeechRecognition.stopListeningListening({ continuous: true });
            }}
            className=" w-1/3 py-3 px-30 bg-slate-950 text-white"
          >
            Stop Listening
          </button>
        </div>
      </div>
    </>
  );
};
