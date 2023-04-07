import { blogState } from './blogState';

const filterList = (filter) => {
  const { originalBlogList } = blogState.data();
  const filteredBlogs = originalBlogList.filter(({ title }) =>
    title.includes(filter)
  );
  blogState.updateStore({ blogs: filteredBlogs });
};

export const FilterField = () => {
  return (
    <div>
      <label>
        Filter Blogs:{' '}
        <input type="text" onChange={(e) => filterList(e.target.value)} />
      </label>
    </div>
  );
};
