import React from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import { SearchBar, VideoList, VideoDetail } from "./components";
// import SearchBar from './components/SearchBar';
// import VideoDetail from './components/VideoDetail';

import youtube from "./api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCS2lJ6xc9Px0rUtbsXg3c2fa49vGn0VAs",
        q: searchTerm,
      },
    });

    //console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justifyContent="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

// const App =() =>{
//     return(
//         <h1> YouTube Clone App </h1>
//     )
// }

export default App;