import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
}));

const VideoItem = ({ video, onVideoSelect }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Paper
        className={classes.paper}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ marginRight: "20px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
