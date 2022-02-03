import React, { useEffect, useState } from "react";
import "./App.css";
import InputTodos from "./components/InputTodos";
import EditTodo from "./components/EditTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter(each => each.todo_id !== id))
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };


  return (
    <div>
      <div
        style={{
          backgroundColor: "tomato",
          padding: 30,
          fontFamily: "Poppins",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: 25 }}>Simple TODO App</h1>
      </div>
      <InputTodos />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          width: "80%",
          margin: "30px auto",
          justifyContent: "space-between",
        }}
      >
        {todos.map((each) => {
          return (
            <div
              style={{
                width: "20%",
                marginBottom: 30,
                padding: 20,
                borderRadius: 10,
                backgroundColor: "cyan",
                boxShadow: "2px 3px 5px black",
              }}
              key={each.todo_id}
            >
              <p style={{ fontFamily: "Poppins" }}> {each.description}</p>
              <div style={{display:"flex",alignItems:"center",flexDirection:"row"}}>

              <EditTodo todo={each}/>
              
              <button onClick={()=>handleDelete(each.todo_id)} className="button">Delete</button>
            </div>
            </div>
          );
        })}
      </div>
     
    </div>
  );
}

export default App;
