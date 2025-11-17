
-- Reactivar tots els serveis
UPDATE session_types SET is_active = 1;

-- Eliminar subcategories
DROP TABLE IF EXISTS service_subcategories_temp;
