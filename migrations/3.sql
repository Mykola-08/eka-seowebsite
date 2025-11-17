
-- Create user_profiles table
CREATE TABLE user_profiles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL UNIQUE,
  role TEXT DEFAULT 'customer', -- 'customer', 'therapist', 'admin'
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  date_of_birth DATE,
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  medical_conditions TEXT,
  allergies TEXT,
  preferences TEXT,
  notes TEXT,
  is_active BOOLEAN DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create services table  
CREATE TABLE services (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT,
  duration_minutes INTEGER DEFAULT 60,
  price_cents INTEGER NOT NULL,
  is_vip_only BOOLEAN DEFAULT 0,
  is_active BOOLEAN DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create appointments table
CREATE TABLE appointments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_id TEXT NOT NULL,
  therapist_id TEXT NOT NULL,
  service_id INTEGER NOT NULL,
  appointment_date DATE NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  status TEXT DEFAULT 'pending', -- 'pending', 'confirmed', 'cancelled', 'completed', 'in_progress', 'no_show'
  location_type TEXT DEFAULT 'clinic', -- 'clinic', 'home_visit', 'online'
  location_address TEXT,
  price_cents INTEGER NOT NULL,
  is_vip BOOLEAN DEFAULT 0,
  customer_notes TEXT,
  therapist_notes TEXT,
  internal_notes TEXT,
  cancellation_reason TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create reviews table
CREATE TABLE reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  appointment_id INTEGER NOT NULL,
  customer_id TEXT NOT NULL,
  therapist_id TEXT NOT NULL,
  rating INTEGER NOT NULL, -- 1-5
  title TEXT,
  comment TEXT,
  is_anonymous BOOLEAN DEFAULT 0,
  is_approved BOOLEAN DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
