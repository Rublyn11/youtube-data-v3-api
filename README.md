## Project Overview

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# YouTube Data v3 API React App

Welcome to the YouTube Data v3 API React App! This application allows users to search for YouTube videos, view video details, create playlists, and manage them collaboratively. The project is built using React and Material-UI components, with data fetched from the YouTube Data API v3.

### Files and Directories

- **src/**
  - **components/**
    - `App.js`: Main application component.
    - `Navbar.js`: Navigation bar component.
    - `SearchBar.js`: Component for the search bar.
    - `VideoList.js`: Component to display a list of videos.
    - `VideoDetail.js`: Component to display details of a selected video.
    - `PlaylistForm.js`: Component for creating playlists.
    - `PlaylistList.js`: Component to display a list of playlists.

  - **api/**
    - `youtube.js`: Axios instance for making requests to the YouTube Data API.

  - **services/**
    - `PlaylistService.js`: Service for playlist-related functionality.

  - **App.css**: Styles for the application.

### Components

#### 1. `App.js`

- **Purpose:** The main component rendering the entire application.
- **Dependencies:** `react`, `@material-ui/core`, `youtube-api-v3-search`
- **State:** `videos`, `selectedVideo`, `playlists`
- **Functions:** `onVideoSelect(video)`, `handleSubmit(searchTerm)`, `handleCreatePlaylist(playlistName)`, `handleSelectPlaylist(playlist)`

#### 2. `Navbar.js`

- **Purpose:** Navigation bar component.
- **Dependencies:** `react`, `@material-ui/core`

#### 3. `SearchBar.js`

- **Purpose:** Component for the search bar.
- **Dependencies:** `react`, `@material-ui/core`
- **Props:** `onFormSubmit`
- **State:** `searchTerm`
- **Functions:** `handleChange(event)`, `handleSubmit(event)`

#### 4. `VideoList.js`

- **Purpose:** Component to display a list of videos.
- **Dependencies:** `react`, `@material-ui/core`
- **Props:** `videos`, `onVideoSelect`

#### 5. `VideoDetail.js`

- **Purpose:** Component to display details of a selected video.
- **Dependencies:** `react`, `@material-ui/core`
- **Props:** `video`

#### 6. `PlaylistForm.js`

- **Purpose:** Component for creating playlists.
- **Dependencies:** `react`, `@material-ui/core`, `youtube-data-v3-api`
- **Props:** `onCreatePlaylist`

#### 7. `PlaylistList.js`

- **Purpose:** Component to display a list of playlists.
- **Dependencies:** `react`, `@material-ui/core`
- **Props:** `playlists`, `onSelectPlaylist`

#### 8. `youtube.js` (in the `api` directory)

- **Purpose:** Axios instance for making requests to the YouTube Data API.
- **Dependencies:** `axios`

#### 9. `PlaylistService.js` (in the `services` directory)

- **Purpose:** Service for playlist-related functionality.
- **Dependencies:** None

### Code Style

- Follows Material-UI component structure.
- Utilizes functional components and hooks.
- Keeps state management and API requests within the components.
