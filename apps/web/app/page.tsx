import { Suspense } from 'react';
import Image from 'next/image';

import { Link } from '@repo/api/links/entities/link.entity';

import { Card } from '@repo/ui/card';
import styles from './page.module.css';

const Gradient = ({
  conic,
  className,
  small,
}: Readonly<{
  small?: boolean;
  conic?: boolean;
  className?: string;
}>) => {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  );
};

const LinksSection = async () => {
  const fetchLinks = async (): Promise<Link[]> => {
    try {
      return await (await fetch('http://localhost:3000/links')).json();
    } catch (_) {
      return [];
    }
  };

  const links = await fetchLinks();

  return (
    <div className={styles.grid}>
      {links.map(({ title, url, description }) => (
        <Card className={styles.card} href={url} key={title} title={title}>
          {description}
        </Card>
      ))}
    </div>
  );
};

const LinksSectionForTest = () => {
  return (
    <div className={styles.grid}>
      <Card className={styles.card} href={'url'} title={'title'}>
        description
      </Card>
    </div>
  );
};

const RootPage = ({ params }: { params: { forTest?: boolean } }) => {
  return (
    <main className={styles.main}>
      <h1>Postahead</h1>
    </main>
  );
};

export default RootPage;
