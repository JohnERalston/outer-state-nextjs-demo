import { createStore } from 'outer-state';

export const blogState = createStore({ blogs: [], originalBlogList: [] });

export function blogStateApi() {
  const filterBlogs = (filter) => {
    const { originalBlogList } = blogState.data();
    const filteredBlogs = originalBlogList.filter(({ title }) =>
      title.includes(filter)
    );
    blogState.updateStore({ blogs: filteredBlogs });
  };

  return {
    filterBlogs,
  };
}
