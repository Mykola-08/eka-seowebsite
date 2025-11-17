
-- Remove VIP columns from user profiles
ALTER TABLE user_profiles DROP COLUMN is_vip;
ALTER TABLE user_profiles DROP COLUMN vip_since;
ALTER TABLE user_profiles DROP COLUMN vip_expires_at;

-- Drop pricing rules table
DROP TABLE pricing_rules;
