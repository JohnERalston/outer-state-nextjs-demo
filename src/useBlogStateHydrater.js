import { useRef } from 'react';
import { blogState } from './blogState';

export function useBlogStateHydrator(blogs) {
  const firstRender = useRef(true);
  if (firstRender.current) {
    blogState.updateStore({ blogs, originalBlogList: blogs.slice() });
    firstRender.current = false;
  }
}
