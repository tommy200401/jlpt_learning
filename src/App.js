import './App.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

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
    </div>
  );
}

export default App;
