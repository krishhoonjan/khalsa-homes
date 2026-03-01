interface HeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export default function Head({
  title = 'Khalsa Properties - Premium Real Estate in Pune',
  description = 'Khalsa Properties is Pune\'s premier real estate agency with 500+ properties sold, RERA certified, and trusted by thousands. Expert guidance for buying, selling, and investing in properties.',
  canonical = 'https://khalsaproperties.com',
  ogImage = 'https://static.wixstatic.com/media/011e47_3fe23bb4d7ad4ac682e7b4f0b11e0878~mv2.png',
  ogType = 'website'
}: HeadProps) {
  // Update document head on mount
  React.useEffect(() => {
    // Update title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      let tag = document.querySelector(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      ) as HTMLMetaElement;
      
      if (!tag) {
        tag = document.createElement('meta');
        if (isProperty) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.content = content;
    };
    
    // Basic SEO
    updateMetaTag('description', description);
    updateMetaTag('keywords', 'real estate, properties, Pune, RERA certified, property buying, property selling, investment');
    updateMetaTag('author', 'Khalsa Properties');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    
    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', canonical, true);
    
    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
    
    // Structured Data - Organization
    const orgScript = document.querySelector('script[data-org-schema]');
    if (orgScript) {
      orgScript.remove();
    }
    const newOrgScript = document.createElement('script');
    newOrgScript.type = 'application/ld+json';
    newOrgScript.setAttribute('data-org-schema', 'true');
    newOrgScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Khalsa Properties',
      description: description,
      url: canonical,
      logo: ogImage,
      telephone: '+91 959595 3333',
      email: 'info@khalsaproperties.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Wanowrie, Jagtap Chowk',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        postalCode: '411040',
        addressCountry: 'IN'
      },
      priceRange: '$'
    });
    document.head.appendChild(newOrgScript);
    
    // Structured Data - LocalBusiness
    const bizScript = document.querySelector('script[data-biz-schema]');
    if (bizScript) {
      bizScript.remove();
    }
    const newBizScript = document.createElement('script');
    newBizScript.type = 'application/ld+json';
    newBizScript.setAttribute('data-biz-schema', 'true');
    newBizScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Khalsa Properties',
      image: ogImage,
      description: description,
      telephone: '+91 959595 3333',
      email: 'info@khalsaproperties.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Wanowrie, Jagtap Chowk',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        postalCode: '411040',
        addressCountry: 'IN'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00'
        }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '500'
      }
    });
    document.head.appendChild(newBizScript);
  }, [title, description, canonical, ogImage, ogType]);

  return null;
}

import React from 'react';
