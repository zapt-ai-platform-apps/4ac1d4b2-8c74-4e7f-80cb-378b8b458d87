import React from 'react';
import Card from '@/components/shared/Card';

export default function NarrativeTemplate({ startup }) {
  const templates = {
    'Stripe': {
      marketInsight: "The global payments landscape is fragmented and complex, with businesses struggling to implement robust payment solutions across borders. While there are several established players, we've identified critical friction points in developer implementation and international expansion that remain unsolved.",
      competitiveAdvantage: "Unlike PayPal and Adyen who built their systems on legacy infrastructure, our API-first approach and modern tech stack enable us to deliver superior developer experiences and faster feature iteration. Our key advantage is in simplifying complexity through superior documentation and intuitive integration patterns.",
      executionStrategy: "We're focused on execution excellence in three key areas: (1) Developer experience – making our API the most intuitive and well-documented in the industry; (2) Global expansion – systematically addressing regulatory and infrastructure challenges in new markets; and (3) Reliability – building a payment system with industry-leading uptime and performance.",
      teamStrengths: "Our founding team combines deep payment industry expertise with modern software engineering excellence. We've recruited top engineering talent from Google, Amazon and fintech innovators, giving us both the technical capabilities and domain knowledge to execute our vision more effectively than competitors."
    },
    'Slack': {
      marketInsight: "Enterprise communication remains fragmented across email, chat, and various collaboration tools, creating information silos and reducing productivity. The market is crowded with solutions that either prioritize formal communication (email) or social interaction, but few effectively bridge these needs.",
      competitiveAdvantage: "While Microsoft Teams leverages their enterprise presence and Discord excels in community building, our advantage lies in creating the most intuitive, flexible workplace communications platform with superior integration capabilities. We're not the first chat app, but we've refined the experience for business productivity specifically.",
      executionStrategy: "Our execution focuses on (1) Continuously expanding our platform integrations to become the central hub for all work communications; (2) Building enterprise-grade security and compliance features; and (3) Creating a uniquely engaging user experience that drives daily active usage across organizations.",
      teamStrengths: "Our team brings together expertise from consumer and enterprise product development, creating the perfect balance of user-friendly design and business functionality. Our experience building and scaling previous software platforms gives us the insights to avoid common pitfalls in product development and go-to-market execution."
    },
    'Shopify': {
      marketInsight: "E-commerce is becoming the primary retail channel for many businesses, yet most platforms either target enterprise sellers with complex solutions or provide oversimplified tools for small merchants. We've identified the growing segment of ambitious merchants who need scalable yet accessible commerce solutions.",
      competitiveAdvantage: "Unlike WooCommerce's technical complexity or BigCommerce's enterprise focus, our advantage lies in providing the perfect balance of power and simplicity. We're not claiming to be the first e-commerce platform, but rather the one that delivers the most merchant-centric experience across all stages of business growth.",
      executionStrategy: "We execute by (1) Consistently solving merchant pain points through intuitive tools and automation; (2) Building a rich ecosystem of apps and partners that extend platform capabilities; and (3) Continuously optimizing core commerce functionality for conversion and sales growth across all types of businesses.",
      teamStrengths: "Our team combines deep e-commerce expertise with merchant-focused product development experience. Having built online stores ourselves, we intimately understand the challenges merchants face and have the technical capabilities to solve them more effectively than competitors who approach the problem from either purely technical or purely business perspectives."
    },
    'Airbnb': {
      marketInsight: "The travel accommodation industry has historically been dominated by standardized hotel experiences, while vacation rentals were fragmented and inconsistent. We identified the opportunity to create a global marketplace for unique accommodations that combines the consistency of hotels with the character of local stays.",
      competitiveAdvantage: "Unlike Booking.com's focus on traditional accommodations or VRBO's limited vacation rental approach, our advantage is in creating a community-driven marketplace that offers truly unique properties and experiences. We're not the first accommodation booking platform, but we've excelled at trust, quality control, and user experience design.",
      executionStrategy: "Our execution strategy focuses on (1) Building sophisticated trust and safety systems that enable peer-to-peer transactions; (2) Creating a content-rich platform with professional photography and standardized information; and (3) Continuously expanding into adjacent travel experiences beyond just accommodations.",
      teamStrengths: "Our team combines expertise in marketplace dynamics, community building, and user experience design. This unique combination enables us to solve both the technical and human challenges of building a global person-to-person marketplace more effectively than traditional travel industry competitors."
    }
  };
  
  const template = templates[startup.name] || templates['Stripe'];
  
  return (
    <Card>
      <div className="prose max-w-none">
        <h3 className="text-lg font-semibold text-gray-800">Example: {startup.name}</h3>
        
        <div className="mb-4">
          <h4 className="text-md font-medium text-gray-700">Market Insight</h4>
          <p className="text-sm text-gray-600">{template.marketInsight}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-md font-medium text-gray-700">Competitive Advantage</h4>
          <p className="text-sm text-gray-600">{template.competitiveAdvantage}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-md font-medium text-gray-700">Execution Strategy</h4>
          <p className="text-sm text-gray-600">{template.executionStrategy}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-md font-medium text-gray-700">Team Strengths</h4>
          <p className="text-sm text-gray-600">{template.teamStrengths}</p>
        </div>
      </div>
    </Card>
  );
}