import { HeroHeader, ContentSection } from "@/types/contents"

export const heroHeader: HeroHeader = {
  header: `Cass`,
  subheader: `Crypto-Stuff Web-developer`,
  image: `/eu-nobg.png`,
}

export const featureCards: ContentSection = {
  header: `About`,
  subheader: `Main informations about the services.`,
  content: [
    {
      text: `Technologies`,
      subtext: `Current and easy-to-maintain technologies:
      Nextjs, Tailwind, React and Typescript.  
      `,
      icon: "react",
    },
    {
      text: `Entire Code`,
      subtext: `You have the power to rewrite whatever you want, and modify it in your own way.`,
      icon: "code",
    },
    {
      text: `Focused on Crypto`,
      subtext: `Developed by a Cryptocurrency Investor, for the Crypto community.`,
      icon: "crypto",
    },
    {
      text: `Pay in Crypto`,
      subtext: `Payment with crypto, fast and secure. Half after design, and half after delivery. Fast, and Safe.`,
      icon: "transfer",
    },
    {
      text: `Responsive Application`,
      subtext: `Responsive application, working on any device, regardless of screen size.`,
      icon: "responsive",
    },
    {
      text: `Fast Delivery`,
      subtext: `Application delivered within a maximum of 48 hours after ordering.`,
      icon: "email",
    },
  ],
}

export const features: ContentSection = {
  header: `Features`,
  subheader: `Why use Next Landing?`,
  image: `/features-img.webp`,
  content: [
    {
      text: `SEO Optimized`,
      subtext: `Improved website visibility on search engines`,
      icon: "fileSearch",
    },
    {
      text: `Highly Performant`,
      subtext: `Fast loading times and smooth performance`,
      icon: "barChart",
    },
    {
      text: `Easy Customizability`,
      subtext: `Change your content and layout with little effort`,
      icon: "settings",
    },
  ],
}
