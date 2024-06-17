// pages/_app.tsx
import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MovieProvider } from '../context/MovieContext';
import store from '../redux/store';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient: "linear(to-r, rgba(0,0,0,.8), rgba(0,0,0,1))",
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ReduxProvider store={store}>
        <MovieProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </MovieProvider>
      </ReduxProvider>
    </ChakraProvider>
  );
}

export default MyApp;
