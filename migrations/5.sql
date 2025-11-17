
CREATE TABLE user_assessments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  tension_areas TEXT, -- JSON array of selected areas
  goals TEXT, -- JSON array of selected goals
  stress_level INTEGER, -- 1-10
  energy_level INTEGER, -- 1-10
  previous_experience BOOLEAN,
  previous_experience_details TEXT,
  improvement_goals TEXT, -- Open text answer
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_recommendations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  session_type_id INTEGER NOT NULL,
  reason TEXT, -- Why this is recommended
  priority_score INTEGER DEFAULT 0, -- Higher = more recommended
  is_active BOOLEAN DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
