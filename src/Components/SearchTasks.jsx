
import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';


const SearchTasks = (props) =>{

    return(
     <>
     <div className="searchdiv ">
        <span class="searchitimediv">
            <SearchIcon className="searchIcon" />
              
        <input
          className="searchitem"
          type="text"
          value={props.searchitem}
          placeholder="Search Task..."
          onChange={props.SearchIEvent}
          id="searchitem"
          autoComplete="off"
        />
        </span>
        <span class="searchitimediv">
           <SearchIcon className="searchIcon" />
            <input className="searchdatetime" type="date" 
            id="searchdatetime" name="taskdatetime" onChange={props.SearchDEvent}
            value={props.searchdate}  autoComplete="off"/>
        </span>
     </div>
     <div className="radiodiv big_visible">
     <RadioGroup aria-label="tasktypes" className="radiobtns big_visible" name="tasktypes" 
               value={props.radioval} onChange={props.selectoneradio}>
        <Grid container>
          <Grid item>
        
        <FormControlLabel className="radiooption" value="All" control={<Radio className="radio " color="secondary" />} label="All"  />       
        </Grid>
        <Grid item>
        <FormControlLabel className="radiooption" value="Completed" control={<Radio className="radio " color="secondary"/>} 
        label="Completed" />
        </Grid>
        <Grid item>
        <FormControlLabel className="radiooption" value="UnCompleted" control={<Radio className="radio " color="secondary"/>} label="UnCompleted" /> 
        </Grid>
         </Grid> 
      </RadioGroup>
      </div>
      <div className="small_visible">
      <FormControl component="fieldset" >
      
      <RadioGroup aria-label="tasktypes" name="tasktypes" className="radiobtns" value={props.radioval} onChange={props.selectoneradio}>
        <FormControlLabel value="All" className="radiooption ml" control={<Radio className="radio"/>} label="All" />
        <FormControlLabel value="Completed" className="radiooption ml" control={<Radio className="radio"/>} label="Completed" />
        <FormControlLabel value="UnCompleted" className="radiooption " control={<Radio className="radio"/>} label="UnCompleted" />
        
      </RadioGroup>
    </FormControl>
    </div>
     
     </>)
}     

export default SearchTasks ;