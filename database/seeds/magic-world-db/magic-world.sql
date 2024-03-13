-- create wizards table
CREATE TABLE wizards(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name character varying(50),
  power character varying(50)
);

-- create elves table
CREATE TABLE elves(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name character varying(50),
  speed real
);

-- create hobbits table
CREATE TABLE hobbits(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name character varying(50),
  personality character varying(50)
);

-- add wizard data
INSERT INTO
  wizards (name, power)
VALUES
  ('Gandalf', 'magic'),
  ('Saruman', 'magic'),
  ('Merlin', 'magic'),
  ('Harry Potter', 'magic');

-- add elf data
INSERT INTO
  elves (name, speed)
VALUES
  ('Legolas', 10),
  ('Elrond', 5),
  ('Thranduil', 7),
  ('Tauriel', 8);

-- add hobbit data
INSERT INTO
  hobbits (name, personality)
VALUES
  ('Frodo', 'brave'),
  ('Samwise', 'loyal'),
  ('Pippin', 'funny'),
  ('Merry', 'adventurous');

-- relationship table
CREATE TABLE allies(
  wizard character varying(50),
  elf character varying(50)
);

-- add relationship data
INSERT INTO
  allies (wizard, elf)
VALUES
  ('Gandalf', 'Legolas'),
  ('Gandalf', 'Elrond'),
  ('Saruman', 'Thranduil'),
  ('Saruman', 'Tauriel'),
  ('Merlin', 'Legolas'),
  ('Merlin', 'Elrond'),
  ('Harry Potter', 'Thranduil'),
  ('Harry Potter', 'Tauriel'),
  ('Saruman', 'Elrond'),
  ('Merlin', 'Thranduil'),
  ('Harry Potter', 'Tauriel');

-- giardians
CREATE TABLE guardians(
  elf character varying(50),
  hobbit character varying(50)
);

-- add guardians data
INSERT INTO
  guardians (elf, hobbit)
VALUES
  ('Legolas', 'Frodo'),
  ('Elrond', 'Samwise'),
  ('Thranduil', 'Pippin'),
  ('Tauriel', 'Merry');