import { e as createAstro, f as createComponent, m as maybeRenderHead, n as renderScript, h as addAttribute, r as renderTemplate, k as renderComponent, l as Fragment, u as unescapeHTML } from "./astro/server-Crfne28A.js";
import "kleur/colors";
import "clsx";
/* empty css                        */
const $$Astro$1 = createAstro("https://ez2fix.com");
const $$ReviewsCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ReviewsCarousel;
  const { pageType = "homepage", reviews } = Astro2.props;
  const homepageReviews = [
    {
      name: "Maria Rodriguez",
      location: "Elmwood Park, NJ",
      rating: 5,
      text: "Called Ez2Fix when my garage door spring broke. They were professional from the first phone call to the final cleanup. The technician explained everything and the repair was completed beautifully.",
      service: "Spring Replacement"
    },
    {
      name: "David Chen",
      location: "Jersey City, NJ",
      rating: 5,
      text: "Excellent customer service! They responded to my inquiry quickly and scheduled a convenient appointment. The work was done professionally and I highly recommend their services.",
      service: "Door Installation"
    },
    {
      name: "Susan Thompson",
      location: "Fair Lawn, NJ",
      rating: 5,
      text: "Ez2Fix made the whole process so easy. From the initial phone call to scheduling and completing the repair, everything went smoothly. Very satisfied with their professional service.",
      service: "Opener Repair"
    },
    {
      name: "Michael Johnson",
      location: "Garfield, NJ",
      rating: 5,
      text: "Great experience working with Ez2Fix. They were honest about what needed to be fixed and provided excellent service. The garage door works perfectly now and I feel confident in their work.",
      service: "Track Repair"
    },
    {
      name: "Jennifer Walsh",
      location: "Hoboken, NJ",
      rating: 5,
      text: "Professional service from start to finish. The technician arrived on time, diagnosed the problem quickly, and fixed my garage door opener perfectly. Will definitely call them again.",
      service: "Opener Service"
    },
    {
      name: "Robert Kim",
      location: "Wood-Ridge, NJ",
      rating: 5,
      text: "Outstanding service! My garage door was making terrible noises and wouldn't open properly. Ez2Fix fixed it professionally and it's been working perfectly ever since. Highly recommend!",
      service: "Maintenance"
    },
    {
      name: "Lisa Martinez",
      location: "Union City, NJ",
      rating: 5,
      text: "After calling three other companies, Ez2Fix was the only one to show up on time and provide honest service. Their technician was knowledgeable and the repair work was excellent.",
      service: "Emergency Repair"
    },
    {
      name: "Kevin O'Brien",
      location: "Weehawken, NJ",
      rating: 5,
      text: "Ez2Fix installed our new garage door and it looks amazing! The installation team was professional, clean, and efficient. Great value for the quality of work they provide.",
      service: "Door Installation"
    },
    {
      name: "Rachel Singh",
      location: "North Bergen, NJ",
      rating: 5,
      text: "My garage door opener failed and Ez2Fix had a technician out the same day. Quick diagnosis and quality repair work. Very impressed with their professional service.",
      service: "Opener Repair"
    },
    {
      name: "Tony Russo",
      location: "Bayonne, NJ",
      rating: 5,
      text: "Been using Ez2Fix for maintenance on both my residential and commercial properties. Always reliable, professional, and their work is guaranteed. Highly recommend!",
      service: "Maintenance"
    },
    {
      name: "Amanda Foster",
      location: "West New York, NJ",
      rating: 5,
      text: "Garage door spring snapped at 9 PM and Ez2Fix actually answered their emergency line! Technician came out the same night and fixed it perfectly. Amazing 24/7 service!",
      service: "Emergency Service"
    },
    {
      name: "James Wilson",
      location: "Kearny, NJ",
      rating: 5,
      text: "Ez2Fix completely transformed my old, noisy garage door. New springs, opener, and maintenance service. Everything works like new and the service was excellent.",
      service: "Full Service"
    }
  ];
  const aboutReviews = [
    {
      name: "Sarah Mitchell",
      location: "Saddle Brook, NJ",
      rating: 5,
      text: "Three years ago, Ez2Fix installed our new garage door. Last month, a small part needed adjustment. They came out at no charge, fixed it perfectly, and reminded us why we chose them originally.",
      service: "Installation & Service"
    },
    {
      name: "Michael Rivera",
      location: "Elmwood Park, NJ",
      rating: 5,
      text: "I called three companies for service. Two tried to sell me expensive extras I didn't need. Ez2Fix gave me exactly what I asked for. No pressure, no surprises – just honest professional service.",
      service: "Spring Replacement"
    },
    {
      name: "Linda Foster",
      location: "Fair Lawn, NJ",
      rating: 5,
      text: "Ez2Fix has been our go-to for garage door service for over 5 years. They're reliable, honest, and always do excellent work. It's rare to find a company you can trust completely.",
      service: "Regular Maintenance"
    }
  ];
  const servicesReviews = [
    {
      name: "Tom Anderson",
      location: "Garfield, NJ",
      rating: 5,
      text: "My garage door spring snapped and Ez2Fix replaced it the same day. The technician was knowledgeable, professional, and cleaned up everything perfectly. Excellent repair service!",
      service: "Spring Replacement"
    },
    {
      name: "Amanda Clark",
      location: "Lodi, NJ",
      rating: 5,
      text: "Needed a new garage door opener and Ez2Fix delivered outstanding service. They explained all my options, installed the new opener perfectly, and programmed all my remotes. Great work!",
      service: "Opener Installation"
    },
    {
      name: "Carlos Santos",
      location: "Hasbrouck Heights, NJ",
      rating: 5,
      text: "Professional installation of our new garage door. The team was courteous, efficient, and the door looks amazing. Definitely increased our home's curb appeal. Highly recommend!",
      service: "Door Installation"
    }
  ];
  const contactReviews = [
    {
      name: "Patricia Wong",
      location: "Rutherford, NJ",
      rating: 5,
      text: "From my first phone call to Ez2Fix, I knew I was dealing with professionals. They scheduled me quickly, arrived on time, and fixed my garage door perfectly. Outstanding customer service!",
      service: "Repair Service"
    },
    {
      name: "James Miller",
      location: "Little Ferry, NJ",
      rating: 5,
      text: "Called Ez2Fix for an urgent garage door problem. They responded quickly, provided clear communication throughout, and solved the issue professionally. Couldn't ask for better service!",
      service: "Emergency Repair"
    },
    {
      name: "Nicole Davis",
      location: "Carlstadt, NJ",
      rating: 5,
      text: "Ez2Fix made getting my garage door fixed so easy. Their customer service was excellent, the technician was professional, and the repair was completed perfectly. Very impressed!",
      service: "Door Repair"
    }
  ];
  let displayReviews = reviews;
  if (!displayReviews) {
    switch (pageType) {
      case "about":
        displayReviews = aboutReviews;
        break;
      case "services":
        displayReviews = servicesReviews;
        break;
      case "contact":
        displayReviews = contactReviews;
        break;
      default:
        displayReviews = homepageReviews;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="reviews-carousel relative overflow-hidden" data-astro-cid-q72lj2gr> <!-- Reviews Container --> <div class="reviews-track flex transition-transform duration-700 ease-in-out" data-astro-cid-q72lj2gr> ${displayReviews.map((review, index) => renderTemplate`<div class="review-slide min-w-full sm:min-w-1/2 lg:min-w-1/3 px-2 sm:px-3"${addAttribute(index, "data-index")} data-astro-cid-q72lj2gr> <div class="p-4 sm:p-5 md:p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 mx-auto max-w-sm" style="background-color: #F3F3E6; border-color: #EECD5C;" data-astro-cid-q72lj2gr> <!-- Stars --> <div class="flex justify-center mb-4 sm:mb-6" data-astro-cid-q72lj2gr> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg class="h-5 w-5 sm:h-6 sm:w-6" style="color: #D2A63C;" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-q72lj2gr> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" data-astro-cid-q72lj2gr></path> </svg>`)} </div> <!-- Quote --> <blockquote class="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-center italic" style="color: #1D1912;" data-astro-cid-q72lj2gr>
"${review.text}"
</blockquote> <!-- Customer Info --> <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4" data-astro-cid-q72lj2gr> <!-- Avatar --> <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg" style="background-color: #D2A63C; color: #F3F3E6;" data-astro-cid-q72lj2gr> ${review.name.split(" ").map((n) => n[0]).join("")} </div> <div class="text-center" data-astro-cid-q72lj2gr> <div class="font-semibold text-base sm:text-lg" style="color: #1D1912;" data-astro-cid-q72lj2gr>${review.name}</div> <div class="text-xs sm:text-sm" style="color: #BB8525;" data-astro-cid-q72lj2gr>${review.location}</div> <div class="text-xs font-medium px-2 py-1 rounded-full mt-1" style="background-color: #EECD5C; color: #1D1912;" data-astro-cid-q72lj2gr> ${review.service} </div> </div> </div> </div> </div>`)} </div> <!-- Navigation Dots --> <div class="flex justify-center space-x-2 mt-8" data-astro-cid-q72lj2gr> ${displayReviews.map((_, index) => renderTemplate`<button class="carousel-dot w-3 h-3 rounded-full transition-all duration-300 hover:scale-110" style="background-color: #BB8525;"${addAttribute(index, "data-index")}${addAttribute(`Go to review ${index + 1}`, "aria-label")} data-astro-cid-q72lj2gr></button>`)} </div> </div> ${renderScript($$result, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/components/ui/ReviewsCarousel.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/components/ui/ReviewsCarousel.astro", void 0);
const $$Astro = createAstro("https://ez2fix.com");
const $$FAQComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQComponent;
  const {
    faqs,
    city = "your area",
    title = `Common Questions About Our Service`,
    subtitle = "We believe in transparency. Here are answers to questions homeowners frequently ask about our garage door services."
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-4xl mx-auto" data-astro-cid-r7mhdzom> <div class="text-center mb-12" data-astro-cid-r7mhdzom> <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: #1D1912;" data-astro-cid-r7mhdzom> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h2> <p class="text-xl" style="color: #BB8525;" data-astro-cid-r7mhdzom> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(subtitle)}` })} </p> </div> <!-- FAQ Grid --> <div class="grid grid-cols-1 gap-6" data-astro-cid-r7mhdzom> ${faqs.map((faq, index) => renderTemplate`<div class="faq-item border-2 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg" style="border-color: #BB8525;" data-astro-cid-r7mhdzom> <button class="faq-question w-full text-left p-6 flex items-center justify-between focus:outline-none" style="background-color: #F3F3E6;"${addAttribute(`toggleFAQ(${index})`, "onclick")} data-astro-cid-r7mhdzom> <h3 class="text-lg font-bold pr-4" style="color: #1D1912;" data-astro-cid-r7mhdzom> ${faq.question} </h3> <svg class="faq-icon h-6 w-6 transform transition-transform duration-300 flex-shrink-0" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-r7mhdzom> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-r7mhdzom></path> </svg> </button> <div class="faq-answer max-h-0 overflow-hidden transition-all duration-300" style="background-color: white;" data-astro-cid-r7mhdzom> <div class="p-6 pt-0" data-astro-cid-r7mhdzom> <p class="leading-relaxed" style="color: #BB8525;" data-astro-cid-r7mhdzom> ${faq.answer} </p> </div> </div> </div>`)} </div> </div> ${renderScript($$result, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/components/ui/FAQComponent.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/components/ui/FAQComponent.astro", void 0);
export {
  $$ReviewsCarousel as $,
  $$FAQComponent as a
};
