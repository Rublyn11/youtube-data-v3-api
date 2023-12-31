import React from "react";

import { Paper, Typography } from "@material-ui/core";

const videoDetail = ({ video }) => {
  if (!video) return <div> <Typography variant="h4">Search for videos <br/> Get video using Id <br/> Get videos using url <br/> Get video using video title</Typography></div>;
  console.log(video.id.videoId);
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "450px" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>

      <Paper elevation={6} style={{ padding: ".6rem" }}>
        <Typography variant="h4">{video.snippet.title}</Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default videoDetail;