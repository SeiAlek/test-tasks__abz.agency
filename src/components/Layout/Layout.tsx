import React from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from '../Footer';
import { Header } from '../Header';
import './Layout.scss';

interface Props {
  title?: string;
  children: JSX.Element;
}

export const Layout = ({
  children,
  title = 'TestTask',
}: Props): JSX.Element => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
    </Helmet>

    <Header />
    <main className="Layout">
      {children}
    </main>
    <Footer />
  </>
);
