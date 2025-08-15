/* empty css                                */
import { f as createComponent, m as maybeRenderHead, k as renderComponent, r as renderTemplate, h as addAttribute, l as Fragment, u as unescapeHTML } from "../assets/astro/server-Crfne28A.js";
import "kleur/colors";
import { s as siteConfig, $ as $$BaseLayout, a as $$Header, b as $$Footer } from "../assets/Footer-BijWoSSf.js";
import { $ as $$Button } from "../assets/Button-Dpcd80cV.js";
import { $ as $$Card } from "../assets/Card-BTi5B1xO.js";
import { a as $$FAQComponent, $ as $$ReviewsCarousel } from "../assets/FAQComponent-DJ0uaaAQ.js";
import { $ as $$CTASection } from "../assets/CTASection-C6pWTuOV.js";
import { renderers } from "../renderers.mjs";
const $$ServicesHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative py-24 overflow-hidden"> <!-- Background Image with Overlay --> <div class="absolute inset-0"> <img src="https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/ez2fix-services-hero.jpg" alt="Professional garage door service" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gray-900 bg-opacity-80"></div> </div> <div class="container mx-auto px-4 relative z-10"> <div class="max-w-4xl mx-auto text-center"> <!-- Main Headline --> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"> <span style="color: #F3F3E6;">When Your Garage Door Breaks</span> <br> <span class="text-2xl md:text-3xl font-medium" style="color: #EECD5C;">We Know How Stressful That Is</span> </h1> <p class="text-xl leading-relaxed mb-12 max-w-3xl mx-auto" style="color: #F3F3E6;">
You're running late and your door won't open. Or worse - it won't close and your home isn't secure. We've helped thousands of Northern NJ families through these exact moments. <span style="color: #EECD5C; font-weight: 600;">We'll be there fast</span>, fix it right, and make sure you never have to worry about it again.
</p> <!-- Trust Indicators --> <div class="flex flex-wrap justify-center items-center gap-8 mb-12"> <div class="flex items-center space-x-2"> <svg class="h-5 w-5" style="color: #D2A63C;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path> </svg> <span class="font-semibold" style="color: #F3F3E6;">Your Neighbors Trust Us</span> </div> <div class="flex items-center space-x-2"> <svg class="h-5 w-5" style="color: #EECD5C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span class="font-semibold" style="color: #F3F3E6;">We Come When We Say</span> </div> <div class="flex items-center space-x-2"> <svg class="h-5 w-5" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path> </svg> <span class="font-semibold" style="color: #F3F3E6;">We Stand Behind Our Work</span> </div> <div class="flex items-center space-x-2"> <svg class="h-5 w-5" style="color: #EECD5C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span class="font-semibold" style="color: #F3F3E6;">We Answer 24/7</span> </div> </div> <!-- CTA --> ${renderComponent($$result, "Button", $$Button, { "href": siteConfig.links.phone, "size": "lg", "class": "text-lg px-10 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300", "style": "background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%); color: #1D1912;" }, { "default": ($$result2) => renderTemplate` <svg class="mr-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
Call Now: ${siteConfig.business.phone}` })} </div> </div> </section>`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/components/sections/ServicesHero.astro", void 0);
const $$ServiceShowcase = createComponent(($$result, $$props, $$slots) => {
  const detailedServices = [
    {
      title: "24/7 Emergency Garage Door Repair",
      description: "It's 2 AM and your door won't close - leaving your family and belongings vulnerable. Or you're running late for work and it won't open. We understand the stress and worry. That's why we're here 24/7 to restore your peace of mind.",
      image: "https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/Garage%20Door%20Repair.webp",
      features: ["Available 24/7", "Same-Day Service", "All Brands Fixed", "Your Safety First"],
      warranty: "1-Year Warranty",
      popular: true,
      testimonial: "My door broke at midnight and I was panicking. They came right out and fixed it perfectly. Such a relief knowing my family was safe again.",
      badge: "24/7 AVAILABLE"
    },
    {
      title: "Garage Door Spring Repair",
      description: "When springs break, your door becomes a 400-pound safety hazard. You might hear a loud bang, see gaps, or notice the door won't lift. Don't risk injury trying to fix it yourself - we have the right tools and experience to keep your family safe.",
      image: "https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/Garage%20Door%20Spring%20Repair.jpg",
      features: ["Safe Replacement", "High-Quality Springs", "Proper Balancing", "No More Worry"],
      warranty: "10-Year Warranty",
      popular: true,
      testimonial: "I heard that scary bang and knew the spring broke. They explained everything, did it safely, and now my door works better than ever.",
      badge: "MOST COMMON"
    },
    {
      title: "Garage Door Opener Installation",
      description: "Tired of manually lifting heavy doors or dealing with an old, unreliable opener that leaves you stranded? Upgrade to smart technology that you can control from anywhere, giving you convenience and peace of mind.",
      image: "https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/Garage%20Door%20Opener%20Installation.webp",
      features: ["Smart Control", "Never Get Locked Out", "Backup Power", "Phone Notifications"],
      warranty: "15-Year Warranty",
      popular: false,
      testimonial: "No more wondering if I closed the garage door. I can check and control it from work. Best home upgrade I've made!",
      badge: "SMART HOME"
    },
    {
      title: "New Garage Door Installation",
      description: "Your garage door is often the first thing people notice about your home. If yours is dented, faded, or outdated, it's hurting your property value and curb appeal. Let us help you fall in love with your home's appearance again.",
      image: "https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/Garage%20Door%20Installation.png",
      features: ["Boost Home Value", "Custom Styles", "Energy Savings", "Neighborhood Envy"],
      warranty: "15-Year Warranty",
      popular: false,
      testimonial: "Everyone compliments our new door. It completely transformed our home's look and we get so many compliments from neighbors.",
      badge: "CURB APPEAL"
    },
    {
      title: "Commercial Garage Door Service",
      description: "When your business garage door fails, operations stop and money is lost. Deliveries can't get in, equipment can't get out. We understand that every minute counts for your business, and we'll get you back to making money fast.",
      image: "https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/commercial-garage-door.jpg",
      features: ["Minimize Downtime", "Heavy-Duty Solutions", "Maintenance Plans", "Keep Business Moving"],
      warranty: "Commercial Warranty",
      popular: false,
      testimonial: "When our loading dock door broke, they were here in 30 minutes. Got us back to shipping orders the same day. Saved us thousands.",
      badge: "BUSINESS"
    },
    {
      title: "General Garage Door Repair",
      description: "Strange noises keeping you up? Door sticking halfway? Cables looking frayed? These aren't just annoyances - they're warning signs that could lead to expensive damage or dangerous failures. Let us fix the small problems before they become big ones.",
      image: "https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/garage%20door%20repair.png",
      features: ["Prevent Big Problems", "Stop Annoying Noises", "Smooth Operation", "Peace of Mind"],
      warranty: "1-Year Warranty",
      popular: false,
      testimonial: "The grinding noise was driving me crazy. Now it runs whisper quiet and I don't worry about it breaking down anymore.",
      badge: "ALL REPAIRS"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20" style="background-color: #F3F3E6;"> <div class="container mx-auto px-4"> <!-- Section Header --> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #1D1912;">
We Fix What <span style="color: #D2A63C;">Keeps You Up at Night</span> <br> <span class="text-2xl md:text-3xl font-medium" style="color: #BB8525;">Your Neighbors' Trusted Choice Since Day One</span> </h2> <p class="text-xl max-w-4xl mx-auto leading-relaxed mb-8" style="color: #1D1912;">
Every garage door problem has the same thing in common - it disrupts your life when you least expect it. 
        Whether it's <span style="color: #D2A63C; font-weight: 700;">security worries at 2 AM</span> or
<span style="color: #BB8525; font-weight: 700;">being late for work</span>, we've seen it all and we're here to help.
</p> </div> <!-- Services Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${detailedServices.map((service, index) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "class": "relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 group", "style": service.popular ? "border-color: #D2A63C; box-shadow: 0 0 20px rgba(210, 166, 60, 0.3);" : "border-color: #BB8525;" }, { "default": ($$result2) => renderTemplate`  <div class="relative h-48 overflow-hidden"> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"> <!-- Image Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> <!-- Badge --> <div class="absolute top-4 left-4"> <div class="px-3 py-1 text-xs font-bold rounded-full shadow-lg"${addAttribute(service.popular ? "background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%); color: #1D1912;" : "background-color: #BB8525; color: #F3F3E6;", "style")}> ${service.badge} </div> </div> </div> <div class="p-6"> <!-- Service Header --> <div class="mb-4"> <h3 class="text-lg sm:text-xl font-bold mb-2" style="color: #1D1912; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${service.title}</h3> <p class="text-sm leading-relaxed mb-3" style="color: #BB8525; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${service.description}</p> </div> <!-- Service Features --> <div class="mb-4"> <div class="grid grid-cols-2 gap-2"> ${service.features.map((feature) => renderTemplate`<div class="flex items-center space-x-2 text-xs"> <svg class="h-3 w-3 flex-shrink-0" style="color: #D2A63C;" fill="currentColor" viewBox="0 0 24 24"> <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path> </svg> <span style="color: #1D1912;">${feature}</span> </div>`)} </div> </div> <!-- Service Info Bar --> <div class="flex justify-center items-center mb-4 p-3 rounded-lg" style="background-color: rgba(238, 205, 92, 0.1);"> <div class="text-center"> <div class="text-xs font-semibold" style="color: #1D1912;">Warranty</div> <div class="text-xs" style="color: #BB8525;">${service.warranty}</div> </div> </div> <!-- Customer Testimonial --> <div class="p-3 rounded-lg mb-4" style="background-color: rgba(238, 205, 92, 0.1); border-left: 3px solid #EECD5C;"> <p class="text-xs italic leading-relaxed mb-2" style="color: #1D1912;">"${service.testimonial}"</p> <div class="flex items-center space-x-1"> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg class="h-3 w-3" style="color: #D2A63C;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path> </svg>`)} <span class="text-xs font-medium ml-2" style="color: #BB8525;">Verified</span> </div> </div> <!-- CTA --> <div class="space-y-2"> ${renderComponent($$result2, "Button", $$Button, { "href": service.title === "24/7 Emergency Garage Door Repair" ? "/services/emergency-garage-door-repair" : service.title === "Garage Door Spring Repair" ? "/services/garage-door-spring-repair" : service.title === "Garage Door Opener Installation" ? "/services/garage-door-opener-installation" : service.title === "New Garage Door Installation" ? "/services/new-garage-door-installation" : service.title === "Commercial Garage Door Service" ? "/services/commercial-garage-door-service" : service.title === "General Garage Door Repair" ? "/services/general-garage-door-repair" : "/booking", "class": "w-full text-sm font-bold transition-all duration-300 hover:shadow-md", "style": service.popular ? "background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%); color: #1D1912;" : "background-color: #D2A63C; color: #F3F3E6;" }, { "default": ($$result3) => renderTemplate`
Learn More & Get Quote
` })} </div> </div> ` })}`)} </div> </div> </section>`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/components/sections/ServiceShowcase.astro", void 0);
const $$ProblemSolver = createComponent(($$result, $$props, $$slots) => {
  const problemExamples = [
    {
      problem: "Door Stuck Halfway",
      scenario: "You're rushing to work and your garage door stops halfway up. You're trapped and stressed!",
      before: "Frustrated homeowner can't leave their garage",
      after: "Door working perfectly with professional service",
      solution: "Broken spring replaced with high-cycle spring",
      timeToFix: "Quick service",
      cost: "Professional repair",
      icon: "door-stuck"
    },
    {
      problem: "Loud Grinding Noise",
      scenario: "Your garage door sounds like a freight train every time it opens, disturbing neighbors.",
      before: "Embarrassing noise waking up the neighborhood",
      after: "Silent, smooth operation like new",
      solution: "Lubricated all moving parts and replaced worn rollers",
      timeToFix: "Efficient service",
      cost: "Quality repair",
      icon: "noise"
    },
    {
      problem: "Door Off Track",
      scenario: "Your garage door came off the track and hangs crooked. Dangerous and can't close properly.",
      before: "Unsafe door that won't close, security risk",
      after: "Perfectly aligned door operating safely",
      solution: "Realigned track and replaced damaged rollers",
      timeToFix: "Professional service",
      cost: "Expert repair",
      icon: "track"
    },
    {
      problem: "Remote Not Working",
      scenario: "You click the remote but nothing happens. You can't get in your garage from your car.",
      before: "Standing in the rain trying to manually open door",
      after: "Remote working perfectly from 100+ feet away",
      solution: "Programmed new remote and replaced opener receiver",
      timeToFix: "Quick fix",
      cost: "Affordable service",
      icon: "remote"
    },
    {
      problem: "Door Frozen Shut",
      scenario: "Winter freeze sealed your garage door to the ground. You can't get your car out.",
      before: "Car trapped in garage, late for important meeting",
      after: "Door opens smoothly even in freezing weather",
      solution: "Installed weather stripping and adjusted door balance",
      timeToFix: "Thorough service",
      cost: "Professional work",
      icon: "frozen"
    },
    {
      problem: "Spring Broke With Loud Bang",
      scenario: "You heard a loud bang from the garage. The door won't lift and there's a broken spring.",
      before: "Heavy door that's impossible to lift manually",
      after: "Door lifts effortlessly with new premium springs",
      solution: "Replaced both springs with 25,000-cycle premium springs",
      timeToFix: "Expert service",
      cost: "Quality repair",
      icon: "spring"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20" style="background: linear-gradient(135deg, #1D1912 0%, #BB8525 100%);"> <div class="container mx-auto px-4"> <!-- Section Header --> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #F3F3E6;">
We've Been There. <span style="color: #EECD5C;">We Get It.</span> <br> <span class="text-2xl md:text-3xl font-medium" style="color: #D2A63C;">Your Stress Becomes Our Mission</span> </h2> <p class="text-xl max-w-4xl mx-auto leading-relaxed" style="color: #F3F3E6;">
These aren't just repair stories - they're moments when Northern NJ families felt overwhelmed and we stepped in to help.
<span style="color: #EECD5C; font-weight: 700;">Your peace of mind</span> is what drives us to do
<span style="color: #D2A63C; font-weight: 700;">whatever it takes</span>.
</p> </div> <!-- Problem Examples Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${problemExamples.map((example, index) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "class": "hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden", "style": "background-color: #F3F3E6; border-color: #D2A63C;" }, { "default": ($$result2) => renderTemplate`  <div class="p-6 pb-0"> <div class="flex items-center mb-4"> <div class="w-12 h-12 rounded-full flex items-center justify-center mr-4" style="background-color: #D2A63C;"> ${example.icon === "door-stuck" && renderTemplate`<svg class="h-6 w-6" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path> </svg>`} ${example.icon === "noise" && renderTemplate`<svg class="h-6 w-6" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 15H5a2 2 0 01-2-2V9a2 2 0 012-2h4l5-5v16l-5-5z"></path> </svg>`} ${example.icon === "track" && renderTemplate`<svg class="h-6 w-6" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path> </svg>`} ${example.icon === "remote" && renderTemplate`<svg class="h-6 w-6" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0l-2 18h12l-2-18"></path> </svg>`} ${example.icon === "frozen" && renderTemplate`<svg class="h-6 w-6" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path> </svg>`} ${example.icon === "spring" && renderTemplate`<svg class="h-6 w-6" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 1012 0v1H3v-1z"></path> </svg>`} </div> <h3 class="text-xl font-bold" style="color: #1D1912;">${example.problem}</h3> </div> <p class="leading-relaxed mb-6" style="color: #BB8525;">${example.scenario}</p> </div>  <div class="px-6"> <div class="grid grid-cols-1 gap-4 mb-6"> <!-- Before --> <div class="p-4 rounded-lg border-l-4" style="background-color: rgba(187, 133, 37, 0.1); border-color: #BB8525;"> <div class="flex items-center mb-2"> <svg class="h-5 w-5 mr-2" style="color: #BB8525;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> <span class="font-bold text-sm" style="color: #1D1912;">BEFORE</span> </div> <p class="text-sm" style="color: #1D1912;">${example.before}</p> </div> <!-- After --> <div class="p-4 rounded-lg border-l-4" style="background-color: rgba(238, 205, 92, 0.1); border-color: #EECD5C;"> <div class="flex items-center mb-2"> <svg class="h-5 w-5 mr-2" style="color: #EECD5C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="font-bold text-sm" style="color: #1D1912;">AFTER</span> </div> <p class="text-sm" style="color: #1D1912;">${example.after}</p> </div> </div> <!-- Solution Details --> <div class="p-4 rounded-lg mb-6" style="background-color: rgba(210, 166, 60, 0.1);"> <h4 class="font-bold mb-2 flex items-center" style="color: #1D1912;"> <svg class="h-4 w-4 mr-2" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg>
Our Solution
</h4> <p class="text-sm mb-3" style="color: #1D1912;">${example.solution}</p> <div class="flex justify-between items-center"> <div> <span class="text-xs font-medium" style="color: #BB8525;">Time to Fix:</span> <div class="font-bold" style="color: #D2A63C;">${example.timeToFix}</div> </div> <div class="text-right"> <span class="text-xs font-medium" style="color: #BB8525;">Total Cost:</span> <div class="font-bold text-lg" style="color: #D2A63C;">${example.cost}</div> </div> </div> </div> <!-- Guarantee Badge --> <div class="text-center pb-6"> <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-full" style="background-color: #D2A63C;"> <svg class="h-4 w-4" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> <span class="text-sm font-bold" style="color: #F3F3E6;">10-Year Warranty</span> </div> </div> </div> ` })}`)} </div> <!-- Bottom CTA --> <div class="text-center mt-16"> <div class="max-w-3xl mx-auto p-8 rounded-2xl border-2" style="background: rgba(243, 243, 230, 0.1); backdrop-filter: blur(10px); border-color: #EECD5C;"> <h3 class="text-3xl font-bold mb-4" style="color: #F3F3E6;">
Recognize Your Situation Above?
</h3> <p class="text-lg mb-6" style="color: #EECD5C;"> <strong>You don't have to handle this alone.</strong> We've helped thousands of your neighbors through these exact moments. 
          One call and you can stop worrying - <span style="color: #D2A63C; font-weight: 700;">we'll take care of everything</span>.
</p> <a${addAttribute(siteConfig.links.phone, "href")} class="inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105" style="background: linear-gradient(135deg, #EECD5C 0%, #D2A63C 100%); color: #1D1912;"> <svg class="mr-3 h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
GET HELP NOW: ${siteConfig.business.phone} </a> </div> </div> </div> </section>`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/components/sections/ProblemSolver.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Professional Garage Door Services Bergen County NJ | Ez2Fix | Licensed Contractor", "description": "Complete garage door services in Bergen & Hudson Counties: emergency repair, spring replacement, opener installation, new door installation. Licensed contractor #13VH13553300 with 10-year warranty. 24/7 emergency service. Call (201) 554-6769!", "keywords": "garage door services bergen county nj, garage door repair services, garage door spring repair nj, garage door opener installation bergen county, new garage door installation nj, emergency garage door service, commercial garage door service bergen county, garage door maintenance nj, licensed garage door contractor bergen county, garage door service elmwood park fair lawn clifton" }, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main id="main-content"> ${renderComponent($$result2, "ServicesHero", $$ServicesHero, {})} <div class="py-8"></div> ${renderComponent($$result2, "ServiceShowcase", $$ServiceShowcase, {})} <div class="py-8"></div> ${renderComponent($$result2, "ProblemSolver", $$ProblemSolver, {})} <div class="py-8"></div> ${renderComponent($$result2, "FAQComponent", $$FAQComponent, { "faqs": [
    {
      question: "What do you do when neighbors call with garage door problems?",
      answer: "We treat every call like it's coming from family. Whether it's a spring that snapped at midnight, a door that won't close leaving your home vulnerable, or an opener that died in a storm - we bring everything needed to fix it right the first time. From emergency repairs to beautiful new installations, we're here for whatever your family needs."
    },
    {
      question: "How fast will you come when our garage door breaks?",
      answer: "We know how stressful it is when your door breaks - you can't get to work, your home isn't secure, or you're worried about safety. That's why we prioritize getting to you as quickly as possible. When you call, you're not just another appointment - you're a neighbor who needs help, and we'll be there."
    },
    {
      question: "Will I get surprised by hidden costs after you arrive?",
      answer: "Never. We understand you're already stressed about the broken door - the last thing you need is surprise charges. Before we touch anything, we'll show you exactly what's wrong, explain your options in plain English, and give you honest upfront pricing. No surprises, no pressure, just straight answers."
    },
    {
      question: "What if something goes wrong after you fix my door?",
      answer: "We stand behind our work with a 10-year warranty because we use premium parts and expert installation. But more than that - we're your neighbors. If you ever have concerns, just call. We want you to feel completely confident that your family is safe and your door will work perfectly for years to come."
    },
    {
      question: "What if you can't fix my specific garage door brand?",
      answer: "In 15+ years serving Northern NJ families, we've never met a garage door we couldn't fix. Whether it's a LiftMaster, Chamberlain, Genie, or that old door from 1985 that 'no one makes parts for anymore' - we find a way. Our trucks are stocked with parts for every major brand, and if we don't have it, we'll get it."
    },
    {
      question: "Can I just fix the broken spring myself to save money?",
      answer: "Please don't risk it. These springs hold 400+ pounds of tension - we've seen too many neighbors get seriously hurt trying DIY repairs. Your safety and your family's peace of mind are worth more than saving a few dollars. We'll fix it safely, quickly, and with a warranty that protects you for 10 years."
    }
  ], "title": "Questions <span style='color: #D2A63C;'>Your Neighbors</span> Always Ask", "subtitle": "When garage doors break, the same worries come up every time. Here's what other families in your neighborhood wanted to know - <span style='font-weight: 700; color: #D2A63C;'>and our honest answers</span>." })} <div class="py-8"></div> <section class="py-16" style="background-color: #F3F3E6;"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #1D1912;">
Service <span style="color: #D2A63C;">Success Stories</span> </h2> <p class="text-xl max-w-3xl mx-auto leading-relaxed mb-8" style="color: #BB8525;">
Real customers sharing their experiences with our professional garage door services.
</p> </div> ${renderComponent($$result2, "ReviewsCarousel", $$ReviewsCarousel, { "pageType": "services" })} <div class="text-center mt-8"> <a href="/reviews" class="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold border-2 rounded-lg transition-all duration-300 hover:shadow-lg" style="color: #D2A63C; border-color: #D2A63C; background-color: transparent;">
View All Reviews
</a> </div> </div> </div> </section> <div class="py-8"></div> ${renderComponent($$result2, "CTASection", $$CTASection, { "variant": "services" })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://ez2fix.com/services#services",
    "name": "Professional Garage Door Services",
    "description": "Complete garage door services including emergency repair, spring replacement, opener installation, and new door installation in Bergen & Hudson Counties, NJ.",
    "serviceType": [
      "Emergency Garage Door Repair",
      "Garage Door Spring Repair",
      "Garage Door Opener Installation",
      "New Garage Door Installation",
      "Commercial Garage Door Service",
      "Garage Door Maintenance"
    ],
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ez2Fix Garage Door Services",
      "telephone": "(201) 554-6769",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Elmwood Park, NJ 07407",
        "addressLocality": "Elmwood Park",
        "addressRegion": "NJ",
        "postalCode": "07407",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      "Bergen County, NJ",
      "Hudson County, NJ",
      "Elmwood Park, NJ",
      "Fair Lawn, NJ",
      "Clifton, NJ",
      "Paramus, NJ",
      "Hackensack, NJ"
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": "+12015546769",
      "serviceUrl": "https://ez2fix.com/services"
    }
  }))) })}` })}`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/pages/services.astro", void 0);
const $$file = "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/pages/services.astro";
const $$url = "/services";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
