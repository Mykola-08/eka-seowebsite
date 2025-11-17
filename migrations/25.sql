
-- Add Stripe columns to services table
ALTER TABLE services ADD COLUMN stripe_product_id TEXT;
ALTER TABLE services ADD COLUMN stripe_price_id TEXT;

-- Update services with Stripe Product IDs from the CSV data
UPDATE services SET 
  stripe_product_id = 'prod_SFz1AAPT4Su1Hy',
  stripe_price_id = 'price_1RsfByGpCi2bO2AT21GD2ehH'
WHERE name = 'Massatge Bàsic';

UPDATE services SET 
  stripe_product_id = 'prod_SoHp4eTHIKpL5D',
  stripe_price_id = 'price_1RsfG9GpCi2bO2AT4qomh8Z8'
WHERE name = 'Massatge Complet';

UPDATE services SET 
  stripe_product_id = 'prod_SoHq4a1F8jY1K3',
  stripe_price_id = 'price_1RsfGbGpCi2bO2ATLys33g4J'
WHERE name = 'Massatge Premium';

UPDATE services SET 
  stripe_product_id = 'prod_SoHrIYeNvSTzwC',
  stripe_price_id = 'price_1RsfHQGpCi2bO2ATiDwhqNpo'
WHERE name = 'Massatge VIP';

UPDATE services SET 
  stripe_product_id = 'prod_SoOVpSUzSi5XVV',
  stripe_price_id = 'price_1RslidGpCi2bO2ATa68cf8GD'
WHERE name = 'Kinesiologia Barcelona';

-- Insert 360° Revision service
INSERT OR IGNORE INTO services (name, description, category, duration_minutes, price_cents, stripe_product_id, stripe_price_id, is_active) 
VALUES (
  'Revisió 360°',
  'Avaluació completa de la teva salut i benestar amb anàlisi integral',
  'Avaluació',
  90,
  15000,
  'prod_SonVixpIkqR3vd',
  'price_1Rt9ugGpCi2bO2ATnF32KM2Q',
  1
);
