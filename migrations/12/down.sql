
DELETE FROM user_profiles WHERE user_id IN ('default-therapist', 'admin-user');
DELETE FROM therapist_availability WHERE therapist_id = 'default-therapist';
