import type { Metadata } from 'next';
import PageHero from '@/app/components/PageHero';
import ServicesGrid from '@/app/components/ServicesGrid';

export const metadata: Metadata = {
  title: 'Our Moving Services | Jax Moving',
  description: 'From local residential moves to cross-country relocation and white-glove packing, see all of Jax Moving\'s flat-rate services.',
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Moving Solutions"
        subtitle="We offer everything from single-item heavy lifting to full-service cross-country relocations. All backed by our flat-rate, zero-hidden-fee guarantee."
      />
      <ServicesGrid />
    </>
  );
}
