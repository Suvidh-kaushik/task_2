
import { ExpandLessOutlined, ExpandMoreOutlined } from '@mui/icons-material';
import { Collapse, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';


type event= React.ChangeEvent<HTMLInputElement>;


export default function CheckBox_3() {
  const [checked, setChecked] = useState([false, false,false]);
  const[expand,setexpand]=useState(true);

  const handleChange1 = (event:event) => {
    setChecked([event.target.checked, event.target.checked,event.target.checked]);
  };

  const handleChange2 = (event: event) => {
    setChecked([event.target.checked, checked[1],checked[2]]);
  };

  const handleChange3 = (event: event) => {
    setChecked([checked[0], event.target.checked,checked[2]]);
  };

  const handleChange4 = (event: event) => {
    setChecked([checked[0],checked[1],event.target.checked]);
  };

  const handleToggle=()=>{
    setexpand(!expand);
  }

  const children = (
    <Collapse sx={{marginLeft:"40px"}} in={expand}>
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="graphic_design"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="product_design"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
        <FormControlLabel
        label="web_design"
        control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
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
        label="Design (3)"
        control={
          <Checkbox
            checked={checked[0] && checked[1] &&checked[2]}
            indeterminate={checked[0] !== checked[1] || checked[0]!==checked[2]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
  );
}
