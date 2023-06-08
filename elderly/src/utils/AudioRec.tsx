import { useState } from 'react';

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  let mediaRecorder;
  let chunks = [];

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.addEventListener('dataavailable', function (e) {
        chunks.push(e.data);
      });

      mediaRecorder.addEventListener('stop', function () {
        const audioBlob = new Blob(chunks, { type: 'audio/webm' });
        setAudioBlob(audioBlob);
        chunks = [];
      });

      mediaRecorder.start();
      setRecording(true);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setRecording(false);
  };

  return (
    <div>
      <button onClick={startRecording} disabled={recording}>
        Record
      </button>
      <button onClick={stopRecording} disabled={!recording}>
        Stop
      </button>
      {audioBlob && (
        <audio src={URL.createObjectURL(audioBlob)} controls />
      )}
    </div>
  );
};

export default AudioRecorder;
