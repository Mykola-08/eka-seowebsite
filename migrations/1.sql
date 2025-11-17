
CREATE TABLE session_types (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  base_price_cents INTEGER NOT NULL,
  features TEXT, -- JSON string for features list
  category TEXT,
  is_active BOOLEAN DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some default session types
INSERT INTO session_types (name, description, base_price_cents, features, category, is_active) VALUES
('Kinesiologia', 'Enfocament holístic que combina proves musculars, equilibri energètic i tècniques d''alliberament emocional per al benestar integral.', 13500, '["Durada 90 min", "Proves musculars", "Equilibri energètic", "Alliberament emocional", "Orientació nutricional"]', 'kinesiologia', 1),
('Massatge Esportiu', 'Massatge de teixit profund dissenyat per alliberar tensions, reduir l''estrès i promoure el benestar general mitjançant tècniques de contacte terapèutic.', 8900, '["Durada 60 min", "Massatge de teixit profund", "Alliberament de tensions", "Millora de la circulació", "Nivells de pressió personalitzats"]', 'massatge', 1),
('Feldenkrais', 'Mètode suau que millora la consciència corporal, el moviment i la postura a través de moviments dirigits i exploració sensorial.', 11500, '["Durada 75 min", "Consciència corporal", "Millora del moviment", "Correcció postural", "Tècniques suaus"]', 'feldenkrais', 1),
('Osteobalance', 'Teràpia d''alineació estructural suau que restaura l''equilibri al sistema musculoesquelètic mitjançant tècniques manuals precises.', 12500, '["Durada 80 min", "Alineació estructural", "Tècniques manuals suaus", "Restauració de l''equilibri", "Millora de la mobilitat articular"]', 'osteobalance', 1);
