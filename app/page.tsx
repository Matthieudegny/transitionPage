import { Anchor } from '@/components/anchor/Anchor';
import { PageTransition } from '@/components/page-transition/PageTransition';

export default function Home() {
  return (
    <>
      <PageTransition pageTitle="Home" />
      <main className="page-center">
        <Anchor href="/page1">To Page 1</Anchor>
        <Anchor href="/page2">To Page 2</Anchor>
      </main>
    </>
  );
}
