
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <h1>
        Todo App
      </h1>
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export default App;
