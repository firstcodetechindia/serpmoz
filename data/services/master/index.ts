import type { Service, ServiceMaster } from "@/types";
import * as aeoServices from "./aeo-services";
import * as aiAgents from "./ai-agents";
import * as aiSeoServices from "./ai-seo-services";
import * as contentMarketing from "./content-marketing";
import * as contentSeo from "./content-seo";
import * as cro from "./cro";
import * as digitalPr from "./digital-pr";
import * as ecommerceDevelopment from "./ecommerce-development";
import * as ecommerceSeo from "./ecommerce-seo";
import * as emailMarketing from "./email-marketing";
import * as enterpriseSeo from "./enterprise-seo";
import * as geoServices from "./geo-services";
import * as googleAds from "./google-ads";
import * as googleMapsSeo from "./google-maps-seo";
import * as instagramMarketing from "./instagram-marketing";
import * as internationalSeo from "./international-seo";
import * as landingPageOptimization from "./landing-page-optimization";
import * as leadGeneration from "./lead-generation";
import * as linkedinAds from "./linkedin-ads";
import * as linkedinMarketing from "./linkedin-marketing";
import * as localSeoServices from "./local-seo-services";
import * as marketingAutomation from "./marketing-automation";
import * as metaAds from "./meta-ads";
import * as microsoftAds from "./microsoft-ads";
import * as nextjsDevelopment from "./nextjs-development";
import * as ppcManagement from "./ppc-management";
import * as retargeting from "./retargeting";
import * as shopifyDevelopment from "./shopify-development";
import * as socialMediaMarketing from "./social-media-marketing";
import * as technicalSeo from "./technical-seo";
import * as uiUxDesign from "./ui-ux-design";
import * as videoMarketing from "./video-marketing";
import * as webDevelopment from "./web-development";
import * as webflowDevelopment from "./webflow-development";
import * as whatsappAutomation from "./whatsapp-automation";
import * as wordpressDevelopment from "./wordpress-development";
import * as youtubeMarketing from "./youtube-marketing";
import { seoServices } from "./seo-services";

/**
 * Master-standard pages: one file per service, each with its own answer,
 * pillars, mechanics, comparison and questions. `overrides` adjusts base
 * fields (meta title and description) without touching the base record.
 */
export const masters: Record<string, { content: ServiceMaster; overrides?: Partial<Service> }> = {
  "seo-services": { content: seoServices },
  "aeo-services": { content: aeoServices.master, overrides: aeoServices.overrides },
  "ai-agents": { content: aiAgents.master, overrides: aiAgents.overrides },
  "ai-seo-services": { content: aiSeoServices.master, overrides: aiSeoServices.overrides },
  "content-marketing": { content: contentMarketing.master, overrides: contentMarketing.overrides },
  "content-seo": { content: contentSeo.master, overrides: contentSeo.overrides },
  "cro": { content: cro.master, overrides: cro.overrides },
  "digital-pr": { content: digitalPr.master, overrides: digitalPr.overrides },
  "ecommerce-development": { content: ecommerceDevelopment.master, overrides: ecommerceDevelopment.overrides },
  "ecommerce-seo": { content: ecommerceSeo.master, overrides: ecommerceSeo.overrides },
  "email-marketing": { content: emailMarketing.master, overrides: emailMarketing.overrides },
  "enterprise-seo": { content: enterpriseSeo.master, overrides: enterpriseSeo.overrides },
  "geo-services": { content: geoServices.master, overrides: geoServices.overrides },
  "google-ads": { content: googleAds.master, overrides: googleAds.overrides },
  "google-maps-seo": { content: googleMapsSeo.master, overrides: googleMapsSeo.overrides },
  "instagram-marketing": { content: instagramMarketing.master, overrides: instagramMarketing.overrides },
  "international-seo": { content: internationalSeo.master, overrides: internationalSeo.overrides },
  "landing-page-optimization": { content: landingPageOptimization.master, overrides: landingPageOptimization.overrides },
  "lead-generation": { content: leadGeneration.master, overrides: leadGeneration.overrides },
  "linkedin-ads": { content: linkedinAds.master, overrides: linkedinAds.overrides },
  "linkedin-marketing": { content: linkedinMarketing.master, overrides: linkedinMarketing.overrides },
  "local-seo-services": { content: localSeoServices.master, overrides: localSeoServices.overrides },
  "marketing-automation": { content: marketingAutomation.master, overrides: marketingAutomation.overrides },
  "meta-ads": { content: metaAds.master, overrides: metaAds.overrides },
  "microsoft-ads": { content: microsoftAds.master, overrides: microsoftAds.overrides },
  "nextjs-development": { content: nextjsDevelopment.master, overrides: nextjsDevelopment.overrides },
  "ppc-management": { content: ppcManagement.master, overrides: ppcManagement.overrides },
  "retargeting": { content: retargeting.master, overrides: retargeting.overrides },
  "shopify-development": { content: shopifyDevelopment.master, overrides: shopifyDevelopment.overrides },
  "social-media-marketing": { content: socialMediaMarketing.master, overrides: socialMediaMarketing.overrides },
  "technical-seo": { content: technicalSeo.master, overrides: technicalSeo.overrides },
  "ui-ux-design": { content: uiUxDesign.master, overrides: uiUxDesign.overrides },
  "video-marketing": { content: videoMarketing.master, overrides: videoMarketing.overrides },
  "web-development": { content: webDevelopment.master, overrides: webDevelopment.overrides },
  "webflow-development": { content: webflowDevelopment.master, overrides: webflowDevelopment.overrides },
  "whatsapp-automation": { content: whatsappAutomation.master, overrides: whatsappAutomation.overrides },
  "wordpress-development": { content: wordpressDevelopment.master, overrides: wordpressDevelopment.overrides },
  "youtube-marketing": { content: youtubeMarketing.master, overrides: youtubeMarketing.overrides },
};
