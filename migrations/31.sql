-- Update VIP Features with full list
UPDATE content_blocks
SET data = '[
  {
    "name": "Bronze Elite",
    "price": "390",
    "sessions": 2,
    "description": "Accés exclusiu al món VIP",
    "features": [
      "2 sessions mensuals (1,5h)",
      "Control de salut integral",
      "Desplaçaments inclosos",
      "Seguiment personalitzat",
      "Accés prioritari",
      "Material premium"
    ],
    "popular": false,
    "tier": "bronze"
  },
  {
    "name": "Silver Elite",
    "price": "690",
    "sessions": 3,
    "description": "L''equilibri perfecte per a professionals",
    "features": [
      "3 sessions mensuals (1,5h)",
      "Control de salut avançat",
      "Desplaçaments premium",
      "Família 50% descompte",
      "Sessions transferibles",
      "Consultoria nutricional",
      "Línia directa VIP"
    ],
    "popular": true,
    "tier": "silver"
  },
  {
    "name": "Gold Elite",
    "price": "990",
    "sessions": 4,
    "description": "L''experiència VIP definitiva",
    "features": [
      "4 sessions mensuals (1,5h)",
      "Control de salut premium",
      "Desplaçaments 24/7",
      "Família completament gratuïta",
      "Sessions il·limitades transferibles",
      "Consultoria integral",
      "Concierge de salut personal",
      "Accés exclusiu a esdeveniments"
    ],
    "popular": false,
    "tier": "gold"
  }
]'::jsonb
WHERE key = 'vip_features';
