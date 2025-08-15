import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, k as renderComponent, l as Fragment, r as renderTemplate } from "./astro/server-Crfne28A.js";
import "kleur/colors";
import { s as siteConfig } from "./Footer-BijWoSSf.js";
import { $ as $$Button } from "./Button-Dpcd80cV.js";
import { $ as $$Card } from "./Card-BTi5B1xO.js";
const $$Astro$1 = createAstro("https://ez2fix.com");
const $$TrustIndicators = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TrustIndicators;
  const {
    layout = "horizontal",
    showDividers = true,
    size = "md",
    items = ["licensed", "rating", "family"],
    textColor = "#BB8525",
    iconColor = "#D2A63C"
  } = Astro2.props;
  const trustItems = {
    licensed: {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      text: "Licensed & Insured",
      filled: false,
      color: iconColor
    },
    rating: {
      icon: "M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z",
      text: "5.0★ Customer Rating",
      filled: true,
      color: "#EECD5C"
    },
    family: {
      icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
      text: "Family Owned Since 2014",
      filled: true,
      color: "#BB8525"
    },
    warranty: {
      icon: "M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z",
      text: "10-Year Warranty",
      filled: true,
      color: "#EECD5C"
    },
    emergency: {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      text: "24/7 Emergency Service",
      filled: false,
      color: iconColor
    },
    experience: {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      text: "10+ Years Experience",
      filled: false,
      color: iconColor
    }
  };
  const sizeClasses = {
    sm: {
      icon: "h-4 w-4",
      text: "text-xs",
      spacing: "space-x-1"
    },
    md: {
      icon: "h-5 w-5",
      text: "text-sm",
      spacing: "space-x-2"
    },
    lg: {
      icon: "h-6 w-6",
      text: "text-base",
      spacing: "space-x-3"
    }
  };
  const layoutClasses = {
    horizontal: "flex justify-center items-center space-x-4 md:space-x-8 flex-wrap gap-4",
    vertical: "flex flex-col space-y-4",
    grid: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${layoutClasses[layout]} font-semibold`, "class")}${addAttribute(`color: ${textColor};`, "style")}> ${items.map((itemKey, index) => {
    const item = trustItems[itemKey];
    if (!item) return null;
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div${addAttribute(`flex items-center ${sizeClasses[size].spacing}`, "class")}> <svg${addAttribute(`${sizeClasses[size].icon} flex-shrink-0`, "class")}${addAttribute(`color: ${item.color};`, "style")}${addAttribute(item.filled ? "currentColor" : "none", "fill")}${addAttribute(item.filled ? "none" : "currentColor", "stroke")} viewBox="0 0 24 24"${addAttribute(item.filled ? "0" : "2", "stroke-width")}> <path${addAttribute(item.filled ? "round" : "round", "stroke-linecap")}${addAttribute(item.filled ? "round" : "round", "stroke-linejoin")}${addAttribute(item.icon, "d")}></path> </svg> <span${addAttribute(sizeClasses[size].text, "class")}>${item.text}</span> </div> ${showDividers && layout === "horizontal" && index < items.length - 1 && renderTemplate`<div class="w-px h-4"${addAttribute(`background-color: ${textColor};`, "style")}></div>`}` })}`;
  })} </div>`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/components/ui/TrustIndicators.astro", void 0);
const $$Astro = createAstro("https://ez2fix.com");
const $$CTASection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTASection;
  const {
    variant = "contact",
    title,
    subtitle,
    showTestimonial = false,
    showTrustGrid = false,
    showTrustIndicators = true,
    backgroundColor = "#F3F3E6",
    backgroundGradient,
    showPattern = false
  } = Astro2.props;
  const variants = {
    about: {
      title: "Join Our Satisfied Customers",
      subtitle: "Experience the Ez2Fix difference for yourself. Professional garage door service, honest pricing, and the peace of mind that comes from working with your trusted Bergen County neighbors.",
      showTrustGrid: true,
      backgroundColor: "#F3F3E6",
      showPattern: true,
      textColor: "#1D1912"
    },
    contact: {
      title: "Ready to Get Started?",
      subtitle: "Join the thousands of Bergen County families who trust Ez2Fix for reliable, honest garage door service. Professional results, fair pricing, and complete satisfaction guaranteed.",
      showTestimonial: true,
      backgroundColor: "#F3F3E6",
      textColor: "#1D1912"
    },
    services: {
      title: "Get Your Garage Door Fixed Today",
      subtitle: "Don't let a broken garage door disrupt your life. Our experienced technicians are ready to restore your peace of mind with professional, reliable service.",
      showTrustIndicators: true,
      backgroundColor: "#F3F3E6",
      textColor: "#1D1912"
    }
  };
  const config = variants[variant];
  const finalTitle = title || config.title;
  const finalSubtitle = subtitle || config.subtitle;
  const bgStyle = backgroundGradient || config.backgroundGradient || `background-color: ${backgroundColor || config.backgroundColor} !important;`;
  const textColor = config.textColor;
  const isAboutVariant = variant === "about";
  const isContactVariant = variant === "contact";
  return renderTemplate`${maybeRenderHead()}<section class="py-16"${addAttribute(bgStyle, "style")}> <!-- Background Pattern for About variant --> ${showPattern || config.showPattern ? renderTemplate`<div class="absolute inset-0 opacity-5"> <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"> <g fill="none" fill-rule="evenodd"> <g fill="#F3F3E6" fill-opacity="0.1"> <circle cx="6" cy="6" r="1"></circle> <circle cx="18" cy="6" r="1"></circle> <circle cx="30" cy="6" r="1"></circle> <circle cx="42" cy="6" r="1"></circle> <circle cx="54" cy="6" r="1"></circle> <circle cx="6" cy="18" r="1"></circle> <circle cx="18" cy="18" r="1"></circle> <circle cx="30" cy="18" r="1"></circle> <circle cx="42" cy="18" r="1"></circle> <circle cx="54" cy="18" r="1"></circle> </g> </g> </svg> </div>` : null} <div class="container mx-auto px-4 relative z-10"> <div${addAttribute(`max-w-5xl mx-auto ${isAboutVariant ? "text-center" : ""}`, "class")}> <!-- Testimonial for Contact variant --> ${(showTestimonial || config.showTestimonial) && isContactVariant && renderTemplate`${renderComponent($$result, "Card", $$Card, { "class": "p-10 shadow-xl border-2 mb-12", "style": "background-color: white; border-color: #D2A63C;" }, { "default": ($$result2) => renderTemplate` <div class="text-center"> <div class="flex justify-center mb-6"> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg class="h-6 w-6" style="color: #D2A63C;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path> </svg>`)} </div> <blockquote class="text-xl italic leading-relaxed mb-8 max-w-3xl mx-auto" style="color: #1D1912;">
"Called Ez2Fix when my garage door spring broke. From the first phone call to the final cleanup, 
              everything was professional and transparent. They explained the problem, gave me a fair price, 
              and completed the work perfectly. I'll definitely call them again if I need garage door service."
</blockquote> <div class="flex items-center justify-center"> <div class="w-14 h-14 rounded-full flex items-center justify-center mr-4" style="background-color: #D2A63C;"> <span class="text-xl font-bold" style="color: #F3F3E6;">MR</span> </div> <div class="text-left"> <div class="text-lg font-bold" style="color: #1D1912;">Maria Rodriguez</div> <div class="text-sm" style="color: #BB8525;">Elmwood Park, NJ • Spring Replacement</div> </div> </div> </div> ` })}`} <!-- Main CTA Content --> <div${addAttribute(isContactVariant ? "text-center" : isAboutVariant ? "mb-12" : "text-center mb-12", "class")}> <h2${addAttribute(`font-bold leading-tight mb-6 ${isAboutVariant ? "text-4xl md:text-5xl lg:text-6xl mb-8" : "text-4xl"}`, "class")}${addAttribute(`color: ${textColor} !important;`, "style")}> ${isAboutVariant ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span>Join Our</span> <br> <span style="color: #D2A63C;">Satisfied Customers</span> ` })}` : renderTemplate`<span> ${finalTitle.split(" ").map(
    (word, index) => word === "Started?" || word === "Today" ? renderTemplate`<span style="color: #EECD5C !important;">${word}</span>` : word + " "
  )} </span>`} </h2> <p${addAttribute(`leading-relaxed max-w-3xl mx-auto mb-8 ${isAboutVariant ? "text-xl md:text-2xl mb-8" : "text-xl mb-10"}`, "class")}${addAttribute(`color: ${textColor} !important;`, "style")}> ${isAboutVariant ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
Experience the Ez2Fix difference for yourself. Professional garage door service, 
              honest pricing, and the peace of mind that comes from working with
<span style="color: #D2A63C; font-weight: 600;">your trusted Bergen County neighbors</span>.
` })}` : finalSubtitle} </p> </div> <!-- Trust Grid for About variant --> ${(showTrustGrid || config.showTrustGrid) && isAboutVariant && renderTemplate`<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"> <div class="bg-white/80 backdrop-blur-sm p-6 rounded-xl border-2 shadow-lg" style="border-color: #EECD5C;"> <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style="background-color: #EECD5C;"> <svg class="w-8 h-8" style="color: #1D1912;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path> </svg> </div> <h3 class="text-xl font-bold mb-2 text-center" style="color: #1D1912;">Family Owned</h3> <p class="text-sm text-center leading-relaxed" style="color: #BB8525;">Operating with integrity since 2014</p> </div> <div class="bg-white/80 backdrop-blur-sm p-6 rounded-xl border-2 shadow-lg" style="border-color: #D2A63C;"> <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style="background-color: #D2A63C;"> <svg class="w-8 h-8" style="color: #1D1912;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> <h3 class="text-xl font-bold mb-2 text-center" style="color: #1D1912;">Licensed & Insured</h3> <p class="text-sm text-center leading-relaxed" style="color: #BB8525;">Full protection for your peace of mind</p> </div> <div class="bg-white/80 backdrop-blur-sm p-6 rounded-xl border-2 shadow-lg" style="border-color: #BB8525;"> <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style="background-color: #BB8525;"> <svg class="w-8 h-8" style="color: #F3F3E6;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path> </svg> </div> <h3 class="text-xl font-bold mb-2 text-center" style="color: #1D1912;">5-Star Rated</h3> <p class="text-sm text-center leading-relaxed" style="color: #BB8525;">Consistently excellent service</p> </div> </div>`} <!-- CTA Buttons --> <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8"> <a${addAttribute(siteConfig.links.phone, "href")} class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"${addAttribute(isAboutVariant ? "background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%); color: #1D1912;" : "background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%); color: #1D1912;", "style")}>
📞 Call Now: ${siteConfig.business.phone} </a> ${renderComponent($$result, "Button", $$Button, { "href": "/booking", "class": "inline-flex items-center justify-center px-8 py-4 text-lg font-bold border-2 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105", "style": isAboutVariant ? "color: #EECD5C; border-color: #EECD5C; background-color: transparent;" : "color: #D2A63C; border-color: #D2A63C; background-color: transparent;" }, { "default": ($$result2) => renderTemplate` <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg>
Book Online
` })} </div> <!-- Trust Indicators --> ${(showTrustIndicators || config.showTrustIndicators) && renderTemplate`${renderComponent($$result, "TrustIndicators", $$TrustIndicators, { "layout": "horizontal", "showDividers": true, "size": "md", "items": ["licensed", "rating", "family"], "textColor": isAboutVariant ? "#EECD5C" : variant === "services" ? "#BB8525" : "#BB8525" })}`} </div> </div> </section>`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fixV2/ez2fix-production/src/components/ui/CTASection.astro", void 0);
export {
  $$CTASection as $
};
