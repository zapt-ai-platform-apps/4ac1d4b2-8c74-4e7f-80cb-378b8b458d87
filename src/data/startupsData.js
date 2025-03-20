export const startupsData = [
  {
    id: 1,
    name: "Stripe",
    description: "Payment processing platform for businesses of all sizes",
    founded: 2010,
    funding: "2.2B",
    keyDifferentiators: [
      "Developer-first approach with superior documentation",
      "Comprehensive API and integrations ecosystem",
      "Simplified onboarding process",
      "Strong focus on international expansion"
    ],
    executionAdvantages: [
      "Best-in-class developer experience",
      "Rapid feature deployment cycle",
      "Strong engineering talent acquisition",
      "Consistent product quality and reliability"
    ],
    competitors: [
      {
        id: 101,
        name: "PayPal",
        founded: 1998,
        strengthAreas: ["Brand recognition", "Consumer trust", "Market penetration"],
        weakAreas: ["Developer experience", "API flexibility", "Integration complexity"],
        metrics: {
          teamStrength: 7,
          technology: 6,
          goToMarket: 9,
          customerExperience: 7,
          marketFit: 8
        }
      },
      {
        id: 102,
        name: "Adyen",
        founded: 2006,
        strengthAreas: ["Enterprise focus", "Global payment methods", "Fraud prevention"],
        weakAreas: ["SMB solutions", "Developer documentation", "Pricing transparency"],
        metrics: {
          teamStrength: 8,
          technology: 8,
          goToMarket: 7,
          customerExperience: 7,
          marketFit: 8
        }
      }
    ],
    metrics: {
      teamStrength: 9,
      technology: 9,
      goToMarket: 8,
      customerExperience: 9,
      marketFit: 9
    },
    possibleMoves: [
      {
        id: 1,
        strategy: "Expand to embedded financial services",
        description: "Launch banking-as-a-service offerings for platforms",
        competitorResponses: [
          {
            competitor: "PayPal",
            response: "Accelerate their own BaaS offerings and leverage consumer base",
            counterStrategy: "Focus on developer experience and seamless integration capabilities"
          },
          {
            competitor: "Adyen",
            response: "Partner with established banks to create competing solutions",
            counterStrategy: "Emphasize technology stack advantages and modern API architecture"
          }
        ]
      },
      {
        id: 2,
        strategy: "Enhance fraud prevention with AI",
        description: "Deploy advanced machine learning for real-time fraud detection",
        competitorResponses: [
          {
            competitor: "PayPal",
            response: "Acquire AI startups specializing in payment fraud",
            counterStrategy: "Leverage proprietary data advantages from processing volume"
          },
          {
            competitor: "Adyen",
            response: "Expand their risk management team and capabilities",
            counterStrategy: "Demonstrate superior fraud prevention metrics and case studies"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Slack",
    description: "Business communication platform for team collaboration",
    founded: 2013,
    funding: "1.4B",
    keyDifferentiators: [
      "Seamless integration ecosystem",
      "User-friendly interface",
      "Strong platform customization options",
      "Robust third-party app marketplace"
    ],
    executionAdvantages: [
      "Rapid feature iteration based on user feedback",
      "Enterprise-grade security implementation",
      "Strong customer success team",
      "Clear product vision amid competition"
    ],
    competitors: [
      {
        id: 201,
        name: "Microsoft Teams",
        founded: 2017,
        strengthAreas: ["Microsoft ecosystem integration", "Enterprise relationships", "Video conferencing"],
        weakAreas: ["User experience", "Third-party integrations", "Platform openness"],
        metrics: {
          teamStrength: 8,
          technology: 7,
          goToMarket: 9,
          customerExperience: 6,
          marketFit: 8
        }
      },
      {
        id: 202,
        name: "Discord",
        founded: 2015,
        strengthAreas: ["Community building", "Voice chat quality", "Gaming audience"],
        weakAreas: ["Enterprise security features", "Business workflow integrations", "Administrative controls"],
        metrics: {
          teamStrength: 7,
          technology: 8,
          goToMarket: 7,
          customerExperience: 8,
          marketFit: 7
        }
      }
    ],
    metrics: {
      teamStrength: 8,
      technology: 9,
      goToMarket: 8,
      customerExperience: 9,
      marketFit: 8
    },
    possibleMoves: [
      {
        id: 1,
        strategy: "Launch AI-powered workflow automation",
        description: "Introduce advanced AI assistants for common workspace tasks",
        competitorResponses: [
          {
            competitor: "Microsoft Teams",
            response: "Integrate more deeply with Microsoft's AI capabilities and Copilot",
            counterStrategy: "Focus on open ecosystem and third-party AI integrations beyond a single vendor"
          },
          {
            competitor: "Discord",
            response: "Expand their bot marketplace with AI capabilities",
            counterStrategy: "Emphasize enterprise-grade reliability and security in AI implementations"
          }
        ]
      },
      {
        id: 2,
        strategy: "Enhance video conferencing capabilities",
        description: "Rebuild the video platform with superior quality and features",
        competitorResponses: [
          {
            competitor: "Microsoft Teams",
            response: "Highlight their established video platform advantages and new features",
            counterStrategy: "Focus on seamless integration with workspace rather than standalone video capabilities"
          },
          {
            competitor: "Discord",
            response: "Improve their screen sharing and video quality for professional use",
            counterStrategy: "Target enterprise compliance and security features that Discord lacks"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Shopify",
    description: "E-commerce platform for online stores and retail point-of-sale systems",
    founded: 2006,
    funding: "7.8B",
    keyDifferentiators: [
      "All-in-one commerce solution",
      "Merchant-focused features and tools",
      "Extensive app ecosystem",
      "Flexible store customization"
    ],
    executionAdvantages: [
      "Consistent focus on merchant success",
      "Strong platform reliability and uptime",
      "Rapid feature expansion through acquisitions",
      "Forward-thinking product roadmap"
    ],
    competitors: [
      {
        id: 301,
        name: "WooCommerce",
        founded: 2011,
        strengthAreas: ["WordPress integration", "Self-hosted flexibility", "Lower costs"],
        weakAreas: ["Technical complexity", "Support quality", "Feature consistency"],
        metrics: {
          teamStrength: 6,
          technology: 7,
          goToMarket: 7,
          customerExperience: 6,
          marketFit: 8
        }
      },
      {
        id: 302,
        name: "BigCommerce",
        founded: 2009,
        strengthAreas: ["Enterprise features", "Multichannel selling", "SEO capabilities"],
        weakAreas: ["Market share", "App ecosystem breadth", "Brand recognition"],
        metrics: {
          teamStrength: 7,
          technology: 8,
          goToMarket: 7,
          customerExperience: 7,
          marketFit: 7
        }
      }
    ],
    metrics: {
      teamStrength: 8,
      technology: 9,
      goToMarket: 9,
      customerExperience: 8,
      marketFit: 9
    },
    possibleMoves: [
      {
        id: 1,
        strategy: "Expand fulfillment network",
        description: "Build out logistics infrastructure for faster merchant shipping",
        competitorResponses: [
          {
            competitor: "WooCommerce",
            response: "Partner with third-party logistics providers for integrated solutions",
            counterStrategy: "Emphasize owned infrastructure advantages in reliability and cost"
          },
          {
            competitor: "BigCommerce",
            response: "Establish similar partnerships with established logistics companies",
            counterStrategy: "Focus on seamless platform integration and merchant dashboard simplicity"
          }
        ]
      },
      {
        id: 2,
        strategy: "Launch enhanced B2B capabilities",
        description: "Develop specialized tools for wholesale and business customers",
        competitorResponses: [
          {
            competitor: "WooCommerce",
            response: "Promote existing plugin flexibility for B2B customization",
            counterStrategy: "Emphasize native functionality without requiring technical implementation"
          },
          {
            competitor: "BigCommerce",
            response: "Accelerate their B2B feature development",
            counterStrategy: "Leverage merchant network effects and cross-selling opportunities"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Airbnb",
    description: "Online marketplace for lodging and tourism experiences",
    founded: 2008,
    funding: "6.4B",
    keyDifferentiators: [
      "Unique inventory of properties",
      "Experience marketplace beyond lodging",
      "Strong brand recognition and loyalty",
      "User-friendly booking experience"
    ],
    executionAdvantages: [
      "Superior photography and listing quality standards",
      "Trust and safety innovation",
      "Data-driven personalization",
      "Community-building approach"
    ],
    competitors: [
      {
        id: 401,
        name: "Booking.com",
        founded: 1996,
        strengthAreas: ["Global hotel inventory", "Loyalty program", "Market penetration"],
        weakAreas: ["Unique property types", "User experience", "Brand differentiation"],
        metrics: {
          teamStrength: 8,
          technology: 7,
          goToMarket: 9,
          customerExperience: 7,
          marketFit: 8
        }
      },
      {
        id: 402,
        name: "VRBO",
        founded: 1995,
        strengthAreas: ["Family-friendly properties", "Vacation home focus", "Property manager tools"],
        weakAreas: ["Urban inventory", "Experiences marketplace", "Mobile experience"],
        metrics: {
          teamStrength: 7,
          technology: 7,
          goToMarket: 7,
          customerExperience: 7,
          marketFit: 7
        }
      }
    ],
    metrics: {
      teamStrength: 9,
      technology: 8,
      goToMarket: 9,
      customerExperience: 9,
      marketFit: 9
    },
    possibleMoves: [
      {
        id: 1,
        strategy: "Launch transportation booking services",
        description: "Integrate car rentals and other transportation options",
        competitorResponses: [
          {
            competitor: "Booking.com",
            response: "Highlight their existing transportation booking capabilities",
            counterStrategy: "Create unique connected experiences between lodging and transportation"
          },
          {
            competitor: "VRBO",
            response: "Partner with rental car companies for exclusive deals",
            counterStrategy: "Focus on local and unique transportation experiences beyond standard rentals"
          }
        ]
      },
      {
        id: 2,
        strategy: "Develop loyalty program",
        description: "Launch tiered benefits program for frequent travelers",
        competitorResponses: [
          {
            competitor: "Booking.com",
            response: "Enhance their existing loyalty program benefits",
            counterStrategy: "Create community-focused benefits beyond traditional points systems"
          },
          {
            competitor: "VRBO",
            response: "Introduce their own competing loyalty program",
            counterStrategy: "Leverage host relationships to create unique loyalty experiences"
          }
        ]
      }
    ]
  }
];