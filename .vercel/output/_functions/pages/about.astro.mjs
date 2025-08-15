/* empty css                                */
import { f as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent, l as Fragment, u as unescapeHTML } from "../assets/astro/server-Crfne28A.js";
import "kleur/colors";
import { $ as $$BaseLayout, a as $$Header, b as $$Footer } from "../assets/Footer-BijWoSSf.js";
import "clsx";
import { $ as $$Card } from "../assets/Card-BTi5B1xO.js";
import { $ as $$CTASection } from "../assets/CTASection-C6pWTuOV.js";
import { renderers } from "../renderers.mjs";
const $$AboutHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-12" style="background-color: #F3F3E6;"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <!-- Breadcrumb --> <div class="mb-6"> <nav class="flex justify-start max-w-4xl mx-auto"> <ol class="flex items-center space-x-2 text-sm"> <li><a href="/" class="hover:underline" style="color: #BB8525;">Home</a></li> <li style="color: #D2A63C;">›</li> <li style="color: #1D1912;">About Us</li> </ol> </nav> </div> <!-- Page Title --> <h1 class="text-4xl md:text-5xl font-bold mb-4" style="color: #1D1912;">
The <span style="color: #D2A63C;">Bergen County Family</span> You Can Trust When Things Go Wrong
</h1> <!-- Subtitle --> <p class="text-xl leading-relaxed mb-8 max-w-3xl mx-auto" style="color: #BB8525;">
We know that sinking feeling when your garage door breaks - you're wondering who you can trust, how much it will cost, and if you'll be taken advantage of. Since 2014, we've helped over 10,000 Bergen County families through their garage door crises with honest service, fair pricing, and genuine care for our neighbors.
</p> <!-- Quick Stats --> <div class="flex justify-center items-center space-x-8 mb-8"> <div class="text-center px-4 py-2 rounded-lg" style="background-color: rgba(210, 166, 60, 0.1);"> <div class="text-2xl font-bold" style="color: #D2A63C;">10+</div> <div class="text-sm font-medium" style="color: #BB8525;">Years</div> </div> <div class="text-center px-4 py-2 rounded-lg" style="background-color: rgba(238, 205, 92, 0.1);"> <div class="text-2xl font-bold" style="color: #EECD5C;">10,000+</div> <div class="text-sm font-medium" style="color: #BB8525;">Doors</div> </div> <div class="text-center px-4 py-2 rounded-lg" style="background-color: rgba(187, 133, 37, 0.1);"> <div class="text-2xl font-bold" style="color: #BB8525;">5.0★</div> <div class="text-sm font-medium" style="color: #BB8525;">Rating</div> </div> </div> </div> </div> </section>`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/components/sections/AboutHero.astro", void 0);
const $$AboutMain = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16" style="background-color: #1D1912;"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <!-- Our Story --> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #F3F3E6;">
We Started Ez2Fix Because <span style="color: #D2A63C;">We Were Tired</span> of Seeing Our Neighbors Get Ripped Off
</h2> <p class="text-xl max-w-4xl mx-auto leading-relaxed mb-12" style="color: #EECD5C;">
Back in 2014, we kept hearing the same heartbreaking stories from friends and neighbors: contractors who didn't show up, shocking bills with hidden fees, shoddy work that failed within months, and worst of all - families being pressured into expensive repairs they didn't actually need. We knew Bergen County deserved better. So we started Ez2Fix with one simple promise: treat every customer the way we'd want our own family treated.
</p> <!-- Founder Quote --> ${renderComponent($$result, "Card", $$Card, { "class": "p-8 shadow-xl border-2 max-w-4xl mx-auto mb-16", "style": "background: rgba(238, 205, 92, 0.1); backdrop-filter: blur(10px); border-color: #EECD5C;" }, { "default": ($$result2) => renderTemplate` <div class="flex items-center justify-center mb-6"> <div class="w-16 h-16 rounded-full flex items-center justify-center mr-4" style="background-color: #D2A63C;"> <span class="text-2xl font-bold" style="color: #F3F3E6;">EF</span> </div> <div class="text-left"> <div class="text-lg font-bold" style="color: #F3F3E6;">Ez2Fix Founders</div> <div class="text-sm" style="color: #D2A63C;">Elmwood Park Residents Since 2005</div> </div> </div> <blockquote class="text-xl italic leading-relaxed" style="color: #F3F3E6;">
"When your garage door breaks, you're already stressed about the inconvenience and worried about the cost. The last thing you should have to worry about is whether you can trust the repair company. We started Ez2Fix because every Bergen County family deserves a garage door company that shows up on time, explains everything clearly, charges fair prices, and stands behind their work. That's not just our business model - it's our promise to our neighbors."
</blockquote> ` })} </div> <!-- Our Values & Credentials Combined --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"> <!-- Quality --> ${renderComponent($$result, "Card", $$Card, { "class": "p-8 shadow-xl border-2 text-center h-full", "style": "background-color: #F3F3E6; border-color: #D2A63C;" }, { "default": ($$result2) => renderTemplate` <div class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%);"> <svg class="h-10 w-10" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-2xl font-bold mb-4" style="color: #1D1912;">Quality First</h3> <p class="leading-relaxed mb-6" style="color: #1D1912;">
Premium parts, expert installation, comprehensive warranties. We use only manufacturer-approved components 
            and stand behind every job with industry-leading guarantees.
</p> <div class="space-y-2"> <div class="flex items-center justify-center space-x-2 text-sm" style="color: #BB8525;"> <div class="w-2 h-2 rounded-full" style="background-color: #D2A63C;"></div> <span>Licensed & Insured Professional</span> </div> <div class="flex items-center justify-center space-x-2 text-sm" style="color: #BB8525;"> <div class="w-2 h-2 rounded-full" style="background-color: #D2A63C;"></div> <span>Manufacturer Certifications</span> </div> </div> ` })} <!-- Honest Service --> ${renderComponent($$result, "Card", $$Card, { "class": "p-8 shadow-xl border-2 text-center h-full", "style": "background-color: #F3F3E6; border-color: #BB8525;" }, { "default": ($$result2) => renderTemplate` <div class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, #BB8525 0%, #D2A63C 100%);"> <svg class="h-10 w-10" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path> </svg> </div> <h3 class="text-2xl font-bold mb-4" style="color: #1D1912;">Honest Pricing</h3> <p class="leading-relaxed mb-6" style="color: #1D1912;">
Clear, upfront pricing with no hidden fees. We explain exactly what needs to be done and why, 
            so you can make informed decisions about your garage door.
</p> <div class="space-y-2"> <div class="flex items-center justify-center space-x-2 text-sm" style="color: #BB8525;"> <div class="w-2 h-2 rounded-full" style="background-color: #BB8525;"></div> <span>Transparent, Written Estimates</span> </div> <div class="flex items-center justify-center space-x-2 text-sm" style="color: #BB8525;"> <div class="w-2 h-2 rounded-full" style="background-color: #BB8525;"></div> <span>No Pressure Sales Tactics</span> </div> </div> ` })} <!-- Community Focus --> ${renderComponent($$result, "Card", $$Card, { "class": "p-8 shadow-xl border-2 text-center h-full", "style": "background-color: #F3F3E6; border-color: #EECD5C;" }, { "default": ($$result2) => renderTemplate` <div class="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, #EECD5C 0%, #D2A63C 100%);"> <svg class="h-10 w-10" style="color: #1D1912;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path> </svg> </div> <h3 class="text-2xl font-bold mb-4" style="color: #1D1912;">Community First</h3> <p class="leading-relaxed mb-6" style="color: #1D1912;">
We're not just a business – we're your Bergen County neighbors. Our reputation is built on 
            treating every customer like family and being accountable to our community.
</p> <div class="space-y-2"> <div class="flex items-center justify-center space-x-2 text-sm" style="color: #BB8525;"> <div class="w-2 h-2 rounded-full" style="background-color: #EECD5C;"></div> <span>Local Business Partnerships</span> </div> <div class="flex items-center justify-center space-x-2 text-sm" style="color: #BB8525;"> <div class="w-2 h-2 rounded-full" style="background-color: #EECD5C;"></div> <span>Community Safety Initiatives</span> </div> </div> ` })} </div> <!-- Success Metrics & Social Proof --> <div class="text-center mb-16"> <h3 class="text-3xl font-bold mb-8" style="color: #F3F3E6;">
A Decade of <span style="color: #D2A63C;">Proven Results</span> </h3> <!-- Main Stats --> <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"> ${renderComponent($$result, "Card", $$Card, { "class": "p-6 text-center shadow-lg border-2", "style": "background-color: #F3F3E6; border-color: #D2A63C;" }, { "default": ($$result2) => renderTemplate` <div class="text-3xl font-bold mb-2" style="color: #D2A63C;">10+</div> <div class="text-sm font-semibold mb-2" style="color: #1D1912;">Years Experience</div> <p class="text-xs" style="color: #BB8525;">Serving Bergen County since 2014</p> ` })} ${renderComponent($$result, "Card", $$Card, { "class": "p-6 text-center shadow-lg border-2", "style": "background-color: #F3F3E6; border-color: #EECD5C;" }, { "default": ($$result2) => renderTemplate` <div class="text-3xl font-bold mb-2" style="color: #EECD5C;">10,000+</div> <div class="text-sm font-semibold mb-2" style="color: #1D1912;">Doors Serviced</div> <p class="text-xs" style="color: #BB8525;">From repairs to installations</p> ` })} ${renderComponent($$result, "Card", $$Card, { "class": "p-6 text-center shadow-lg border-2", "style": "background-color: #F3F3E6; border-color: #BB8525;" }, { "default": ($$result2) => renderTemplate` <div class="text-3xl font-bold mb-2" style="color: #BB8525;">5.0★</div> <div class="text-sm font-semibold mb-2" style="color: #1D1912;">Google Rating</div> <p class="text-xs" style="color: #BB8525;">Based on verified reviews</p> ` })} ${renderComponent($$result, "Card", $$Card, { "class": "p-6 text-center shadow-lg border-2", "style": "background-color: #F3F3E6; border-color: #D2A63C;" }, { "default": ($$result2) => renderTemplate` <div class="text-3xl font-bold mb-2" style="color: #D2A63C;">14</div> <div class="text-sm font-semibold mb-2" style="color: #1D1912;">Communities</div> <p class="text-xs" style="color: #BB8525;">Across Bergen County</p> ` })} </div> <!-- Customer Testimonial --> ${renderComponent($$result, "Card", $$Card, { "class": "p-8 shadow-xl border-2 max-w-4xl mx-auto", "style": "background-color: #F3F3E6; border-color: #D2A63C;" }, { "default": ($$result2) => renderTemplate` <div class="flex items-center justify-between mb-6"> <div class="flex space-x-1"> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg class="h-6 w-6" style="color: #D2A63C;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path> </svg>`)} </div> <span class="text-sm font-semibold px-3 py-1 rounded-full" style="background-color: #D2A63C; color: #F3F3E6;">Recent Review</span> </div> <blockquote class="text-lg leading-relaxed mb-6 italic" style="color: #1D1912;">
"Ez2Fix has been our go-to for three years now. They installed our garage door, and when we needed a small adjustment recently, 
            they came out at no charge. That's the kind of service that keeps customers for life."
</blockquote> <div class="flex items-center justify-center"> <div class="w-12 h-12 rounded-full flex items-center justify-center mr-4" style="background-color: #D2A63C;"> <span class="text-lg font-bold" style="color: #F3F3E6;">SM</span> </div> <div class="text-left"> <div class="font-semibold" style="color: #1D1912;">Sarah M.</div> <div class="text-sm" style="color: #BB8525;">Saddle Brook, NJ</div> </div> </div> ` })} </div> </div> </div> </section>`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/components/sections/AboutMain.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Ez2Fix Bergen County NJ | Licensed Garage Door Contractor #13VH13553300", "description": "Meet Ez2Fix, your trusted Bergen County garage door professionals since 2014. Licensed contractor #13VH13553300 with 10+ years experience serving 25+ communities. Professional technicians committed to quality service and customer satisfaction. Call (201) 554-6769!", "keywords": "about ez2fix bergen county nj, licensed garage door contractor bergen county, garage door company bergen county nj, professional garage door service bergen county, experienced garage door technicians nj, ez2fix garage door services about us, bergen county garage door experts, garage door contractor license 13VH13553300" }, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main id="main-content"> ${renderComponent($$result2, "AboutHero", $$AboutHero, {})} <div class="py-8"></div> ${renderComponent($$result2, "AboutMain", $$AboutMain, {})} <div class="py-8"></div> ${renderComponent($$result2, "CTASection", $$CTASection, { "variant": "about" })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://ez2fix.com/about#about",
    "name": "About Ez2Fix Garage Door Services",
    "description": "Learn about Ez2Fix, Bergen County's trusted garage door professionals since 2014.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Ez2Fix Garage Door Services",
      "foundingDate": "2014",
      "description": "Professional garage door repair and installation company serving Bergen County and surrounding areas in Northern New Jersey.",
      "knowsAbout": [
        "Garage Door Repair",
        "Garage Door Installation",
        "Emergency Garage Door Service",
        "Garage Door Spring Repair",
        "Garage Door Opener Installation"
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional License #13VH13553300",
        "recognizedBy": {
          "@type": "Organization",
          "name": "State of New Jersey"
        }
      },
      "yearsOfOperation": "10+",
      "numberOfEmployees": "Professional technicians",
      "serviceArea": [
        "Bergen County, NJ",
        "Hudson County, NJ",
        "Passaic County, NJ",
        "Essex County, NJ"
      ]
    }
  }))) })}` })}`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/pages/about.astro", void 0);
const $$file = "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/pages/about.astro";
const $$url = "/about";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
