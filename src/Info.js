export function Info() {
  return (
    <p className="info">
      This nextjs app users the{' '}
      <a href="https://github.com/JohnERalston/outer-state">outer-state</a>{' '}
      library.
      <br />
      <code>/pages/</code> is the old nextjs implementation.
      <br />
      <code>/app/</code> is the newer nextjs 13 implementation.
      <br />
      <br />
      A demo outer-state store is hydrated from server-side props.
      <br />
      This store is then used to update state from within vanilla JavaScript
      code.
    </p>
  );
}
