import * as React from 'react';
import Link from 'next/link';

const Navbar: React.FC = ({ }) => {

  return (
    <header>
      <nav>
        <Link href="/">
          <a>Codeit</a>        
        </Link>
        {' '}|{' '}
        <Link href="/courses">
          <a>Courses</a>        
        </Link>
        
      </nav>
    </header>
  )
}
export default Navbar;