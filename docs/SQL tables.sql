# Primary users table.
CREATE TABLE user(
    z_number CHAR(9) NOT NULL UNIQUE,
    username VARCHAR(32) NOT NULL UNIQUE,
    password_hash CHAR(40) NOT NULL,
    PRIMARY KEY (z_number)
);

# Sample entry
INSERT INTO user(z_number, username, password_hash) VALUES ('Z12345678', 'test', 'test123');
INSERT INTO user(z_number, username, password_hash) VALUES ('Z12345679', 'test2', 'test123');
INSERT INTO user(z_number, username, password_hash) VALUES ('Z12345680', 'test3', 'test123');

# User to store user session cookie for authentication.
CREATE TABLE cookie(
    z_number CHAR(9) NOT NULL UNIQUE,
    hash CHAR(40) NOT NULL,
    PRIMARY KEY (z_number),
    FOREIGN KEY (z_number) REFERENCES user(z_number)
);

# Primary post table.
CREATE TABLE post( 
    id INT AUTO_INCREMENT NOT NULL,
    author CHAR(9) NOT NULL,
    image VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(64) NOT NULL,
    content TEXT NOT NULL,
    votes INT UNSIGNED DEFAULT 0,
    status ENUM('pending', 'in-progress', 'solved') NOT NULL DEFAULT 'pending',
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    solved DATETIME,
    inProgress DATETIME,
    FOREIGN KEY (author) REFERENCES user(z_number),
    PRIMARY KEY (id)
);

# Sample entry
INSERT INTO post(author, image, title, content)
    VALUES('Z12345678', 'test.png', 'First test title', 'First test content!');
    INSERT INTO post(author, image, title, content)
    VALUES('Z12345678', 'test.png', 'Second test title', 'Second test content!');
    INSERT INTO post(author, image, title, content)
    VALUES('Z12345678', 'test.png', 'Third test title', 'Third test content!');