
-- Remove feature toggles
DELETE FROM features_toggle WHERE key IN (
'dashboard_stats_enabled', 'achievements_enabled', 'assessment_enabled', 'promotions_enabled',
'quick_actions_enabled', 'notifications_enabled', 'chat_enabled', 'search_enabled',
'booking_enabled', 'ai_chat_enabled', 'celebrations_enabled', 'premium_unlock_enabled',
'offline_indicator_enabled', 'footer_enabled', 'mobile_menu_enabled', 'vip_page_enabled',
'revisio_360_enabled', 'admin_panel_enabled', 'therapist_dashboard_enabled', 'reviews_enabled',
'profile_management_enabled'
);
