import {Stack,Box,TextField,FormControl,FormLabel,FormControlLabel,Radio,RadioGroup, Switch,Checkbox, FormGroup, MenuItem,Paper,Button,Dialog,DialogTitle} from '@mui/material';
import {useState} from 'react';  
const D = () => {
    const [value,setvalue] = useState("");
    const [rad,setrad] = useState("");
    const [open,setopen] = useState(false);
    
  return (
    <Paper className = "P" sx = {{padding:"32px"}} elevation={4}>
        <Stack spacing = {1}>
        <Stack  className='S'>Simple Form</Stack>
        <Stack>
            <FormControlLabel control = {<Switch  color = "primary" size = "medium" />} label = "Mode"></FormControlLabel>
        </Stack>
      <Stack spacing = {2} direction="row">
        <TextField label  = "Name" variant = "outlined" required value = {value} onChange = {(e) => setvalue(e.target.value)}
        error = {!value}
        helperText  = {
            (!value) ? "Required" : "Change"
        }>
        </TextField>
        <TextField label  = "Password" variant = "outlined" required type= "password">
        </TextField>
      </Stack>
      <Box>
        <FormControl sx = {{color  : "blue"}} >
            <FormLabel id = "J" sx= {{color:"black"}} >Gender</FormLabel>
            <RadioGroup name = "J" value  = {rad}  row>
                <FormControlLabel control={<Radio />} label = "Male" value = "Male"></FormControlLabel>
                <FormControlLabel control={<Radio />} label = "Female" value = "Female"></FormControlLabel>
            </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl sx = {{color :"blue"}}>
            <FormLabel  sx= {{color:"black", size :"medium"}}>Skills</FormLabel>
            <FormGroup row>
                <FormControlLabel control={<Checkbox />} label = "HTML" value = "HTML"></FormControlLabel>
                <FormControlLabel control={<Checkbox />} label = "CSS" value = "CSS"></FormControlLabel>
                <FormControlLabel control={<Checkbox />} label = "JS" value = "JS"></FormControlLabel>
            </FormGroup>
        </FormControl>
      </Box>
      <Box width = "250px">
        <TextField label = "Sports" variant = "outlined" select fullWidth>
            <MenuItem value = "Cricket">Cricket</MenuItem>
            <MenuItem value = "Kabaddi">Kabaddi</MenuItem>
            <MenuItem value = "Badminton">Badminton</MenuItem>
        </TextField>
      </Box>
      <Stack spacing = {2} direction="row">
      <Button variant = "contained" color = "primary" onClick = {() =>setopen(true)}>Submit</Button>
      <Dialog open = {open} className = "A"
      onClose = {() =>setopen(false)}aria-labelledby = "dialog-title" aria-description = "dialog-description">
        <DialogTitle className='D'><div className='a'>Success</div></DialogTitle>
      </Dialog>

      </Stack>
    </Stack>
    </Paper>
  )
}

export default D
