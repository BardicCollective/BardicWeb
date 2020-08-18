import '../styles/styles.scss'
import SiteNav from '@components/SiteNav';
import { ThemeProvider } from '../contexts/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <SiteNav>
        <Component {...pageProps} />
      </SiteNav>
    </ThemeProvider>
  );
}

export default MyApp
