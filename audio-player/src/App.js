//import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import AudioPlayer from './components/AudioPlayer';
import Playlist from './components/Playlist';
import AudioUploader from './components/AudioUploader';

function App() {
  const [playlist, setPlaylist] = useState([
    { id: 1, title: 'file_example_MP3_700KB.mp3', url: '/audio/file_example_MP3_700KB.mp3' },
    { id: 2, title: 'sample-3s.mp3', url: '/audio/sample-3s.mp3' },
    { id: 3, title: 'sample-9s.mp3', url: '/audio/sample-9s.mp3' },
  ]);
  const [currentAudio, setCurrentAudio] = useState(null);

  useEffect(() => {
    // Load the last playing audio file and position from storage
    const savedAudio = JSON.parse(localStorage.getItem('lastAudio'));
    setCurrentAudio(savedAudio);
  }, []);

  const handleAudioSelected = (audio) => {
    setCurrentAudio(audio);
  };
  

  const handleAudioEnd = () => {
    
    const currentIndex = playlist.findIndex((audio) => audio.id === currentAudio.id);

  
    const nextAudio = playlist[(currentIndex + 1) % playlist.length];
    setCurrentAudio(nextAudio);

    
    localStorage.setItem('lastAudio', JSON.stringify(nextAudio));
  };

  return (
    <div className="App">
      <h1 className=' p-2 text-3xl font-bold'>Audio Player</h1>
      <AudioUploader playlist={playlist} setPlaylist={setPlaylist} />
      <AudioPlayer playlist={playlist} currentAudio={currentAudio} onAudioEnd={handleAudioEnd} />
      <Playlist playlist={playlist} onAudioSelected={handleAudioSelected} />
      
    </div>
  );
}

export default App;
