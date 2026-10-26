import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL    = 'https://arktechlabs.netlify.app';
const SITE_NAME   = 'ArkTech Labs';
const LOGO_URL    = `${SITE_URL}/favicon.png`;
const TWITTER_HANDLE = '@arktechlabs';

/**
 * SEO Component — inserta <title>, <meta> y <script type="application/ld+json">
 * para cada página de forma dinámica y sin duplicados.
 *
 * Props:
 *  title       – título de la página (sin sufijo)
 *  description – descripción de la página
 *  keywords    – palabras clave adicionales (string)
 *  path        – ruta relativa, ej: "/services"
 *  type        – og:type, defecto "website"
 *  schema      – array de objetos JSON-LD adicionales por página
 */
const SEO = ({
  title = 'ArkTech Labs — Agencia de Desarrollo de Software',
  description = 'ArkTech Labs es la agencia líder en desarrollo de software, diseño UI/UX, apps móviles y soluciones cloud en México y España. +150 proyectos entregados.',
  keywords = '',
  path = '/',
  type = 'website',
  schema = [],
}) => {
  const fullTitle    = title.includes('ArkTech') ? title : `${title} | ArkTech Labs`;
  const canonicalUrl = `${SITE_URL}${path}`;

  /* ── JSON-LD base: Organization ── */
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ArkTech Labs',
    alternateName: ['ArkTech', 'Arktech Labs Desarrollo de Software'],
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      'Agencia de desarrollo de software premium en México y España. Especializados en desarrollo web, apps móviles, diseño UI/UX, soluciones cloud e inteligencia artificial.',
    foundingDate: '2016',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 25 },
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Ciudad de México',
        addressCountry: 'MX',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Madrid',
        addressCountry: 'ES',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hola@arktech-labs.com',
      contactType: 'customer service',
      availableLanguage: ['Spanish', 'English'],
    },
    sameAs: [
      'https://twitter.com/arktechlabs',
      'https://www.linkedin.com/company/arktechlabs',
      'https://github.com/arktechlabs',
      'https://www.instagram.com/arktechlabs',
    ],
    areaServed: ['MX', 'ES', 'US', 'CO', 'AR', 'CL'],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 19.4326, longitude: -99.1332 },
      geoRadius: '20000000',
    },
    knowsAbout: [
      'Desarrollo de Software',
      'Diseño UI/UX',
      'Aplicaciones Móviles',
      'React',
      'Node.js',
      'Flutter',
      'AWS',
      'Inteligencia Artificial',
    ],
  };

  /* ── JSON-LD: WebSite + SearchAction ── */
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ArkTech Labs',
    alternateName: 'Arktech Labs Desarrollo de Software',
    url: SITE_URL,
    inLanguage: 'es',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/projects?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  /* ── JSON-LD: ProfessionalService (LocalBusiness) ── */
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ArkTech Labs — Agencia de Desarrollo de Software',
    image: LOGO_URL,
    url: SITE_URL,
    telephone: '+15550000000',
    email: 'hola@arktech-labs.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Paseo de la Reforma 222',
      addressLocality: 'Ciudad de México',
      postalCode: '06600',
      addressCountry: 'MX',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.4326,
      longitude: -99.1332,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
    servesCuisine: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Desarrollo de Software',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desarrollo Web' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aplicaciones Móviles' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño UI/UX' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Soluciones Cloud' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatización con IA' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Optimización SEO' } },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '87',
      bestRating: '5',
    },
  };

  const baseKeywords = [
    'ArkTech Labs',
    'arktech labs desarrollo de software',
    'agencia desarrollo software Mexico',
    'desarrollo web profesional',
    'aplicaciones moviles iOS Android',
    'diseño UI UX',
    'React Next.js Node.js',
    'agencia digital Mexico',
    'software a medida',
    'desarrollo software empresa',
    'cloud AWS',
    'inteligencia artificial automatizacion',
    keywords,
  ]
    .filter(Boolean)
    .join(', ');

  const allSchemas = [orgSchema, websiteSchema, serviceSchema, ...schema];

  return (
    <Helmet>
      {/* ── Básicos ── */}
      <html lang="es" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={baseKeywords} />
      <meta name="author" content="ArkTech Labs" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="theme-color" content="#7c3aed" />
      <link rel="canonical" href={canonicalUrl} />

      {/* ── Hreflang ── */}
      <link rel="alternate" hreflang="es" href={canonicalUrl} />
      <link rel="alternate" hreflang="es-MX" href={canonicalUrl} />
      <link rel="alternate" hreflang="es-ES" href={canonicalUrl} />
      <link rel="alternate" hreflang="x-default" href={canonicalUrl} />

      {/* ── Geo ── */}
      <meta name="geo.region" content="MX" />
      <meta name="geo.placename" content="Ciudad de México" />
      <meta name="geo.position" content="19.4326;-99.1332" />
      <meta name="ICBM" content="19.4326, -99.1332" />
      <meta name="language" content="Spanish" />
      <meta name="content-language" content="es" />

      {/* ── Open Graph ── */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={LOGO_URL} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="ArkTech Labs — Agencia de Desarrollo de Software" />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:locale:alternate" content="es_ES" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={LOGO_URL} />
      <meta name="twitter:image:alt" content="ArkTech Labs" />

      {/* ── JSON-LD Structured Data ── */}
      {allSchemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
