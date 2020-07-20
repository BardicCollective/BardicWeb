import HelloWorld from '@components/hello-world'
import Nav from '@components/SiteNav';

export default function Home() {
  return (
    <div className="app">
      <Nav></Nav>
      <HelloWorld />
    </div>
  )
}
