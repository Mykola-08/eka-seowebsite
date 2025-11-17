
-- Create table for new service structure
CREATE TABLE new_services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  duration_minutes INTEGER NOT NULL,
  price_cents INTEGER NOT NULL,
  stripe_product_id TEXT,
  stripe_price_id TEXT,
  is_vip BOOLEAN DEFAULT 0,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert the 5 new services according to the new structure
INSERT INTO new_services (name, description, duration_minutes, price_cents, display_order, is_active) VALUES
('Massatge Bàsic', '1 h de massatge adaptat a les teves necessitats, ideal per alleujar tensions i recuperar energia.', 60, 6500, 1, 1),
('Massatge Complet', '1,5 h de tractament més profund, combinant tècniques avançades per a un efecte durador.', 90, 9500, 2, 1),
('Massatge Premium', '2 h de sessió integral amb tècniques de massatge i osteopatia per a una recuperació completa.', 120, 12500, 3, 1),
('Kinesiologia Barcelona', 'Sessió especialitzada per restaurar l''equilibri del cos i la ment.', 60, 7500, 4, 1),
('VIP', 'Plans exclusius de control de salut amb sessions personalitzades, temps flexible i beneficis premium.', 90, 39000, 5, 1);

-- Update the last service to mark it as VIP
UPDATE new_services SET is_vip = 1 WHERE name = 'VIP';
