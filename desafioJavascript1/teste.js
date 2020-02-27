// Base a ser utilizada
const alunosDaEscola=[
    {nome:"Henrique",notas:[],cursos:[],faltas:5},
    {nome:"Edson",notas:[],cursos:[],faltas:2},
    {nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
    {nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
    {nome:"Carlos",notas:[],cursos:[],faltas:0},
    {nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}
    ];
    
    
    
    // implementação
    function adicionarAluno(nome){
    
        if(nome){
          let novoAluno = Object.create(alunosDaEscola)
          alunosDaEscola.nome = nome;
          alunosDaEscola.notas = [8,9.9];
          alunosDaEscola.cursos = [{nomeDoCurso:"UX",dataMatricula:new Date}];
          alunosDaEscola.faltas = 0;
          let vetor = alunosDaEscola.push(novoAluno)
         // alunosDaEscola.push(adicionar);
         //  let alunos = alunosDaEscola.push([{nome:nome,notas:[],cursos:[],faltas:null}])
          // alunos.toString(alunosDaEscola.nome)
           console.log("Aluno cadastrado com sucesso")
        } else {console.log("Erro, deve-se incluir um texto");}}
    
        
       
    
        function listarAlunos(){
                for(let i = 0; i < alunosDaEscola.length; i++){
                 console.log("Aluno: ",alunosDaEscola[i].nome, "\nNotas: ", alunosDaEscola[i].notas, "\nCursos: ", 
                 alunosDaEscola[i].cursos, "\nFaltas: ", alunosDaEscola[i].faltas);
                 console.log("-------------------------------------------------------------------------------------------")
             } 
    
             
            }
    
            
    
        adicionarAluno("marcelo") ;
        console.log(alunosDaEscola);
        console.log(alunosDaEscola);
        let teste = typeof alunosDaEscola[6].nome;
        console.log(teste);
    
        //listarAlunos();
          