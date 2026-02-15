import { siteData } from './siteData';
import { siteDataFr } from './siteDataFr';

/**
 * Get site data based on locale
 * @param locale - The current locale ('en' or 'fr')
 * @returns The appropriate siteData object
 */
export function getSiteData(locale: string) {
    return locale === 'fr' ? siteDataFr : siteData;
}

