import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';


export default function Layout({
  title = 'Portfolio — Daniel',
  description = 'Portfolio Next.js',
  children,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Nav />
      <main className='container'>{children}</main>
      <Footer />
    </>
  );
}