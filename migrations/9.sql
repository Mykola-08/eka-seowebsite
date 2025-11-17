
-- Add VIP status tracking to user profiles
ALTER TABLE user_profiles ADD COLUMN is_vip BOOLEAN DEFAULT 0;
ALTER TABLE user_profiles ADD COLUMN vip_since DATE;
ALTER TABLE user_profiles ADD COLUMN vip_expires_at DATE;

-- Create pricing rules table for admin configuration
CREATE TABLE pricing_rules (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  rule_name TEXT NOT NULL,
  rule_type TEXT NOT NULL, -- 'weekend', 'vip', 'back_to_back', 'high_demand', 'last_slot'
  modifier_type TEXT NOT NULL, -- 'percentage' or 'fixed'
  modifier_value REAL NOT NULL, -- percentage (0.1 = 10%) or fixed amount in cents
  is_active BOOLEAN DEFAULT 1,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default pricing rules
INSERT INTO pricing_rules (rule_name, rule_type, modifier_type, modifier_value, description) VALUES
('Weekend Saturday', 'weekend_saturday', 'percentage', 0.1, 'Saturday 10% surcharge'),
('Weekend Sunday', 'weekend_sunday', 'percentage', 0.2, 'Sunday 20% surcharge'),
('VIP Discount', 'vip', 'percentage', -0.05, 'VIP 5% discount'),
('Back-to-back Discount', 'back_to_back', 'percentage', -0.1, 'Consecutive sessions 10% discount'),
('High Demand Surcharge', 'high_demand', 'percentage', 0.15, 'High demand 15% surcharge'),
('Last Slot Surcharge', 'last_slot', 'percentage', 0.1, 'Last available slot 10% surcharge');
