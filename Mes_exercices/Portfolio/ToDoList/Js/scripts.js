const saisieTache = document.getElementById("saisieTache"); //la variable saisieTache va chercher la value de l'id de l'input

function AjouterElement()
{

    if(saisieTache.value == ""){
        return;
    }
    //la variable listerNode crée un <li>
    let listerNode = document.createElement("li"); 
    //la variable listerTache va chercher la variable saisieTache et crée une node de texte
    let listerTache = document.createTextNode(saisieTache.value);
    //append un child dans le li de listerNode avec la valeur de listerTache
    listerNode.appendChild(listerTache);

    //onclick pour remove task
    listerNode.onclick = () => {
        listerNode.remove();
    }
    //ajoute une classe pour mise en forme
    listerNode.classList.add("listeStyle");

    //va chercher l'id liste et append listerNode  
    document.getElementById("liste").appendChild(listerNode);
    
    //vider le input
    saisieTache.value = "";
    //reselectionne le input
    saisieTache.focus();
}

