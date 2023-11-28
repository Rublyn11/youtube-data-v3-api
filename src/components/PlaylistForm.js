import React, { useState } from 'react';

const PlaylistForm = ({ onCreatePlaylist }) => {
  const [playlistName, setPlaylistName] = useState('');

  const handleCreatePlaylist = () => {
    if (playlistName) {
      onCreatePlaylist(playlistName);
      setPlaylistName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter playlist name"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
      <button onClick={handleCreatePlaylist}>Create Playlist</button>
    </div>
  );
};

export default PlaylistForm;
