'use client';

import { BlogList } from './BlogList';
import { FilterField } from './FilterField';
import { blogState, blogStateApi } from './blogState';

export function AppBlogs(props) {
  const { blogs } = blogState.useStore({
    blogs: [...props.blogs],
    originalBlogList: [...props.blogs],
  });

  return (
    <div>
      <div className="mb-1">
        <FilterField onFilter={blogStateApi.filterBlogs} />
      </div>
      <BlogList blogs={blogs} />
    </div>
  );
}
