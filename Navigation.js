import * as React from 'react';

import{
  Box,
  List, 
  ListItem, 
  ListItemButton,
  ListItemIcon, 
  ListItemText,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox
} from '@mui/material';

import AdjustIcon from '@mui/icons-material/Adjust';
import { FilterList } from '@mui/icons-material';

export default function Navigation(props) {
  const sortBy = props.sortBy;
  const filterList = props.filterList;

  const handleSortChange = (event) =>{
    props.setSort(event.target.value);
  }

  const handleFilterChecked = (event) =>{
    if (event.target.checked == true){
      props.setFilters([...filterList, event.target.value]);
      console.log("target value: " + event.target.value);
      console.log("filterList:" + filterList);
    } else {
      const updatedFilters = filterList.filter((filterName) => {
        return filterName != event.target.value;
      })
      props.setFilters(updatedFilters);
      console.log("after updating:" + updatedFilters);
    }
  }

  return (
    <Box sx={{ width: '100%', 
                bgcolor: 'white',
                borderRadius: 8,
                border: 3, borderColor: 'grey.300'}}>
        <FormControl
          sx={{
            padding: 3
          }}>
          <FormLabel id="sort">Sort By</FormLabel>
          <RadioGroup
            onChange={handleSortChange}
            >
              <FormControlLabel value="price" 
                control={<Radio/>}
                label="Price"/>
              <FormControlLabel value="calories" 
                control={<Radio/>}
                label="Calories"/>  
          </RadioGroup>
        </FormControl>

        <FormGroup sx={{padding: 3}}>
          <FormLabel id="filter">Filter By</FormLabel>
          <FormControlLabel value="Dairy-free"
            control={<Checkbox
                        onChange={handleFilterChecked}
                      />} 
            label="Dairy-Free"/>
          <FormControlLabel value="Nut-free"
            control={<Checkbox
                        onChange={handleFilterChecked}
                        />} 
            label="Nut-Free"/>
          <FormControlLabel value="Gluten-free"
            control={<Checkbox
                          onChange={handleFilterChecked}
                        />}  
            label="Gluten-Free"/>
        </FormGroup>
    </Box>  
  );
}

