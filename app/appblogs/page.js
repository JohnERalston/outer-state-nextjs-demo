import { AppBlogs } from '../../src/AppBlogs';
import { Info } from '../../src/Info';

const getBlogs = async () => {
  const resp = await fetch('https://gorest.co.in/public/v2/posts');
  return resp.json();
};

export default async function Page() {
  const blogs = await getBlogs();

  return (
    <>
      <Info />
      <h3>/app/appblogs/page.js</h3>
      <AppBlogs blogs={blogs} />
    </>
  );
}
