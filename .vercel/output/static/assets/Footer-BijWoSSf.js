import { e as createAstro, f as createComponent, r as renderTemplate, v as renderSlot, w as renderHead, u as unescapeHTML, n as renderScript, m as maybeRenderHead, h as addAttribute, k as renderComponent, l as Fragment } from "./astro/server-Crfne28A.js";
import "kleur/colors";
/* empty css                        */
import "clsx";
const siteConfig = {
  name: "Ez2Fix",
  title: "Professional Garage Door Repair Elmwood Park NJ | Ez2Fix | Licensed Contractor",
  description: "Expert garage door repair & installation in Elmwood Park, NJ. 10-year warranty, professional service, senior discount. Licensed #13VH13553300. Call (201) 554-6769!",
  url: "https://ez2fix.com",
  ogImage: "/og-image.jpg",
  logo: "https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/ez2fix%20logo.png",
  author: "Ez2Fix Team",
  links: {
    phone: "tel:+12015546769",
    email: "mailto:ez2fixllc@gmail.com"
  },
  business: {
    name: "Ez2Fix Garage Door Services",
    address: "389 E 54th St, Elmwood Park, NJ 07407, USA",
    phone: "(201) 554-6769",
    email: "ez2fixllc@gmail.com",
    hours: "7 Days a Week Service Available",
    license: "License #13VH13553300",
    services: [
      "24/7 Emergency Garage Door Repair",
      "Garage Door Spring Repair",
      "Garage Door Opener Installation",
      "New Garage Door Installation",
      "Commercial Garage Door Service",
      "General Garage Door Repair"
    ]
  }
};
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro = createAstro("https://ez2fix.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = siteConfig.title,
    description = siteConfig.description,
    ogImage = siteConfig.ogImage,
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site),
    keywords = "garage door repair, garage door installation, Bergen County, Hudson County, NJ, emergency repair, licensed contractor",
    robotsContent = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  } = Astro2.props;
  const fullTitle = title === siteConfig.title ? title : `${title} | ${siteConfig.name}`;
  return renderTemplate(_a$1 || (_a$1 = __template$1([`<html lang="en" data-astro-cid-37fxchfa> <head><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TDFV4QVJ');<\/script><!-- End Google Tag Manager --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no"><!-- Core Web Vitals & Performance Optimization --><meta name="format-detection" content="telephone=no"><meta http-equiv="x-dns-prefetch-control" content="on"><link rel="preconnect" href="https://qjvikxuhqs1py0go.public.blob.vercel-storage.com"><!-- Critical CSS Inline - Above the Fold Performance --><!-- Primary Meta Tags --><title>`, '</title><meta name="title"', '><meta name="description"', '><meta name="keywords"', '><meta name="robots"', '><meta name="author"', '><meta name="language" content="en-US"><meta name="geo.region" content="US-NJ"><meta name="geo.placename" content="Bergen County, Hudson County"><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:alt" content="Ez2Fix Professional Garage Door Services - Bergen & Hudson Counties NJ"><meta property="og:site_name"', '><meta property="og:locale" content="en_US"><meta property="fb:app_id" content="your-facebook-app-id"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta property="twitter:image:alt" content="Ez2Fix Professional Garage Door Services - Bergen & Hudson Counties NJ"><meta property="twitter:site" content="@ez2fix"><meta property="twitter:creator" content="@ez2fix"><!-- LinkedIn --><meta property="linkedin:owner" content="ez2fix"><!-- Article/Blog specific (if applicable) -->', '<!-- Favicon and Apple Touch Icons --><link rel="icon" type="image/png"', ` sizes="any"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="mask-icon" href="/safari-pinned-tab.svg" color="#D2A63C"><meta name="theme-color" content="#D2A63C"><meta name="msapplication-TileColor" content="#D2A63C"><!-- Preload Critical Resources --><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preconnect" href="https://qjvikxuhqs1py0go.public.blob.vercel-storage.com" crossorigin><link rel="dns-prefetch" href="https://www.google-analytics.com"><link rel="dns-prefetch" href="https://www.googletagmanager.com"><link rel="dns-prefetch" href="https://maps.googleapis.com"><link rel="dns-prefetch" href="https://www.google.com"><!-- Optimized font loading with display=swap --><link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">`, '<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"></noscript><!-- Preload hero video for instant playback --><link rel="preload" as="video" href="https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/ez2fix-hero-background.mp4" type="video/mp4"><!-- Prefetch critical pages --><link rel="prefetch" href="/services"><link rel="prefetch" href="/booking"><link rel="prefetch" href="/contact"><!-- Modern SEO & User Experience --><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="apple-mobile-web-app-title" content="Ez2Fix"><!-- Security Headers --><meta http-equiv="X-Content-Type-Options" content="nosniff"><meta name="referrer" content="strict-origin-when-cross-origin"><!-- PWA Manifest --><link rel="manifest" href="/manifest.json"><!-- Additional head content -->', "<!-- Service Worker Registration -->", '<!-- Enhanced Schema.org JSON-LD for 2025 SEO --><script type="application/ld+json">', "<\/script>", '</head> <body class="min-h-screen bg-background font-sans antialiased" data-astro-cid-37fxchfa> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TDFV4QVJ" height="0" width="0" style="display:none;visibility:hidden" data-astro-cid-37fxchfa></iframe></noscript> <!-- End Google Tag Manager (noscript) --> <!-- Skip Navigation Link for Accessibility --> <a href="#main-content" class="skip-link" data-astro-cid-37fxchfa>Skip to main content</a> ', " </body></html>"])), fullTitle, addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(keywords, "content"), addAttribute(robotsContent, "content"), addAttribute(siteConfig.author, "content"), addAttribute(canonicalURL, "href"), addAttribute(Astro2.url, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(new URL(ogImage, Astro2.url), "content"), addAttribute(siteConfig.business.name, "content"), addAttribute(Astro2.url, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(new URL(ogImage, Astro2.url), "content"), Astro2.url.pathname.includes("/blog/") && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-37fxchfa": true }, { "default": ($$result2) => renderTemplate`<meta property="article:author"${addAttribute(siteConfig.author, "content")}><meta property="article:section" content="Garage Door Services"><meta property="article:tag" content="garage door repair, home improvement, Bergen County NJ">` })}`, addAttribute(siteConfig.logo, "href"), maybeRenderHead(), renderSlot($$result, $$slots["head"]), renderScript($$result, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": siteConfig.url + "#business",
    "name": siteConfig.business.name,
    "alternateName": "Ez2Fix Garage Doors",
    "description": description,
    "url": siteConfig.url,
    "logo": new URL(siteConfig.logo, Astro2.url),
    "image": new URL(ogImage, Astro2.url),
    "telephone": siteConfig.business.phone,
    "email": siteConfig.business.email,
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Check, Credit Card",
    "foundingDate": "2014",
    "slogan": "Professional Garage Door Service You Can Trust",
    "knowsAbout": [
      "Garage Door Repair",
      "Garage Door Installation",
      "Spring Replacement",
      "Garage Door Opener Installation",
      "Emergency Garage Door Service"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "State of New Jersey"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.business.address,
      "addressLocality": "Elmwood Park",
      "addressRegion": "NJ",
      "postalCode": "07407",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.9023",
      "longitude": "-74.1182"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "06:00",
      "closes": "22:00"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.9023",
        "longitude": "-74.1182"
      },
      "geoRadius": "25000"
    },
    "serviceType": siteConfig.business.services,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewBody": "Ez2Fix saved the day! Professional service, fair pricing, and they got our garage door working perfectly. Highly recommend!"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/ez2fixgarage",
      "https://www.yelp.com/biz/ez2fix",
      "https://www.google.com/maps/place/Ez2Fix"
    ]
  })), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/layouts/BaseLayout.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" data-astro-cid-qlfjksao> <div class="container flex h-16 sm:h-20 items-center justify-between" data-astro-cid-qlfjksao> <!-- Logo --> <div class="flex items-center" data-astro-cid-qlfjksao> <a href="/" class="flex items-center" data-astro-cid-qlfjksao> <img src="https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/ez2fix%20logo.png" alt="Ez2Fix - Professional Garage Door Repair & Installation Services" width="200" height="80" loading="eager" decoding="sync" class="h-12 sm:h-16 lg:h-20 w-auto" data-astro-cid-qlfjksao> </a> </div> <!-- Desktop Navigation --> <nav class="hidden lg:flex items-center space-x-8" data-astro-cid-qlfjksao> <!-- Services Dropdown --> <div class="relative group" data-astro-cid-qlfjksao> <button class="text-sm font-semibold hover:text-primary transition-colors flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded px-2 py-1" style="color: #1D1912;" aria-expanded="false" aria-haspopup="true" id="services-menu-button" data-astro-cid-qlfjksao> <span data-astro-cid-qlfjksao>Services</span> <svg class="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-qlfjksao></path> </svg> </button> <!-- Dropdown Menu --> <div class="absolute top-full left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50" data-astro-cid-qlfjksao> <div class="rounded-lg shadow-xl border-2 py-2" style="background-color: #F3F3E6; border-color: #D2A63C;" data-astro-cid-qlfjksao> <a href="/services/emergency-garage-door-repair" class="block px-4 py-3 text-sm font-medium hover:bg-opacity-50 transition-colors" style="color: #1D1912; --hover-bg: rgba(210, 166, 60, 0.1);" onmouseover="this.style.backgroundColor='rgba(210, 166, 60, 0.1)'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #D2A63C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>24/7 Emergency Repair</span> </div> </a> <a href="/services/garage-door-spring-repair" class="block px-4 py-3 text-sm font-medium hover:bg-opacity-50 transition-colors" style="color: #1D1912;" onmouseover="this.style.backgroundColor='rgba(210, 166, 60, 0.1)'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #EECD5C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>Garage Door Spring Repair</span> </div> </a> <a href="/services/garage-door-opener-installation" class="block px-4 py-3 text-sm font-medium hover:bg-opacity-50 transition-colors" style="color: #1D1912;" onmouseover="this.style.backgroundColor='rgba(210, 166, 60, 0.1)'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #BB8525;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>Garage Door Opener Installation</span> </div> </a> <a href="/services/new-garage-door-installation" class="block px-4 py-3 text-sm font-medium hover:bg-opacity-50 transition-colors" style="color: #1D1912;" onmouseover="this.style.backgroundColor='rgba(210, 166, 60, 0.1)'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #D2A63C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>New Garage Door Installation</span> </div> </a> <a href="/services/commercial-garage-door-service" class="block px-4 py-3 text-sm font-medium hover:bg-opacity-50 transition-colors" style="color: #1D1912;" onmouseover="this.style.backgroundColor='rgba(210, 166, 60, 0.1)'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #EECD5C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>Commercial Garage Door Service</span> </div> </a> <a href="/services/general-garage-door-repair" class="block px-4 py-3 text-sm font-medium hover:bg-opacity-50 transition-colors" style="color: #1D1912;" onmouseover="this.style.backgroundColor='rgba(210, 166, 60, 0.1)'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #BB8525;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>General Garage Door Repair</span> </div> </a> <!-- Separator --> <div class="border-t my-2" style="border-color: rgba(187, 133, 37, 0.2);" data-astro-cid-qlfjksao></div> <!-- View All Services Link --> <a href="/services" class="block px-4 py-3 text-sm font-semibold hover:bg-opacity-50 transition-colors" style="color: #D2A63C;" onmouseover="this.style.backgroundColor='rgba(210, 166, 60, 0.1)'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-qlfjksao></path> </svg> <span data-astro-cid-qlfjksao>View All Services</span> </div> </a> </div> </div> </div> <!-- Service Areas Dropdown --> <div class="relative group" data-astro-cid-qlfjksao> <button class="text-sm font-semibold hover:text-primary transition-colors flex items-center space-x-1" style="color: #1D1912;" data-astro-cid-qlfjksao> <span data-astro-cid-qlfjksao>Service Areas</span> <svg class="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-qlfjksao></path> </svg> </button> <!-- Dropdown Menu --> <div class="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50" data-astro-cid-qlfjksao> <div class="rounded-lg shadow-xl border-2 py-2" style="background-color: #F3F3E6; border-color: #D2A63C;" data-astro-cid-qlfjksao> <a href="/service-areas/north-caldwell" class="block px-4 py-3 text-sm font-medium hover:bg-opacity-50 transition-colors" style="color: #1D1912;" onmouseover="this.style.backgroundColor='rgba(210, 166, 60, 0.1)'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #D2A63C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>North Caldwell</span> </div> </a> <a href="/service-areas/west-caldwell" class="block px-4 py-3 text-sm font-medium hover:bg-opacity-50 transition-colors" style="color: #1D1912;" onmouseover="this.style.backgroundColor='rgba(210, 166, 60, 0.1)'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #EECD5C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>West Caldwell</span> </div> </a> <a href="/service-areas/little-falls" class="block px-4 py-3 text-sm font-medium hover:bg-opacity-50 transition-colors" style="color: #1D1912;" onmouseover="this.style.backgroundColor='rgba(210, 166, 60, 0.1)'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #BB8525;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>Little Falls</span> </div> </a> <a href="/service-areas/montclair" class="block px-4 py-3 text-sm font-medium hover:bg-opacity-50 transition-colors" style="color: #1D1912;" onmouseover="this.style.backgroundColor='rgba(210, 166, 60, 0.1)'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #D2A63C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>Montclair</span> </div> </a> <a href="/service-areas/cedar-grove" class="block px-4 py-3 text-sm font-medium hover:bg-opacity-50 transition-colors" style="color: #1D1912;" onmouseover="this.style.backgroundColor='rgba(210, 166, 60, 0.1)'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #EECD5C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>Cedar Grove</span> </div> </a> <a href="/service-areas/fair-lawn" class="block px-4 py-3 text-sm font-medium hover:bg-opacity-50 transition-colors" style="color: #1D1912;" onmouseover="this.style.backgroundColor='rgba(210, 166, 60, 0.1)'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #BB8525;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>Fair Lawn</span> </div> </a> <a href="/service-areas/clifton" class="block px-4 py-3 text-sm font-medium hover:bg-opacity-50 transition-colors" style="color: #1D1912;" onmouseover="this.style.backgroundColor='rgba(210, 166, 60, 0.1)'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #D2A63C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>Clifton</span> </div> </a> <!-- Separator --> <div class="border-t my-2" style="border-color: rgba(187, 133, 37, 0.2);" data-astro-cid-qlfjksao></div> <!-- View All Service Areas Link --> <a href="/service-areas" class="block px-4 py-3 text-sm font-semibold hover:bg-opacity-50 transition-colors" style="color: #D2A63C;" onmouseover="this.style.backgroundColor='rgba(210, 166, 60, 0.1)'" onmouseout="this.style.backgroundColor='transparent'" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-qlfjksao></path> </svg> <span data-astro-cid-qlfjksao>View All Service Areas</span> </div> </a> </div> </div> </div> <a href="/faq" class="text-sm font-semibold hover:text-primary transition-colors" style="color: #1D1912;" data-astro-cid-qlfjksao>
FAQ
</a> <a href="/reviews" class="text-sm font-semibold hover:text-primary transition-colors" style="color: #1D1912;" data-astro-cid-qlfjksao>
Reviews
</a> <a href="/about" class="text-sm font-semibold hover:text-primary transition-colors" style="color: #1D1912;" data-astro-cid-qlfjksao>
About
</a> <a href="/contact" class="text-sm font-semibold hover:text-primary transition-colors" style="color: #1D1912;" data-astro-cid-qlfjksao>
Contact
</a> </nav> <!-- CTA Buttons --> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <!-- Phone CTA --> <a`, ' class="hidden md:flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg" style="background-color: #BB8525; color: #F3F3E6;" data-astro-cid-qlfjksao> <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-qlfjksao></path> </svg>\nCall ', ' </a> <!-- Book Service CTA (Desktop Only) --> <a href="/booking" class="hidden lg:inline-flex items-center px-5 py-2 text-sm font-bold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105" style="background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%); color: #1D1912;" data-astro-cid-qlfjksao> <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-qlfjksao></path> </svg>\nBook Service\n</a> </div> <!-- Mobile CTA Icons & Menu --> <div class="lg:hidden flex items-center space-x-1 sm:space-x-2" data-astro-cid-qlfjksao> <!-- Phone CTA with Number --> <a', ' class="mobile-cta mobile-touch-enhanced inline-flex items-center px-2 sm:px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md text-xs sm:text-sm font-bold whitespace-nowrap focus-enhanced" style="background-color: #BB8525; color: #F3F3E6;" title="Call Now" data-astro-cid-qlfjksao> <svg class="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-qlfjksao></path> </svg> <span class="hidden xs:inline" data-astro-cid-qlfjksao>', '</span> <span class="xs:hidden" data-astro-cid-qlfjksao>Call</span> </a> <!-- Calendar CTA with Text --> <a href="/booking" class="mobile-cta mobile-touch-enhanced inline-flex items-center px-2 sm:px-3 py-2 rounded-lg transition-all duration-300 hover:shadow-md text-xs sm:text-sm font-bold whitespace-nowrap focus-enhanced" style="background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%); color: #1D1912;" title="Book Service" data-astro-cid-qlfjksao> <svg class="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-qlfjksao></path> </svg>\nBook\n</a> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="mobile-touch-enhanced inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 hover:shadow-md focus-enhanced" style="background-color: rgba(210, 166, 60, 0.1); color: #1D1912;" aria-expanded="false" aria-haspopup="true" aria-label="Open navigation menu" data-astro-cid-qlfjksao> <svg id="menu-open" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-qlfjksao></path> </svg> <svg id="menu-close" class="h-6 w-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-qlfjksao></path> </svg> </button> </div> </div> <!-- Mobile Navigation Menu --> <div id="mobile-menu" class="lg:hidden fixed inset-0 top-16 sm:top-20 z-[60] transform translate-x-full transition-transform duration-300 ease-in-out" style="background-color: #F3F3E6;" data-astro-cid-qlfjksao> <div class="h-full overflow-y-auto" data-astro-cid-qlfjksao> <!-- Navigation Links --> <nav class="px-6 py-8" data-astro-cid-qlfjksao> <div class="space-y-6" data-astro-cid-qlfjksao> <!-- Services with Submenu --> <div data-astro-cid-qlfjksao> <button id="mobile-services-toggle" class="w-full text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-md flex items-center justify-between" style="color: #1D1912; background-color: rgba(187, 133, 37, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <svg class="h-5 w-5" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m3 0h4" data-astro-cid-qlfjksao></path> </svg> <span data-astro-cid-qlfjksao>Services</span> </div> <svg id="mobile-services-arrow" class="h-5 w-5 transition-transform" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-qlfjksao></path> </svg> </button> <!-- Services Submenu --> <div id="mobile-services-submenu" class="hidden mt-2 pl-4 space-y-2" data-astro-cid-qlfjksao> <a href="/services/emergency-garage-door-repair" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors hover:shadow-md" style="color: #1D1912; background-color: rgba(238, 205, 92, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #D2A63C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>24/7 Emergency Repair</span> </div> </a> <a href="/services/garage-door-spring-repair" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors hover:shadow-md" style="color: #1D1912; background-color: rgba(238, 205, 92, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #EECD5C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>Garage Door Spring Repair</span> </div> </a> <a href="/services/garage-door-opener-installation" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors hover:shadow-md" style="color: #1D1912; background-color: rgba(238, 205, 92, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #BB8525;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>Garage Door Opener Installation</span> </div> </a> <a href="/services/new-garage-door-installation" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors hover:shadow-md" style="color: #1D1912; background-color: rgba(238, 205, 92, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #D2A63C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>New Garage Door Installation</span> </div> </a> <a href="/services/commercial-garage-door-service" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors hover:shadow-md" style="color: #1D1912; background-color: rgba(238, 205, 92, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #EECD5C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>Commercial Garage Door Service</span> </div> </a> <a href="/services/general-garage-door-repair" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors hover:shadow-md" style="color: #1D1912; background-color: rgba(238, 205, 92, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #BB8525;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>General Garage Door Repair</span> </div> </a> <!-- Separator and View All --> <div class="border-t my-2" style="border-color: rgba(187, 133, 37, 0.2);" data-astro-cid-qlfjksao></div> <a href="/services" class="block py-2 px-4 text-sm font-semibold rounded-lg transition-colors hover:shadow-md" style="color: #D2A63C; background-color: rgba(210, 166, 60, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-qlfjksao></path> </svg> <span data-astro-cid-qlfjksao>View All Services</span> </div> </a> </div> </div> <!-- Service Areas with Submenu --> <div data-astro-cid-qlfjksao> <button id="mobile-areas-toggle" class="w-full text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-md flex items-center justify-between" style="color: #1D1912; background-color: rgba(187, 133, 37, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <svg class="h-5 w-5" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-qlfjksao></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-qlfjksao></path> </svg> <span data-astro-cid-qlfjksao>Service Areas</span> </div> <svg id="mobile-areas-arrow" class="h-5 w-5 transition-transform" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-qlfjksao></path> </svg> </button> <!-- Service Areas Submenu --> <div id="mobile-areas-submenu" class="hidden mt-2 pl-4 space-y-2" data-astro-cid-qlfjksao> <a href="/service-areas/north-caldwell" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors hover:shadow-md" style="color: #1D1912; background-color: rgba(238, 205, 92, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #D2A63C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>North Caldwell</span> </div> </a> <a href="/service-areas/west-caldwell" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors hover:shadow-md" style="color: #1D1912; background-color: rgba(238, 205, 92, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #EECD5C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>West Caldwell</span> </div> </a> <a href="/service-areas/little-falls" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors hover:shadow-md" style="color: #1D1912; background-color: rgba(238, 205, 92, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #BB8525;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>Little Falls</span> </div> </a> <a href="/service-areas/montclair" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors hover:shadow-md" style="color: #1D1912; background-color: rgba(238, 205, 92, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #D2A63C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>Montclair</span> </div> </a> <a href="/service-areas/cedar-grove" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors hover:shadow-md" style="color: #1D1912; background-color: rgba(238, 205, 92, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #EECD5C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>Cedar Grove</span> </div> </a> <a href="/service-areas/fair-lawn" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors hover:shadow-md" style="color: #1D1912; background-color: rgba(238, 205, 92, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #BB8525;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>Fair Lawn</span> </div> </a> <a href="/service-areas/clifton" class="block py-2 px-4 text-sm font-medium rounded-lg transition-colors hover:shadow-md" style="color: #1D1912; background-color: rgba(238, 205, 92, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <div class="w-2 h-2 rounded-full" style="background-color: #D2A63C;" data-astro-cid-qlfjksao></div> <span data-astro-cid-qlfjksao>Clifton</span> </div> </a> <!-- Separator and View All --> <div class="border-t my-2" style="border-color: rgba(187, 133, 37, 0.2);" data-astro-cid-qlfjksao></div> <a href="/service-areas" class="block py-2 px-4 text-sm font-semibold rounded-lg transition-colors hover:shadow-md" style="color: #D2A63C; background-color: rgba(210, 166, 60, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-qlfjksao></path> </svg> <span data-astro-cid-qlfjksao>View All Service Areas</span> </div> </a> </div> </div> <a href="/faq" class="block text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-md" style="color: #1D1912; background-color: rgba(187, 133, 37, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <svg class="h-5 w-5" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-qlfjksao></path> </svg> <span data-astro-cid-qlfjksao>FAQ</span> </div> </a> <a href="/reviews" class="block text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-md" style="color: #1D1912; background-color: rgba(187, 133, 37, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <svg class="h-5 w-5" style="color: #D2A63C;" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" data-astro-cid-qlfjksao></path> </svg> <span data-astro-cid-qlfjksao>Reviews</span> </div> </a> <a href="/about" class="block text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-md" style="color: #1D1912; background-color: rgba(187, 133, 37, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <svg class="h-5 w-5" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-qlfjksao></path> </svg> <span data-astro-cid-qlfjksao>About</span> </div> </a> <a href="/contact" class="block text-lg font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-md" style="color: #1D1912; background-color: rgba(187, 133, 37, 0.1);" data-astro-cid-qlfjksao> <div class="flex items-center space-x-3" data-astro-cid-qlfjksao> <svg class="h-5 w-5" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-qlfjksao></path> </svg> <span data-astro-cid-qlfjksao>Contact</span> </div> </a> </div> </nav> <!-- Mobile CTAs --> <div class="px-6 py-6 border-t" style="border-color: rgba(187, 133, 37, 0.2);" data-astro-cid-qlfjksao> <div class="space-y-4" data-astro-cid-qlfjksao> <!-- Phone CTA --> <a', ' class="flex items-center justify-center w-full py-4 px-6 text-lg font-bold rounded-lg transition-all duration-300 hover:shadow-lg" style="background-color: #BB8525; color: #F3F3E6;" data-astro-cid-qlfjksao> <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qlfjksao> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-qlfjksao></path> </svg>\nCall ', ` </a> <!-- Emergency Notice --> <div class="text-center pt-4" data-astro-cid-qlfjksao> <p class="text-sm font-semibold" style="color: #BB8525;" data-astro-cid-qlfjksao>
🚨 24/7 Emergency Service Available
</p> <p class="text-xs mt-1" style="color: #1D1912;" data-astro-cid-qlfjksao>
Licensed • Insured • Bergen County Trusted
</p> </div> </div> </div> </div> <!-- Overlay for closing menu --> <div id="mobile-menu-overlay" class="absolute inset-0 bg-black bg-opacity-50 -z-10" data-astro-cid-qlfjksao></div> </div> </header> <script>
  // Global function to initialize mobile menu
  function initMobileMenu() {
    // Prevent multiple initializations
    if (window.mobileMenuInitialized) return;
    window.mobileMenuInitialized = true;
    
    console.log('Initializing mobile menu...');
    
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');
    const menuOverlay = document.getElementById('mobile-menu-overlay');
    
    // Mobile services submenu elements
    const mobileServicesToggle = document.getElementById('mobile-services-toggle');
    const mobileServicesSubmenu = document.getElementById('mobile-services-submenu');
    const mobileServicesArrow = document.getElementById('mobile-services-arrow');
    
    // Mobile service areas submenu elements
    const mobileAreasToggle = document.getElementById('mobile-areas-toggle');
    const mobileAreasSubmenu = document.getElementById('mobile-areas-submenu');
    const mobileAreasArrow = document.getElementById('mobile-areas-arrow');
    
    console.log('Mobile menu elements found:', {
      mobileMenuButton: !!mobileMenuButton,
      mobileMenu: !!mobileMenu,
      menuOpen: !!menuOpen,
      menuClose: !!menuClose,
      menuOverlay: !!menuOverlay
    });
    
    if (!mobileMenuButton || !mobileMenu || !menuOpen || !menuClose) {
      console.error('Mobile menu initialization failed - missing elements');
      return;
    }

    // Toggle mobile menu function
    function toggleMobileMenu() {
      console.log('toggleMobileMenu called');
      const isOpen = !mobileMenu.classList.contains('translate-x-full');
      console.log('Menu is currently:', isOpen ? 'open' : 'closed');
      
      if (isOpen) {
        // Close menu
        console.log('Closing menu');
        mobileMenu.classList.add('translate-x-full');
        menuOpen.classList.remove('hidden');
        menuClose.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenuButton.setAttribute('aria-label', 'Open navigation menu');
        
        // Also close submenus when main menu closes
        if (mobileServicesSubmenu && mobileServicesArrow) {
          mobileServicesSubmenu.classList.add('hidden');
          mobileServicesArrow.classList.remove('rotate-180');
        }
        if (mobileAreasSubmenu && mobileAreasArrow) {
          mobileAreasSubmenu.classList.add('hidden');
          mobileAreasArrow.classList.remove('rotate-180');
        }
      } else {
        // Open menu
        console.log('Opening menu');
        mobileMenu.classList.remove('translate-x-full');
        menuOpen.classList.add('hidden');
        menuClose.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'true');
        mobileMenuButton.setAttribute('aria-label', 'Close navigation menu');
      }
      
      console.log('Menu classes after toggle:', mobileMenu.className);
      console.log('Menu has translate-x-full:', mobileMenu.classList.contains('translate-x-full'));
      console.log('Menu computed style transform:', window.getComputedStyle(mobileMenu).transform);
    }

    // Mobile menu button click handler
    function handleMenuButtonTap(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Mobile menu button tapped via:', e.type);
      toggleMobileMenu();
    }

    // Add event listeners
    mobileMenuButton.addEventListener('click', handleMenuButtonTap);
    mobileMenuButton.addEventListener('touchend', handleMenuButtonTap, { passive: false });
    
    // Overlay click to close menu
    if (menuOverlay) {
      menuOverlay.addEventListener('click', toggleMobileMenu);
    }
    
    // Mobile services submenu toggle
    if (mobileServicesToggle && mobileServicesSubmenu && mobileServicesArrow) {
      mobileServicesToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isOpen = !mobileServicesSubmenu.classList.contains('hidden');
        
        if (isOpen) {
          mobileServicesSubmenu.classList.add('hidden');
          mobileServicesArrow.classList.remove('rotate-180');
        } else {
          mobileServicesSubmenu.classList.remove('hidden');
          mobileServicesArrow.classList.add('rotate-180');
        }
      });
    }
    
    // Mobile service areas submenu toggle
    if (mobileAreasToggle && mobileAreasSubmenu && mobileAreasArrow) {
      mobileAreasToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isOpen = !mobileAreasSubmenu.classList.contains('hidden');
        
        if (isOpen) {
          mobileAreasSubmenu.classList.add('hidden');
          mobileAreasArrow.classList.remove('rotate-180');
        } else {
          mobileAreasSubmenu.classList.remove('hidden');
          mobileAreasArrow.classList.add('rotate-180');
        }
      });
    }
    
    // Close mobile menu when clicking on a navigation link
    const mobileLinks = mobileMenu.querySelectorAll('nav a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('translate-x-full');
        menuOpen.classList.remove('hidden');
        menuClose.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      });
    });

    // Close menu on window resize if switching to desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 1024) { // lg breakpoint
        mobileMenu.classList.add('translate-x-full');
        menuOpen.classList.remove('hidden');
        menuClose.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        
        // Also close submenus
        if (mobileServicesSubmenu && mobileServicesArrow) {
          mobileServicesSubmenu.classList.add('hidden');
          mobileServicesArrow.classList.remove('rotate-180');
        }
        if (mobileAreasSubmenu && mobileAreasArrow) {
          mobileAreasSubmenu.classList.add('hidden');
          mobileAreasArrow.classList.remove('rotate-180');
        }
      }
    });
    
    console.log('Mobile menu initialization complete');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
  
  // Fallback initialization
  setTimeout(initMobileMenu, 100);
<\/script> `])), maybeRenderHead(), addAttribute(siteConfig.links.phone, "href"), siteConfig.business.phone, addAttribute(siteConfig.links.phone, "href"), siteConfig.business.phone, addAttribute(siteConfig.links.phone, "href"), siteConfig.business.phone);
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/components/layout/Header.astro", void 0);
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer style="background-color: #1D1912;" class="pt-16 pb-8" data-astro-cid-35ed7um5> <div class="container mx-auto px-4" data-astro-cid-35ed7um5> <!-- Main Footer Content --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12" data-astro-cid-35ed7um5> <!-- Company Info --> <div class="lg:col-span-2" data-astro-cid-35ed7um5> <div class="flex items-center mb-6" data-astro-cid-35ed7um5> <img src="https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/ez2fix%20logo.png" alt="Ez2Fix Logo" class="h-20 w-auto" data-astro-cid-35ed7um5> </div> <p class="text-lg leading-relaxed mb-6 max-w-md text-white" data-astro-cid-35ed7um5>
Hudson & Bergen Counties' trusted garage door repair and installation experts. 
          Licensed, insured, and committed to exceptional service.
</p> <!-- Contact Info --> <div class="space-y-3" data-astro-cid-35ed7um5> <div class="flex items-center space-x-3" data-astro-cid-35ed7um5> <svg class="h-5 w-5 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-35ed7um5></path> </svg> <a${addAttribute(siteConfig.links.phone, "href")} class="font-semibold hover:underline text-white hover:text-yellow-400 transition-colors" data-astro-cid-35ed7um5> ${siteConfig.business.phone} </a> </div> <div class="flex items-center space-x-3" data-astro-cid-35ed7um5> <svg class="h-5 w-5 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-35ed7um5></path> </svg> <a${addAttribute(siteConfig.links.email, "href")} class="hover:underline text-white hover:text-yellow-400 transition-colors" data-astro-cid-35ed7um5> ${siteConfig.business.email} </a> </div> <div class="flex items-center space-x-3" data-astro-cid-35ed7um5> <svg class="h-5 w-5 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-35ed7um5></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-35ed7um5></path> </svg> <span class="text-white" data-astro-cid-35ed7um5> ${siteConfig.business.address} </span> </div> <div class="flex items-center space-x-3" data-astro-cid-35ed7um5> <svg class="h-5 w-5 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-35ed7um5></path> </svg> <span class="text-white" data-astro-cid-35ed7um5> ${siteConfig.business.hours} </span> </div> </div> <!-- Trust Indicators --> <div class="flex items-center justify-center space-x-6 mt-6 pt-6 border-t" style="border-color: rgba(187, 133, 37, 0.3);" data-astro-cid-35ed7um5> <div class="flex items-center space-x-2" data-astro-cid-35ed7um5> <svg class="h-5 w-5" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-35ed7um5></path> </svg> <span class="text-sm font-semibold text-white" data-astro-cid-35ed7um5>Licensed & Insured</span> </div> <div class="flex items-center space-x-2" data-astro-cid-35ed7um5> <svg class="h-5 w-5" style="color: #D2A63C;" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" data-astro-cid-35ed7um5></path> </svg> <span class="text-sm font-semibold text-white" data-astro-cid-35ed7um5>5.0★ Rated</span> </div> </div> </div> <!-- Services --> <div data-astro-cid-35ed7um5> <h3 class="font-bold text-lg mb-4 flex items-center space-x-2" style="color: #F3F3E6;" data-astro-cid-35ed7um5> <svg class="h-5 w-5 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" data-astro-cid-35ed7um5></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-35ed7um5></path> </svg> <span data-astro-cid-35ed7um5>Services</span> </h3> <ul class="space-y-2" data-astro-cid-35ed7um5> ${siteConfig.business.services.map((service) => renderTemplate`<li data-astro-cid-35ed7um5> <a${addAttribute(service === "24/7 Emergency Garage Door Repair" ? "/services/emergency-garage-door-repair" : service === "Garage Door Spring Repair" ? "/services/garage-door-spring-repair" : service === "Garage Door Opener Installation" ? "/services/garage-door-opener-installation" : service === "New Garage Door Installation" ? "/services/new-garage-door-installation" : service === "Commercial Garage Door Service" ? "/services/commercial-garage-door-service" : service === "General Garage Door Repair" ? "/services/general-garage-door-repair" : "/services", "href")} class="hover:underline transition-colors flex items-center space-x-2 text-white hover:text-yellow-400" data-astro-cid-35ed7um5> ${service === "24/7 Emergency Garage Door Repair" ? renderTemplate`<svg class="h-4 w-4 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-35ed7um5></path> </svg>` : service === "Garage Door Spring Repair" ? renderTemplate`<svg class="h-4 w-4 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-35ed7um5></path> </svg>` : service === "Garage Door Opener Installation" ? renderTemplate`<svg class="h-4 w-4 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-35ed7um5></path> </svg>` : service === "New Garage Door Installation" ? renderTemplate`<svg class="h-4 w-4 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-35ed7um5></path> </svg>` : service === "Commercial Garage Door Service" ? renderTemplate`<svg class="h-4 w-4 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l7-3 7 3z" data-astro-cid-35ed7um5></path> </svg>` : renderTemplate`<svg class="h-4 w-4 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" data-astro-cid-35ed7um5></path> </svg>`} <span data-astro-cid-35ed7um5>${service}</span> </a> </li>`)} </ul> </div> <!-- Service Areas --> <div data-astro-cid-35ed7um5> <h3 class="font-bold text-lg mb-4 flex items-center space-x-2" style="color: #F3F3E6;" data-astro-cid-35ed7um5> <svg class="h-5 w-5 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-35ed7um5></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-35ed7um5></path> </svg> <span data-astro-cid-35ed7um5>Service Areas</span> </h3> <ul class="space-y-2" data-astro-cid-35ed7um5> ${[
    "North Caldwell",
    "West Caldwell",
    "Little Falls",
    "Montclair",
    "Cedar Grove",
    "Fair Lawn",
    "Clifton"
  ].map((area) => renderTemplate`<li data-astro-cid-35ed7um5> <a${addAttribute(`/service-areas/${area.toLowerCase().replace(/\s+/g, "-")}`, "href")} class="hover:underline transition-colors flex items-center space-x-2 text-white hover:text-yellow-400" data-astro-cid-35ed7um5> <svg class="h-4 w-4 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-35ed7um5></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-35ed7um5></path> </svg> <span data-astro-cid-35ed7um5>${area}</span> </a> </li>`)} </ul> </div> <!-- Quick Links --> <div data-astro-cid-35ed7um5> <h3 class="font-bold text-lg mb-4 flex items-center space-x-2" style="color: #F3F3E6;" data-astro-cid-35ed7um5> <svg class="h-5 w-5 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" data-astro-cid-35ed7um5></path> </svg> <span data-astro-cid-35ed7um5>Quick Links</span> </h3> <ul class="space-y-2" data-astro-cid-35ed7um5> <li data-astro-cid-35ed7um5> <a href="/about" class="hover:underline transition-colors flex items-center space-x-2 text-white hover:text-yellow-400" data-astro-cid-35ed7um5> <svg class="h-4 w-4 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-35ed7um5></path> </svg> <span data-astro-cid-35ed7um5>About Us</span> </a> </li> <li data-astro-cid-35ed7um5> <a href="/blog" class="hover:underline transition-colors flex items-center space-x-2 text-white hover:text-yellow-400" data-astro-cid-35ed7um5> <svg class="h-4 w-4 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" data-astro-cid-35ed7um5></path> </svg> <span data-astro-cid-35ed7um5>Blog</span> </a> </li> <li data-astro-cid-35ed7um5> <a href="/faq" class="hover:underline transition-colors flex items-center space-x-2 text-white hover:text-yellow-400" data-astro-cid-35ed7um5> <svg class="h-4 w-4 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-35ed7um5></path> </svg> <span data-astro-cid-35ed7um5>FAQ</span> </a> </li> <li data-astro-cid-35ed7um5> <a href="/reviews" class="hover:underline transition-colors flex items-center space-x-2 text-white hover:text-yellow-400" data-astro-cid-35ed7um5> <svg class="h-4 w-4 flex-shrink-0" style="color: #D2A63C;" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" data-astro-cid-35ed7um5></path> </svg> <span data-astro-cid-35ed7um5>Reviews</span> </a> </li> <li data-astro-cid-35ed7um5> <a href="/contact" class="hover:underline transition-colors flex items-center space-x-2 text-white hover:text-yellow-400" data-astro-cid-35ed7um5> <svg class="h-4 w-4 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-35ed7um5></path> </svg> <span data-astro-cid-35ed7um5>Contact</span> </a> </li> <li data-astro-cid-35ed7um5> <a href="/booking" class="hover:underline transition-colors flex items-center space-x-2 text-white hover:text-yellow-400" data-astro-cid-35ed7um5> <svg class="h-4 w-4 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m4-4v4m4-4v4M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" data-astro-cid-35ed7um5></path> </svg> <span data-astro-cid-35ed7um5>Book Service</span> </a> </li> <li data-astro-cid-35ed7um5> <a href="/sitemap" class="hover:underline transition-colors flex items-center space-x-2 text-white hover:text-yellow-400" data-astro-cid-35ed7um5> <svg class="h-4 w-4 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" data-astro-cid-35ed7um5></path> </svg> <span data-astro-cid-35ed7um5>Sitemap</span> </a> </li> </ul> <!-- Social Media Links --> <div class="mt-6" data-astro-cid-35ed7um5> <h4 class="font-semibold mb-3 flex items-center space-x-2" style="color: #D2A63C;" data-astro-cid-35ed7um5> <svg class="h-5 w-5 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-1 2.5V9a2 2 0 002 2h5v11a1 1 0 01-1 1H2a1 1 0 01-1-1V11h5a2 2 0 002-2V6.5z" data-astro-cid-35ed7um5></path> </svg> <span data-astro-cid-35ed7um5>Follow Us</span> </h4> <div class="flex gap-3" data-astro-cid-35ed7um5> <a href="https://www.facebook.com/ez2fix" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white hover:bg-yellow-400" data-astro-cid-35ed7um5> <svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" data-astro-cid-35ed7um5></path> </svg> </a> <a href="https://www.instagram.com/ez2fix" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white hover:bg-yellow-400" data-astro-cid-35ed7um5> <svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-astro-cid-35ed7um5></path> </svg> </a> <a href="https://twitter.com/ez2fix" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white hover:bg-yellow-400" data-astro-cid-35ed7um5> <svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-astro-cid-35ed7um5></path> </svg> </a> <a href="https://www.google.com/maps/place/Ez2Fix" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white hover:bg-yellow-400" data-astro-cid-35ed7um5> <svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" data-astro-cid-35ed7um5></path> </svg> </a> </div> </div> </div> </div> <!-- Bottom Bar --> <div class="border-t pt-8" style="border-color: #BB8525;" data-astro-cid-35ed7um5> <div class="flex flex-col space-y-4 text-center" data-astro-cid-35ed7um5> <!-- Copyright --> <p style="color: #EECD5C;" data-astro-cid-35ed7um5>
© <span id="current-year" data-astro-cid-35ed7um5></span> ${siteConfig.business.name}. All rights reserved.
</p> <!-- Legal Links --> <div class="flex items-center justify-center space-x-6" data-astro-cid-35ed7um5> <a href="/privacy-policy" class="hover:underline transition-colors" style="color: #EECD5C;" data-astro-cid-35ed7um5>Privacy Policy</a> <a href="/terms-of-service" class="hover:underline transition-colors" style="color: #EECD5C;" data-astro-cid-35ed7um5>Terms of Service</a> <a href="/accessibility-policy" class="hover:underline transition-colors" style="color: #EECD5C;" data-astro-cid-35ed7um5>Accessibility</a> </div> <!-- Gett Marketing Attribution --> <div data-astro-cid-35ed7um5> <p class="text-sm flex items-center justify-center space-x-2" style="color: #F3F3E6;" data-astro-cid-35ed7um5> <span data-astro-cid-35ed7um5>Made with</span> <svg class="beating-heart h-4 w-4" style="color: #EECD5C;" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-35ed7um5> <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" data-astro-cid-35ed7um5></path> </svg> <span data-astro-cid-35ed7um5>by</span> <a href="https://gettmarketing.com" target="_blank" rel="noopener noreferrer" class="font-semibold hover:underline transition-colors gett-marketing-link" style="color: #F3F3E6;" data-astro-cid-35ed7um5>
Gett Marketing
</a> </p> </div> </div> </div> </div> </footer>  ${renderScript($$result, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/components/layout/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/components/layout/Footer.astro", void 0);
export {
  $$BaseLayout as $,
  $$Header as a,
  $$Footer as b,
  siteConfig as s
};
