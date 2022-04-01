const catalogo = require("./database/catalogo.json")
// const cinema = "CineJonas"
// console.log(cinema)

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
// testarAdicionarFilme()

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
// testarBuscarFilme()

const alterarStatusEmCartaz = codigo => {
        let resultado = buscarFilme(codigo)
        if (resultado && resultado.titulo) {
            let {
                titulo,
                emCartaz
            } = resultado
            console.log(`Status do filme ${titulo} (código ${codigo}) antes: ${filme.emCartaz}`)
            emCartaz = !emCartaz
            console.log(`Status do filme ${titulo} (código ${codigo}) depois: ${filme.emCartaz}`)
        }
        return resultado
    }
const testarAlterarStatusEmCartaz = () => {
    alterarStatusEmCartaz(1)
    alterarStatusEmCartaz(2)
}
// testarAlterarStatusEmCartaz()

// Função de apoio
const mostrarDetalhesFilme = filme => {
    const {
        titulo,
        codigo,
        anoDeLancamento,
        duracao,
        atores,
        emCartaz
    } = filme
    return `
    Título: ${titulo}
    Código: ${codigo}
    Ano: ${anoDeLancamento}
    Duração (hrs): ${duracao}
    Atores: ${atores.join(', ')}
    Status: ${emCartaz ? "Em Cartaz!" : "Não está em cartaz."}
    `
}

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