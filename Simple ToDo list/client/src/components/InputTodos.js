import React,{useState} from 'react';

function InputTodos() {

    const [description,setDescription]= useState()

    const handleSubmit=async (e)=>{
        try {
            const body= {description};
            const response =await fetch('http://localhost:5000/todos',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            setDescription("")
            console.log(response)
            window.location='/'

            
        } catch (err) {
            console.log(err.message)
        }
    }

  return <div style={{width:"20%",margin:"30px auto"}}>
      <div style={{display:"flex",alignItems:"center"}} >
          <input placeholder='Enter todos here...' onChange={e=>setDescription(e.target.value) }  value={description}
          style={{outline:"none",border:"none",fontSize:14,padding:"8px 15px",fontFamily:"Poppins"}}
          />
          <button onClick={()=>handleSubmit()} className="button">Add</button>
      </div>
  </div>;
}

export default InputTodos;
