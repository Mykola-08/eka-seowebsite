
-- Add sample therapist profile
INSERT OR IGNORE INTO user_profiles (
  user_id, role, first_name, last_name, is_active, created_at, updated_at
) VALUES (
  'default-therapist', 'therapist', 'Maria', 'Therapist', 1, datetime('now'), datetime('now')
);

-- Add sample admin profile  
INSERT OR IGNORE INTO user_profiles (
  user_id, role, first_name, last_name, is_active, created_at, updated_at
) VALUES (
  'admin-user', 'admin', 'Admin', 'User', 1, datetime('now'), datetime('now')
);

-- Add sample availability for therapist
INSERT OR IGNORE INTO therapist_availability (
  therapist_id, day_of_week, start_time, end_time, is_available, created_at, updated_at
) VALUES 
  ('default-therapist', 1, '09:00', '18:00', 1, datetime('now'), datetime('now')),
  ('default-therapist', 2, '09:00', '18:00', 1, datetime('now'), datetime('now')),
  ('default-therapist', 3, '09:00', '18:00', 1, datetime('now'), datetime('now')),
  ('default-therapist', 4, '09:00', '18:00', 1, datetime('now'), datetime('now')),
  ('default-therapist', 5, '09:00', '18:00', 1, datetime('now'), datetime('now')),
  ('default-therapist', 6, '10:00', '16:00', 1, datetime('now'), datetime('now')),
  ('default-therapist', 0, '10:00', '16:00', 0, datetime('now'), datetime('now'));
