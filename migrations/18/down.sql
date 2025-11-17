
DELETE FROM features_toggle WHERE key IN (
'ai_chat_enabled', 'notifications_enabled', 'achievements_enabled', 'celebrations_enabled',
'premium_unlock_enabled', 'offline_indicator_enabled', 'reviews_enabled', 'assessment_enabled',
'dynamic_pricing_enabled', 'admin_panel_enabled', 'therapist_dashboard_enabled', 'profile_management_enabled',
'dashboard_stats_enabled', 'payment_plans_enabled', 'promotions_enabled', 'session_reflections_enabled',
'pricing_calendar_enabled', 'service_categories_enabled', 'revisio_360_enabled', 'vip_page_enabled',
'hero_section_enabled', 'service_overview_enabled', 'pricing_section_enabled', 'success_stories_enabled',
'quick_actions_enabled', 'footer_enabled', 'mobile_menu_enabled'
);
