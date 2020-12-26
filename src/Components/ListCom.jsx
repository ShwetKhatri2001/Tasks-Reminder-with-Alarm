import React, { useState } from "react";
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import alarm from "../alarmring.mp3"


const ListCom = (props) => {

   const [editeddate,setEditdate] = useState(props.dateval);
   const [editeditem,setEdititem] = useState(props.itemval);

   const itemEditEvent = (event) => {
        setEdititem(event.target.value);
   }

   const dateEditEvent = (event) => {
       setEditdate(event.target.value);
   } 
   
   const taskcompleted = (event) => {
  
    props.setObjects(props.arrayofobj.map((obj)=>{
      if(obj.id === props.id)
      {
        return {
          ...obj,completed: !obj.completed
        }
       
      }
      return obj;
    })
    )      
    

   }

   const taskeditstarted = (event) => {
    props.setObjects(props.arrayofobj.map((obj)=>{
      if(obj.id === props.id)
      {
        return {
          ...obj,edited:true
        }
       
      }
      return obj;
    })
    )  
      
   }
    
   const taskeditended = (event) => {
    props.setObjects(props.arrayofobj.map((obj)=>{
      if(obj.id === props.id)
      {
        return {
          itemVal:editeditem,dateVal:editeddate,futuretask:true,edited:false,completed: false,id:obj.id
        }
       
      }
      return obj;
    })
    )  
      
   }

   
   
  

  let count = 0 ,alarmcnt;
  const givendatetime = new Date(props.dateval.replace('T', ' ')).toLocaleString('en-GB');
  
  
  if(props.currentdatetime === givendatetime)
   {
    
    
    const playalarm =() =>{
      count++;
      
      if(count === 2)
         {
           
           clearInterval(alarmcnt);
           
         }
      
      props.setObjects(props.arrayofobj.map((obj)=>{
        if(obj.id === props.id)
        {
          return {
            ...obj,futuretask: false
          }
         
        }
        return obj;
      })
      ) 
        let alarmsound = new Audio(alarm);
        alarmsound.play();
         
        if(count === 2)
        {
          props.setObjects(props.arrayofobj.map((obj)=>{
            if(obj.id === props.id)
            {
              return {
                ...obj,futuretask: true
              }
             
            }
            return obj;
          })
          ) 
        }
     }
     

     
        alarmcnt = setInterval(  playalarm ,11000);
         
        
   }
  

  return (
    
    <div className="todo_style" >
      
      { props.edited ? (
        <>
        <input
        className="additem edititem bigbtn"
        type="text"
        value={editeditem}
        placeholder="Edit Task"
        onChange={itemEditEvent}
        id="edititem"
         autoComplete="off"
        />
        
        <input className="datetime editdt bigbtn" type="datetime-local" id="editdatetime" name="taskdatetime" onChange={dateEditEvent}
        value={editeddate}  autoComplete="off"/>
       
        <span className="bigbtn">
        <ThumbUpIcon onClick={taskeditended} className=" editIcon "/>
        </span>
        
        </> 
      )
      :
      (<>
      <span onClick={taskcompleted} className="bigbtn">
      <DoneOutlineIcon className={ props.completed ? "doneIcon CompletedIcon" : "doneIcon"}/>
      </span>
      
      <li className="bigbtn">
      <div className={props.completed ? "itemdiv itdiv completetask" : 
                             ( props.futuretask ? "itemdiv itdiv" :"itemdiv itdiv timeup")}>
        {props.itemval}
        
      </div>

      
      <div  className={props.completed ? "timediv itdiv completetask" :
                     (props.futuretask ? "timediv itdiv" :"timediv itdiv timeup")}>
        {new Date(props.dateval.replace('T', ' ')).toLocaleString('en-GB')}
      
      </div>
      
      </li>
         
      <span onClick={taskeditstarted} className="bigbtn">
          <EditIcon className="editIcon"/>    
      </span>
      <span onClick={() => {props.onremove(props.id)}} className="bigbtn">    
        <ClearIcon  className="deleteIcon" />  
      </span>
      </>)
     }

      
      {props.edited ? 
      (
        <>
      <li className="small_list">
      <input
        className="additem smalledititem"
        type="text"
        value={editeditem}
        placeholder="Edit Task"
        onChange={itemEditEvent}
        id="edititem"
         autoComplete="off"
        />
        
        <input className="datetime smalleditdt" type="datetime-local" id="editdatetime" name="taskdatetime" onChange={dateEditEvent}
        value={editeddate}  autoComplete="off"/>
       
        <ThumbUpIcon onClick={taskeditended} className="editIcon thumbsup"/>
      
      <hr/>
      </li>
      </>)
      :
      (<>
      <li className="small_list">
      <div className="threebtns">
         <span onClick={taskcompleted}>
          <DoneOutlineIcon className={ props.completed ? "doneIcon CompletedIcon" : "doneIcon"}/>
          </span>
          <span onClick={taskeditstarted} >
          <EditIcon className="editIcon"/>    
         </span>
         <span onClick={() => {props.onremove(props.id)}}>    
               <ClearIcon  className="deleteIcon" />  
        </span>

      </div>
      <div className="small_div">
     
         <div className={props.completed ? "small_checkitem itdiv completetask" : 
                             ( props.futuretask ? "small_checkitem itdiv" :"small_checkitem itdiv timeup")}>
          {props.itemval}
        
         </div>
         
          
          <div  className={props.completed ? "small_crosstime itdiv completetask" :
                     (props.futuretask ? "small_crosstime itdiv" :"small_crosstime itdiv timeup")}>
          {new Date(props.dateval.replace('T', ' ')).toLocaleString('en-GB')}
      
           </div>
                 
      </div>
      
      <hr/>
      </li>
      </>)
      }
    </div>
    
  );
};


export default ListCom;
