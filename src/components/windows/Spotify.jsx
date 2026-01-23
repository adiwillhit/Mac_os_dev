import React from 'react'
import MacWindow from './MacWindow'

const Spotify = ({windowName, setWindowsState}) => {
  return (

    <MacWindow width='25vw' windowName={windowName} setWindowsState={setWindowsState}>

        <div className="spotify-window">

           <iframe data-testid="embed-iframe" style={{borderRadius:12}} src="https://open.spotify.com/embed/album/2e7HNQJ0BcMoqwsVDwDhK8?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

        </div>
    </MacWindow>
    
  )
}

export default Spotify
