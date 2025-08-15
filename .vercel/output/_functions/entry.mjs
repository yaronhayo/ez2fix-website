import { renderers } from "./renderers.mjs";
import { c as createExports, s as serverEntrypointModule } from "./assets/_@astrojs-ssr-adapter-nTHpOUbB.js";
import { manifest } from "./manifest_DurqZyPC.mjs";
const serverIslandMap = /* @__PURE__ */ new Map();
;
const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/about.astro.mjs");
const _page2 = () => import("./pages/accessibility-policy.astro.mjs");
const _page3 = () => import("./pages/api/booking.astro.mjs");
const _page4 = () => import("./pages/api/contact.astro.mjs");
const _page5 = () => import("./pages/api/robots.astro.mjs");
const _page6 = () => import("./pages/api/sitemap.astro.mjs");
const _page7 = () => import("./pages/blog/choosing-right-garage-door-bergen-county.astro.mjs");
const _page8 = () => import("./pages/blog/commercial-vs-residential-garage-doors.astro.mjs");
const _page9 = () => import("./pages/blog/emergency-garage-door-repair-when-to-call.astro.mjs");
const _page10 = () => import("./pages/blog/garage-door-spring-replacement-signs.astro.mjs");
const _page11 = () => import("./pages/blog/smart-garage-door-openers-worth-investment.astro.mjs");
const _page12 = () => import("./pages/blog/winter-garage-door-maintenance-nj.astro.mjs");
const _page13 = () => import("./pages/blog.astro.mjs");
const _page14 = () => import("./pages/booking.astro.mjs");
const _page15 = () => import("./pages/contact.astro.mjs");
const _page16 = () => import("./pages/faq.astro.mjs");
const _page17 = () => import("./pages/privacy-policy.astro.mjs");
const _page18 = () => import("./pages/reviews.astro.mjs");
const _page19 = () => import("./pages/service-areas/cedar-grove.astro.mjs");
const _page20 = () => import("./pages/service-areas/clifton.astro.mjs");
const _page21 = () => import("./pages/service-areas/fair-lawn.astro.mjs");
const _page22 = () => import("./pages/service-areas/little-falls.astro.mjs");
const _page23 = () => import("./pages/service-areas/montclair.astro.mjs");
const _page24 = () => import("./pages/service-areas/north-caldwell.astro.mjs");
const _page25 = () => import("./pages/service-areas/west-caldwell.astro.mjs");
const _page26 = () => import("./pages/service-areas.astro.mjs");
const _page27 = () => import("./pages/services/commercial-garage-door-service.astro.mjs");
const _page28 = () => import("./pages/services/emergency-garage-door-repair.astro.mjs");
const _page29 = () => import("./pages/services/garage-door-opener-installation.astro.mjs");
const _page30 = () => import("./pages/services/garage-door-spring-repair.astro.mjs");
const _page31 = () => import("./pages/services/general-garage-door-repair.astro.mjs");
const _page32 = () => import("./pages/services/new-garage-door-installation.astro.mjs");
const _page33 = () => import("./pages/services.astro.mjs");
const _page34 = () => import("./pages/sitemap.astro.mjs");
const _page35 = () => import("./pages/terms-of-service.astro.mjs");
const _page36 = () => import("./pages/thank-you.astro.mjs");
const _page37 = () => import("./pages/index.astro.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/about.astro", _page1],
  ["src/pages/accessibility-policy.astro", _page2],
  ["src/pages/api/booking.ts", _page3],
  ["src/pages/api/contact.ts", _page4],
  ["src/pages/api/robots.ts", _page5],
  ["src/pages/api/sitemap.ts", _page6],
  ["src/pages/blog/choosing-right-garage-door-bergen-county.astro", _page7],
  ["src/pages/blog/commercial-vs-residential-garage-doors.astro", _page8],
  ["src/pages/blog/emergency-garage-door-repair-when-to-call.astro", _page9],
  ["src/pages/blog/garage-door-spring-replacement-signs.astro", _page10],
  ["src/pages/blog/smart-garage-door-openers-worth-investment.astro", _page11],
  ["src/pages/blog/winter-garage-door-maintenance-nj.astro", _page12],
  ["src/pages/blog.astro", _page13],
  ["src/pages/booking.astro", _page14],
  ["src/pages/contact.astro", _page15],
  ["src/pages/faq.astro", _page16],
  ["src/pages/privacy-policy.astro", _page17],
  ["src/pages/reviews.astro", _page18],
  ["src/pages/service-areas/cedar-grove.astro", _page19],
  ["src/pages/service-areas/clifton.astro", _page20],
  ["src/pages/service-areas/fair-lawn.astro", _page21],
  ["src/pages/service-areas/little-falls.astro", _page22],
  ["src/pages/service-areas/montclair.astro", _page23],
  ["src/pages/service-areas/north-caldwell.astro", _page24],
  ["src/pages/service-areas/west-caldwell.astro", _page25],
  ["src/pages/service-areas.astro", _page26],
  ["src/pages/services/commercial-garage-door-service.astro", _page27],
  ["src/pages/services/emergency-garage-door-repair.astro", _page28],
  ["src/pages/services/garage-door-opener-installation.astro", _page29],
  ["src/pages/services/garage-door-spring-repair.astro", _page30],
  ["src/pages/services/general-garage-door-repair.astro", _page31],
  ["src/pages/services/new-garage-door-installation.astro", _page32],
  ["src/pages/services.astro", _page33],
  ["src/pages/sitemap.astro", _page34],
  ["src/pages/terms-of-service.astro", _page35],
  ["src/pages/thank-you.astro", _page36],
  ["src/pages/index.astro", _page37]
]);
const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: () => import("./_noop-actions.mjs"),
  middleware: () => import("./_noop-middleware.mjs")
});
const _args = {
  "middlewareSecret": "52840141-28c5-44b9-b4d6-5970ec675432",
  "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = "start";
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
