const catalogo = require("./database/catalogo.json")
const cinema = "CineJonas"
console.log(cinema)



const adicionarFilme = filme => catalogo.push(filme)
const testarAdicionarFilme = () => {
    console.log(`Tem ${catalogo.length} filmes, antes de ser adicionado mais!`)
    adicionarFilme({
        codigo: 3,
        titulo: "Homem-Aranha: De Volta ao Lar",
        duracao: 3.10,
        atores: ["Tom Holland", "Zendaya", "Michael keaton", "Marisa Tomei"],
        anoDeLancamento: 2017,
        emCartaz: true
    })
    console.log(`Agora temos ${catalogo.lenght} filmes no catálogo!`)
}
testarAdicionarFilme()

const buscarFilme = codigo => {
    for(let filme of catalogo){
        if(filme.codigo === codigo) {
            console.log(`O filme que procura de codigo ${codigo}, se chama ${filme.titulo}`)
        }
    }
}
const testarBuscarFilme = () => {
    buscarFilme(1)
    buscarFilme(2)
}
testarBuscarFilme()

const alterarStatusEmCartaz = codigo => {
    for (let filme of catalogo){
        if (filme.codigo === codigo){
            console.log(`Status do filme ${filme.titulo} (código: ${codigo}) antes: ${filme.emCartaz}`)
            filme.emCartaz = !filme.emCartaz
            console.log(`Status do filme ${filme.titulo} (Código: ${codigo}) depois: ${filme.emCartaz}`)
        }
    }
}
const testarAlterarStatusEmCartaz = () => {
    alterarStatusEmCartaz(1)
    alterarStatusEmCartaz(2)
}
testarAlterarStatusEmCartaz()