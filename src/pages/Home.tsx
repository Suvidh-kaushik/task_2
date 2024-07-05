import Table_Comp from "../components/Table_Comp"
import CheckBox_3 from "../components/CheckBox_3"
import CheckBox_2 from "../components/CheckBox_2"
import { Box, Divider } from "@mui/material"


//Main home page  present at "/home" has both the components 1 and 2
//1)table_Comp is for the table component 

//2)checkbox_3 is for checkbox component of 3 children
//2)checkbox_2 is for checkbox component of 2 children



const Home = () => {
  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" marginTop="20px">
      <Box sx={{fontWeight:"bold"}}>Check-Box Component</Box>
      <Box border="3px solid black" marginTop="30px" padding="10px">
     <CheckBox_2/>
     <CheckBox_3/>
     </Box>
     <Divider/>
     <Divider/>
     <Box marginTop="30px" sx={{fontWeight:"bold"}}>TABLE-Component</Box>
     <Table_Comp/>
     </Box>
    </div>
  )
}

export default Home
