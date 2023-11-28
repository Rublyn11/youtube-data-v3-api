const playlists = [];

const PlaylistService = {
  createPlaylist: (name) => {
    const newPlaylist = {
      id: playlists.length + 1,
      name,
      videos: [],
    };

    playlists.push(newPlaylist);
    return newPlaylist;
  },

  getPlaylists: () => playlists,

  getPlaylistById: (playlistId) => playlists.find((playlist) => playlist.id === playlistId),

  addVideoToPlaylist: (playlistId, video) => {
    const playlist = playlists.find((p) => p.id === playlistId);
    if (playlist) {
      playlist.videos.push(video);
    }
  },
};

export default PlaylistService;
