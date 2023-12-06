import React from "react";
import classes from "./Note.module.css";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = (props) => {
  const handlerDelete = () => {
    props.onDelete(props.id);
    console.log(props.id);
    console.log("Delete button clicked");
  };

  return (
    <div className="scrollContainer">
      <div className={classes.note}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <p>{props.date}</p>
        <IconButton onClick={handlerDelete} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Note;
