CREATE TABLE rsvp (
    id SERIAL PRIMARY KEY,
    email  VARCHAR(100) NOT NULL,
    name VARCHAR(40) NOT NULL,
    message VARCHAR(150),
    song VARCHAR(25)
);