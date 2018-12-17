<?php

function getBdd()
{
    //créer la connexion
    try
    {
        if(($_SERVER['HTTP_HOST']=='localhost')||($_SERVER['HTTP_HOST']=='127.0.0.1')||($_SERVER['HTTP_HOST']=='localhost:8082')){
            $pdo = new PDO('mysql:host=localhost;dbname=;charset=utf8', '', '');
        }else{
            $pdo = new PDO('mysql:host=;dbname=', '', '');
        }
    }
    catch (PDOException $e)
    {
        print "Erreur : " . $e->getMessage() . "<br />";
        exit();
    }
    return $pdo;
}

function executerRequete($requete, $parametres = null)
{
    $bdd = getBdd();

    //requete sans parametres
    if ($parametres == null)
    {
        $resultat = $bdd->query($requete);
    }

    //requete avec parametres
    else
    {
        $resultat = $bdd->prepare($requete);
        $resultat->execute($parametres);
    }

    return $resultat;
}