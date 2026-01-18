export type Product = {
    id: string;
    slug?: string;
    name: string;
    category: string;
    description: string;
    shortDescription?: string;
    longDescription?: string;
    features?: string[];
    benefits?: string[];
    ingredients?: string[];
    usage?: string;
    price?: string;
    image?: string;
};

export const products: Product[] = [
    // --- CELL ELIXIR ---
    {
        id: 'CellGenetiX',
        slug: 'cellgenetix',
        name: 'CellGenetiX',
        category: 'Cell Elixir',
        description: 'Active cell regeneration and telomere protection.',
        longDescription: 'CellGenetiX is a masterpiece of molecular biology, designed to protect the very essence of your youth�your telomeres. By preventing the shortening of these DNA protective caps, it slows down the biological clock. Enriched with Polyprenols from Siberian Fir and the mighty antioxidant Astaxanthin, it repairs cell membranes and shields genetic material from damage.',
        benefits: [
            'Protects telomeres and extends cell lifespan.',
            'Regenerates damaged cell membranes.',
            'Powerful antioxidant defense (DNA protection).',
            'Supports liver detoxification.',
            'Reverses signs of premature aging.'
        ],
        ingredients: ['Polyprenols (Siberian Fir)', 'Astaxanthin', 'Black Cumin Seed Extract', 'Betulin'],
        usage: '2 capsules daily.',
        image: 'https://front.agenyz.eu/resize/w1413/4v/uc/mock_up_cellgenetix_180_eng_500.7eabyuxn.jpg'
    },
    {
        id: '3D-Matrix',
        slug: '3d-matrix',
        name: '3D-Matrix',
        category: 'Cell Elixir',
        description: 'Multi-layered support for joints, skin, and vessels.',
        longDescription: '3D-Matrix uses a unique multi-layer technology to deliver building blocks exactly where your connective tissues need them. It acts as a \\'frame\\' for your body, strengthening bones, joints, and blood vessels while restoring the youthful elasticity of your skin. This is not just collagen; it is a matrix reconstruction system.',
        benefits: [
            'Strengthens joints and connective tissue.',
            'Improves skin elasticity and reduces wrinkles.',
            'Reinforces blood vessel walls.',
            'Promotes natural collagen synthesis.'
        ],
        ingredients: ['Glucosamine', 'Chondroitin', 'Osteol', 'Resveratrol', 'Calcium', 'Vitamins B6, C, H (Biotin)'],
        usage: '2-3 dragees daily.',
        image: 'https://front.agenyz.eu/resize/w1413/vt/3d/2025_12_02_AgenyzEU_3DMatrix_Mockup_2500x2500.jv54rcvxr7m1y7vv51dvwiy0uea5.png'
    },
    {
        id: 'GepaArt',
        slug: 'gepaart',
        name: 'GepaArt',
        category: 'Cell Elixir',
        description: 'Complete liver detox and cholesterol balance.',
        longDescription: 'A vegan guardian for your liver. GepaArt targets heavy metals, toxins, and excess cholesterol, helping your main filter organ run smoothly. It supports bile production and protects hepatocytes from damage, ensuring clear skin and better digestion.',
        benefits: [
            'Detoxifies the liver at a cellular level.',
            'Normalizes cholesterol profile.',
            'Improves bile flow and digestion.',
            'Protects against alcohol and dietary toxins.'
        ],
        ingredients: ['Milk Thistle', 'Artichoke', 'Dihydroquercetin', 'Corn Silk', 'Fennel'],
        usage: '2 capsules daily.',
        image: 'https://front.agenyz.eu/resize/w1413/hz/ph/gepa_art_oculyz_mockups_14_07_2025_4_site.fsxe8gwu1ixnz4jq43a8.png'
    },
    {
        id: 'AlfaOmega-Q10',
        slug: 'alfaomega-q10',
        name: 'AlfaOmega-Q10',
        category: 'Cell Elixir',
        description: 'Heart, Brain & Beauty Complex.',
        longDescription: 'The ultimate shield for your heart and brain. AlfaOmega-Q10 combines high-quality Omega-3 fatty acids, Coenzyme Q10, and Betulin to support cardiovascular health, cognitive function, and youthful skin. Essential for anyone leading an active, high-performance life.',
        benefits: [
            'Supports heart rhythm and vascular health.',
            'Boosts brain function and memory.',
            'Energizes cells with CoQ10.',
            'Improves skin hydration and elasticity.'
        ],
        ingredients: ['Omega-3 (EPA/DHA)', 'Coenzyme Q10', 'Betulin', 'Vitamin E'],
        usage: '2 capsules daily.',
        image: 'https://front.agenyz.eu/resize/w1413/food-supplements/alfaomega-q10_image.jpg'
    },
    {
        id: 'Slim-Hit',
        slug: 'slim-hit',
        name: 'Slim Hit',
        category: 'Cell Elixir',
        description: 'Metabolic activator and fat blocker.',
        longDescription: 'Slim Hit is designed to help you manage weight intelligently. It blocks the absorption of excess fats and carbohydrates while activating your metabolism to burn stored energy. Includes Chitosan and Garcinia Cambogia for natural appetite control.',
        benefits: [
            'Blocks excess calorie absorption.',
            'Controls appetite and sugar cravings.',
            'Accelerates fat metabolism.',
            'Supports healthy detox.'
        ],
        ingredients: ['Chitosan', 'Garcinia Cambogia', 'Gymnema Sylvestre', 'Bromelain'],
        usage: '1 capsule before meals.',
        image: 'https://front.agenyz.eu/resize/w1413/food-supplements/slim-hit.jpg'
    },

    // --- 3D GUARD ---
    {
        id: 'CellGuard',
        slug: 'cellguard',
        name: 'CellGuard',
        category: '3dGuard',
        description: 'Ultimate immune shield and detox.',
        longDescription: 'CellGuard is your body\\'s fortress against environmental aggression. Using the power of Curcumin and Cat\\'s Claw, it detoxifies cells from radiation, heavy metals, and viruses while modulating the immune response to prevent overreaction (inflammation).',
        benefits: [
            'Protects against radiation and chemical toxins.',
            'Reducing chronic inflammation.',
            'Strengthens antiviral immunity.',
            'Supports cellular DNA repair.'
        ],
        ingredients: ['Curcumin', 'Cat\\'s Claw', 'Reishi', 'Selenium'],
        usage: '2 capsules daily.',
        image: 'https://front.agenyz.eu/resize/w1413/85/c0/cellguard.ny6j7.png'
    },
    {
        id: 'Infladel',
        slug: 'infladel',
        name: 'Infladel',
        category: '3dGuard',
        description: 'Natural anti-inflammatory complex.',
        longDescription: 'Inflamaging (inflammation + aging) is the silent killer. Infladel stops it. With a potent blend of antimicrobial and anti-inflammatory plant extracts, it acts as a natural antibiotic without the side effects, protecting you from bacteria, viruses, and chronic pain.',
        benefits: [
            'Reduces systemic inflammation.',
            'Natural antimicrobial action.',
            'Boosts immunity during flu season.',
            'Supports respiratory health.'
        ],
        ingredients: ['Andrographis', 'Echinacea', 'Willow Bark (Natural Aspirin)', 'Colostrum', 'Lysozyme'],
        usage: '2 capsules daily.',
        image: 'https://front.agenyz.eu/resize/w1413/5f/nw/infladel.lsaf.png'
    },
    {
        id: 'CandiDel',
        slug: 'candidel',
        name: 'CandiDel',
        category: '3dGuard',
        description: 'Fungal defense and yeast balance.',
        longDescription: 'A balanced microbiome starts with controlling fungi. CandiDel targets Candida overgrowth, which causes sugar cravings, fatigue, and bloating. Its natural fungicidal oils cleanse the system without harming beneficial bacteria.',
        benefits: [
            'Eliminates pathogenic fungi (Candida).',
            'Reduces sugar and carb cravings.',
            'Clears skin from fungal-related acne.',
            'Supports healthy digestion.'
        ],
        ingredients: ['Black Cumin Seed Oil', 'Oregano Oil', 'Magnesium Caprylate', 'Grapefruit Seed Extract'],
        usage: '2 capsules daily.',
        image: 'https://front.agenyz.eu/resize/w1413/vy/h0/candidel_eng_500.k750wzr27qisakjrj3.jpg'
    },

    // --- FUNCTIONAL DRINKS (TRUE AQUA) ---
    {
        id: 'PH-Balance',
        slug: 'ph-balance',
        name: 'pH Balance',
        category: 'Functional Drinks',
        description: 'Alkalizing marine minerals for hydration.',
        longDescription: 'Acidosis is the root of many modern ailments. pH Balance restores your body\\'s alkaline state using Aquamin��calcium and magnesium sourced from pristine marine algae. It hydrates, energizes, and prevents minerals from being leached from your bones.',
        benefits: [
            'Instantly alkalizes the body.',
            'Prevents calcium loss from bones.',
            'Relieves lactic acid burn after sports.',
            'Improves hydration and stamina.'
        ],
        ingredients: ['Aquamin (Seaweed Calcium)', 'Potassium', 'Magnesium'],
        usage: '1 sachet in 500ml water daily.',
        image: 'https://front.agenyz.eu/resize/w1413/l5/i4/mockup_phbalance_eu_02_09_2025_v1_4_site.2vmtdd09gyags.png'
    },
    {
        id: 'Immune-Cell',
        slug: 'immune-cell',
        name: 'Immune Cell',
        category: 'Functional Drinks',
        description: 'Liposomal immunity boost.',
        longDescription: 'A tasty, powerful drink that feeds your immunity. Immune Cell uses liposomal technology to deliver vitamins and probiotics (peptide ultralysates) directly to your cells, bypassing digestion destruction. It balances the microbiome and charges you with energy.',
        benefits: [
            'Rapid immune system activation.',
            'Supports gut microbiome health.',
            'Increases energy and vitality.',
            'High bioavailability of vitamins.'
        ],
        ingredients: ['Liposomal Vitamins (C, D3, E, B-Complex)', 'Bifidobacteria Lysates', 'Chaga', 'Green Tea'],
        usage: '1 sachet in water daily.',
        image: 'https://front.agenyz.eu/resize/w1413/we/zx/immune_eng_500.ymlnrn8mt8hm.jpg'
    },
    {
        id: 'Alfamind',
        slug: 'alfamind',
        name: 'AlfaMind',
        category: 'Functional Drinks',
        description: 'Focus, calm, and mental clarity.',
        longDescription: 'Unlock the \\'Flow State\\'. AlfaMind is a natural nootropic that helps you focus without the jitters of coffee. It calms the nervous system while sharpening concentration, making it perfect for high-pressure work or study.',
        benefits: [
            'Improves concentration and memory.',
            'Reduces stress and anxiety.',
            'Protects brain cells from aging.',
            'Balances mood.'
        ],
        ingredients: ['Glycine', 'Theanine', 'Ginkgo Biloba', 'Vitamin B-Complex', 'Magnesium'],
        usage: '1 sachet in water when focus is needed.',
        image: 'https://front.agenyz.eu/resize/w1413/functional-drinks/alfamind.jpg'
    },
    {
        id: 'Black-Gold-Hot',
        slug: 'black-gold-hot',
        name: 'Black Gold & Hot',
        category: 'Functional Drinks',
        description: 'Chaga mushroom elixir for vitality.',
        longDescription: 'An ancient Siberian secret for longevity. Black Gold & Hot is a warming drink based on Chaga mushroom, known as the \\'King of Herbs\\'. It boosts immunity, improves digestion, and provides a powerful dose of antioxidants.',
        benefits: [
            'Powerful immune modulator.',
            'Supports digestive health.',
            'Anti-inflammatory and warming.',
            'Natural energy source.'
        ],
        ingredients: ['Chaga Mushroom Extract', 'Ginger', 'Lemon'],
        usage: 'Mix with hot water for a tea-like experience.',
        image: 'https://front.agenyz.eu/resize/w1413/functional-drinks/black-gold.jpg'
    },

    // --- FOOD SUPPLEMENTS (XBi-A) ---
    {
        id: 'Octomagnesium-XBi-A',
        slug: 'octomagnesium-xbi-a',
        name: 'OctoMagnesium + XBi-A',
        category: 'Food Supplements',
        description: '8 forms of Magnesium for total relaxation.',
        longDescription: 'Magnesium deficiency causes stress, cramps, and poor sleep. OctoMagnesium solves this with a cascade of 8 different magnesium forms (Chelate, Citrate, Malate, etc.) plus Vitamin B6 and XBi-A booster. It absorbs rapidly and works long-term.',
        benefits: [
            'Deep muscle relaxation and cramp relief.',
            'Calms the nervous system.',
            'Improves sleep quality.',
            'Supports heart and brain health.'
        ],
        ingredients: ['8 Magnesium Forms (Bisglycinate, Citrate, Malate...)', 'Vitamin B6', 'XBi-A Booster'],
        usage: '2 capsules in the evening.',
        image: 'https://front.agenyz.eu/resize/w1413/2a/7f/octomg_eu_mockup_15_10_2025_v1.1uxly2u6iv4zobzrpu78m585dlm.png'
    },
    {
        id: 'Vitamin-D3-XBi-A',
        slug: 'vitamin-d3-xbi-a',
        name: 'Vitamin D3 + XBi-A',
        category: 'Food Supplements',
        description: 'Vegan sun vitamin with bioavailability booster.',
        longDescription: 'Vitamin D is crucial for immunity and bones, but often poorly absorbed. Ours comes from a vegan source (Reindeer Lichen) and is supercharged with XBi-A technology for maximum uptake.',
        benefits: [
            'Strengthens immune defense.',
            'Vital for bone density.',
            'Mood regulation (anti-depression).',
            '100% Vegan.'
        ],
        ingredients: ['Vitamin D3 (Lichen origin)', 'XBi-A Complex'],
        usage: '1 capsule daily.',
        image: 'https://front.agenyz.eu/resize/w1413/f9/yh/VitaminD3_1.72cbzz0zfx80c69v1cwvdl.jpg'
    },
    {
        id: 'Vitamin-C-XBi-A',
        slug: 'vitamin-c-xbi-a',
        name: 'Vitamin C + XBi-A',
        category: 'Food Supplements',
        description: 'Natural C from Rosehip.',
        longDescription: 'Synthetic Vitamin C can irritate. Ours is pure Rosehip extract, gentle on the stomach and enhanced with XBi-A. Essential for collagen production and fighting off colds.',
        benefits: [
            'Boosts collagen production for skin.',
            'Strengthens immunity.',
            'Potent antioxidant.',
            'Gentle on the stomach.'
        ],
        ingredients: ['Rosehip Extract (Vitamin C)', 'XBi-A Complex'],
        usage: '1-2 capsules daily.',
        image: 'https://front.agenyz.eu/resize/w1413/food-supplements/vitamin-c-xbi-a.jpg'
    },
    {
        id: 'Oculyz-XBi-A',
        slug: 'oculyz-xbi-a',
        name: 'Oculyz + XBi-A',
        category: 'Food Supplements',
        description: 'Complete synthesis for vision protection.',
        longDescription: 'In the digital age, our eyes are under constant attack. Oculyz provides the pigments (Lutein, Zeaxanthin) needed to filter blue light and protect the retina, enhanced with berry extracts for vascular support.',
        benefits: [
            'Protects eyes from blue light damage (screens).',
            'Reduces eye fatigue and dryness.',
            'Supports retinal health.',
            'Improves night vision.'
        ],
        ingredients: ['Lutein', 'Zeaxanthin', 'Blueberry Extract', 'Beta-carotene', 'XBi-A'],
        usage: '1 capsule daily.',
        image: 'https://front.agenyz.eu/resize/w1413/food-supplements/oculyz.jpg'
    },
    {
        id: 'FerBoost',
        slug: 'ferboost',
        name: 'FerBoost',
        category: 'Food Supplements',
        description: 'Smart Iron for fatigue reduction.',
        longDescription: 'Iron that doesn\\'t hurt your stomach. FerBoost uses liposomal and chelated iron with co-factors like Folate and B12 to ensure it goes into your blood, not your gut. Say goodbye to anemia-related fatigue.',
        benefits: [
            'Rapidly raises Iron and Ferritin levels.',
            'Eliminates chronic fatigue.',
            'No nausea or stomach irritation.',
            'Supports oxygen transport.'
        ],
        ingredients: ['Liposomal Iron', 'Folate', 'Vitamin B12', 'Vitamin C'],
        usage: '1 capsule daily.',
        image: 'https://front.agenyz.eu/resize/w1413/food-supplements/ferboost-d3.jpg'
    },
    {
        id: 'ParaDetox',
        slug: 'paradetox',
        name: 'ParaDetox + XBi-A',
        category: 'Food Supplements',
        description: 'Deep anti-parasitic cleanse.',
        longDescription: 'A clean body starts with a clean gut. ParaDetox is a comprehensive herbal formula designed to expel parasites and maintain a healthy intestinal environment without harsh chemicals.',
        benefits: [
            'Expels intestinal parasites gently.',
            'Detoxifies parasite byproducts.',
            'Improves digestion.',
            'Reduces skin rashes related to toxins.'
        ],
        ingredients: ['Clove', 'Walnut Leaf', 'Tansy', 'Grapefruit Seed', 'XBi-A'],
        usage: '2 capsules daily.',
        image: 'https://front.agenyz.eu/resize/w1413/food-supplements/paradetox-xbi-a.jpg'
    },
    {
        id: 'UriPurin',
        slug: 'uripurin',
        name: 'UriPurin',
        category: 'Food Supplements',
        description: 'Uric acid control for joint comfort.',
        longDescription: 'High uric acid leads to painful crystals in joints (Gout). UriPurin helps your kidneys flush it out efficiently while calming inflammation in the joints with Devil\\'s Claw and Boswellia.',
        benefits: [
            'Lowers uric acid levels.',
            'Relieves joint pain and swelling.',
            'Supports kidney filtration.',
            'Improves mobility.'
        ],
        ingredients: ['Devil\\'s Claw', 'Boswellia', 'Cherry Extract', 'UDex Complex'],
        usage: '2 capsules daily.',
        image: 'https://front.agenyz.eu/resize/w1413/sh/ve/uripurin_eu_mockup_02_09_2025_v1_4_site.u9p7qhae5jevi6ctq.png'
    },
    // --- FOOD (Shakes / Oils) ---
    {
        id: 'Alfa-Shake-MCT',
        slug: 'alfa-shake-mct',
        name: 'Alfa Shake + MCT',
        category: 'Food',
        description: 'Perfect protein meal with MCT energy.',
        longDescription: 'More than just protein. This is fuel. AlfaShake combines easily digestible whey protein with MCT oil (Medium Chain Triglycerides) which the liver converts directly into ketone energy for the brain. Perfect for keto diets and sustained energy.',
        benefits: [
            'Sustained energy without sugar spikes.',
            'Supports muscle tone and recovery.',
            'Brain fuel (Ketones).',
            'Controls appetite.'
        ],
        ingredients: ['Whey Protein', 'MCT Oil', 'BCAAs', 'Vitamin Complex'],
        usage: 'Mix 1 scoop with water or nut milk.',
        image: 'https://front.agenyz.eu/resize/w1413/b2/bu/alfashake_new_mockup_dark_bottle.yxfbdcbmjzdr50tm4d22y.png'
    },
    {
        id: 'IQ-MCT-Powder',
        slug: 'iq-mct-powder',
        name: 'IQ-MCT Powder',
        category: 'Food',
        description: 'Pure brain fuel with metabiotics.',
        longDescription: 'Upgrade your coffee or smoothie. IQ-MCT is pure caprylic/capric acid powder that turns into brain energy instantly. Enriched with metabiotics to support the gut-brain axis.',
        benefits: [
            'Instant mental clarity and focus.',
            'Kickstarts Ketosis.',
            'Supports healthy gut bacteria.',
            'Tasteless - add to any drink.'
        ],
        ingredients: ['MCT Oil Powder (C8/C10)', 'Metabiotics (Acacia fiber)'],
        usage: 'Add to coffee, tea, or shakes.',
        image: 'https://front.agenyz.eu/resize/w1413/g-keto-d2/iq-mst-powder.jpg'
    },
    {
        id: 'Collagen-Blend',
        slug: 'collagen-blend',
        name: 'Collagen Blend',
        category: 'Food Supplements',
        description: '5 sources of Collagen for total beauty.',
        longDescription: 'Don\\'t settle for one type of collagen. Our blend includes 5 different sources (marine, bovine, chicken, etc.) to target skin, joints, bones, and gut lining simultaneously. Enriched with Hyaluronic acid and Vitamin C.',
        benefits: [
            'Systemic collagen restoration.',
            'Plumps skin and reduces fine lines.',
            'Strengthens hair and nails.',
            'Repairs gut lining.'
        ],
        ingredients: ['Peptides of 5 Collagen Types', 'Vitamin C', 'Hyaluronic Acid', 'Biotin'],
        usage: '1 scoop daily in drink.',
        image: 'https://front.agenyz.eu/resize/w1413/g4/ag/2025_11_11_Collagen_Blend_Biotin_MOCKUP_2000x2000.5vscizg6691gv26az.png'
    },

    // --- KIDS ---
    {
        id: 'Immune-Kidyz',
        slug: 'immune-kidyz',
        name: 'Immune KidYZ',
        category: 'Kids',
        description: 'Delicious vitamins for growing heroes.',
        longDescription: 'Kids hate pills, but they love this. A balanced vitamin and mineral complex in tasty form, designed to support rapid growth and a strong immune system during school years.',
        benefits: [
            'Supports physical growth and development.',
            'Strengthens immunity naturally.',
            'Supports cognitive development.',
            'Great taste.'
        ],
        ingredients: ['Vitamins A, C, E, D3', 'Zinc', 'Iodine', 'B-Group Vitamins'],
        usage: '1-2 tablets daily.',
        image: 'https://front.agenyz.eu/resize/w1413/immune-kidyz.jpg'
    },
    {
        id: 'Gummyz-Kidyz',
        slug: 'gummyz-kidyz',
        name: 'Gummyz KidYZ (Ca + D3)',
        category: 'Kids',
        description: 'Strong bones for active kids.',
        longDescription: 'Calcium is useless without D3 and K2. Gummyz KidYZ provides the perfect trio to ensure calcium actually goes into the bones and teeth, supporting strong skeletal growth.',
        benefits: [
            'Promotes strong bones and teeth.',
            'Ensures proper calcium absorption.',
            'Supports muscle function.',
            'Sugar-free, natural styling.'
        ],
        ingredients: ['Calcium', 'Vitamin D3', 'Vitamin K2'],
        usage: '1-2 gummies daily.',
        image: 'https://front.agenyz.eu/resize/w1413/food-supplements/gummyz-kidyz-calcium-k2-d3.jpg'
    },
     // --- TEAS ---
    {
        id: 'Tea-Indigo',
        slug: 'tea-indigo',
        name: '5.5 teArt Indigo',
        category: 'Functional Drinks',
        description: 'Relaxing blue tea for peace.',
        longDescription: 'A mesmerizing blue tea (Butterfly Pea Flower) that calms the mind. Caffeine-free and full of antioxidants, it is the perfect ritual for evening relaxation.',
        benefits: [
            'Relieves stress and tension.',
            'Rich in antioxidants (Anthocyanins).',
            'Improves sleep rituals.',
            'Beautiful blue color.'
        ],
        ingredients: ['Butterfly Pea Flower', 'Lemon Grass', 'Mint'],
        usage: 'Brew 1 sachet in hot water.',
        image: 'https://front.agenyz.eu/resize/w1413/functional-drinks/55-teart-herbal-tea-indigo.jpg'
    },
    {
        id: 'Tea-Digestion',
        slug: 'tea-digestion',
        name: '5.5 teArt Digestion',
        category: 'Functional Drinks',
        description: 'Herbal comfort after meals.',
        longDescription: 'Heavy lunch? This blend of digestive herbs helps break down food, reduce bloating, and soothe the stomach.',
        benefits: [
            'Alleviates bloating and gas.',
            'Stimulates healthy digestion.',
            'Fresh, cleansing taste.'
        ],
        ingredients: ['Fennel', 'Chamomile', 'Anise', 'Cumin'],
        usage: 'Brew 1 sachet after meals.',
        image: 'https://front.agenyz.eu/resize/w1413/functional-drinks/55-teart-digestion-tea-with-herbs-fruits.jpg'
    }
];

export const categories = ['All', 'Cell Elixir', '3dGuard', 'Functional Drinks', 'Food Supplements', 'Food', 'Kids'];
