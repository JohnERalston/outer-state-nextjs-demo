export const FilterField = (onFilter) => {
  return (
    <div>
      <label>
        Filter Blogs:{' '}
        <input type="text" onChange={(e) => onFilter(e.target.value)} />
      </label>
    </div>
  );
};
