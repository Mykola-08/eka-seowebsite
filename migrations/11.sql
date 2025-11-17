
-- Create admin enhanced statistics tables
CREATE TABLE admin_stats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  total_revenue INTEGER DEFAULT 0,
  total_appointments INTEGER DEFAULT 0,
  total_customers INTEGER DEFAULT 0,
  pending_appointments INTEGER DEFAULT 0,
  monthly_growth REAL DEFAULT 0,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial admin stats
INSERT INTO admin_stats (total_revenue, total_appointments, total_customers, pending_appointments, monthly_growth)
VALUES (45000, 128, 47, 8, 12.5);

-- Create revenue by month table for charts
CREATE TABLE revenue_by_month (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  month TEXT NOT NULL,
  revenue INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample revenue data
INSERT INTO revenue_by_month (month, revenue) VALUES
('Gen', 12000),
('Feb', 15000),
('Mar', 18000),
('Abr', 22000),
('Mai', 25000),
('Jun', 28000),
('Jul', 32000),
('Ago', 35000),
('Set', 38000),
('Oct', 42000),
('Nov', 45000),
('Des', 48000);

-- Create top services table
CREATE TABLE top_services_stats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  count INTEGER NOT NULL,
  revenue INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample top services data
INSERT INTO top_services_stats (name, count, revenue) VALUES
('Massatge Terapèutic', 45, 27000),
('Kinesiologia', 32, 22400),
('Sessió Combinada', 28, 22400),
('Mètode Feldenkrais', 23, 14950);

-- Create customers by location table
CREATE TABLE customers_by_location (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  location TEXT NOT NULL,
  count INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample location data
INSERT INTO customers_by_location (location, count) VALUES
('Rubí', 28),
('Sant Cugat', 19);
