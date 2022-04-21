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
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  }
})

export default theme
