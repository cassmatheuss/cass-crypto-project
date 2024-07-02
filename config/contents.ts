import { HeroHeader, ContentSection } from "@/types/contents"

export const heroHeader: HeroHeader = {
  header: `Cass`,
  subheader: `Crypto-Stuff Web-developer`,
  image: `/coin.gif`,
}

export const featureCards: ContentSection = {
  header: `Services`,
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
  header: `About`,
  subheader: `Some informations about me.`,
  image: `/eu_bg.png`,
  content: [
    {
      text: `Languages I speak`,
      subtext: `I'm a Portuguese native speaker, but I can speak English and a little bit of Spanish too!`,
      icon: "language",
    },
    {
      text: `Past Experience`,
      subtext: `I've done full stack work for small and medium-sized companies, and I currently work as a freelancer.`,
      icon: "calendar",
    },
    {
      text: `Knowledges`,
      subtext: `I have been a crypto enthusiast since 2018 and am currently also a Computer Science student.`,
      icon: "book",
    },
  ],
}
