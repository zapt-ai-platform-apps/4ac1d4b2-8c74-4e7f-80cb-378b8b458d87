import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/shared/Card';

export default function NarrativeTemplate({ startup }) {
  const isEarlyStage = ['pre-seed', 'seed'].includes(startup.stage);
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
    },
    'Nova AI': {
      marketInsight: "Research teams across academia and industry are drowning in information yet starving for insights. While general knowledge management tools like Notion and specialized research tools like Elicit exist, there's a critical gap in tools that combine AI-powered knowledge discovery with collaborative workflows specifically designed for scientific research.",
      competitiveAdvantage: "Unlike general platforms that lack research-specific capabilities or specialized tools with limited collaboration features, our solution is purpose-built for research teams with domain-specific AI models that understand scientific contexts. We're not creating another generic AI tool, but rather a specialized system that speaks the language of researchers.",
      executionStrategy: "Our execution approach centers on (1) Building partnerships with leading research institutions to gain user feedback and validation; (2) Developing specialized AI models for key scientific domains; and (3) Creating intuitive collaborative workflows that fit seamlessly into existing research processes rather than requiring teams to change how they work.",
      teamStrengths: "Our founding team combines PhD-level expertise in AI research with experience building and scaling scientific software platforms. Similar to how Andrej Karpathy bridged academic AI research and practical applications at Tesla, our team brings both the technical depth and practical implementation experience needed to solve complex research collaboration challenges."
    },
    'Greenpath': {
      marketInsight: "Small and medium businesses increasingly need to measure and reduce their carbon footprint, driven by customer demands, regulatory requirements, and genuine environmental concerns. While enterprise solutions like Watershed offer sophisticated tools and generic calculators provide basic estimates, SMBs lack accessible solutions that balance ease of use with actionable insights.",
      competitiveAdvantage: "Unlike enterprise platforms that require sustainability teams to implement or simplistic calculators that provide limited actionability, we've created an SMB-native approach that automates data collection and provides specific, achievable reduction strategies tailored to each business type. We're not the first carbon management platform, but we're the first truly designed for how SMBs operate.",
      executionStrategy: "Our execution priorities are (1) Simplifying onboarding through pre-built templates for common business types; (2) Automating data collection through integrations with tools SMBs already use; and (3) Providing clear, achievable reduction roadmaps that balance impact with implementation feasibility for resource-constrained businesses.",
      teamStrengths: "Our team combines climate science expertise with SMB software experience, similar to how Gusto's founding team combined tax expertise with SMB-focused product design to transform payroll for small businesses. This combination gives us unique insight into creating sustainability solutions that work with real-world SMB constraints and capabilities."
    }
  };
  
  const template = templates[startup.name] || (isEarlyStage ? templates['Nova AI'] : templates['Stripe']);
  
  return (
    <Card>
      <motion.div 
        className="prose max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3 
          className="text-lg font-semibold text-gradient mb-4 pb-2 border-b border-gray-100"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Example: {startup.name}
        </motion.h3>
        
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h4 className="text-md font-medium text-primary-700 mb-1">Market Insight</h4>
          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border-l-4 border-gray-200 italic">{template.marketInsight}</p>
        </motion.div>
        
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h4 className="text-md font-medium text-primary-700 mb-1">{isEarlyStage ? "Solution Advantage" : "Competitive Advantage"}</h4>
          <p className="text-sm text-gray-600 bg-primary-50 p-3 rounded-lg border-l-4 border-primary-200 italic">{template.competitiveAdvantage}</p>
        </motion.div>
        
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h4 className="text-md font-medium text-primary-700 mb-1">Execution Strategy</h4>
          <p className="text-sm text-gray-600 bg-secondary-50 p-3 rounded-lg border-l-4 border-secondary-200 italic">{template.executionStrategy}</p>
        </motion.div>
        
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h4 className="text-md font-medium text-primary-700 mb-1">Team Strengths</h4>
          <p className="text-sm text-gray-600 bg-accent-50 p-3 rounded-lg border-l-4 border-accent-200 italic">{template.teamStrengths}</p>
        </motion.div>
      </motion.div>
    </Card>
  );
}