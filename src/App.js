import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { theme } from './configs';
import store from './features/store';
import { Routing } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routing />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
