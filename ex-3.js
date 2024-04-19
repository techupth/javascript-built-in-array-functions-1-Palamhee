const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getTodoTopics(todos) {
  	return todos.map(gatherTopic);
}

function gatherTopic(todo) {
	return todo.topic;
}

let result = getTodoTopics(todos);
console.log(result)