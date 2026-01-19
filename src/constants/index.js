export const myProjects = [
  {
    id: 1,
    title: "Real-Time Voice AI Assistant",
    description:
      "Production-ready voice-enabled AI assistant with real-time speech processing, context-aware responses, and zero hallucinations. Built during internship to handle product/contract queries with strict accuracy.",
    subDescription: [
      "Developed context-aware AI that analyzes documents line by line for precise, source-based answers",
      "Implemented real-time voice interaction with live speech processing and intelligent responses",
      "Built strict instruction enforcement system ensuring AI never fabricates information",
      "Integrated FastAPI backend with real-time speech processing and document context handling",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/voice-ai.png",
    tags: [
      {
        id: 1,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 2,
        name: "LangChain",
        path: "/assets/logos/langchain.svg",
      },
      {
        id: 3,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 4,
        name: "React",
        path: "/assets/logos/react.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Umeed: AI-Powered Crowdfunding Platform",
    description:
      "Crowdfunding platform with secure Stripe payments, OAuth authentication, and AI-powered fraud detection using XGBoost machine learning.",
    subDescription: [
      "Developed a full-stack crowdfunding platform with Next.js, Express.js, and MongoDB",
      "Trained an XGBoost model to detect fraudulent transactions, achieving 91% accuracy",
      "Integrated Stripe API for secure payment processing and NextAuth.js for OAuth authentication",
      "Built dynamic creator profiles with real-time donation tracking and analytics",
    ],
    href: "https://github.com/ghulamahmadbajwa/Next.js-Express.js-MongoDB-NextAuth.js-Get-Me-A-Chai.git",
    logo: "",
    image: "/assets/projects/get-me-chai.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/logos/express.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 5,
        name: "XGBoost",
        path: "/assets/logos/python.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Ping: AI-Powered Real-Time Chat",
    description:
      "Real-time chat application with microservices architecture, featuring sentiment analysis and dynamic UI themes based on conversation mood.",
    subDescription: [
      "Designed user & mail microservices with RabbitMQ-based communication and Redis caching",
      "Built secure OTP login system via email with modular microservice architecture",
      "Implemented real-time messaging using Socket.IO with WebSocket connections",
      "Developing sentiment analysis feature using TensorFlow/Keras for dynamic UI themes",
    ],
    href: "https://github.com/ghulamahmadbajwa/MoodVibe-Chat.git",
    logo: "",
    image: "/assets/projects/moodvibe-chat.png",
    tags: [
      {
        id: 1,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Socket.IO",
        path: "/assets/logos/socketio.svg",
      },
      {
        id: 4,
        name: "RabbitMQ",
        path: "/assets/logos/rabbitmq.svg",
      },
      {
        id: 5,
        name: "Redis",
        path: "/assets/logos/redis.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Draftflow: AI Contract Analysis Platform",
    description:
      "Production-grade AI platform for contract analysis with conversational querying, clause-level insights, and risk scoring using LangChain and RAG.",
    subDescription: [
      "Built contract analysis platform with conversational querying and clause-level insights",
      "Implemented document uploading, OCR parsing, and multi-page extraction with 95%+ accuracy",
      "Integrated RAG semantic search using Pinecone and isolation-based history for multi-user sessions",
      "Added production features: retry mechanisms, rate-limit handling, cost control & monitoring",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/draftflow.jpg",
    tags: [
      {
        id: 1,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 2,
        name: "LangChain",
        path: "/assets/logos/langchain.svg",
      },
      {
        id: 3,
        name: "Pinecone",
        path: "/assets/logos/pinecone.svg",
      },
      {
        id: 4,
        name: "Redis",
        path: "/assets/logos/redis.svg",
      },
      {
        id: 5,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
    ],
  },
  {
    id: 5,
    title: "SQL Chatbot: AI Database Assistant",
    description:
      "Natural language to SQL query conversion tool for internal use, enabling non-technical users to query databases conversationally.",
    subDescription: [
      "Developed AI chatbot capable of converting natural language to SQL queries",
      "Built using LangChain for LLM orchestration and FastAPI for backend services",
      "Integrated with PostgreSQL/MySQL databases for real-time query execution",
      "Implemented safety measures to prevent destructive queries and data leaks",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/sql-chatbot.png",
    tags: [
      {
        id: 1,
        name: "LangChain",
        path: "/assets/logos/langchain.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 3,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Portfolio AI Chatbot: RAG-Based Assistant",
    description:
      "AI chatbot for portfolio website using LangGraph and RAG, similar to n8n docs chat functionality for answering visitor questions.",
    subDescription: [
      "Built RAG-based chatbot using LangGraph for portfolio website integration",
      "Implemented document retrieval and conversational memory for context-aware responses",
      "Designed similar to n8n docs/chat-with-files functionality for seamless UX",
      "Integrated with React frontend for real-time chat interface",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/portfolio-ai.jpg",
    tags: [
      {
        id: 1,
        name: "LangGraph",
        path: "/assets/logos/langchain.svg",
      },
      {
        id: 2,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 4,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/923023815559",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ghulam-ahmad-aa9426305",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/ghulamahmadbajwa",
    icon: "/assets/socials/github.svg",
  },
];

export const experiences = [
  {
    title: "Full-Stack Developer",
    job: "ERS Tech",
    date: "JULY 2025 – Present",
    contents: [
      "Building full-stack web applications using MERN stack, Next.js, and REST API",
      "Designing and implementing AI-driven solutions to optimize real-world business applications",
      "Working on advanced AI systems including  chatbots, and intelligent agents",
      "Developing scalable AI architectures and integrating them into business workflows"
    ]
  },
  
];
export const reviews = [
  {
    name: "Hammad",
    username: "@hammad",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Ahmad",
    username: "@ahamd",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "abdullah",
    username: "@abdullah",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Rafay",
    username: "@rafay",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Ali",
    username: "@ali",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Hassan",
    username: "@hassan",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Asif",
    username: "@asif",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Areel",
    username: "@areel",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
