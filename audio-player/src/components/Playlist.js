
const Playlist = ({ playlist, onAudioSelected }) => {
    return (
      <div className=" m-2 ">
        <h2 className=" p-2 m-3 text-3xl font-bold" >Playlist</h2>
        <ul>
          {playlist.map((audio) => (
            <li className=" w-1/4 p-2 m-2 rounded-lg cursor-pointer bg-purple-500 text-black hover:opacity-70" key={audio.id} onClick={() => onAudioSelected(audio)}>
              {audio.title}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Playlist