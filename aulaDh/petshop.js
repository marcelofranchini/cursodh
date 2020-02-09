// var nome = "Bob";
// var idade =  5;
// var raca = "SRN";
// var dono = {nome: "Marcelo", idade: 31};
// var vacinado = true;
// var peso = 10.2;
// var servicos = ["banho","tosa"] //{banho: true, tosa:false}; pode ser um array ou objeto.
// string, number, float, array, objeto, null, undefined

const NOME_PETS = "*** PETSHOP DO MARCELO ***";
console.log(NOME_PETS);

let pets = [{
    nome: " Bob", 
    raca:"SRN",
    idade: 5,
    tipo:"cachorro",
    peso: 3.5,
    sexo: "M",
    dono:{ nome: "Marcelo",dataNascimento: "04/03/1988",},
    vacinado: true,
    servicos:["banho","tosa"]
},
  {
    nome: " Dino", 
    raca:"SRN",
    dataNascimento: "17/06/1978",
    tipo:"gato",
    peso: 3.5,
    sexo: "F",
    dono:{nome: "Joao",idade: 54},
    vacinado: false,
    servicos:["banho","tosa"]
  }
];

//console.log(pets[1]);

// objeto dentro de outro objeto. 

function exibirPets(){
//     for(let i = 0; i < pets.length; i++){

//         console.log("---------");
//         pets[i].sexo === "M" ? console.log("Sexo: Masculino") : console.log("Sexo: Feminino"); // poderia salvar valores em constantes.
//         console.log("Nome: "+ pets[i].nome + " Tipo: " + pets[i].tipo );
     
//    }

        let i = 0;

        while (i < pets.length) {
        pets[i].sexo === "M" ? console.log("Sexo: Macho") : console.log("Sexo: Fêmea");
        console.log("Nome: "+ pets[i].nome + " Tipo: " + pets[i].tipo );
        i++;

       }


}

function vacinarPet(json){

        if(!json.vacinado){ // if já ve se é true 
            json.vacinado = true;
            return"O pet foi vacinado";
        }else {
            return "Esse pet já foi vacinado";
        }



}

//vacinado(pets[1]);


//exibirPets();

// cuidado while infinito.

// arrow function, receber json e listar os pets que chegaram nome e tipo.



let json = `[{"nome":"Repete Pet","raca":"Passsaro","dataNascimento":"10/12/2018","tipo":"Papagaio",
"peso":3.5,"sexo":"Macho","dono":{"nome":"vinicius","idade":25},"vacinado":false,
"servicos":["Banho","Tosa"]},{"nome":"Menino","raca":"Vira-Lata","dataNascimento":"14/01/2016",
"tipo":"cachorro","sexo":"Fêmea","peso":3.5,"dono":{"nome":"João","idade":25},"vacinado":true,
"servicos":["Banho","Tosa"]}] `;

const lerPets = lista => {
    let pets = JSON.parse(lista);
    for(let i = 0; i < pets.length; i++){
      //  console.log("Nome:" + pets[i].nome ," Tipo: " + pets[i].tipo);
    }
    return pets;
}

//leituraLista(json);


// callbacks - funcao principal daEntradaPet - receber os lista pets que chegam-- closers de msg do pet

const darEntradaPets = (listaPets, leituraLista, vacinarPet) => {

    let pets = leituraLista(listaPets);
    //console.log(pets);

    function msgFinal(pet, resultado){
        console.log(" O pet " + pet.nome + resultado);
    }

    for(let i = 0; i < pets.length; i++){
        let resultado = vacinarPet(pets[i]);
        msgFinal(pets[i], resultado);
      }
    
   

}


darEntradaPets(json, lerPets,vacinarPet);


