import * as React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import Heading from './Heading';

interface IProps {
  title?: string,
  headingWrapperClassName?: string,
  headingContents?: any
}

const Layout: React.FC<IProps> = ({
  children,
  title = "Codeit",
  headingWrapperClassName = "heading-default",
  headingContents = ""
}) => {

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Heading
      wraperClassName = {headingWrapperClassName}
      >
       {headingContents} 
      </Heading>
      {children}
      <Footer />
    </div>
  );
};
export default Layout;