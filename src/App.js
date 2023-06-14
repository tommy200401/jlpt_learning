import './App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const multipleChoice = []
const choices = ['a', 'b', 'c', 'd']
for (let i = 0; i < 4; i++) {
  multipleChoice.push(
  <FormControlLabel value={choices[i]} control={<Radio />} label={choices[i]} />
  )
}

function App() {
  return (
    <div className="App">
      <h1>JLPT Vocab Learning</h1>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '100px',
        padding: '10px',
      }}>
        <Paper elevation={3} sx={{
          padding: '15px',
        }}>
          <h2>ありがとうございます</h2>
        </Paper>
      </Box>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Answer</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="a"
          name="radio-buttons-group"
        >
          {/* Use mapper to create radio buttons*/}
          {multipleChoice}
        </RadioGroup>
        <Button variant="outlined">Submit</Button>
      </FormControl>

      
    </div>
  );
}

export default App;
