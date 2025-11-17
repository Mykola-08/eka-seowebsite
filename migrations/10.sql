
-- Add emotional states table
CREATE TABLE emotional_states (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  level INTEGER NOT NULL, -- 1-10 scale
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add promotions table
CREATE TABLE promotions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  discount_percentage INTEGER NOT NULL,
  code TEXT UNIQUE,
  target_user_id TEXT, -- NULL for global promotions
  expires_at TIMESTAMP NOT NULL,
  is_active BOOLEAN DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add therapist profiles and specializations
CREATE TABLE therapist_profiles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL UNIQUE,
  specializations TEXT, -- JSON array
  bio TEXT,
  experience_years INTEGER,
  languages TEXT, -- JSON array
  certifications TEXT, -- JSON array
  hourly_rate_cents INTEGER,
  is_available BOOLEAN DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add client communications table
CREATE TABLE client_communications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  appointment_id INTEGER NOT NULL,
  sender_id TEXT NOT NULL, -- user_id of sender
  recipient_id TEXT NOT NULL, -- user_id of recipient
  message TEXT NOT NULL,
  message_type TEXT DEFAULT 'note', -- 'note', 'reminder', 'feedback'
  is_read BOOLEAN DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add session reflections table for post-session feedback
CREATE TABLE session_reflections (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  appointment_id INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  feeling_level INTEGER, -- 1-10 scale
  reflection_text TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
