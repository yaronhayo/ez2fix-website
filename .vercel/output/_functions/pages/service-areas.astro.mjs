/* empty css                                */
import { f as createComponent, r as renderTemplate, n as renderScript, k as renderComponent, l as Fragment, u as unescapeHTML, m as maybeRenderHead, h as addAttribute } from "../assets/astro/server-Crfne28A.js";
import "kleur/colors";
import { $ as $$BaseLayout, s as siteConfig, a as $$Header, b as $$Footer } from "../assets/Footer-BijWoSSf.js";
import { $ as $$Card } from "../assets/Card-BTi5B1xO.js";
import { $ as $$Button } from "../assets/Button-Dpcd80cV.js";
/* empty css                                        */
import { renderers } from "../renderers.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$ServiceAreas = createComponent(($$result, $$props, $$slots) => {
  const extendedServiceAreas = [
    // Primary Areas - Featured service area pages
    { name: "Fair Lawn", county: "Bergen County", zip: "07410", type: "Primary", lat: 40.9401, lng: -74.1318, hasPage: true, slug: "fair-lawn" },
    { name: "Little Falls", county: "Passaic County", zip: "07424", type: "Primary", lat: 40.8751, lng: -74.2182, hasPage: true, slug: "little-falls" },
    { name: "Clifton", county: "Passaic County", zip: "07011", type: "Primary", lat: 40.8584, lng: -74.1638, hasPage: true, slug: "clifton" },
    { name: "Cedar Grove", county: "Essex County", zip: "07009", type: "Primary", lat: 40.8532, lng: -74.229, hasPage: true, slug: "cedar-grove" },
    { name: "West Caldwell", county: "Essex County", zip: "07006", type: "Primary", lat: 40.8398, lng: -74.2951, hasPage: true, slug: "west-caldwell" },
    { name: "North Caldwell", county: "Essex County", zip: "07006", type: "Primary", lat: 40.8715, lng: -74.2585, hasPage: true, slug: "north-caldwell" },
    { name: "Montclair", county: "Essex County", zip: "07042", type: "Primary", lat: 40.8176, lng: -74.209, hasPage: true, slug: "montclair" },
    // Secondary Areas - Full service coverage
    { name: "Elmwood Park", county: "Bergen County", zip: "07407", type: "Secondary", lat: 40.9034, lng: -74.1201, hasPage: false },
    { name: "Saddle Brook", county: "Bergen County", zip: "07663", type: "Secondary", lat: 40.8987, lng: -74.0965, hasPage: false },
    { name: "Garfield", county: "Bergen County", zip: "07026", type: "Secondary", lat: 40.8815, lng: -74.1132, hasPage: false },
    { name: "Lodi", county: "Bergen County", zip: "07644", type: "Secondary", lat: 40.8823, lng: -74.0832, hasPage: false },
    { name: "Wallington", county: "Bergen County", zip: "07057", type: "Secondary", lat: 40.8515, lng: -74.1043, hasPage: false },
    { name: "Paramus", county: "Bergen County", zip: "07652", type: "Secondary", lat: 40.9445, lng: -74.0654, hasPage: false },
    { name: "Hackensack", county: "Bergen County", zip: "07601", type: "Secondary", lat: 40.8859, lng: -74.0432, hasPage: false },
    { name: "Maywood", county: "Bergen County", zip: "07607", type: "Secondary", lat: 40.9023, lng: -74.0632, hasPage: false },
    { name: "Rochelle Park", county: "Bergen County", zip: "07662", type: "Secondary", lat: 40.9075, lng: -74.0765, hasPage: false },
    // Extended Areas - By appointment
    { name: "Jersey City", county: "Hudson County", zip: "07302", type: "Extended", lat: 40.7178, lng: -74.0431, hasPage: false },
    { name: "Hoboken", county: "Hudson County", zip: "07030", type: "Extended", lat: 40.7439, lng: -74.0323, hasPage: false },
    { name: "Union City", county: "Hudson County", zip: "07087", type: "Extended", lat: 40.7662, lng: -74.0376, hasPage: false },
    { name: "Weehawken", county: "Hudson County", zip: "07086", type: "Extended", lat: 40.7696, lng: -74.0204, hasPage: false },
    { name: "Secaucus", county: "Hudson County", zip: "07094", type: "Extended", lat: 40.7896, lng: -74.0565, hasPage: false }
  ];
  const serviceAreasData = {
    primary: extendedServiceAreas.filter((area) => area.type === "Primary"),
    secondary: extendedServiceAreas.filter((area) => area.type === "Secondary"),
    extended: extendedServiceAreas.filter((area) => area.type === "Extended")
  };
  return renderTemplate(_b || (_b = __template(["", ' <!-- Google Maps JavaScript API --> <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&callback=initServiceAreasMap">\n<\/script> ', " "])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Service Areas Bergen County NJ | Ez2Fix Garage Door Repair | Licensed Contractor", "description": "Professional garage door repair & installation in Bergen, Passaic & Essex Counties, NJ. Licensed contractor #13VH13553300 serving 25+ communities. 24/7 emergency service with 10-year warranty. Call (201) 554-6769 for same-day service!", "keywords": "garage door repair service areas bergen county nj, service areas garage door repair northern nj, garage door service bergen county areas, garage door repair fair lawn clifton elmwood park, emergency garage door repair bergen county service areas, garage door installation service areas nj, licensed garage door contractor bergen passaic essex counties, garage door service areas northern new jersey", "data-astro-cid-j2qafbxf": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j2qafbxf": true })} ${maybeRenderHead()}<main id="main-content" data-astro-cid-j2qafbxf> <!-- Hero Section --> <section class="relative py-24 overflow-hidden" data-astro-cid-j2qafbxf> <!-- Background Image with Overlay --> <div class="absolute inset-0" data-astro-cid-j2qafbxf> <img src="https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/service-areas-hero.jpg" alt="Service areas across Northern New Jersey" class="w-full h-full object-cover" width="1920" height="1080" loading="eager" decoding="async" fetchpriority="high" data-astro-cid-j2qafbxf> <div class="absolute inset-0 bg-gray-900 bg-opacity-75" data-astro-cid-j2qafbxf></div> </div> <div class="container mx-auto px-4 relative z-10" data-astro-cid-j2qafbxf> <div class="max-w-5xl mx-auto text-center" data-astro-cid-j2qafbxf> <!-- Breadcrumb --> <nav class="flex items-center justify-center space-x-2 text-sm mb-8" style="color: #BB8525;" data-astro-cid-j2qafbxf> <a href="/" class="hover:underline" data-astro-cid-j2qafbxf>Home</a> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j2qafbxf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-j2qafbxf></path> </svg> <span style="color: #EECD5C;" data-astro-cid-j2qafbxf>Service Areas</span> </nav> <!-- Main Headline --> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-astro-cid-j2qafbxf> <span style="color: #F3F3E6;" data-astro-cid-j2qafbxf>Your Neighbors Trust Us</span> <br data-astro-cid-j2qafbxf> <span style="color: #D2A63C;" data-astro-cid-j2qafbxf>For Their Garage Door Problems</span> </h1> <p class="text-xl leading-relaxed mb-12 max-w-4xl mx-auto" style="color: #F3F3E6;" data-astro-cid-j2qafbxf>
When your garage door won't open and you're stuck in the driveway, or worse - it won't close and your home isn't secure - you need someone you can count on. For over 10 years, families across <span style="color: #EECD5C; font-weight: 600;" data-astro-cid-j2qafbxf>Northern New Jersey</span> have called us first because they know we'll <span style="color: #EECD5C; font-weight: 600;" data-astro-cid-j2qafbxf>show up, fix it right, and stand behind our work</span>.
</p> <!-- Trust Indicators --> <div class="flex flex-wrap justify-center items-center gap-8 mb-12" data-astro-cid-j2qafbxf> <div class="flex items-center space-x-2" data-astro-cid-j2qafbxf> <svg class="h-6 w-6" style="color: #D2A63C;" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-j2qafbxf> <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" data-astro-cid-j2qafbxf></path> </svg> <span class="font-bold text-lg" style="color: #F3F3E6;" data-astro-cid-j2qafbxf>Your Neighbors Choose Us</span> </div> <div class="flex items-center space-x-2" data-astro-cid-j2qafbxf> <svg class="h-6 w-6" style="color: #EECD5C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j2qafbxf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-j2qafbxf></path> </svg> <span class="font-bold text-lg" style="color: #F3F3E6;" data-astro-cid-j2qafbxf>We Show Up When We Say</span> </div> <div class="flex items-center space-x-2" data-astro-cid-j2qafbxf> <svg class="h-6 w-6" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j2qafbxf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" data-astro-cid-j2qafbxf></path> </svg> <span class="font-bold text-lg" style="color: #F3F3E6;" data-astro-cid-j2qafbxf>We Stand Behind Our Work</span> </div> <div class="flex items-center space-x-2" data-astro-cid-j2qafbxf> <svg class="h-6 w-6" style="color: #EECD5C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j2qafbxf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-j2qafbxf></path> </svg> <span class="font-bold text-lg" style="color: #F3F3E6;" data-astro-cid-j2qafbxf>24/7 Emergency Help</span> </div> </div> <!-- CTA Buttons --> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center" data-astro-cid-j2qafbxf> ${renderComponent($$result2, "Button", $$Button, { "href": siteConfig.links.phone, "size": "lg", "class": "text-lg px-10 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105", "style": "background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%); color: #1D1912;", "data-astro-cid-j2qafbxf": true }, { "default": ($$result3) => renderTemplate` <svg class="mr-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j2qafbxf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-j2qafbxf></path> </svg>
Call Now: ${siteConfig.business.phone}` })} ${renderComponent($$result2, "Button", $$Button, { "href": "/booking", "size": "lg", "class": "text-lg px-10 py-4 font-bold border-2 shadow-lg hover:shadow-xl transition-all duration-300", "style": "color: #EECD5C; border-color: #EECD5C; background-color: rgba(238, 205, 92, 0.1);", "data-astro-cid-j2qafbxf": true }, { "default": ($$result3) => renderTemplate`
Get Free Estimate
` })} </div> </div> </div> </section> <!-- Interactive Map Section --> <section class="py-16" style="background-color: #F3F3E6;" data-astro-cid-j2qafbxf> <div class="container mx-auto px-4" data-astro-cid-j2qafbxf> <div class="max-w-7xl mx-auto" data-astro-cid-j2qafbxf> <div class="text-center mb-12" data-astro-cid-j2qafbxf> <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: #1D1912;" data-astro-cid-j2qafbxf>
See If We're <span style="color: #D2A63C;" data-astro-cid-j2qafbxf>In Your Neighborhood</span> </h2> <p class="text-lg max-w-3xl mx-auto leading-relaxed" style="color: #BB8525;" data-astro-cid-j2qafbxf>
Find your town on the map below. We've been serving these communities for years, and your neighbors know they can count on us when their garage door breaks down or stops working safely.
</p> </div> <!-- Map Container --> ${renderComponent($$result2, "Card", $$Card, { "class": "p-6 shadow-2xl border-2 mb-8", "style": "background-color: white; border-color: #D2A63C;", "data-astro-cid-j2qafbxf": true }, { "default": ($$result3) => renderTemplate` <div id="service-areas-map" class="w-full h-96 rounded-lg overflow-hidden shadow-inner" style="min-height: 500px;" data-astro-cid-j2qafbxf> <div class="flex items-center justify-center h-full" style="background-color: rgba(187, 133, 37, 0.1);" data-astro-cid-j2qafbxf> <div class="text-center" data-astro-cid-j2qafbxf> <div id="map-loading" class="text-lg font-semibold mb-2" style="color: #1D1912;" data-astro-cid-j2qafbxf>Loading Interactive Map...</div> <div class="text-sm" style="color: #BB8525;" data-astro-cid-j2qafbxf>Please wait while we load your service area map</div> </div> </div> </div> ` })} <!-- Map Legend --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-astro-cid-j2qafbxf> <div class="flex items-center justify-center p-4 rounded-lg border-2" style="background: rgba(210, 166, 60, 0.1); border-color: #D2A63C;" data-astro-cid-j2qafbxf> <div class="w-4 h-4 rounded-full mr-3" style="background-color: #D2A63C;" data-astro-cid-j2qafbxf></div> <span class="font-semibold text-center" style="color: #1D1912;" data-astro-cid-j2qafbxf>Communities We Know Best</span> </div> <div class="flex items-center justify-center p-4 rounded-lg border-2" style="background: rgba(238, 205, 92, 0.1); border-color: #EECD5C;" data-astro-cid-j2qafbxf> <div class="w-4 h-4 rounded-full mr-3" style="background-color: #EECD5C;" data-astro-cid-j2qafbxf></div> <span class="font-semibold text-center" style="color: #1D1912;" data-astro-cid-j2qafbxf>Bergen County Neighbors</span> </div> <div class="flex items-center justify-center p-4 rounded-lg border-2" style="background: rgba(187, 133, 37, 0.1); border-color: #BB8525;" data-astro-cid-j2qafbxf> <div class="w-4 h-4 rounded-full mr-3" style="background-color: #BB8525;" data-astro-cid-j2qafbxf></div> <span class="font-semibold text-center" style="color: #1D1912;" data-astro-cid-j2qafbxf>Hudson County Friends</span> </div> </div> </div> </div> </section> <!-- Featured Service Areas --> <section class="py-16" style="background-color: #1D1912;" data-astro-cid-j2qafbxf> <div class="container mx-auto px-4" data-astro-cid-j2qafbxf> <div class="max-w-6xl mx-auto" data-astro-cid-j2qafbxf> <div class="text-center mb-12" data-astro-cid-j2qafbxf> <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: #F3F3E6;" data-astro-cid-j2qafbxf>
Communities That <span style="color: #D2A63C;" data-astro-cid-j2qafbxf>Know Us Best</span> </h2> <p class="text-xl max-w-4xl mx-auto leading-relaxed" style="color: #EECD5C;" data-astro-cid-j2qafbxf>
These are the neighborhoods where we've built lasting relationships. Families here have our number saved in their phones because they know we'll take care of them when garage door problems happen.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-j2qafbxf> ${serviceAreasData.primary.map((area) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 group", "style": "background-color: #F3F3E6; border-color: #D2A63C;", "data-astro-cid-j2qafbxf": true }, { "default": ($$result3) => renderTemplate` <div class="flex items-start justify-between mb-4" data-astro-cid-j2qafbxf> <div class="flex-1" data-astro-cid-j2qafbxf> <h3 class="text-xl font-bold mb-2 group-hover:text-opacity-80 transition-colors" style="color: #1D1912;" data-astro-cid-j2qafbxf>${area.name}</h3> <p class="text-sm mb-3" style="color: #BB8525;" data-astro-cid-j2qafbxf>${area.county} • ${area.zip}</p> <div class="flex items-center mb-3" data-astro-cid-j2qafbxf> <div class="w-3 h-3 rounded-full mr-2" style="background-color: #D2A63C;" data-astro-cid-j2qafbxf></div> <span class="text-xs font-semibold px-2 py-1 rounded-full" style="background-color: rgba(210, 166, 60, 0.1); color: #D2A63C;" data-astro-cid-j2qafbxf>
Featured Area
</span> </div> </div> </div> <p class="text-sm leading-relaxed mb-6" style="color: #BB8525;" data-astro-cid-j2qafbxf>
Your neighbors share their real experiences • Local garage door stories and solutions • See why families here trust us with their home security
</p> <div class="flex space-x-3" data-astro-cid-j2qafbxf> ${renderComponent($$result3, "Button", $$Button, { "href": `/service-areas/${area.slug}`, "class": "flex-1 text-sm font-bold py-2 transition-all duration-300 hover:shadow-lg", "style": "background-color: #D2A63C; color: #F3F3E6;", "data-astro-cid-j2qafbxf": true }, { "default": ($$result4) => renderTemplate`
View Details
` })} ${renderComponent($$result3, "Button", $$Button, { "href": "/booking", "variant": "outline", "class": "flex-1 text-sm font-semibold border-2 py-2 transition-all duration-300", "style": "color: #BB8525; border-color: #BB8525; background-color: transparent;", "data-astro-cid-j2qafbxf": true }, { "default": ($$result4) => renderTemplate`
Get Quote
` })} </div> ` })}`)} </div> </div> </div> </section> <!-- Market Dominance Section --> <section class="py-16" style="background-color: #F3F3E6;" data-astro-cid-j2qafbxf> <div class="container mx-auto px-4" data-astro-cid-j2qafbxf> <div class="max-w-6xl mx-auto" data-astro-cid-j2qafbxf> <div class="text-center mb-12" data-astro-cid-j2qafbxf> <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: #1D1912;" data-astro-cid-j2qafbxf>
We Fix What <span style="color: #D2A63C;" data-astro-cid-j2qafbxf>Matters Most</span> </h2> <p class="text-xl max-w-4xl mx-auto leading-relaxed" style="color: #BB8525;" data-astro-cid-j2qafbxf>
Your garage door isn't just a convenience - it protects your family and your belongings. When it breaks, you need someone who understands that and treats your home with the same care they'd want for their own family.
</p> </div> <!-- Service Area Types --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" data-astro-cid-j2qafbxf> <!-- Emergency Garage Door Repair --> ${renderComponent($$result2, "Card", $$Card, { "class": "p-8 text-center border-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1", "style": "background-color: white; border-color: #D2A63C;", "data-astro-cid-j2qafbxf": true }, { "default": ($$result3) => renderTemplate` <div class="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style="background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%);" data-astro-cid-j2qafbxf> <svg class="w-8 h-8" style="color: #1D1912;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j2qafbxf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-j2qafbxf></path> </svg> </div> <h3 class="text-2xl font-bold mb-4" style="color: #1D1912;" data-astro-cid-j2qafbxf>When You're Stuck</h3> <div class="text-3xl font-bold mb-2" style="color: #D2A63C;" data-astro-cid-j2qafbxf>We Come Fast</div> <p class="text-sm leading-relaxed mb-4" style="color: #BB8525;" data-astro-cid-j2qafbxf>
Door won't open and you're late for work? Spring snapped and your car is trapped? We've all been there. That's why we drop what we're doing to help.
</p> <div class="flex items-center justify-center space-x-4 text-xs font-semibold" data-astro-cid-j2qafbxf> <span style="color: #D2A63C;" data-astro-cid-j2qafbxf>✓ We Answer Day & Night</span> <span style="color: #D2A63C;" data-astro-cid-j2qafbxf>✓ Usually Same Day</span> </div> ` })} <!-- New Garage Door Installation --> ${renderComponent($$result2, "Card", $$Card, { "class": "p-8 text-center border-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1", "style": "background-color: white; border-color: #EECD5C;", "data-astro-cid-j2qafbxf": true }, { "default": ($$result3) => renderTemplate` <div class="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style="background-color: #EECD5C;" data-astro-cid-j2qafbxf> <svg class="w-8 h-8" style="color: #1D1912;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j2qafbxf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" data-astro-cid-j2qafbxf></path> </svg> </div> <h3 class="text-2xl font-bold mb-4" style="color: #1D1912;" data-astro-cid-j2qafbxf>Your Home Deserves Better</h3> <div class="text-3xl font-bold mb-2" style="color: #EECD5C;" data-astro-cid-j2qafbxf>Beautiful</div> <p class="text-sm leading-relaxed mb-4" style="color: #BB8525;" data-astro-cid-j2qafbxf>
Tired of that old, dented door that makes your house look dated? A new garage door is one of the best investments you can make - it looks amazing and increases your home's value.
</p> <div class="flex items-center justify-center space-x-4 text-xs font-semibold" data-astro-cid-j2qafbxf> <span style="color: #EECD5C;" data-astro-cid-j2qafbxf>✓ Instant Curb Appeal</span> <span style="color: #EECD5C;" data-astro-cid-j2qafbxf>✓ Increases Home Value</span> </div> ` })} <!-- Spring & Opener Service --> ${renderComponent($$result2, "Card", $$Card, { "class": "p-8 text-center border-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1", "style": "background-color: white; border-color: #BB8525;", "data-astro-cid-j2qafbxf": true }, { "default": ($$result3) => renderTemplate` <div class="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style="background-color: #BB8525;" data-astro-cid-j2qafbxf> <svg class="w-8 h-8" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j2qafbxf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" data-astro-cid-j2qafbxf></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-j2qafbxf></path> </svg> </div> <h3 class="text-2xl font-bold mb-4" style="color: #1D1912;" data-astro-cid-j2qafbxf>Built to Last</h3> <div class="text-3xl font-bold mb-2" style="color: #BB8525;" data-astro-cid-j2qafbxf>Peace of Mind</div> <p class="text-sm leading-relaxed mb-4" style="color: #BB8525;" data-astro-cid-j2qafbxf>
Nobody wants to call a repair guy again in six months. That's why we use heavy-duty springs and quality openers that handle our tough NJ winters and hot summers.
</p> <div class="flex items-center justify-center space-x-4 text-xs font-semibold" data-astro-cid-j2qafbxf> <span style="color: #BB8525;" data-astro-cid-j2qafbxf>✓ Won't Break Again Soon</span> <span style="color: #BB8525;" data-astro-cid-j2qafbxf>✓ Handles NJ Weather</span> </div> ` })} </div> </div> </div> </section> <!-- All Service Areas List --> <section class="py-16" style="background-color: #1D1912;" data-astro-cid-j2qafbxf> <div class="container mx-auto px-4" data-astro-cid-j2qafbxf> <div class="max-w-6xl mx-auto" data-astro-cid-j2qafbxf> <div class="text-center mb-12" data-astro-cid-j2qafbxf> <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: #F3F3E6;" data-astro-cid-j2qafbxf>
Every Town <span style="color: #D2A63C;" data-astro-cid-j2qafbxf>We Serve</span> </h2> <p class="text-lg max-w-3xl mx-auto" style="color: #EECD5C;" data-astro-cid-j2qafbxf>
Find your community below. If we serve your area, you can count on the same honest service and fair prices that your neighbors have come to expect.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-j2qafbxf> ${extendedServiceAreas.map((area) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border", "style": area.type === "Primary" ? "background-color: #F3F3E6; border-color: #D2A63C;" : area.type === "Secondary" ? "background-color: #F3F3E6; border-color: #EECD5C;" : "background-color: #F3F3E6; border-color: #BB8525;", "data-astro-cid-j2qafbxf": true }, { "default": ($$result3) => renderTemplate` <div class="flex items-start justify-between mb-3" data-astro-cid-j2qafbxf> <div class="flex-1" data-astro-cid-j2qafbxf> <h3 class="text-lg font-bold mb-1" style="color: #1D1912;" data-astro-cid-j2qafbxf>${area.name}</h3> <p class="text-sm mb-2" style="color: #BB8525;" data-astro-cid-j2qafbxf>${area.county} • ${area.zip}</p> </div> <div class="w-3 h-3 rounded-full flex-shrink-0 mt-1"${addAttribute(area.type === "Primary" ? "background-color: #D2A63C;" : area.type === "Secondary" ? "background-color: #EECD5C;" : "background-color: #BB8525;", "style")} data-astro-cid-j2qafbxf></div> </div> <div class="flex items-center justify-between mb-3" data-astro-cid-j2qafbxf> <span class="text-xs font-semibold px-2 py-1 rounded-full"${addAttribute(area.type === "Primary" ? "background-color: rgba(210, 166, 60, 0.1); color: #D2A63C;" : area.type === "Secondary" ? "background-color: rgba(238, 205, 92, 0.1); color: #BB8525;" : "background-color: rgba(187, 133, 37, 0.1); color: #BB8525;", "style")} data-astro-cid-j2qafbxf> ${area.type} Area
</span> ${area.hasPage && renderTemplate`<span class="text-xs font-bold px-2 py-1 rounded-full" style="background-color: #D2A63C; color: #F3F3E6;" data-astro-cid-j2qafbxf>
FEATURED
</span>`} </div> <p class="text-xs leading-relaxed mb-4" style="color: #BB8525;" data-astro-cid-j2qafbxf> ${area.type === "Primary" ? "Families here know us well • Read what your neighbors say • We're usually there same day" : area.type === "Secondary" ? "We visit regularly • Same honest service • Your neighbors recommend us" : "We make the drive • Same quality work • Worth the call when you need help"} </p> <div class="flex space-x-2" data-astro-cid-j2qafbxf> ${area.hasPage ? renderTemplate`${renderComponent($$result3, "Button", $$Button, { "href": `/service-areas/${area.slug}`, "class": "flex-1 text-xs font-bold py-2 transition-all duration-300", "style": "background-color: #D2A63C; color: #F3F3E6;", "data-astro-cid-j2qafbxf": true }, { "default": ($$result4) => renderTemplate`
View Page
` })}` : renderTemplate`${renderComponent($$result3, "Button", $$Button, { "href": siteConfig.links.phone, "class": "flex-1 text-xs font-bold py-2 transition-all duration-300", "style": area.type === "Primary" ? "background-color: #D2A63C; color: #F3F3E6;" : "background-color: #BB8525; color: #F3F3E6;", "data-astro-cid-j2qafbxf": true }, { "default": ($$result4) => renderTemplate`
Call Now
` })}`} ${renderComponent($$result3, "Button", $$Button, { "href": "/booking", "variant": "outline", "class": "flex-1 text-xs font-semibold border py-2 transition-all duration-300", "style": "color: #BB8525; border-color: #BB8525; background-color: transparent;", "data-astro-cid-j2qafbxf": true }, { "default": ($$result4) => renderTemplate`
Get Quote
` })} </div> ` })}`)} </div> </div> </div> </section> <!-- Trust Factors & Final CTA --> <section class="py-16" style="background-color: #F3F3E6;" data-astro-cid-j2qafbxf> <div class="container mx-auto px-4" data-astro-cid-j2qafbxf> <div class="max-w-4xl mx-auto text-center" data-astro-cid-j2qafbxf> <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #1D1912;" data-astro-cid-j2qafbxf>
You Shouldn't Have to <span style="color: #D2A63C;" data-astro-cid-j2qafbxf>Worry About This</span> </h2> <p class="text-xl leading-relaxed mb-12" style="color: #BB8525;" data-astro-cid-j2qafbxf>
Life is busy enough without garage door problems adding stress to your day. When yours breaks down, you deserve someone who'll take care of it right the first time, so you can get back to what matters most.
</p> <!-- Trust Factors Grid --> <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12" data-astro-cid-j2qafbxf> <div class="text-center p-4 rounded-lg border-2" style="background: rgba(210, 166, 60, 0.1); border-color: #D2A63C;" data-astro-cid-j2qafbxf> <div class="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style="background-color: #D2A63C;" data-astro-cid-j2qafbxf> <svg class="w-6 h-6" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j2qafbxf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-j2qafbxf></path> </svg> </div> <h3 class="text-sm font-bold mb-1" style="color: #1D1912;" data-astro-cid-j2qafbxf>You're Protected</h3> <p class="text-xs" style="color: #BB8525;" data-astro-cid-j2qafbxf>Fully Licensed & Insured</p> </div> <div class="text-center p-4 rounded-lg border-2" style="background: rgba(238, 205, 92, 0.1); border-color: #EECD5C;" data-astro-cid-j2qafbxf> <div class="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style="background-color: #EECD5C;" data-astro-cid-j2qafbxf> <svg class="w-6 h-6" style="color: #1D1912;" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-j2qafbxf> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" data-astro-cid-j2qafbxf></path> </svg> </div> <h3 class="text-sm font-bold mb-1" style="color: #1D1912;" data-astro-cid-j2qafbxf>Neighbors Trust Us</h3> <p class="text-xs" style="color: #BB8525;" data-astro-cid-j2qafbxf>Real 5-Star Reviews</p> </div> <div class="text-center p-4 rounded-lg border-2" style="background: rgba(187, 133, 37, 0.1); border-color: #BB8525;" data-astro-cid-j2qafbxf> <div class="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style="background-color: #BB8525;" data-astro-cid-j2qafbxf> <svg class="w-6 h-6" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j2qafbxf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-j2qafbxf></path> </svg> </div> <h3 class="text-sm font-bold mb-1" style="color: #1D1912;" data-astro-cid-j2qafbxf>We Know This Area</h3> <p class="text-xs" style="color: #BB8525;" data-astro-cid-j2qafbxf>10+ Years Here</p> </div> <div class="text-center p-4 rounded-lg border-2" style="background: rgba(210, 166, 60, 0.1); border-color: #D2A63C;" data-astro-cid-j2qafbxf> <div class="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style="background-color: #D2A63C;" data-astro-cid-j2qafbxf> <svg class="w-6 h-6" style="color: #F3F3E6;" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-j2qafbxf> <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" data-astro-cid-j2qafbxf></path> </svg> </div> <h3 class="text-sm font-bold mb-1" style="color: #1D1912;" data-astro-cid-j2qafbxf>We Stand Behind It</h3> <p class="text-xs" style="color: #BB8525;" data-astro-cid-j2qafbxf>Work Guaranteed</p> </div> </div> <!-- Final CTA Buttons --> <div class="flex flex-col sm:flex-row gap-6 justify-center items-center" data-astro-cid-j2qafbxf> <a${addAttribute(siteConfig.links.phone, "href")} class="inline-flex items-center justify-center px-12 py-4 text-xl font-bold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105" style="background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%); color: #1D1912;" data-astro-cid-j2qafbxf> <svg class="mr-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j2qafbxf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-j2qafbxf></path> </svg>
Call ${siteConfig.business.phone} </a> <a href="/booking" class="inline-flex items-center justify-center px-12 py-4 text-xl font-bold border-2 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105" style="color: #1D1912; border-color: #1D1912; background-color: transparent;" data-astro-cid-j2qafbxf>
Get Free Estimate
</a> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j2qafbxf": true })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ez2fix.com/service-areas#serviceareas",
    "name": "Ez2Fix Garage Door Services - Service Areas",
    "description": "Professional garage door repair and installation serving Bergen, Passaic & Essex Counties in Northern New Jersey.",
    "url": "https://ez2fix.com/service-areas",
    "areaServed": [
      {
        "@type": "City",
        "name": "Fair Lawn",
        "containedInPlace": {
          "@type": "State",
          "name": "New Jersey",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "NJ",
            "addressCountry": "US"
          }
        }
      },
      {
        "@type": "City",
        "name": "Clifton",
        "containedInPlace": {
          "@type": "State",
          "name": "New Jersey"
        }
      },
      {
        "@type": "City",
        "name": "Elmwood Park",
        "containedInPlace": {
          "@type": "State",
          "name": "New Jersey"
        }
      },
      {
        "@type": "City",
        "name": "Little Falls",
        "containedInPlace": {
          "@type": "State",
          "name": "New Jersey"
        }
      }
    ],
    "serviceArea": [
      "Bergen County, NJ",
      "Passaic County, NJ",
      "Essex County, NJ",
      "Hudson County, NJ"
    ],
    "geo": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.8500",
        "longitude": "-74.1700"
      },
      "geoRadius": "25000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Garage Door Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Garage Door Repair",
            "description": "24/7 emergency garage door repair service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garage Door Installation",
            "description": "New garage door installation with warranty"
          }
        }
      ]
    }
  }))) })}` }), renderScript($$result, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/pages/service-areas.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/pages/service-areas.astro", void 0);
const $$file = "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/pages/service-areas.astro";
const $$url = "/service-areas";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$ServiceAreas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
