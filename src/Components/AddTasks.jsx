import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const AddTasks = (props) =>{
    return(
    <>
       

<h3>Give me your Tasks ! I'll Remember Them</h3>

<br />

<div>
<label  className="labeltext" htmlFor="additem">Enter Task :</label>
<input
  className="additem"
  type="text"
  value={props.item}
  placeholder="Add a Task"
  onChange={props.itemEvent}
  id="additem"
  autoComplete="off"
/>

</div>


<div className="timeplus">
 <label  className="labeltext" htmlFor="taskdatetime" >Task Date & Time :</label>
 <input className="datetime" type="datetime-local" id="taskdatetime" name="taskdatetime" onChange={props.dateEvent}
  value={props.date}  autoComplete="off"/>
 
 <Button variant="contained" className="plusBtn" onClick={props.AddItems}>
   <AddIcon className="plusIcon" />
</Button>

</div>


    
    
    </>)
}

export default  AddTasks; ;