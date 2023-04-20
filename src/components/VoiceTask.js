import React, { useContext, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import AppContext from '../context/AppContext';

function VoiceTask() {
  const { voiceSupport, setVoiceSupport, setTaskInput, tasksList } = useContext(AppContext)
  const { transcript, listening, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();

  useEffect(() => {
    if (browserSupportsSpeechRecognition) {
      setVoiceSupport(true);
    }
  }, [voiceSupport]) 

  useEffect(() => {
    setTaskInput(transcript)
  }, [transcript]) 

  useEffect(() => {
    resetTranscript()
  }, [tasksList])


  if(listening) {
    return (
      <button type="button" className="btn btn-light" onClick={SpeechRecognition.stopListening}>
        <i className="bi bi-mic-fill text-danger" />
      </button>
    )
  } return (
    <button type="button" className="btn btn-light" onClick={SpeechRecognition.startListening}>
      <i className="bi bi-mic-fill text-dark-emphasis" />
    </button> 
  ) 
}

export default VoiceTask;
