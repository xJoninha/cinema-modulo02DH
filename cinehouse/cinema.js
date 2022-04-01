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
    for(let filme of catalogo) {
        if (filme.codigo === codigo) {
            console.log(`Status do filme ${filme.titulo} (código ${codigo}) antes: ${filme.emCartaz}`)
            filme.emCartaz = filme.emCartaz ? false : true
            console.log(`Status do filme ${filme.titulo} (código ${codigo}) depois: ${filme.emCartaz}`)
        }
    }
}
const testarAlterarStatusEmCartaz = () => {
    alterarStatusEmCartaz(1)
    alterarStatusEmCartaz(2)
}
testarAlterarStatusEmCartaz()

const listarTodosOsFilmes = () => {
    for (let filme of catalogo) {
        console.log(`
            Título: ${filme.titulo}
            Código: ${filme.codigo}
            Ano: ${filme.anoDeLancamento}
            Duração: ${filme.duracao}
            Atores: ${filme.atores.join(', ')}
            Status: ${filme.emCartaz ? "Em Cartaz!" : "Não está em cartaz."}
        `)
    }
}
const testarListarTodosOsFilmes = () => listarTodosOsFilmes()
testarListarTodosOsFilmes()

const listarFilmesEmCartaz = () => {
    for(let filme of catalogo){
        if (filme.emCartaz) {
            console.log(`
            Título: ${filme.titulo}
            Código: ${filme.codigo}
            Ano: ${filme.anoDeLancamento}
            Duração: ${filme.duracao}
            Atores: ${filme.atores.join(', ')}
            Status: ${filme.emCartaz ? "Em Cartaz!" : "Não está em cartaz."}
            `)
        }
    }
}
const testarListarFilmesEmCartaz = () => listarFilmesEmCartaz()
testarListarFilmesEmCartaz()