
-- Insert default feature toggles if they don't exist
INSERT OR IGNORE INTO features_toggle (key, name, enabled, description) VALUES
('dashboard_stats_enabled', 'Dashboard Stats', 1, 'Show statistics in dashboard'),
('achievements_enabled', 'Achievements System', 1, 'Enable achievement system'),
('assessment_enabled', 'Assessment System', 1, 'Enable user assessments'),
('promotions_enabled', 'Promotions', 1, 'Enable promotions system'),
('quick_actions_enabled', 'Quick Actions', 1, 'Enable quick action buttons'),
('notifications_enabled', 'Notifications', 1, 'Enable notification system'),
('chat_enabled', 'Chat System', 0, 'Enable chat functionality'),
('search_enabled', 'Smart Search', 1, 'Enable search functionality'),
('booking_enabled', 'Booking System', 1, 'Enable booking functionality'),
('ai_chat_enabled', 'AI Chat', 1, 'Enable AI chat assistant'),
('celebrations_enabled', 'Celebrations', 1, 'Enable celebration system'),
('premium_unlock_enabled', 'Premium Unlocks', 1, 'Enable premium unlock system'),
('offline_indicator_enabled', 'Offline Indicator', 1, 'Show offline status indicator'),
('footer_enabled', 'Footer', 1, 'Show footer'),
('mobile_menu_enabled', 'Mobile Menu', 1, 'Enable mobile menu'),
('vip_page_enabled', 'VIP Page', 1, 'Enable VIP page'),
('revisio_360_enabled', 'Revisio 360', 1, 'Enable Revisio 360 service'),
('admin_panel_enabled', 'Admin Panel', 1, 'Enable admin panel'),
('therapist_dashboard_enabled', 'Therapist Dashboard', 1, 'Enable therapist dashboard'),
('reviews_enabled', 'Reviews', 1, 'Enable reviews system'),
('profile_management_enabled', 'Profile Management', 1, 'Enable profile management');
