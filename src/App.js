import React from "react";
import TodoList from "./components/todoList";


function App() {
	const todos = [
		{id: 1, title: 'wash dishes', completed: false,},
		{id: 2, title: 'make dinner', completed: true,},
		{id: 3, title: 'wash dishes', completed: false,},
	];
  return (
    <div className="App" data-testid="myApp">
		{
			todos.map((todo)=>(<TodoList todo={todo} />))
		}
    </div>
  );
}

export default App;
