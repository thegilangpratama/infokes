-- seed.sql
CREATE TABLE folders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    parent_id INT REFERENCES folders(id) ON DELETE CASCADE
);

CREATE TABLE files (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    folder_id INT REFERENCES folders(id) ON DELETE CASCADE
);

-- Insert sample folder data
INSERT INTO folders (name, parent_id) VALUES
  ('Root Folder', NULL),
  ('Subfolder 1', 1),
  ('Subfolder 2', 1),
  ('Subfolder 1.1', 2),
  ('Subfolder 1.2', 2),
  ('Subfolder 2.1', 3),
  ('Subfolder 2.2', 3);

-- Insert sample file data
INSERT INTO files (name, folder_id) VALUES
  ('File 1', 1),
  ('File 2', 2),
  ('File 3', 3),
  ('File 4', 4),
  ('File 5', 5);