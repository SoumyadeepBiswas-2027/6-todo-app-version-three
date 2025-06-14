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
      {/* <div className="items-container">
        <TodoItem  todoDate="4/10/2023" todoName="Buy Milk"></TodoItem>
         <TodoItem  todoDate="4/10/2023" todoName="Go to College"></TodoItem>
        {/* <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2> */}
      {/* </div> */} 
    </center>
  );
}

export default App;
