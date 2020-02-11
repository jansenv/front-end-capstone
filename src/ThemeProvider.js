import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#722f37',
    },
    error: {
      main: '#ff1744',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;