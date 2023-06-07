import { type RecorderProps } from "voice-recorder-react";
import { useEffect, useRef, useState } from "react";

// Recorder UI component
export default function RecorderUI({
  time,
  stop,
  data,
  start,
  pause,
  resume,
  paused,
  recording
}: RecorderProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasRecording, setHasRecording] = useState(false);

  const togglePlay = () => {
    if (audioRef.current?.paused) {
      void audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };

  useEffect(() => {
    if (data.url && audioRef.current) {
      audioRef.current.src = data.url;
    }
  }, [data.url]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (recording) {
            stop();
            setHasRecording(true);
          } else {
            start();
            setHasRecording(false);
          }
        }}
        style={{ margin: "10px" }}
      >
        {recording ? "Stop" : "Start"}
      </button>

      {recording && (
        <>
          <button
            type="button"
            onClick={() => {
              if (recording) {
                if (paused) resume();
                else pause();
              }
            }}
            style={{ margin: "10px" }}
          >
            {paused ? "Resume" : "Pause"}
          </button>
          <p>
            {time.h}:{time.m}:{time.s}
          </p>
        </>
      )}

      {!recording && hasRecording && (
        <>
          <br />
          <br />
          <button type="button" onClick={togglePlay} style={{ margin: "10px" }}>
            Play/Pause
          </button>
        </>
      )}

      <audio ref={audioRef} hidden />
    </>
  );
}
