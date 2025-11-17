
-- Add sample data for testing
INSERT OR IGNORE INTO session_types (name, description, base_price_cents, category, is_active) VALUES
('Massatge Terapèutic', 'Massatge personalitzat per alleujar tensions musculars i millorar el benestar', 6000, 'massatges', 1),
('Kinesiologia', 'Teràpia holística que treballa amb l''energia del cos per restaurar l''equilibri', 7000, 'energia', 1),
('Mètode Feldenkrais', 'Aprenentatge somàtic per millorar la consciència corporal i el moviment', 6500, 'moviment', 1),
('Sessió Combinada', 'Combinació de diferents tècniques segons les necessitats individuals', 8000, 'combinada', 1);

-- Add sample user profile for testing
INSERT OR IGNORE INTO user_profiles (user_id, role, first_name, last_name, is_active, is_admin, is_therapist) VALUES
('test-user-1', 'customer', 'Test', 'User', 1, 0, 0),
('test-admin-1', 'admin', 'Admin', 'User', 1, 1, 0),
('test-therapist-1', 'therapist', 'Therapist', 'User', 1, 0, 1);
