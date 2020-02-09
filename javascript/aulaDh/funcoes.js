


let json = `[{"nome":"Repete Pet","raca":"Passsaro","dataNascimento":"10/12/2018","tipo":"Papagaio",
"peso":3.5,"sexo":"Macho","dono":{"nome":"vinicius","idade":25},"vacinado":false,
"servicos":["Banho","Tosa"]},{"nome":"Menino","raca":"Vira-Lata","dataNascimento":"14/01/2016",
"tipo":"cachorro","sexo":"Fêmea","peso":3.5,"dono":{"nome":"João","idade":25},"vacinado":true,
"servicos":["Banho","Tosa"]}] `;

function vacinarPet(json){

    if(!json.vacinado){
        return "Este pet já está vacinado";
    }else{
        return "O pet foi vacinado com sucesso";
    }
    
}


const lerPets = lista => {
    let pets = JSON.parse(json);
    return pets;
   
}

//leituraLista(json);


// callbacks - funcao principal daEntradaPet - receber os lista pets que chegam-- closers de msg do pet

const darEntradaPets = (listaPets, leituraLista, vacinarPet) => {

    let pets = leituraLista(listaPets);

    const msg = (pet, resultado) => {
        console.log("O pet: ", pet.nome," ", resultado);
    }

    for(let i = 0; i < pets.length; i++){
        let resultado = vacinarPet(pets[i]);
        msg(pets[i], resultado);

    }
    

}


darEntradaPets(json, lerPets,vacinarPet);

//console.log(vacinarPet(json));