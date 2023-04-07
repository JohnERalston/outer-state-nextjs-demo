import { Footer } from '../src/Footer';
import { Nav } from '../src/Nav';

import '../styles/globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
