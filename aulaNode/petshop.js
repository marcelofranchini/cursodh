let listaDePets = ["bob","dino"]

function listarPets(){
    let conteudo = "";
    listaDePets.forEach((pet,index) =>{
        console.log(pet)
        conteudo+="Nome do pet: " + pet + "\n";
    });
    return conteudo;
}

function addPet(pet){
    listaDePets.push(pet);
    return "Pet add com sucesso"
}

module.exports = {listarPets, addPet};