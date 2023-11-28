import React from 'react';

const PlaylistList = ({ playlists, onSelectPlaylist }) => {
  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id} onClick={() => onSelectPlaylist(playlist)}>
          {playlist.name}
        </li>
      ))}
    </ul>
  );
};

export default PlaylistList;
