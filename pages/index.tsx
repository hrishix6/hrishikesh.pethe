import Head from 'next/head';
import Footer from '../components/footer';
import Summary from '../components/summary';
import Navbar from '../components/navbar';
import { Content } from '../components/content';
import Avatar from '../components/avatar';
import SocialLinks from '../components/social.links';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hrishikesh Pethe</title>
        <meta name="description" content="Hrishikesh Pethe personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Content>
          <div className="px-2">
            <div className="flex flex-col">
              <Avatar />
              <SocialLinks />
            </div>
            <Summary />
          </div>
        </Content>
        <Footer />
      </main>
    </>
  );
}
