
import React, { useEffect, useState } from "react";
import ListObj from "./ListCom";
import AddTasks from "./AddTasks";
import SearchTasks from "./SearchTasks";


const ToDoList = () => {

  const [item, setItem] = useState("");
  const [date, setDate] = useState("");
  const [arrayofobj, setObjects] = useState([]);
  const [clicktime ,setclicktime] = useState("");
  const [searchitem,setSearchItem] = useState("");
  const [searchdate,setSearchDate] = useState("");
  const [searcharr,setSearcharr] = useState([]);
  const [radioval, setRadioval] = React.useState('All');
  const [currentdatetime,setTime] = useState("");

  
  useEffect(() => {
    
    var timerID = setInterval( () => tick(), 1000 );
    return function cleanup() {
        clearInterval(timerID);
      };
   });
  
     function tick() {
      setTime(new Date().toLocaleString('en-GB'));
     }
 
   

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const dateEvent = (event) => {
      setDate(event.target.value);
      document.getElementById('taskdatetime').style.color = 'white';
  }

  const SearchIEvent = (event) => {
    setSearchItem(event.target.value);
    
  }
   
  

  const SearchDEvent = (event) => {
    setSearchDate(event.target.value);
    document.getElementById('searchdatetime').style.color = 'white';
  }

const selectoneradio = (event) =>{
    setRadioval(event.target.value);
    
  }
 

         

  const RemoveItem = (rid) =>{
    console.log(rid);
    
    
     
    setObjects((prevValue) => {
      return prevValue.filter((obj) => {
            return obj.id !== rid;
      });
    });
     
  }
  
  const AddItems = () => {

    setclicktime(new Date());
    

    if(item && date)
       {
        

        setObjects((prevValue) => {
          return [...prevValue, {itemVal:item,dateVal:date,completed:false,futuretask:true,id:Math.floor(Math.random()*10000)}];
        })

        

       }
        
       setItem("");
    
    
      setDate("");


  }


    useEffect(()=>{
    
      switch(radioval){
      
        case 'Completed':
               setSearcharr(arrayofobj.filter( (obj) =>{return obj.completed === true && obj.itemVal.toLowerCase().includes(searchitem.toLowerCase())
                && obj.dateVal.toLowerCase().includes(searchdate.toLowerCase())}))
               break;
        case 'UnCompleted':
               setSearcharr(arrayofobj.filter( (obj) =>{return obj.completed === false && obj.itemVal.toLowerCase().includes(searchitem.toLowerCase())
                && obj.dateVal.toLowerCase().includes(searchdate.toLowerCase())}))
               break;
        default:
               setSearcharr(arrayofobj.filter( (obj) =>{return obj.itemVal.toLowerCase().includes(searchitem.toLowerCase())
                && obj.dateVal.toLowerCase().includes(searchdate.toLowerCase())}));
               break;
       }
      
     }
  ,[radioval,arrayofobj,searchitem,searchdate]);
  

  return (
    <>
      <div className="main_div">
        <div className="center_div">

          
          <AddTasks item={item} itemEvent={itemEvent} dateEvent={dateEvent} date={date} AddItems={AddItems}/>
          
          <SearchTasks searchitem={searchitem} SearchIEvent={SearchIEvent} 
          searchdate={searchdate} SearchDEvent={SearchDEvent} radioval={radioval}
          selectoneradio={selectoneradio}
          />


          <ol>
                 
            { 
              
              searcharr.map((val, index) => {
              
              return <ListObj key={index} id={val.id} 
              itemval={val.itemVal} 
              dateval={val.dateVal}  
              onremove={RemoveItem}
              clicktime={clicktime}
              completed={val.completed}
              futuretask={val.futuretask}
              arrayofobj = {arrayofobj}
              setObjects={setObjects}
              currentdatetime={currentdatetime}
              /> 
              })
              
            
            } 
             


          </ol>
          <br />
          
        </div>
      </div>
    </>
  );
};

export default ToDoList;