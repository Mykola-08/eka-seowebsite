export type Product = {
    id: string;
    name: string;
    category: string;
    description: string;
    features?: string[];
    price?: string;
    image?: string;
};

export const products: Product[] = [
    // Cell Elixir
    {
        id: 'CellGenetiX',
        name: 'CellGenetiX',
        category: 'Cell Elixir',
        description: 'An advanced antioxidant complex with polyprenols and astaxanthin - perfect for those who want to preserve youth and vitality.',
        features: ['Active cell regeneration', 'Telomere protection', 'DNA repair'],
    },
    {
        id: '3D-Matrix',
        name: '3D-matrix',
        category: 'Cell Elixir',
        description: 'The synergy of chondroprotectors, amino acids and antioxidants promotes the restoration of joint cartilage and collagen production.',
        features: ['Joint health', 'Skin elasticity', 'Connective tissue support'],
    },
    {
        id: 'Alpha-omega-q10',
        name: 'AlphaOmega-Q10',
        category: 'Cell Elixir',
        description: 'Complex of antioxidants, coenzyme Q10, betulin and Omega-3 fatty acids for heart, brain and Beauty.',
        features: ['Heart health', 'Brain function', 'Anti-aging'],
    },
    {
        id: 'HepaArt',
        name: 'HepaArt',
        category: 'Cell Elixir',
        description: 'A unique complex of plant extracts for liver protection and detoxification.',
        features: ['Liver support', 'Detoxification', 'Cholesterol Balance'],
    },
    {
        id: 'Ursus',
        name: 'Ursus',
        category: 'Cell Elixir',
        description: 'Complex of plant extracts and microelements for kidneys and urinary tract health.',
        features: ['Kidney health', 'Urinary tract support', 'Mild diuretic'],
    },
    {
        id: 'Slim-hit',
        name: 'Slim Hit',
        category: 'Cell Elixir',
        description: 'Complex to block the absorption of excess fats and carbohydrates and reduce appetite.',
        features: ['Weight management', 'Appetite control', 'Metabolism boost'],
    },
     {
        id: 'K2D3-Boost',
        name: 'K2D3-boost',
        category: 'Cell Elixir',
        description: 'A unique complex of fat-soluble vitamins and microelements for calcium metabolism.',
        features: ['Bone strength', 'Immune support', 'Calcium absorption'],
    },

    // 3D Guard
    {
        id: 'CellGuard',
        name: 'CellGuard',
        category: '3D Guard',
        description: 'A complex of the strongest natural immunomodulators aimed at protecting cells from viruses and damage.',
        features: ['Immune defense', 'Antiviral', 'Cell protection'],
    },
    {
        id: 'Candidel',
        name: 'Candidel',
        category: '3D Guard',
        description: 'Natural complex of active plant components for protection against fungal infections (candida).',
        features: ['Anti-fungal', 'Microbiome Balance', 'Detox'],
    },
    {
        id: 'Infladel',
        name: 'Infladel',
        category: '3D Guard',
        description: 'Complex of active natural components aimed at reducing inflammatory processes.',
        features: ['Anti-inflammatory', 'Pain relief', 'Recovery'],
    },

    // Beauty Drone
    {
        id: 'Serum-progressive-anti-age',
        name: 'Serum progressive anti-age',
        category: 'Beauty Drone',
        description: 'A premium, highly effective Serum for deep skin rejuvenation and wrinkle reduction.',
        features: ['Lifting effect', 'Wrinkle reduction', 'Deep hydration'],
    },
    {
        id: 'Eye-lifting-cream',
        name: 'Anti-age Eye Lifting cream',
        category: 'Beauty Drone',
        description: 'Intensive anti-aging Lifting cream for the delicate Eye area.',
        features: ['Dark circles reduction', 'Lifting', 'Puffiness reduction'],
    },
    {
        id: 'Hyaluronic-aqua-cream',
        name: 'Hyaluronic Aqua cream',
        category: 'Beauty Drone',
        description: 'Multi-molecular Hyaluronic Aqua cream for intensive moisturizing.',
        features: ['Deep moisture', 'Skin barrier', 'Radiance'],
    },

    // Functional Food
    {
        id: 'Iq-MCT-powder',
        name: 'Iq-MCT powder',
        category: 'Functional Food',
        description: 'A high-quality source of pure energy for the heart, brain, and skeletal muscles. Keto-friendly.',
        features: ['Instant energy', 'Brain clarity', 'Keto support'],
    },
    {
        id: 'Alpha-shake-MCT',
        name: 'Alpha shake + MCT',
        category: 'Functional Food',
        description: 'Protein cocktail enriched with MCT oil for saturation and energy.',
        features: ['Muscle recovery', 'Satiety', 'Metabolism'],
    },
    {
        id: 'Chocolate-iq-shock',
        name: 'Chocolate iq-shock',
        category: 'Functional Food',
        description: 'Dark Chocolate with no added sugar, aimed at mental clarity and brain concentration.',
        features: ['Focus', 'Mood elevation', 'No sugar'],
    },
    {
        id: 'Black-gold-hot',
        name: 'Black Gold & Hot',
        category: 'Functional Food',
        description: 'Hot drink made from chaga, ginger and lemon for immunity.',
        features: ['Immunity warming', 'Antioxidant', 'Digestive aid'],
    },

    // True Aqua
    {
        id: 'pH-Balance-cell',
        name: 'pH Balance Cell',
        category: 'True Aqua',
        description: 'Balanced complex of minerals from lithothamnia seaweed to regulate acid-base Balance.',
        features: ['Alkalizing', 'Mineral replenishment', 'Detox'],
    },
    {
        id: 'Immune-cell',
        name: 'Immune Cell',
        category: 'True Aqua',
        description: 'Drink with vitamins, iodine and extracts for comprehensive Immune support.',
        features: ['Daily immunity', 'Energy', 'Vitality'],
    },
    {
        id: 'Sorbio-detox-cell',
        name: 'Sorbio Detox Cell',
        category: 'True Aqua',
        description: 'Drink for effective detoxification and cleansing of the body.',
        features: ['Deep detox', 'Gut health', 'Heavy metal removal'],
    },

    // KidYZ
    {
        id: 'Gummyz-KidYZ',
        name: 'Gummyz KidYZ calcium',
        category: 'KidYZ',
        description: 'Delicious vitamins for children with calcium, vitamin K2 and D3.',
        features: ['Strong bones', 'Growth support', 'Tasty & healthy'],
    }
];

export const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
