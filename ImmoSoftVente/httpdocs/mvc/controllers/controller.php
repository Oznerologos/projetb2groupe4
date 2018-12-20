<?php

require_once('mvc/models/model.php');

class controller extends model
{
    private $model = null;

    function afficher($page)
    {
        $bdd = model::getBdd();
        $requete = "SELECT page FROM parametres WHERE page =".$page;
        $resultat = $this->executerRequete($requete);

        if(is_bool($resultat)){
            $page = 'error';
        }
        else{
            $donnees = $resultat->fetch(PDO::FETCH_OBJ);
        }

        require_once('mvc/views/includes/fonction.inc.php');
        require_once('mvc/views/includes/init.inc.php');

        require_once('mvc/views/includes/header.inc.php');

        require_once('mvc/views/'.$page.'.php');
        require_once('mvc/views/includes/footer.inc.php');
    }
}
?>