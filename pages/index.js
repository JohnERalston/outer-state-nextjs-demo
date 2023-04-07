import { Nav } from '../src/Nav';
import { AppBlogs } from '../src/AppBlogs';
import { Footer } from '../src/Footer';
import { Info } from '../src/Info';

export async function getServerSideProps() {
  const blogs = await fetch('https://gorest.co.in/public/v2/posts').then(
    (data) => data.json()
  );
  return {
    props: { blogs },
  };
}

export default function Home(props) {
  return (
    <>
      <Nav />
      <main>
        <Info />
        <h4>/pages/index.js</h4>
        <AppBlogs blogs={props.blogs} />
      </main>
      <Footer />
    </>
  );
}
