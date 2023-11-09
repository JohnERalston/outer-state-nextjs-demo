import { createStore } from 'outer-state';

export const blogState = createStore({ blogs: [], originalBlogList: [] });

function blogStateApiImpl() {
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

export const blogStateApi = blogStateApiImpl();
