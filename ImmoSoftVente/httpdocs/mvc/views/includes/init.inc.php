<?php

$requete = 'SELECT description, titre FROM parametres';

$resultat = executerRequete($requete);

$donnees = $resultat->fetch(PDO::FETCH_ASSOC);

$titre = $donnees['titre'];

$description = $donnees['description'];