import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
//imports andc components of TodoItem1 & TodoItem2 are removed as we now use both through single TodoItem component
// import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [{
   name:'Buy Milk',
   dueDate:'4/10/2023',
  },

  {
   name:'Go to College',
   dueDate:'4/10/2023',
  },

  {
   name:'do course work',
   dueDate:'4/10/2023',
  },

];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    
    </center>
  );
}

export default App;
