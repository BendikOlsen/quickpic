function createUser() { 
    return `CREATE TABLE user (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8; `
};

function createPhoto() { 
    return `CREATE TABLE photo (
        id INT AUTO_INCREMENT PRIMARY KEY,
        image_url VARCHAR(255) NOT NULL,
        user_id INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        FOREIGN KEY(user_id) REFERENCES user(id)
    );`
};
        
function createComment() {
    return `CREATE TABLE comment (
        id INT AUTO_INCREMENT PRIMARY KEY,
        comment_text VARCHAR(255) NOT NULL,
        photo_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        FOREIGN KEY(photo_id) REFERENCES photo(id),
        FOREIGN KEY(user_id) REFERENCES user(id)
    );`
};

function createGroup() {
    return `CREATE TABLE group_room (
        id INT AUTO_INCREMENT PRIMARY KEY,
        group_name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
    );`
};

function userGroup () {
    return `CREATE TABLE usergroup (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        group_id INT NOT NULL,
        admin BOOLEAN DEFAULT false,
        FOREIGN KEY(user_id) REFERENCES user(id),
        FOREIGN KEY(group_id) REFERENCES group_room(id)
    );`
}

function photoGroup () {
    return `CREATE TABLE photogroup (
        id INT AUTO_INCREMENT PRIMARY KEY,
        group_id INT NOT NULL,
        photo_id INT NOT NULL,
        FOREIGN KEY(group_id) REFERENCES group_room(id),
        FOREIGN KEY(photo_id) REFERENCES photo(id)
    );`
}

module.exports = {
    createUser,
    createPhoto,
    createComment,
    createGroup,
    userGroup,
    photoGroup
};
