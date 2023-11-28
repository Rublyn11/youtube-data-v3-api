import React, { useState, useEffect } from 'react';
import { Grid } from "@material-ui/core";
import { SearchBar, VideoList, VideoDetail, PlaylistForm, PlaylistList, Navbar } from "./components";
import youtube from "./api/youtube";
import PlaylistService from './services/PlaylistService';
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [playlists, setPlaylists] = useState([]);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleSubmit = async (searchTerm) => {
    try {
      const response = await youtube.get('search', {
        params: {
          part: 'snippet',
          maxResults: 9,
          key: 'AIzaSyCS2lJ6xc9Px0rUtbsXg3c2fa49vGn0VAs',
          q: searchTerm,
        },
      });

      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleCreatePlaylist = (playlistName) => {
    const newPlaylist = PlaylistService.createPlaylist(playlistName);
    setPlaylists([...playlists, newPlaylist]);
  };

  const handleSelectPlaylist = (playlist) => {
    console.log('Selected Playlist:', playlist);
  };

  useEffect(() => {
    handleSubmit('default search term');
  }, []);

  return (
    <Grid justifyContent="center" container spacing={10}>
      <Grid item xs={12}>
        <Navbar />
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={12}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={12}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
          <Grid item xs={12}>
            <PlaylistForm onCreatePlaylist={handleCreatePlaylist} />
          </Grid>
          <Grid item xs={12}>
            <PlaylistList playlists={playlists} onSelectPlaylist={handleSelectPlaylist} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;