
-- Create service categories table
CREATE TABLE service_categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT, -- Icon name for UI
  color_scheme TEXT, -- Color gradient for UI
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create service subcategories table
CREATE TABLE service_subcategories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  duration_minutes INTEGER DEFAULT 60,
  base_price_cents INTEGER NOT NULL,
  is_vip_only BOOLEAN DEFAULT 0,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert main service categories
INSERT INTO service_categories (name, description, icon, color_scheme, display_order) VALUES
('Massatge Terapèutic', 'Tractaments especialitzats per alleujar tensions i millorar la circulació', 'Heart', 'from-pink-500 to-rose-600', 1),
('Kinesiologia', 'Equilibri energètic i emocional a través del moviment i la consciència corporal', 'Brain', 'from-purple-500 to-indigo-600', 2),
('Osteobalance', 'Correcció postural i tractament integral del sistema musculoesquelètic', 'Zap', 'from-blue-500 to-cyan-600', 3),
('Feldenkrais', 'Mètode d''educació somàtica per millorar el moviment i la consciència corporal', 'Target', 'from-green-500 to-emerald-600', 4),
('Serveis Corporatius', 'Programes de benestar dissenyats per empreses i equips de treball', 'Briefcase', 'from-orange-500 to-amber-600', 5),
('Teràpia Familiar', 'Sessions especialitzades per a famílies amb necessitats especials', 'Users', 'from-teal-500 to-cyan-600', 6);

-- Insert subcategories for Massatge Terapèutic
INSERT INTO service_subcategories (category_id, name, description, duration_minutes, base_price_cents, display_order) VALUES
(1, 'Massatge Relaxant', 'Massatge suau per alleujar l''estrès i promoure la relaxació profunda', 60, 6500, 1),
(1, 'Massatge Terapèutic', 'Tractament específic per a problemes musculars i articulars', 75, 7500, 2),
(1, 'Massatge Descontracturant', 'Tècniques intenses per alliberar tensions musculars profundes', 60, 7000, 3),
(1, 'Massatge Cervical i Cranial', 'Especialitzat en tensions del coll, espatlles i cap', 45, 5500, 4),
(1, 'Massatge Esportiu', 'Tractament per a esportistes i persones molt actives', 60, 7000, 5);

-- Insert subcategories for Kinesiologia
INSERT INTO service_subcategories (category_id, name, description, duration_minutes, base_price_cents, display_order) VALUES
(2, 'Kinesiologia Emocional', 'Equilibri del sistema nerviós i gestió de l''estrès emocional', 60, 7000, 1),
(2, 'Kinesiologia Estructural', 'Correcció de desequilibris posturals i musculars', 75, 8000, 2),
(2, 'Kinesiologia Nutricional', 'Detecció d''intoleràncies i desequilibris nutricionals', 60, 7500, 3),
(2, 'Test Muscular Integral', 'Avaluació completa del sistema muscular i energètic', 90, 9000, 4);

-- Insert subcategories for Osteobalance
INSERT INTO service_subcategories (category_id, name, description, duration_minutes, base_price_cents, display_order) VALUES
(3, 'Correcció Postural', 'Tractament integral per millorar l''alineació corporal', 75, 8000, 1),
(3, 'Mobilització Articular', 'Tècniques per restaurar la mobilitat articular', 60, 7500, 2),
(3, 'Alliberament Miofascial', 'Tractament del teixit connectiu i fàscies', 60, 7000, 3),
(3, 'Equilibri Cranio-Sacral', 'Tècniques suaus per al sistema nerviós central', 75, 8500, 4);

-- Insert subcategories for Feldenkrais
INSERT INTO service_subcategories (category_id, name, description, duration_minutes, base_price_cents, display_order) VALUES
(4, 'Consciència a través del Moviment', 'Sessions grupals d''educació somàtica', 60, 4500, 1),
(4, 'Integració Funcional', 'Sessions individuals personalitzades', 75, 8500, 2),
(4, 'Feldenkrais per Esportistes', 'Millora del rendiment a través de la consciència', 60, 7500, 3),
(4, 'Feldenkrais Terapèutic', 'Aplicació terapèutica per a recuperació i rehabilitació', 75, 8000, 4);

-- Insert subcategories for Serveis Corporatius
INSERT INTO service_subcategories (category_id, name, description, duration_minutes, base_price_cents, display_order) VALUES
(5, 'Massatge Corporatiu Express', 'Sessions ràpides a l''oficina (per persona)', 30, 4000, 1),
(5, 'Taller de Gestió d''Estrès', 'Formació grupal per a equips (preu per grup)', 120, 25000, 2),
(5, 'Programa Mensual Corporatiu', 'Servei regular per empreses (preu per mes)', 0, 150000, 3),
(5, 'Avaluació Ergonòmica', 'Anàlisi del lloc de treball i recomanacions', 90, 12000, 4);

-- Insert subcategories for Teràpia Familiar
INSERT INTO service_subcategories (category_id, name, description, duration_minutes, base_price_cents, display_order) VALUES
(6, 'Sessió Familiar Completa', 'Tractament per a tots els membres de la família', 90, 12000, 1),
(6, 'Teràpia Infantil Especialitzada', 'Sessions adaptades per a nens i adolescents', 60, 6500, 2),
(6, 'Suport a Cuidadors', 'Sessions per a persones que cuiden familiars', 75, 7000, 3),
(6, 'Programa Familiar Mensual', 'Seguiment regular per a famílies', 0, 35000, 4);

-- Create payment plans table
CREATE TABLE payment_plans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  sessions_included INTEGER NOT NULL,
  price_cents INTEGER NOT NULL,
  original_price_cents INTEGER,
  discount_percentage INTEGER DEFAULT 0,
  validity_months INTEGER NOT NULL,
  description TEXT,
  features TEXT, -- JSON array of features
  is_popular BOOLEAN DEFAULT 0,
  is_vip BOOLEAN DEFAULT 0,
  stripe_price_id TEXT, -- Stripe price ID for subscriptions
  is_active BOOLEAN DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert payment plans
INSERT INTO payment_plans (name, sessions_included, price_cents, original_price_cents, discount_percentage, validity_months, description, features, is_popular, is_vip) VALUES
('Sessió Individual', 1, 6500, NULL, 0, 1, 'Perfecte per començar el teu viatge de benestar', '["Una sessió de 60 minuts","Consulta inicial inclosa","Suport per email","Material informatiu personalitzat"]', 0, 0),
('Pack Benestar', 3, 18000, 19500, 8, 2, 'La millor opció per veure resultats reals', '["3 sessions de 60 minuts","Reserva prioritària","Seguiment personalitzat","Descompte del 8%","Suport telefònic"]', 1, 0),
('Pack Premium', 6, 35000, 39000, 10, 4, 'Transformació completa amb resultats duradors', '["6 sessions de 60 minuts","Terapeuta dedicat","Pla personalitzat","Descompte del 10%","Suport prioritari 24/7","Revisió trimestral"]', 0, 0),
('VIP Essencial', 1, 18000, 20000, 10, 1, 'Sessions individuals premium amb beneficis exclusius', '["Sessions de 90 minuts","Visites a domicili incloses","Horaris completament flexibles","Equipament premium exclusiu","Seguiment personalitzat del progrés"]', 0, 1),
('VIP Premium', 4, 65000, 80000, 19, 1, 'Programa complet de benestar amb suport dedicat', '["4 sessions mensuals de 90 minuts","Suport WhatsApp 24/7","Pla de salut personalitzat","Sessions d''emergència incloses","Revisió trimestral de salut"]', 1, 1);
