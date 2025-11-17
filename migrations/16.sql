
CREATE TABLE features_toggle (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  key TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  enabled BOOLEAN DEFAULT 1,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO features_toggle (key, name, enabled, description) VALUES
('booking_enabled', 'Sistema de reserves', 1, 'Activa/desactiva el sistema de reserves'),
('chat_enabled', 'Xat global', 1, 'Mostra/amaga el xat amb terapeutes'),
('search_enabled', 'Cerca a la web', 0, 'Cerca d''articles, serveis, etc.'),
('vip_mode', 'Mode VIP actiu', 1, 'Activa funcions exclusives VIP'),
('animations_ui', 'Animacions visuals', 1, 'Activar/desactivar animacions'),
('feedback_popup', 'Popup de feedback', 0, 'Mostrar popup de felicitació');
