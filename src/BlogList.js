export const BlogList = ({ blogs }) => {
  return (
    <div>
      <table>
        <colgroup>
          <col width="15%"></col>
          <col width="85%"></col>
        </colgroup>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(({ id, title }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
