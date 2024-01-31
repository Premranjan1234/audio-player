import React, { useState } from 'react'

const AudioUploader = ({playlist,setPlaylist}) => {
    const [file,setFile]=useState(null)
    const handleUpload=()=>{
        if (file) {
            
            const reader = new FileReader();
      
            reader.onload = () => {
              const newTrack = {
                id:playlist?.length+1,
                title:`audio uploaded`,
                url: reader.result,
                
                
              };
      
              setPlaylist([...playlist, newTrack]);
      
              // Save updated playlist to localStorage
              localStorage.setItem('playlist', JSON.stringify([...playlist, newTrack]));
            };
      
            reader.readAsDataURL(file);
        }

    }
    
    
    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        console.log(uploadedFile)
        setFile(uploadedFile);
        
        
      };
    
  return (
    <div className=' p-2 m-2'>
        <h1 className=" p-2 m-2 text-xl">Uploading audio files</h1>
        <div className="flex align-middle ">
          <input className=" p-2 m-2 bg-slate-400 rounded-md " type="file" onChange={handleFileChange}/>
          <button className=" p-2 m-2 rounded-lg bg-purple-500 text-black" onClick={handleUpload}>Upload</button>
        </div>
    </div>
  )
}

export default AudioUploader