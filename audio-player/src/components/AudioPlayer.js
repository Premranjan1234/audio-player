import { useEffect,useRef,useState } from "react";
const AudioPlayer = ({ playlist, currentAudio, onAudioEnd }) => {
    const audioRef = useRef(null);
    const [isUserInteracted, setIsUserInteracted] = useState(false);

    
    
    useEffect(() => {
      if (currentAudio && isUserInteracted) {
        audioRef.current.src = currentAudio.url;
        audioRef.current.play();
      }
     
      
      
      
    }, [currentAudio,isUserInteracted]);
  
    const handleEnded = () => {
      if (onAudioEnd) {
        onAudioEnd();
      }
    };
    const handlePlay = () => {
        setIsUserInteracted(true);
      };
    
    
  
    return (
      <div>
        <audio className=" p-2 m-2" ref={audioRef} onEnded={handleEnded} controls />
        <button className=" p-2 m-2 bg-purple-500 text-black hover:opacity-80 rounded-lg" onClick={handlePlay}>Start playing audio</button>
      </div>
    );
  };

  export default AudioPlayer
  