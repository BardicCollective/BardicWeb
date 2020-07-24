import '../styles/styles.scss'
import SiteNav from '@components/SiteNav';

function MyApp({ Component, pageProps }) {
  return <SiteNav><Component {...pageProps} /></SiteNav>
}

export default MyApp
