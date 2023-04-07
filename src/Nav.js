import Link from 'next/link';

export function Nav() {
  return (
    <div className="navLinks">
      <Link href="/">/pages/</Link>
      <Link href="/appblogs">/app/</Link>
    </div>
  );
}
