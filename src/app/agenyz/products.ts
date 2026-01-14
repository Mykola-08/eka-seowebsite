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
    {
        id: 'CellGenetiX',
        name: 'CellGenetiX',
        category: 'Cell Elixir',
        description: 'cellular health support. food supplement with Vitamin E, polyunsaturated fatty acids and plant extracts with polyprenols, betulin and astaxanthin. Vitamin E contributes to the protection of cells from oxidative stress. Assists in active cell regeneration.',
        image: 'https://front.agenyz.eu/resize/w1413/4v/uc/mock_up_cellgenetix_180_eng_500.7eabyuxn.jpg',
        features: ['Active cell regeneration', 'Telomere protection', 'DNA repair']
    },
    {
        id: '3D-Matrix',
        name: '3D-Matrix',
        category: 'Cell Elixir',
        description: '3D-Matrix is a multi-layered food supplement containing carefully selected bioactive components, including Biotin, vitamins B6 and C, Copper, and plant extracts. Each layer is designed to release nutrients at specific points in the digestive tract. Supports the normal function of joints, blood vessels, and skin.',
        image: 'https://front.agenyz.eu/resize/w1413/vt/3d/2025_12_02_AgenyzEU_3DMatrix_Mockup_2500x2500.jv54rcvxr7m1y7vv51dvwiy0uea5.png',
        features: ['Joint health', 'Skin elasticity', 'Connective tissue support']
    },
    {
        id: 'GepaArt',
        name: 'GepaArt',
        category: 'Cell Elixir',
        description: 'GepaArt is a vegan food supplement containing plant extracts and vitamins that contribute to the maintenance of normal liver function, normal cholesterol levels, normal digestive function, and normal detoxification processes. Includes milk thistle, artichoke, and dihydroquercetin.',
        image: 'https://front.agenyz.eu/resize/w1413/hz/ph/gepa_art_oculyz_mockups_14_07_2025_4_site.fsxe8gwu1ixnz4jq43a8.png',
        features: ['Liver support', 'Detoxification', 'Cholesterol balance']
    },
    {
        id: 'PH-Balance',
        name: 'pH Balance',
        category: 'Functional Drinks',
        description: 'pH Balance is a marine-sourced electrolyte supplement in convenient sachets, designed to help maintain hydration, energy and mineral balance throughout the day. Powered by Aquamin®, a natural marine mineral complex rich in calcium and magnesium.',
        image: 'https://front.agenyz.eu/resize/w1413/l5/i4/mockup_phbalance_eu_02_09_2025_v1_4_site.2vmtdd09gyags.png',
        features: ['Hydration', 'Mineral balance', 'Energy support']
    },
    {
        id: 'Immune-Cell',
        name: 'Immune Cell',
        category: 'Functional Drinks',
        description: 'Immune Cell helps regulate the body\'s water, vitamin, mineral, energy, and immune status. A liposome-based natural vitamin and mineral drink made using nanotechnology. Contains seven ultra-lyzed peptide bifidobacteria and lactobacilli, inulin, chaga and green tea extracts.',
        image: 'https://front.agenyz.eu/resize/w1413/we/zx/immune_eng_500.ymlnrn8mt8hm.jpg',
        features: ['Immune support', 'Microbiome balance', 'Energy']
    },
    {
        id: 'Alfa-Shake-MCT',
        name: 'Alfa Shake + MCT',
        category: 'Food',
        description: 'AlfaShake + MCT is a creamy caramel flavored protein shake enriched with MCT oil. It provides a harmonious blend of easily digestible protein, a full spectrum of essential amino acids, dietary fibre, and a balanced vitamin and mineral complex. Ideal for energy and muscle support.',
        image: 'https://front.agenyz.eu/resize/w1413/b2/bu/alfashake_new_mockup_dark_bottle.yxfbdcbmjzdr50tm4d22y.png',
        features: ['Protein source', 'MCT Oil', 'Muscle support']
    },
    {
        id: 'CandiDel',
        name: 'CandiDel',
        category: '3dGuard',
        description: 'CandiDel is a natural blend of active active plant constituents designed to provide protection against fungal infections originating from yeast-like fungi, specifically Candida. Formulated with Black Seed Oil, Magnesium Caprylate, Grapefruit Seed Extract, Cloves and Oregano extracts.',
        image: 'https://front.agenyz.eu/resize/w1413/vy/h0/candidel_eng_500.k750wzr27qisakjrj3.jpg',
        features: ['Antifungal', 'Yeast balance', 'Immune defense']
    },
    {
        id: 'CellGuard',
        name: 'CellGuard',
        category: '3dGuard',
        description: 'CellGuard is a plant-based immunity supplement containing polysaccharides, curcumin, plant extracts, and selenium. It supports the normal function of the immune system and contributes to the protection of cells from oxidative stress and damage.',
        image: 'https://front.agenyz.eu/resize/w1413/85/c0/cellguard.ny6j7.png',
        features: ['Immune defense', 'Antioxidant', 'Cell protection']
    },
    {
        id: 'Infladel',
        name: 'Infladel',
        category: '3dGuard',
        description: 'Infladel is a complex of active natural components that includes plant-based antioxidants, and antimicrobial and anti-inflammatory substances. It contributes to boosting the body\'s defences, protecting against bacteria and viruses, and reducing inflammation.',
        image: 'https://front.agenyz.eu/resize/w1413/5f/nw/infladel.lsaf.png',
        features: ['Anti-inflammatory', 'Antimicrobial', 'Immune boost']
    },
    {
        id: 'Octomagnesium-XBi-A',
        name: 'Octomagnesium + XBi-A',
        category: 'Food Supplements',
        description: 'Octomagnesium + XBi-A is a vegan food supplement combining eight distinct forms of magnesium (including citrate, bisglycinate, and liposomal) with Vitamin B6. Supports muscle relaxation, nerve signalling, energy production, and cognitive function.',
        image: 'https://front.agenyz.eu/resize/w1413/2a/7f/octomg_eu_mockup_15_10_2025_v1.1uxly2u6iv4zobzrpu78m585dlm.png',
        features: ['Muscle relaxation', 'Nerve support', 'Magnesium complex']
    },
    {
        id: 'Vitamin-D3-XBi-A',
        name: 'Vitamin D3 + XBi-A',
        category: 'Food Supplements',
        description: 'Vitamin D3 + XBi-A is a food supplement with a vegan source of Vitamin D3 (from reindeer lichen) and XBi-A complex for better absorption. Contributes to the normal function of the immune system, bones, and muscles.',
        image: 'https://front.agenyz.eu/resize/w1413/f9/yh/VitaminD3_1.72cbzz0zfx80c69v1cwvdl.jpg',
        features: ['Immune system', 'Bone health', 'Muscle function']
    },
    {
        id: 'Collagen-Blend',
        name: 'Collagen Blend',
        category: 'Food Supplements',
        description: 'Collagen Blend PRO PEPTIDES + Biotin is a premium complex combining hydrolysed Collagen peptides from five natural sources with Biotin, Vitamin C, Zinc, and Copper. Supports skin firmness, hair, nails, and connective tissues.',
        image: 'https://front.agenyz.eu/resize/w1413/g4/ag/2025_11_11_Collagen_Blend_Biotin_MOCKUP_2000x2000.5vscizg6691gv26az.png',
        features: ['Skin firmness', 'Hair & Nails', 'Connective tissue']
    },
    {
        id: 'UriPurin',
        name: 'UriPurin',
        category: 'Food Supplements',
        description: 'UriPurin is a food supplement that supports uric acid metabolism and joint mobility. Contains devil’s claw root extract, soluble dietary fibre, Boswellia extract and the «UDex» complex to assist in selective excretion of excess uric acid.',
        image: 'https://front.agenyz.eu/resize/w1413/sh/ve/uripurin_eu_mockup_02_09_2025_v1_4_site.u9p7qhae5jevi6ctq.png',
        features: ['Uric acid metabolism', 'Joint mobility', 'Detox']
    }
];

export const categories = ['All', 'Cell Elixir', 'Functional Drinks', 'Food', '3dGuard', 'Food Supplements'];
