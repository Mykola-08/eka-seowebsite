
-- Remove 360° Revision service and Stripe columns
DELETE FROM services WHERE name = 'Revisió 360°';
ALTER TABLE services DROP COLUMN stripe_product_id;
ALTER TABLE services DROP COLUMN stripe_price_id;
