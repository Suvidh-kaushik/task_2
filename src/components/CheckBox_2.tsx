
import { Collapse, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import { ExpandLessOutlined, ExpandMoreOutlined } from '@mui/icons-material';

type event= React.ChangeEvent<HTMLInputElement>;


export default function CheckBox_2() {
  const [checked, setChecked] = useState([false, false]);
  const[expand,setexpand]=useState(true);



  const handleToggle=()=>{
    setexpand(!expand);
  }

  const handleChange1 = (event:event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: event) => {
    setChecked([checked[0], event.target.checked]);
  };


  const children = (
    <Collapse sx={{marginLeft:"40px"}} in={expand}>
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="support"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="customer_success"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
    </Collapse>
  );

  return (
    <div>
       <IconButton onClick={handleToggle}>
 {expand?<ExpandLessOutlined/>:<ExpandMoreOutlined/>}
      </IconButton>
      <FormControlLabel
        label="customer_service (2)"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
  );
}
