import { GalleryPageContent } from '@/components/GalleryPageContent';

export default async function GalleryPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    return <GalleryPageContent locale={locale} />;
}
