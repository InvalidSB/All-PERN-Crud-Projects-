import React, { useState, useEffect } from "react";

import { useModal } from "react-hooks-use-modal";
function EditTodo(props) {
  const { todo } = props;

  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });

  const [description,setDescription]= useState(todo.description)

  const handleUpdate=async(id)=>{
      try {
          const body= {description};
          const response = await fetch(`http://localhost:5000/todos/${id}`,{
              method:"PUT",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(body)
          })
          console.log(response)
          window.location='/'

          
      } catch (err) {
          console.log(err.message)
      }
  }
  return (
    <div>
      <div>
        {/* <p>Modal is Open? {isOpen ? 'Yes' : 'No'}</p>*/}
        <button onClick={open} className="button">
          Edit
        </button>
        <Modal>
          <div>
            

            <input
              placeholder="Edited todos here..."
                onChange={(e) => setDescription(e.target.value)}
              value={description}
              style={{
                outline: "none",
                border: "none",
                fontSize: 14,
                padding: "8px 15px",
                fontFamily: "Poppins",
                marginBottom:30
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <button
                onClick={(() => handleUpdate(todo.todo_id))}
                className="button"
              >
                Update
              </button>
              <button onClick={close}>Close</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default EditTodo;
