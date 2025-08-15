/* empty css                                */
import { f as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent, h as addAttribute, l as Fragment, u as unescapeHTML } from "../assets/astro/server-Crfne28A.js";
import "kleur/colors";
import { s as siteConfig, $ as $$BaseLayout, a as $$Header, b as $$Footer } from "../assets/Footer-BijWoSSf.js";
import "clsx";
import { $ as $$Card } from "../assets/Card-BTi5B1xO.js";
import { $ as $$BookingForm } from "../assets/BookingForm-BGI2At6P.js";
import { $ as $$CTASection } from "../assets/CTASection-C6pWTuOV.js";
import { renderers } from "../renderers.mjs";
const $$ContactHeroNew = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-12" style="background-color: #F3F3E6;"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <!-- Breadcrumb --> <div class="mb-6"> <nav class="flex justify-start max-w-4xl mx-auto"> <ol class="flex items-center space-x-2 text-sm"> <li><a href="/" class="hover:underline" style="color: #BB8525;">Home</a></li> <li style="color: #D2A63C;">›</li> <li style="color: #1D1912;">Contact Us</li> </ol> </nav> </div> <!-- Page Title --> <h1 class="text-4xl md:text-5xl font-bold mb-4" style="color: #1D1912;">
Need Garage Door Service? <span style="color: #D2A63C;">Let's Get You Sorted.</span> </h1> <!-- Subtitle --> <p class="text-xl leading-relaxed mb-8 max-w-3xl mx-auto" style="color: #BB8525;">
Ready to get your garage door fixed? Our Bergen County team is here to help. Call us directly, fill out our contact form, or schedule online - whatever works best for you. Licensed, insured, and committed to honest pricing with quality work.
</p> <!-- Contact Options --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> <div class="text-center p-4 rounded-lg" style="background-color: rgba(210, 166, 60, 0.1);"> <svg class="h-8 w-8 mx-auto mb-2" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <div class="font-bold text-lg" style="color: #1D1912;">Call Now</div> <div class="text-sm" style="color: #BB8525;">${siteConfig.business.phone}</div> </div> <div class="text-center p-4 rounded-lg" style="background-color: rgba(238, 205, 92, 0.1);"> <svg class="h-8 w-8 mx-auto mb-2" style="color: #EECD5C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg> <div class="font-bold text-lg" style="color: #1D1912;">Get Quote</div> <div class="text-sm" style="color: #BB8525;">Free Written Estimate</div> </div> <div class="text-center p-4 rounded-lg" style="background-color: rgba(187, 133, 37, 0.1);"> <svg class="h-8 w-8 mx-auto mb-2" style="color: #BB8525;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <div class="font-bold text-lg" style="color: #1D1912;">Fast Response</div> <div class="text-sm" style="color: #BB8525;">Professional Service</div> </div> </div> </div> </div> </section>`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/components/sections/ContactHeroNew.astro", void 0);
const $$ContactMain = createComponent(($$result, $$props, $$slots) => {
  const serviceAreas = [
    "Elmwood Park",
    "Fair Lawn",
    "Garfield",
    "Lodi",
    "Saddle Brook",
    "Wallington",
    "Wood-Ridge",
    "Carlstadt",
    "East Rutherford",
    "Hasbrouck Heights",
    "Little Ferry",
    "Moonachie",
    "Rutherford",
    "Teterboro"
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16" style="background-color: #1D1912;"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <!-- Main Contact Section --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"> <!-- Contact Form --> ${renderComponent($$result, "Card", $$Card, { "class": "p-8 shadow-xl border-2", "style": "background-color: #F3F3E6; border-color: #D2A63C;" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BookingForm", $$BookingForm, { "variant": "inline", "title": "Get Your Free Estimate", "subtitle": "Tell us about your garage door issue and we'll provide an honest, detailed estimate with no hidden fees.", "buttonText": "Get My Free Estimate" })} ` })} <!-- Contact Information & Process --> <div class="space-y-8"> <!-- Direct Contact --> ${renderComponent($$result, "Card", $$Card, { "class": "p-8 shadow-xl border-2", "style": "background-color: #F3F3E6; border-color: #EECD5C;" }, { "default": ($$result2) => renderTemplate` <h2 class="text-2xl font-bold mb-6" style="color: #1D1912;">
Ready to Talk? <span style="color: #EECD5C;">Here's How to Reach Us.</span> </h2>  <div class="mb-6"> <a${addAttribute(siteConfig.links.phone, "href")} class="flex items-center p-4 rounded-lg transition-all duration-300 hover:shadow-md" style="background-color: rgba(210, 166, 60, 0.1);"> <div class="w-12 h-12 rounded-full flex items-center justify-center mr-4" style="background-color: #D2A63C;"> <svg class="h-6 w-6" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <div class="text-xl font-bold" style="color: #1D1912;">${siteConfig.business.phone}</div> <div class="text-sm" style="color: #BB8525;">Call now for service or questions</div> </div> </a> </div>  <div class="border-t pt-6" style="border-color: rgba(187, 133, 37, 0.2);"> <h4 class="font-bold mb-3" style="color: #1D1912;">Business Hours:</h4> <div class="text-center"> <div class="px-4 py-3 rounded-lg" style="background-color: rgba(210, 166, 60, 0.1);"> <div class="text-lg font-bold mb-1" style="color: #D2A63C;">24/7 Emergency Service</div> <div class="text-sm" style="color: #BB8525;">7 Days a Week • 24 Hours a Day</div> </div> <div class="mt-3 text-xs" style="color: #BB8525;">
📞 Emergency garage door repairs available anytime
</div> </div> </div> ` })} <!-- What to Expect --> ${renderComponent($$result, "Card", $$Card, { "class": "p-8 shadow-xl border-2", "style": "background-color: #F3F3E6; border-color: #BB8525;" }, { "default": ($$result2) => renderTemplate` <h3 class="text-2xl font-bold mb-6" style="color: #1D1912;">
What Happens Next? <span style="color: #BB8525;">Our Simple 4-Step Process</span> </h3> <div class="space-y-4"> <div class="flex items-start space-x-4"> <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style="background-color: #BB8525;"> <span class="text-sm font-bold" style="color: #F3F3E6;">1</span> </div> <div> <h4 class="font-bold mb-1" style="color: #1D1912;">Contact & Schedule</h4> <p class="text-sm" style="color: #BB8525;">We'll respond quickly to set up your service appointment that works with your schedule.</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style="background-color: #D2A63C;"> <span class="text-sm font-bold" style="color: #F3F3E6;">2</span> </div> <div> <h4 class="font-bold mb-1" style="color: #1D1912;">Professional Assessment</h4> <p class="text-sm" style="color: #BB8525;">Our licensed technician inspects your garage door and explains what needs to be done.</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style="background-color: #EECD5C;"> <span class="text-sm font-bold" style="color: #1D1912;">3</span> </div> <div> <h4 class="font-bold mb-1" style="color: #1D1912;">Written Estimate</h4> <p class="text-sm" style="color: #BB8525;">Clear, upfront pricing with no hidden fees - you approve before we start work.</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style="background-color: #BB8525;"> <span class="text-sm font-bold" style="color: #F3F3E6;">4</span> </div> <div> <h4 class="font-bold mb-1" style="color: #1D1912;">Complete Service</h4> <p class="text-sm" style="color: #BB8525;">Professional repair or installation with warranty protection and full cleanup.</p> </div> </div> </div> ` })} </div> </div> <!-- Service Areas --> <div class="text-center"> ${renderComponent($$result, "Card", $$Card, { "class": "p-8 shadow-xl border-2 max-w-4xl mx-auto", "style": "background-color: #F3F3E6; border-color: #D2A63C;" }, { "default": ($$result2) => renderTemplate` <h3 class="text-3xl font-bold mb-6" style="color: #1D1912;">
Proudly Serving <span style="color: #D2A63C;">Bergen County</span> </h3> <p class="text-lg mb-8" style="color: #BB8525;">
Licensed and insured garage door professionals serving these Bergen County communities. Contact us to confirm service availability in your area.
</p> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"> ${serviceAreas.map((area) => renderTemplate`<div class="text-center p-3 rounded-lg border" style="border-color: #EECD5C; background: rgba(238, 205, 92, 0.05);"> <span class="font-semibold text-sm" style="color: #1D1912;">${area}</span> </div>`)} </div>  <div class="flex justify-center items-center space-x-8 flex-wrap gap-4"> <div class="flex items-center space-x-2"> <svg class="h-5 w-5" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> <span class="text-sm font-semibold" style="color: #1D1912;">Licensed & Insured</span> </div> <div class="flex items-center space-x-2"> <svg class="h-5 w-5" style="color: #EECD5C;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path> </svg> <span class="text-sm font-semibold" style="color: #1D1912;">5.0★ Google Rating</span> </div> <div class="flex items-center space-x-2"> <svg class="h-5 w-5" style="color: #BB8525;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path> </svg> <span class="text-sm font-semibold" style="color: #1D1912;">Family Owned</span> </div> </div> ` })} </div> </div> </div> </section>`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/components/sections/ContactMain.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact Ez2Fix Bergen County NJ | Licensed Garage Door Contractor (201) 554-6769", "description": "Contact Ez2Fix for professional garage door service in Bergen County, NJ. Licensed contractor #13VH13553300 offering free estimates, emergency service & honest pricing. Call (201) 554-6769 or get your free estimate online today!", "keywords": "contact ez2fix bergen county nj, garage door service contact bergen county, garage door repair phone number nj, ez2fix contact information, garage door contractor bergen county contact, free garage door estimate bergen county, garage door service elmwood park fair lawn clifton contact" }, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main id="main-content"> ${renderComponent($$result2, "ContactHeroNew", $$ContactHeroNew, {})} <div class="py-8"></div> ${renderComponent($$result2, "ContactMain", $$ContactMain, {})} <div class="py-8"></div> ${renderComponent($$result2, "CTASection", $$CTASection, { "variant": "contact" })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://ez2fix.com/contact#contact",
    "name": "Contact Ez2Fix Garage Door Services",
    "description": "Contact Ez2Fix for professional garage door repair and installation services in Bergen County, NJ.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Ez2Fix Garage Door Services",
      "telephone": "(201) 554-6769",
      "email": "ez2fixllc@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Elmwood Park, NJ 07407",
        "addressLocality": "Elmwood Park",
        "addressRegion": "NJ",
        "postalCode": "07407",
        "addressCountry": "US"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+12015546769",
          "contactType": "customer service",
          "availableLanguage": "English",
          "areaServed": [
            "Bergen County, NJ",
            "Hudson County, NJ",
            "Passaic County, NJ",
            "Essex County, NJ"
          ]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+12015546769",
          "contactType": "emergency",
          "availableLanguage": "English",
          "hoursAvailable": {
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
            "opens": "00:00",
            "closes": "23:59"
          }
        }
      ]
    }
  }))) })}` })}`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/pages/contact.astro", void 0);
const $$file = "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/pages/contact.astro";
const $$url = "/contact";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
