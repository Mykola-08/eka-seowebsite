-- Create content_blocks table
CREATE TABLE IF NOT EXISTS content_blocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE content_blocks ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access" ON content_blocks
  FOR SELECT USING (true);

-- Insert Service Categories
INSERT INTO content_blocks (key, data) VALUES (
  'service_categories',
  '[
    {
      "id": 1,
      "number": "01",
      "name": "Kinesiologia",
      "description": "Troba totes les respostes",
      "image": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      "href": "/services",
      "color": "from-blue-600 to-blue-800"
    },
    {
      "id": 2,
      "number": "02",
      "name": "Lliçons de moviment",
      "description": "Viu sense dolor",
      "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      "href": "/services",
      "color": "from-green-600 to-green-800"
    },
    {
      "id": 3,
      "number": "03",
      "name": "Flors de Bach",
      "description": "Les emocions en ordre",
      "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop",
      "href": "/services",
      "color": "from-purple-600 to-purple-800"
    },
    {
      "id": 4,
      "number": "04",
      "name": "Massatge",
      "description": "Zen per al cos i l''ànima",
      "image": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      "href": "/services",
      "color": "from-yellow-600 to-orange-600"
    },
    {
      "id": 5,
      "number": "05",
      "name": "Nutrició conscient",
      "description": "Som el que mengem",
      "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
      "href": "/services",
      "color": "from-red-600 to-red-800"
    },
    {
      "id": 6,
      "number": "06",
      "name": "Osteobalance",
      "description": "Cos en equilibri",
      "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      "href": "/services",
      "color": "from-indigo-600 to-indigo-800"
    }
  ]'::jsonb
);

-- Insert Pricing Plans
INSERT INTO content_blocks (key, data) VALUES (
  'pricing_plans',
  '[
    {
      "id": "individual",
      "name": "Sessió Individual",
      "price": 65,
      "originalPrice": null,
      "sessions": 1,
      "validityMonths": 1,
      "popular": false,
      "description": "Perfecte per començar el teu viatge de benestar",
      "features": [
        "Una sessió de 60 minuts",
        "Consulta inicial inclosa",
        "Suport per email",
        "Material informatiu personalitzat"
      ],
      "icon": "Heart",
      "buttonText": "Reservar sessió"
    },
    {
      "id": "pack-benestar",
      "name": "Pack Benestar",
      "price": 180,
      "originalPrice": 195,
      "sessions": 3,
      "validityMonths": 2,
      "popular": true,
      "description": "La millor opció per veure resultats reals",
      "features": [
        "3 sessions de 60 minuts",
        "Reserva prioritària",
        "Seguiment personalitzat",
        "Descompte del 8%",
        "Suport telefònic"
      ],
      "icon": "Sparkles",
      "buttonText": "Començar ara"
    },
    {
      "id": "pack-premium",
      "name": "Pack Premium",
      "price": 350,
      "originalPrice": 390,
      "sessions": 6,
      "validityMonths": 4,
      "popular": false,
      "description": "Transformació completa amb resultats duradors",
      "features": [
        "6 sessions de 60 minuts",
        "Terapeuta dedicat",
        "Pla personalitzat",
        "Descompte del 10%",
        "Suport prioritari 24/7",
        "Revisió trimestral"
      ],
      "icon": "Crown",
      "buttonText": "Triar Premium"
    }
  ]'::jsonb
);

-- Insert VIP Features
INSERT INTO content_blocks (key, data) VALUES (
  'vip_features',
  '[
    {
      "id": "vip-gold",
      "name": "VIP Gold",
      "price": 299,
      "period": "mes",
      "description": "La màxima expressió de salut i exclusivitat",
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
);

-- Insert Luxury Features
INSERT INTO content_blocks (key, data) VALUES (
  'luxury_features',
  '[
    {
      "icon": "Diamond",
      "title": "Experiència Diamond",
      "description": "Servei d''elit amb els millors professionals i tecnologia més avançada del sector"
    },
    {
      "icon": "Award",
      "title": "Certificació Internacional",
      "description": "Reconeixement mundial per excel·lència en serveis de salut i benestar premium"
    },
    {
      "icon": "Globe",
      "title": "Xarxa Global Elite",
      "description": "Accés a centres d''elit i especialistes reconeguts internacionalment"
    },
    {
      "icon": "Zap",
      "title": "Tecnologia d''Avantguarda",
      "description": "Equips i tècniques més innovadores per a resultats excepcionals i ràpids"
    }
  ]'::jsonb
);
