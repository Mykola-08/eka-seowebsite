
-- Create therapist_availability table
CREATE TABLE therapist_availability (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  therapist_id TEXT NOT NULL,
  day_of_week INTEGER NOT NULL, -- 0-6 (Sunday to Saturday)
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  is_available BOOLEAN DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create time_slots table
CREATE TABLE time_slots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  therapist_id TEXT NOT NULL,
  date TEXT NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  is_available BOOLEAN DEFAULT 1,
  is_blocked BOOLEAN DEFAULT 0,
  block_reason TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create notifications table
CREATE TABLE notifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  type TEXT NOT NULL, -- 'reminder', 'info', 'alert'
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT 0,
  related_appointment_id INTEGER,
  scheduled_for TIMESTAMP,
  sent_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
