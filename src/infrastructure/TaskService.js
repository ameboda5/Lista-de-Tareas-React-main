export class TaskService {
    getTask = async () => {
      return fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
        method: "GET",
      })
        .then((resp) => resp.json())
        .then((data) => data)
        .catch((error) => console.log(error));
    };
  
    postTask = async (newTask) => {
      return fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      })
        .then((resp) => resp.json())
        .then((data) => data)
        .catch((error) => console.log(error));
    };
  }
  