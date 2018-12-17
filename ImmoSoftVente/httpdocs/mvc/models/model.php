<?php

class model
{
    protected $pdo = null;
    protected $dernierId = 0;
    protected $message = "";

    protected function getBdd()
    {
        if($this->pdo == null)
        {
            //créer la connexion
            try
            {
                if(($_SERVER['HTTP_HOST']=='localhost')||($_SERVER['HTTP_HOST']=='127.0.0.1')||($_SERVER['HTTP_HOST']=='localhost:8082')){
                    $this->pdo = new PDO('mysql:host=localhost;dbname=;charset=utf8', '', '');
                }else{
                    $this->pdo = new PDO('mysql:host=;dbname=', '', '');
                }
            }
            catch (PDOException $e)
            {
                print "Erreur : " . $e->getMessage() . "<br />";
                exit();
            }

        }
        return $this->pdo;
    }

    protected function executerRequete($requete, $parametres = null)
    {

        //requete sans parametres
        if ($parametres == null)
        {
            $resultat = $this->getBdd()->query($requete);
        }

        //requete avec parametres
        else
        {
            $resultat = $this->getBdd()->prepare($requete);
            $resultat->execute($parametres);
        }

        return $resultat;
    }

    protected function upload($fichier, $table, $colonne)
    {
        $maxsize    = 10485760;
        $champComparaison = "ID_UTILISATEUR";

        $extensionAutorisees = array (
            "1" => "jpg",
            "2" => "jpeg",
            "3" => "bmp",
            "4" => "gif",
            "5" => "png");

        //TODO: modifier path
        $content_dir = $_SERVER['DOCUMENT_ROOT'] . '/resources/images/';

        if(isset($fichier['tmp_name']))
        {
            $tmp_file = $fichier['tmp_name'];
            if(is_uploaded_file($tmp_file) )
            {
                if($fichier['size'] < $maxsize)
                {
                    $type_file = $fichier['type'];
                    if( strstr($type_file, $extensionAutorisees["1"]) || strstr($type_file, $extensionAutorisees["2"]) || strstr($type_file, $extensionAutorisees["3"]) || strstr($type_file, $extensionAutorisees["4"]) || strstr($type_file, $extensionAutorisees["5"]) )
                    {
                        //modification du nom du fichier en mettant l'ID de l'user à la place
                        $nomFichierComplet = $fichier['name'];
                        $targetFile = $content_dir. $nomFichierComplet;

                        $requete = 'UPDATE '.$table.' SET '.$colonne.'="'.$nomFichierComplet.'"';
                        $resultat = $this->executerRequete($requete);
                        move_uploaded_file($tmp_file, $targetFile);

                    }
                }
            }
        }
    }



}

?>
