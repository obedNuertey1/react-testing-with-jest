//import React from "react";

//function Todo({todo}){
//	const {id, title, completed} = todo;
//	const h1 = <h1 className="mytodo">{title}</h1>;
//	const text = completed ? <strike>{h1}</strike> : h1;
//	return (
//		<div id="todo" data-testid={`todo-${id}`}>{text}</div>
//	);
//};

//export default Todo;

import React from "react";

function TodoList({todo}){
	const {id, title, completed} = todo;
	const h1 = <h2 className="mytodo">{title}</h2>;
	const text = completed ? <strike>{h1}</strike> : h1;

	return (
		<div id="todo" data-testid={`todo-${id}`}>
			{text}
		</div>
	);
};


export default TodoList;