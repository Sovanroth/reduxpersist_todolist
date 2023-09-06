import React, { useRef, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../actions";

const TodoItem = ({ task }) => {
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const textRef = useRef(null);

  function editTodoToState(e) {
    e.preventDefault();
    dispatch(editTodo({ message: textRef.current.value, id: task.id }));
    setUpdate(false);
    textRef.current = null;
  }

  const renderForm = () => {
    return (
      <form onSubmit={editTodoToState}>
        {/* <Box>
          <TextField
            sx={{ width: "20%", textAlign: "center" }}
            // name="userInput"
            type="text"
            label="Update Task"
            // onChange={(e) => handleInputChange(e)}
          />
        </Box> */}
        {/* <Box>
          <TextField
            type="text"
            label="Update Task"
            ref={textRef}
            defaultValue={task.task}
            sx={{ width: "20%", textAlign: "center" }}
          ></TextField>
        </Box> */}
        <input ref={textRef} type="text" defaultValue={task.task}></input>
        <Button
          type="submit"
          sx={{ mt: 1 }}
          variant="contained"
          color="success"
        >
          Edit Tasks
        </Button>
      </form>
    );
  };

  const renderItem = () => {
    return (
      <div>
        <Box component="span" sx={{ width: "50%" }}>
          {task.task}
        </Box>
        <Button
          onClick={() => setUpdate(true)}
          type="submit"
          sx={{ mt: 1, ml: 2 }}
          variant="contained"
        >
          Edit
        </Button>
        <Button
          type="submit"
          onClick={() => dispatch(deleteTodo(task.id))}
          sx={{ mt: 1, ml: 1 }}
          variant="contained"
          color="error"
        >
          Delete
        </Button>
      </div>
    );
  };

  return <>{update ? renderForm() : renderItem()}</>;
};

export default TodoItem;
