export const MOCK_DATA = {
  weather: {
    current: {
      temp: 29,
      humidity: 85,
      condition: 'Partly Cloudy',
      windSpeed: 12,
      uvIndex: 7,
    },
    forecast: [
      { day: 'Today', icon: '🌤️', high: 29, low: 24, condition: 'Partly Cloudy' },
      { day: 'Mon', icon: '🌧️', high: 28, low: 23, condition: 'Rainy' },
      { day: 'Tue', icon: '⛈️', high: 27, low: 23, condition: 'Thunderstorm' },
      { day: 'Wed', icon: '💨', high: 29, low: 24, condition: 'Windy' },
      { day: 'Thu', icon: '☀️', high: 31, low: 25, condition: 'Sunny' },
    ]
  },
  farmConditions: [
    { name: 'Soil Moisture', value: 72, max: 100, color: 'from-blue-400 to-blue-600' },
    { name: 'Nutrient Levels', value: 85, max: 100, color: 'from-lime-400 to-lime-600' },
    { name: 'Overall Farm Health', value: 91, max: 100, color: 'from-emerald-400 to-emerald-600' },
  ],
  yieldPrediction: {
    crop: 'Coconut',
    predicted: '8.5 tons/acre',
    confidence: 88,
    trend: 'up',
  },
  marketPrices: [
    { name: 'Coconut', price: '₹ 3,200/q', change: '+5%', trend: 'up' },
    { name: 'Rubber', price: '₹ 17,500/q', change: '-2%', trend: 'down' },
    { name: 'Banana', price: '₹ 2,800/q', change: '+3%', trend: 'up' },
    { name: 'Pepper', price: '₹ 51,000/q', change: '0%', trend: 'stable' },
  ],
  aiSuggestions: [
    { icon: '💧', text: "Light rain expected. Consider delaying irrigation for paddy crops by 1 day." },
    { icon: '📈', text: "Market price for coconuts is up by 5% in the local Mandi. Good day to sell." },
    { icon: '🐛', text: "Check for signs of yellow leaf disease on your areca nut plants." },
  ],
  upcomingTasks: [
    { time: 'Today', task: 'Apply fertilizer to banana plants.', priority: 'high', icon: '🥗' },
    { time: 'Tomorrow', task: 'Pest scouting for coconut trees.', priority: 'medium', icon: '🔍' },
    { time: 'In 3 days', task: 'Begin next irrigation cycle for paddy fields.', priority: 'low', icon: '💧' },
  ],
  pestReport: {
    diseaseName: 'Leaf Blight (Minor Severity)',
    confidence: 85,
    recommendedAction: 'Apply a copper-based fungicide like Bordeaux mixture (1%) on affected areas.',
    preventativeMeasures: 'Maintain proper plant spacing and remove fallen leaves regularly.',
    organicAlternatives: 'Use neem oil spray or baking soda solution as organic alternatives.',
  },
  financials: {
    summary: { income: 50000, expenses: 22000, profit: 28000 },
    chartData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      income: [12000, 19000, 3000, 5000, 2000, 9000],
      expenses: [7000, 8000, 2000, 3000, 1500, 4500]
    },
    expenseBreakdown: {
      labels: ['Fertilizers', 'Seeds', 'Labor', 'Equipment', 'Other'],
      data: [8000, 5500, 4000, 3000, 1500],
      colors: ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5']
    },
    transactions: [
      { id: 1, type: 'income', description: 'Sold 10 quintals of Coconut', amount: 32000, date: '2025-09-15', category: 'Sales' },
      { id: 2, type: 'expense', description: 'Purchased NPK Fertilizer', amount: 8000, date: '2025-09-12', category: 'Fertilizers' },
      { id: 3, type: 'expense', description: 'Tractor rental for ploughing', amount: 3000, date: '2025-09-10', category: 'Equipment' },
    ]
  },
  buyers: [
    {
      id: 1,
      name: 'Kerala Spices Co.',
      location: 'Kochi',
      interestedIn: ['Pepper', 'Cardamom'],
      rating: 4.8,
      deals: 150,
      image: '🏢'
    },
    {
      id: 2,
      name: 'Fresh Produce Exporters',
      location: 'Trivandrum',
      interestedIn: ['Banana', 'Pineapple'],
      rating: 4.5,
      deals: 89,
      image: '🌍'
    },
  ],
  schemes: [
    {
      id: 1,
      title: "PM-KISAN",
      description: "Direct income support to all landholding farmers",
      eligibility: "All landholding farmers",
      amount: "₹6,000/year",
      details: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) provides income support to all landholding farmers' families across the country. The amount is paid in three equal installments of ₹2,000 each every four months.",
      documents: [
        "Aadhaar Card",
        "Bank Account Details",
        "Land Ownership Documents",
        "Mobile Number linked to Aadhaar"
      ],
      link: "https://pmkisan.gov.in/"
    },
    {
      id: 2,
      title: "Soil Health Card Scheme",
      description: "Free soil testing and health cards for farmers",
      eligibility: "All farmers with agricultural land",
      amount: "Free Service",
      details: "The Soil Health Card Scheme provides farmers with soil nutrient status and recommendations on appropriate dosage of nutrients to improve soil health and fertility. Cards are issued every 2 years.",
      documents: [
        "Land Records",
        "Aadhaar Card",
        "Farmer Registration Number",
        "Contact Details"
      ],
      link: "https://soilhealth.dac.gov.in/"
    },
    {
      id: 3,
      title: "Pradhan Mantri Fasal Bima Yojana",
      description: "Comprehensive crop insurance scheme",
      eligibility: "All farmers growing notified crops",
      amount: "Up to ₹2 Lakh",
      details: "PMFBY provides insurance coverage and financial support to farmers in the event of failure of any notified crop as a result of natural calamities, pests, and diseases. Premium rates are very low - 2% for Kharif, 1.5% for Rabi crops.",
      documents: [
        "Aadhaar Card",
        "Bank Account Passbook",
        "Land Records/Tenancy Agreement",
        "Sowing Certificate",
        "Declaration Form"
      ],
      link: "https://pmfby.gov.in/"
    },
    {
      id: 4,
      title: "Kisan Credit Card (KCC)",
      description: "Easy credit access for agricultural needs",
      eligibility: "Farmers, sharecroppers, tenant farmers",
      amount: "Up to ₹3 Lakh",
      details: "Kisan Credit Card provides adequate and timely credit support to farmers for their cultivation and other needs. Interest subvention of 2% is available. Comes with accidental insurance cover of ₹50,000 and term insurance up to ₹50,000.",
      documents: [
        "Land Documents",
        "Aadhaar Card",
        "PAN Card",
        "Passport Size Photos",
        "Bank Account Statement"
      ],
      link: "https://www.india.gov.in/spotlight/kisan-credit-card-kcc"
    },
    {
      id: 5,
      title: "National Agriculture Market (e-NAM)",
      description: "Online trading platform for agricultural commodities",
      eligibility: "All farmers with produce to sell",
      amount: "Better Market Prices",
      details: "e-NAM is a pan-India electronic trading portal which networks existing APMC mandis to create a unified national market for agricultural commodities. Farmers can get better prices through transparent auction process and reduced marketing costs.",
      documents: [
        "Aadhaar Card",
        "Bank Account Details",
        "Mobile Number",
        "Land Records (for registration)"
      ],
      link: "https://www.enam.gov.in/"
    },
    {
      id: 6,
      title: "PM Kisan Maandhan Yojana",
      description: "Pension scheme for small and marginal farmers",
      eligibility: "Small & marginal farmers aged 18-40 years",
      amount: "₹3,000/month",
      details: "Pradhan Mantri Kisan Maandhan Yojana is a government-backed contributory pension scheme for small and marginal farmers. Farmers receive ₹3,000 monthly pension after attaining 60 years of age. Monthly contribution ranges from ₹55 to ₹200 based on entry age.",
      documents: [
        "Aadhaar Card",
        "Bank Account Passbook/Cheque",
        "Land Documents",
        "Age Proof",
        "IFSC Code"
      ],
      link: "https://maandhan.in/"
    }
  ],
 articles: [
  {
    id: 1,
    title: 'Advanced Irrigation Techniques',
    category: 'Water Management',
    readTime: 8,
    image: 'https://growhoss.com/cdn/shop/products/Irrigation-8Mil-Kit_460x@2x.jpg?v=1691782933',
    videoUrl: null, // Add this
    excerpt: 'Learn the latest irrigation methods to maximize crop yield and water efficiency for sustainable farming...'
  },
  {
    id: 2,
    title: 'Organic Pest Control',
    category: 'Pest Control',
    readTime: 12,
    image: 'https://glamourgarden.com/wp-content/uploads/2023/06/pest-control-1024x636.jpg',
    videoUrl: null, // Add this
    excerpt: 'Natural and organic methods to protect your crops from pests without harmful chemicals...'
  }
],

  community: [
    { id: 1, user: 'Ramesh K.', post: 'Best organic pesticide for aphids?', replies: 3, likes: 8, avatar: '👨‍🌾' },
    { id: 2, user: 'Sita Menon', post: 'Sharing my tomato harvest photos!', replies: 5, likes: 22, avatar: '👩‍🌾' },
  ],

  products: [
    {
      id: 1,
      name: 'NPK Fertilizer (10-26-26)',
      category: 'fertilizers',
      price: 850,
      originalPrice: 1200,
      discount: 29,
      unit: '50 kg bag',
      image: `https://www.sulzer.com/-/media/images/applications/oil-gas-chemicals/chemical-processing/fertilizers/npk_fertilizers.jp`,
      rating: 4.5,
      reviews: 234,
      inStock: true,
      description: 'High-quality NPK fertilizer perfect for all crops. Increases yield by 30%.',
      features: ['Balanced NPK ratio', 'Quick absorption', 'Increases yield', 'Long-lasting effect'],
      seller: 'AgriSupply India',
    },
    {
      id: 2,
      name: 'Organic Compost',
      category: 'fertilizers',
      price: 450,
      originalPrice: 600,
      discount: 25,
      unit: '40 kg bag',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTylDkKTDTLx5h47cXWxn5EHOW_Rc4mR5NEZg&s ',
      rating: 4.7,
      reviews: 189,
      inStock: true,
      description: '100% organic compost made from natural ingredients.',
      features: ['100% Organic', 'Rich in nutrients', 'Improves soil health', 'Eco-friendly'],
      seller: 'GreenEarth Organics',
    },
    {
      id: 3,
      name: 'Urea Fertilizer',
      category: 'fertilizers',
      price: 320,
      originalPrice: 380,
      discount: 16,
      unit: '45 kg bag',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/346419576/GB/CO/UV/181297268/u3-500x500.jpg ',
      rating: 4.3,
      reviews: 456,
      inStock: true,
      description: 'Premium quality urea fertilizer with 46% nitrogen content.',
      features: ['46% Nitrogen', 'Fast acting', 'Increases greenness', 'Cost effective'],
      seller: 'FertNation',
    },
    {
      id: 4,
      name: 'Neem Oil Pesticide',
      category: 'pesticides',
      price: 280,
      originalPrice: 350,
      discount: 20,
      unit: '1 liter',
      image: 'https://gogarden.co.in/cdn/shop/files/Neem_oil_by_Go_Garden.jpg?v=1741858009',
      rating: 4.6,
      reviews: 312,
      inStock: true,
      description: 'Natural neem oil pesticide for organic farming.',
      features: ['100% Natural', 'Safe for plants', 'Effective pest control', 'Organic certified'],
      seller: 'BioGuard',
    },
    {
      id: 5,
      name: 'Power Tiller',
      category: 'tools',
      price: 45000,
      originalPrice: 52000,
      discount: 13,
      unit: 'piece',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNy3Ytimh3q9S-RpLqJTq4GXWAd81KoC99Sw&s',
      rating: 4.8,
      reviews: 89,
      inStock: true,
      description: '8 HP diesel power tiller for efficient land preparation.',
      features: ['8 HP Engine', 'Fuel efficient', '1 year warranty', 'Easy to operate'],
      seller: 'AgriMachines Pro',
    },
    {
      id: 6,
      name: 'Sprayer Pump',
      category: 'tools',
      price: 3500,
      originalPrice: 4200,
      discount: 17,
      unit: 'piece',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9r9l8Z2Fy2MwTMeOyGOXJGJ5ycLMBu43Mlg&s',
      rating: 4.4,
      reviews: 567,
      inStock: true,
      description: '16-liter backpack sprayer for pesticides and fertilizers.',
      features: ['16L capacity', 'Adjustable nozzle', 'Durable material', 'Comfortable straps'],
      seller: 'SprayTech',
    },
    {
      id: 7,
      name: 'Garden Tools Set',
      category: 'tools',
      price: 1200,
      originalPrice: 1600,
      discount: 25,
      unit: 'set',
      image: 'https://www.rogersgardens.com/cdn/shop/articles/RG-Gardening-Tools-2.jpg?v=1690393327',
      rating: 4.5,
      reviews: 234,
      inStock: true,
      description: 'Complete 10-piece garden tools set with carry bag.',
      features: ['10 essential tools', 'Rust resistant', 'Ergonomic handles', 'Carry bag included'],
      seller: 'GardenMaster',
    },
    {
      id: 8,
      name: 'Drip Irrigation Kit',
      category: 'irrigation',
      price: 2800,
      originalPrice: 3500,
      discount: 20,
      unit: 'kit',
      image: 'https://elitechdrip.com/wp-content/uploads/2019/07/2022-new-timer-autokit-drip-irrigation-1.jpg',
      rating: 4.7,
      reviews: 178,
      inStock: true,
      description: 'Complete drip irrigation system for 1-acre land.',
      features: ['Covers 1 acre', 'Water saving', 'Easy installation', 'Durable pipes'],
      seller: 'WaterSave Systems',
    },
    {
      id: 9,
      name: 'Organic Seeds Pack',
      category: 'seeds',
      price: 150,
      originalPrice: 200,
      discount: 25,
      unit: 'pack',
      image: 'https://organicbazar.net/cdn/shop/files/RainySeasonVegetable_FlowerMixedSeedsKit.jpg?v=1750760699&width=533',
      rating: 4.6,
      reviews: 445,
      inStock: true,
      description: 'Premium quality organic vegetable seeds variety pack.',
      features: ['100% Organic', 'High germination', 'Multiple varieties', 'Season friendly'],
      seller: 'SeedBank India',
    },
    {
      id: 10,
      name: 'Soil pH Meter',
      category: 'tools',
      price: 800,
      originalPrice: 1100,
      discount: 27,
      unit: 'piece',
      image: 'https://hannainst.in/wp-content/inline-images/products/testers/application_specific/HI981030_Groline-pH-Tester.jpg ',
      rating: 4.3,
      reviews: 156,
      inStock: true,
      description: 'Digital soil pH and moisture meter for accurate testing.',
      features: ['Digital display', 'pH & moisture test', 'Battery operated', 'Easy to use'],
      seller: 'TestPro Instruments',
    },
  ],

 
  // Product categories
  categories: [
    { id: 'all', name: 'All Products', icon: '📦', count: 10 },
    { id: 'fertilizers', name: 'Fertilizers', icon: '🌱', count: 3 },
    { id: 'pesticides', name: 'Pesticides', icon: '🌿', count: 1 },
    { id: 'tools', name: 'Tools', icon: '🔧', count: 4 },
    { id: 'irrigation', name: 'Irrigation', icon: '💧', count: 1 },
    { id: 'seeds', name: 'Seeds', icon: '🌾', count: 1 },
  ],
};
