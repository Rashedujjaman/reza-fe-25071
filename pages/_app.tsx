import { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MovieProvider } from '../context/MovieContext';

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
    <ChakraProvider theme ={theme}>
      <MovieProvider >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </MovieProvider>
    </ChakraProvider>
  );
}

export default MyApp;
