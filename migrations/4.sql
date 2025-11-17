
-- Insert default services data to populate the system
INSERT INTO services (name, description, category, duration_minutes, price_cents, is_vip_only) VALUES
('Relaxation Massage', 'Deep tissue massage designed to release tension, reduce stress, and promote overall wellness through therapeutic touch and pressure techniques.', 'massatge', 60, 8900, 0),
('Therapeutic Massage', 'Targeted treatment focusing on specific muscle issues, pain relief, and rehabilitation through specialized massage techniques.', 'massatge', 75, 11500, 0),
('Kinesiology Session', 'Holistic approach combining muscle testing, energy balance, and emotional release techniques for comprehensive wellness.', 'kinesiologia', 90, 13500, 0),
('Osteobalance Therapy', 'Gentle structural alignment therapy that restores balance to the musculoskeletal system through precise manual techniques.', 'osteobalance', 80, 12500, 0),
('Feldenkrais Method', 'Gentle movement education that helps improve posture, flexibility, and awareness through mindful movement patterns.', 'feldenkrais', 60, 10500, 0),
('Corporate Wellness', 'On-site wellness programs designed to improve employee health, reduce stress, and boost workplace productivity.', 'corporatiu', 120, 20000, 0),
('Family Wellness', 'Specialized treatments adapted for families and children, focusing on gentle techniques suitable for all ages.', 'familiar', 60, 9500, 0),
('VIP Home Visit', 'Premium home visit service with personalized treatment in the comfort of your own space.', 'massatge', 90, 18000, 1);

-- Insert default therapist availability (Monday to Friday, 9 AM to 6 PM)
INSERT INTO therapist_availability (therapist_id, day_of_week, start_time, end_time) VALUES
('default-therapist', 1, '09:00', '18:00'),
('default-therapist', 2, '09:00', '18:00'),
('default-therapist', 3, '09:00', '18:00'),
('default-therapist', 4, '09:00', '18:00'),
('default-therapist', 5, '09:00', '18:00');
