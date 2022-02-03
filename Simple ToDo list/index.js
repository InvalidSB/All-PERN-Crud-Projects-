const express = require("express");
const app = express();

const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//Routes
//all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todos ");
    res.json(allTodos.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todos WHERE todo_id = $1", [
      id,
    ]);

    res.json(todo.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//create todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todos (description) VALUES($1)",
      [description]
    );
    res.json(newTodo);
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
});

//update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTodo = await pool.query(
      "UPDATE todos SET description = $1 WHERE todo_id= $2",
      [description, id]
    );
    res.json(updatedTodo);
    console.log("todo is updated");
  } catch (err) {
    console.log(err.message);
  }
});

//detete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
     const deteteTodo = pool.query("DELETE FROM todos WHERE todo_id = $1",[id])
res.json(deteteTodo)
// console.log("todo is deleted")
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, (req, res) => {
  console.log("Server is runnning on port 5000");
});
