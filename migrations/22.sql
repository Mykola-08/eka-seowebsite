
-- Insert default feature toggles if they don't exist
INSERT OR IGNORE INTO features_toggle (key, name, enabled, description) VALUES
('dashboard_stats_enabled', 'Dashboard Stats', 1, 'Enable dashboard statistics display'),
('achievements_enabled', 'Achievements System', 1, 'Enable user achievements and gamification'),
('assessment_enabled', 'Assessment System', 1, 'Enable user assessment and recommendations'),
('promotions_enabled', 'Promotions System', 1, 'Enable promotions and discounts display'),
('quick_actions_enabled', 'Quick Actions', 1, 'Enable quick action buttons'),
('chat_enabled', 'Chat System', 1, 'Enable chat with therapists'),
('ai_chat_enabled', 'AI Chat', 1, 'Enable AI assistant chat'),
('notifications_enabled', 'Notifications', 1, 'Enable notification center'),
('celebrations_enabled', 'Celebrations', 1, 'Enable celebration system'),
('premium_unlock_enabled', 'Premium Unlock', 1, 'Enable premium unlock system'),
('offline_indicator_enabled', 'Offline Indicator', 1, 'Show offline status indicator'),
('footer_enabled', 'Footer', 1, 'Show website footer'),
('mobile_menu_enabled', 'Mobile Menu', 1, 'Enable mobile navigation menu'),
('vip_page_enabled', 'VIP Page', 1, 'Enable VIP page access'),
('revisio_360_enabled', 'Revisió 360°', 1, 'Enable Revisió 360° service'),
('admin_panel_enabled', 'Admin Panel', 1, 'Enable admin panel access'),
('therapist_dashboard_enabled', 'Therapist Dashboard', 1, 'Enable therapist dashboard'),
('reviews_enabled', 'Reviews System', 1, 'Enable reviews and ratings'),
('profile_management_enabled', 'Profile Management', 1, 'Enable user profile management'),
('booking_enabled', 'Booking System', 1, 'Enable appointment booking'),
('search_enabled', 'Smart Search', 1, 'Enable smart search functionality');
