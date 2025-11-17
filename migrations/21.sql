
-- Desactivar serveis existents
UPDATE session_types SET is_active = 0;

-- Insertar només els 3 serveis nous
INSERT OR REPLACE INTO session_types (id, name, description, base_price_cents, features, category, is_active, created_at, updated_at) VALUES
(1, 'Revisió 360°', 'Avaluació completa i personalitzada del teu estat físic i emocional. No cal que triïs, ens ocupem de tot.', 12000, '["Avaluació integral", "Pla personalitzat", "Seguiment especialitzat", "Enfocament holístic"]', 'Premium', 1, datetime('now'), datetime('now')),
(2, 'Kinesiologia', 'Equilibri global del cos mitjançant tècniques de kinesiologia aplicada per detectar desequilibris.', 7000, '["Equilibri energètic", "Reducció estrès", "Millora postura", "Test muscular"]', 'Equilibri', 1, datetime('now'), datetime('now')),
(3, 'Massatge Terapèutic', 'Massatge profund per alleujar tensions musculars i millorar la circulació sanguínia.', 6000, '["Alleujar dolor", "Millorar circulació", "Reduir tensions", "Relaxació profunda"]', 'Massatge', 1, datetime('now'), datetime('now'));

-- Crear subcategories per Massatge
CREATE TABLE IF NOT EXISTS service_subcategories_temp (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  parent_service_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  price_modifier_cents INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO service_subcategories_temp (parent_service_id, name, description, price_modifier_cents) VALUES
(3, 'Massatge Relaxant', 'Massatge suau per alliberar tensions i relaxar cos i ment', 0),
(3, 'Massatge Descontracturant', 'Massatge intens per eliminar contractures i tensions profundes', 500),
(3, 'Massatge Esportiu', 'Massatge especialitzat per esportistes, abans o després de la activitat física', 800);
