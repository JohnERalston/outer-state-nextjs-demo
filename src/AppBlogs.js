'use client';

import { BlogList } from './BlogList';
import { FilterField } from './FilterField';
import { useBlogStateHydrator } from './useBlogStateHydrater';

export function AppBlogs(props) {
  useBlogStateHydrator(props.blogs);

  return (
    <div>
      <div className="mb-1">
        <FilterField />
      </div>
      <BlogList />
    </div>
  );
}
