const mongoose = require("mongoose");
const Framework = require("./models/Framework");
const { MONGODB_URI } = require("./config");

if (!MONGODB_URI) {
  console.error("MONGODB_URI is not defined in the environment variables");
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });

const frameworks = [
  {
    name: "React",
    version: "18.2.0",
    performanceScore: 95,
    popularity: 98,
    ecosystemScore: 97,
    learningCurve: "Moderate",
    communitySupport: "Excellent",
    documentation: "Comprehensive",
    pros: ["Large ecosystem", "Strong community support", "Flexible"],
    cons: [
      "Steep learning curve for beginners",
      "Requires additional libraries for full functionality",
    ],
    description: "A JavaScript library for building user interfaces.",
  },
  {
    name: "Vue.js",
    version: "3.2.47",
    performanceScore: 93,
    popularity: 85,
    ecosystemScore: 88,
    learningCurve: "Easy",
    communitySupport: "Good",
    documentation: "Excellent",
    pros: ["Easy to learn", "Gentle learning curve", "Good documentation"],
    cons: ["Smaller ecosystem compared to React", "Fewer job opportunities"],
    description: "The Progressive JavaScript Framework.",
  },
  {
    name: "Angular",
    version: "15.2.0",
    performanceScore: 90,
    popularity: 80,
    ecosystemScore: 92,
    learningCurve: "Steep",
    communitySupport: "Good",
    documentation: "Comprehensive",
    pros: [
      "Full-featured framework",
      "Strong typing with TypeScript",
      "Good for large applications",
    ],
    cons: ["Steep learning curve", "Can be overkill for small projects"],
    description: "One framework. Mobile & desktop.",
  },
  {
    name: "Svelte",
    version: "3.58.0",
    performanceScore: 98,
    popularity: 70,
    ecosystemScore: 75,
    learningCurve: "Easy",
    communitySupport: "Growing",
    documentation: "Good",
    pros: ["Very fast performance", "Easy to learn", "Less boilerplate code"],
    cons: [
      "Smaller ecosystem",
      "Fewer job opportunities",
      "Less mature than other frameworks",
    ],
    description: "Cybernetically enhanced web apps.",
  },
  {
    name: "Next.js",
    version: "13.3.0",
    performanceScore: 94,
    popularity: 82,
    ecosystemScore: 85,
    learningCurve: "Moderate",
    communitySupport: "Good",
    documentation: "Excellent",
    pros: ["Server-side rendering", "Static site generation", "Good for SEO"],
    cons: [
      "Requires React knowledge",
      "Can be complex for simple applications",
    ],
    description: "The React Framework for Production.",
  },
  {
    name: "Ember.js",
    version: "4.9.1",
    performanceScore: 85,
    popularity: 60,
    ecosystemScore: 70,
    learningCurve: "Moderate",
    communitySupport: "Strong",
    documentation: "Comprehensive",
    pros: ["Convention over configuration", "Strong community", "Stability"],
    cons: ["Heavy framework", "Steep learning curve"],
    description: "A framework for ambitious web developers.",
  },
  {
    name: "Backbone.js",
    version: "1.4.1",
    performanceScore: 75,
    popularity: 40,
    ecosystemScore: 50,
    learningCurve: "Moderate",
    communitySupport: "Declining",
    documentation: "Good",
    pros: ["Lightweight", "Flexible", "Easy to integrate"],
    cons: ["Outdated", "Limited community support"],
    description: "Give your JS app some Backbone with models, views, and more.",
  },
  {
    name: "Meteor",
    version: "2.15",
    performanceScore: 80,
    popularity: 50,
    ecosystemScore: 65,
    learningCurve: "Moderate",
    communitySupport: "Good",
    documentation: "Comprehensive",
    pros: [
      "Full-stack solution",
      "Real-time updates",
      "Good for rapid prototyping",
    ],
    cons: ["Monolithic", "Limited flexibility"],
    description:
      "A platform for building web and mobile apps in pure JavaScript.",
  },
  {
    name: "Nuxt.js",
    version: "3.0.0",
    performanceScore: 92,
    popularity: 78,
    ecosystemScore: 80,
    learningCurve: "Moderate",
    communitySupport: "Good",
    documentation: "Excellent",
    pros: ["Great for SSR", "Strong Vue integration", "Good for SEO"],
    cons: ["Requires Vue knowledge", "Can be complex to configure"],
    description: "The Intuitive Vue Framework.",
  },
  {
    name: "Gatsby",
    version: "4.18.0",
    performanceScore: 88,
    popularity: 75,
    ecosystemScore: 78,
    learningCurve: "Moderate",
    communitySupport: "Strong",
    documentation: "Excellent",
    pros: [
      "Optimized for performance",
      "Great for static sites",
      "Rich plugin ecosystem",
    ],
    cons: [
      "Requires React knowledge",
      "Build times can be long for large sites",
    ],
    description: "Fast in every way that matters.",
  },
  {
    name: "Express.js",
    version: "4.18.1",
    performanceScore: 80,
    popularity: 85,
    ecosystemScore: 90,
    learningCurve: "Easy",
    communitySupport: "Excellent",
    documentation: "Comprehensive",
    pros: ["Minimalist", "Flexible", "Strong ecosystem"],
    cons: ["Not opinionated", "Requires manual setup for many features"],
    description: "Fast, unopinionated, minimalist web framework for Node.js.",
  },
  {
    name: "Django",
    version: "4.1.3",
    performanceScore: 90,
    popularity: 82,
    ecosystemScore: 88,
    learningCurve: "Moderate",
    communitySupport: "Excellent",
    documentation: "Comprehensive",
    pros: ["Batteries included", "Secure", "Great for rapid development"],
    cons: ["Monolithic", "Steep learning curve"],
    description: "The web framework for perfectionists with deadlines.",
  },
  {
    name: "Flask",
    version: "2.2.2",
    performanceScore: 85,
    popularity: 78,
    ecosystemScore: 82,
    learningCurve: "Easy",
    communitySupport: "Strong",
    documentation: "Excellent",
    pros: ["Lightweight", "Flexible", "Easy to learn"],
    cons: ["Requires more manual setup", "Limited by design"],
    description: "A micro web framework written in Python.",
  },
  {
    name: "Ruby on Rails",
    version: "7.0.4",
    performanceScore: 80,
    popularity: 70,
    ecosystemScore: 85,
    learningCurve: "Moderate",
    communitySupport: "Strong",
    documentation: "Comprehensive",
    pros: [
      "Convention over configuration",
      "Rapid development",
      "Strong community",
    ],
    cons: ["Heavy framework", "Steep learning curve for newcomers"],
    description: "Web development that doesn’t hurt.",
  },
  {
    name: "Laravel",
    version: "10.0.0",
    performanceScore: 88,
    popularity: 85,
    ecosystemScore: 90,
    learningCurve: "Moderate",
    communitySupport: "Excellent",
    documentation: "Comprehensive",
    pros: ["Elegant syntax", "Strong ecosystem", "Excellent community support"],
    cons: ["Heavy framework", "May be overkill for small projects"],
    description: "The PHP Framework for Web Artisans.",
  },
];

const seedDatabase = async () => {
  try {
    await Framework.deleteMany({});
    await Framework.insertMany(frameworks);
    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
