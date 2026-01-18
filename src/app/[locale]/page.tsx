import { siteData } from '@/data/siteData';
import { HeroSearch } from '@/components/HeroSearch';
import { ReviewsSlider } from '@/components/ReviewsSlider';
import { AboutPreview } from '@/components/AboutPreview';
import { PopularDestinations } from '@/components/PopularDestinations';
import { WhyTravelWithUs } from '@/components/WhyTravelWithUs';
import { GalleryPreview } from '@/components/GalleryPreview';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CTASection } from '@/components/CTASection';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await import(`../../../messages/${locale}.json`);

  return (
    <main className="flex flex-col min-h-screen bg-neutral-100">
      {/* 1. Modern Hero Search */}
      <HeroSearch lang={locale} />

      {/* 2. Intro / About Preview */}
      <AboutPreview locale={locale} dict={t.HomePage.AboutPreview} />

      {/* 3. Featured Tours */}
      <PopularDestinations locale={locale} dict={t.HomePage.PopularDestinations} />

      {/* 4. Why Travel With Us */}
      <WhyTravelWithUs dict={t.HomePage.WhyTravel} />

      {/* 5. Reviews - Google Style */}
      <ReviewsSlider reviews={siteData.reviews.items} />

      {/* 6. Gallery Preview - Traveler Stories */}
      <GalleryPreview locale={locale} />

      {/* 7. FAQ */}
      <FAQAccordion />

      {/* 8. CTA */}
      <CTASection locale={locale} dict={t.HomePage.CTA} />
    </main>
  );
}