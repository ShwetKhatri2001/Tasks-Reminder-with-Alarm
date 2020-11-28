import React from "react";
import ClearIcon from '@material-ui/icons/Clear';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import alarm from "../alarmring.mp3"


const ListCom = (props) => {

   
   
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
         
      <span onClick={() => {props.onremove(props.id)}} className="bigbtn">    
        <ClearIcon  className="deleteIcon " />  
      </span>

      <li className="small_list">
      <div >
          
          <span onClick={taskcompleted}>
          <DoneOutlineIcon className={ props.completed ? "doneIcon CompletedIcon" : "doneIcon"}/>
          </span>
         <div className={props.completed ? "small_checkitem itdiv completetask" : 
                             ( props.futuretask ? "small_checkitem itdiv" :"small_checkitem itdiv timeup")}>
          {props.itemval}
        
         </div>
         
      </div>
      <div >
          
            <span onClick={() => {props.onremove(props.id)}}>    
               <ClearIcon  className="deleteIcon" />  
            </span>

          <div  className={props.completed ? "small_crosstime itdiv completetask" :
                     (props.futuretask ? "small_crosstime itdiv" :"small_crosstime itdiv timeup")}>
          {new Date(props.dateval.replace('T', ' ')).toLocaleString('en-GB')}
      
           </div>
                 
      </div>
      <hr/>
      </li>

    </div>
  );
};


export default ListCom;