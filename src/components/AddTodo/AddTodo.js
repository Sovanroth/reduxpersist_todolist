import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import cuid from "cuid";

const AddTodo = () => {

  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();

  function handleInputChange(e) {
    setTasks(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setTasks(dispatch(addTodo({task: tasks, id: cuid()})));
    e.target.userInput.value = "";
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Box>
        <TextField
          sx={{ width: "20%", textAlign: "center" }}
          name="userInput"
          type="text"
          required
          label="Add Task"
          onChange={(e) => handleInputChange(e)}
        />
      </Box>
      <Button type="submit" sx={{ mt: 1 }} variant="contained" color="success">
        Add Tasks
      </Button>
    </form>
  );
};

export default AddTodo;
