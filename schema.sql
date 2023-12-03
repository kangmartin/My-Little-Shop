-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 03 déc. 2023 à 18:06
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mylittleshop`
--

-- --------------------------------------------------------

--
-- Structure de la table `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `isBan` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `members`
--

INSERT INTO `members` (`id`, `name`, `email`, `password`, `role`, `isBan`) VALUES
(1, 'Admin', 'admin@mylittleshop.com', '$2b$10$oJHLTt.3cjLSNhizrhmD6u9mVJYL24zG8fe2FUBfuF9okYNitwIfu', 'admin', 0),
(2, 'Martin', 'martin@mylittleshop.com', '$2b$10$VDb5qbb.iImPqOcWZYFhvemFI5Rf9rtAP0vRZ5yIiY3Hszbsh.EHi', 'user', 1),
(3, 'Tom', 'tom@mylittleshop.com', '$2b$10$0LV9c6GJorrLk2mpNKnLeuMbGkeaTaX7qloS4cBE4hjbIO4PybOSi', 'user', 0),
(4, 'Louis', 'louis@mylittleshop.com', '$2b$10$i5hj.EVmHl2VJ2FXqGSgeufFOIPeM6/LdceRzlaT0j916BqLRbXD2', 'user', 0),
(5, 'Théo', 'theo@mylittleshop.com', '$2b$10$VCQ1nVueZSzPVco3x2aqs.bt.lgsKBNeV3KkIwydg7uDND1oWS7nu', 'user', 0),
(6, 'Baba', 'baba@mylittleshop.com', '$2b$10$KbZPHsCRTRJAUpSOvDoRO..V1NBT/BupHHxbhoqjLbDvJu3bZQbWS', 'user', 0),
(7, 'Taylor', 'taylor@swift.com', '$2b$10$CL1udu8T9IJS.F5Rm3dQsOBal1NXhzhKl99Bmsa2J3RkxSMLPRWMa', 'user', 0);

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `old_price` double NOT NULL,
  `actual_price` double NOT NULL,
  `rate` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
