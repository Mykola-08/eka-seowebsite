
-- Remove sample data
DELETE FROM session_types WHERE name IN ('Massatge Terapèutic', 'Kinesiologia', 'Mètode Feldenkrais', 'Sessió Combinada');
DELETE FROM user_profiles WHERE user_id IN ('test-user-1', 'test-admin-1', 'test-therapist-1');
