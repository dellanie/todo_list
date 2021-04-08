import { Button, FormControl,Input,InputLabel } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import "./body.css";
import Todo from "./Todo"
//import db from "./firebase"
//import firebase from "./firebase"

function Body() {
    const [todos,setTodos] = useState(["Hello"]);
    const [input,setInput] = useState("");

    //useEffect(()=>{
        //this codes fires when the app loads
        //db.collection('todos').onSnapshot(snapshot =>{
            //setTodos(snapshot.docs.map(doc => doc.data().todo))  // map every item in the items and returns a todo
        //})
    //}, [])

    const addtodo = (event) => {
        event.preventDefault()
        setTodos([...todos ,input])
        setInput("");
        }

    return(
        <div className="body">
            <div className="body_input">
            
                <form>
                    <FormControl >
                        <InputLabel >Todo</InputLabel>
                            <Input placeholder="Event"  value={input} onChange={event => setInput(event.target.value)}/>
                        
                    </FormControl>
                    <Button disabled={!input} type="submit" onClick={addtodo} variant="contained" color="primary">ADD</Button>
                </form>


                <ul >
                    {todos.map((todo) =>(
                        <Todo text={todo}/>
                        //<li>{todo}</li>
                    ))}
                    
                </ul>

            </div>


        </div>
    )
}

export default Body;