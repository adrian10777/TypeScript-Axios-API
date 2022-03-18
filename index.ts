import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// interface is used to define the structure of an obj
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {

  // Response.data has properties of:
  //id
  //title
  //completed

  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo With Id: ${id}
  as a title of: ${title}
  Is it finished? ${completed}
`);
}