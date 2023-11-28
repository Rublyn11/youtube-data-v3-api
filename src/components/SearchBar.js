import React, { useState } from 'react';
import { Paper, TextField } from "@material-ui/core";



const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  return (
    <Paper elevation={6} style={{ background: 'transparent', outline: "none"}}>
      <form onSubmit={handleSubmit}>
        <TextField variant="outlined" fullWidth style={{color: 'white', outline: "none" }} label="Search For Youtube Videos..." onChange={handleChange} inputProps={{disableUnderline: true}}/>
      </form>
    </Paper>
  );
};

export default SearchBar;