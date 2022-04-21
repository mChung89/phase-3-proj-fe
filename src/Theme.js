<<<<<<< HEAD
import { createTheme } from '@mui/material';
import { deepPurple, amber } from '@mui/material/colors';


const theme = createTheme({
    palette: {
        primary: {
          main: deepPurple[500]
        },
        secondary: {
          main: amber[500],
          contrastText: deepPurple[500]
        }
    }
})


export default theme;
=======
import { createTheme } from "@mui/material";
import { fontFamily } from "@mui/system";

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#e53935',
    },
    secondary: {
      main: '#e53935',
    },
    background: {
      default: '#212121',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

export default theme
>>>>>>> adam_day4
