-- Script SQL pour créer les tables user et post avec une relation de clé étrangère

-- Suppression des tables si elles existent déjà pour éviter les erreurs
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS user;

-- Création de la table user
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Création de la table post
CREATE TABLE post (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    -- Création de la clé étrangère qui relie post à user
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

-- Ajout d'un index sur la clé étrangère pour améliorer les performances
CREATE INDEX idx_post_user_id ON post(user_id);

