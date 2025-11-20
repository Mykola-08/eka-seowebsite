ALTER TABLE discounts ADD COLUMN description TEXT;

UPDATE discounts SET description = 'Descompte especial per a amics de Mykola' WHERE code = 'MYKOLA20';
UPDATE discounts SET description = 'Descompte per a coneguts de Mykola' WHERE code = 'CONOCIDO10';
