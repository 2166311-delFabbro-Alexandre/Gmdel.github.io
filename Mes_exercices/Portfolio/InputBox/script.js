function GenererCube()
{


    let resultat = document.getElementById("resultat");
    let nbCube = document.getElementById("input_number").value;
    let valeurJustify = document.getElementById("select_valeur").value;

    //supprimer les cubes
    let listesCubes = document.querySelectorAll("#colonne_resultat *");
    listesCubes.forEach(cube => {
        cube.remove();
    });

    //créer les cubes
    for (let i=0; i < nbCube; i++){
        cube = document.createElement("div");
        cube.classList.add("cube");
        cube.innerHTML = i+1;
        colonne_resultat.append(cube);
    }

    //appliquer les propriétés
    colonne_resultat.style.justifyContent = valeurJustify;
}