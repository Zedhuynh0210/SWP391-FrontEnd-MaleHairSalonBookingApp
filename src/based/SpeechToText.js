import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { HeaderIcon, Info } from './icon/configIcon';

const SpeechToText = () => {
   const [isListening, setIsListening] = useState(false);
   const [transcript, setTranscript] = useState('');

   useEffect(() => {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
         const interimTranscript = Array.from(event.results)
            .map((result) => result[0])
            .map((result) => result.transcript)
            .join('');
         setTranscript(interimTranscript);
      };

      if (isListening) {
         recognition.start();
      } else {
         recognition.stop();
      }

      recognition.onerror = (event) => {
         console.error('Speech recognition error', event.error);
      };

      return () => {
         recognition.stop();
      };
   }, [isListening]);

   const handleListen = () => {
      setIsListening((prevState) => !prevState);
      if (!isListening) {
         setTranscript('');
      }
   };

   return (
      <div className="flex flex-col">
         <div>
            <Button className="w-[150px]" variant="outline" onClick={handleListen}>
               {isListening ? 'Dừng' : 'Bắt đầu'} ghi âm
               <span className="ml-2">
                  <HeaderIcon.Speaking width="20px" height="20px" />
               </span>
            </Button>
         </div>
         <>{transcript}</>
      </div>
   );
};

export default SpeechToText;
