const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// Atv - 001
// Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

function formatedBookNames() {
  const booksFormat = books.map(livro => {
    return `${livro.name} - ${livro.genre} - ${livro.genre}`
  });
  return booksFormat;
}

// console.log(formatedBookNames(books));
// Retorno.
// [ 'As Crônicas de Gelo e Fogo - Fantasia - Fantasia',
//   'O Senhor dos Anéis - Fantasia - Fantasia',
//   'Fundação - Ficção Científica - Ficção Científica',
//   'Duna - Ficção Científica - Ficção Científica',
//   'A Coisa - Terror - Terror',
//   'O Chamado de Cthulhu - Terror - Terror' ]

// Atv - 002
// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map , sort
function nameAndAge() {
  return books.map((livro) => ({
      age: livro.releaseYear - livro.author.birthYear,
      autor: livro.author,
  })).sort((libroA,livroB) => libroA.age - livroB.age);
}
// // console.log(nameAndAge(books))

// // Atv - 003 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// // Dica: use a função filter ;

function fantasyOrScienceFiction() {
  return books.filter((livro) => {
    if (livro.genre === 'Fantasia' || livro.genre === 'Ficção Científica') {
      return livro;
    }
  })
}
// console.log(fantasyOrScienceFiction(books));
// console.log(data = new Date().getFullYear())

// Atv - 004 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

function oldBooksOrdered() {
  const data = new Date().getFullYear();
  return books.filter((livro) => {
    if (livro.releaseYear < (data - 60)) {
      return {
        id: livro.id,
        name: livro.name,
        genre: livro.genre,
        author: livro.author,
        releaseYear: livro.releaseYear,
      }
    }
  }).sort((a, b) => a.releaseYear - b.releaseYear);
}

// console.log(oldBooksOrdered(books));

// Atv - 005 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors() {
  return books.filter((livro) => {
    if (livro.genre === 'Fantasia' || livro.genre === 'Ficção Científica') {
      return livro;
    }
  }).map((livro) => livro.author.name).sort((a, b) => a - b);
}
// console.log(fantasyOrScienceFictionAuthors(books))

function oldBooks() {
  const date = new Date().getFullYear();
  return books.filter(book => {
    if (book.releaseYear < (date - 60)) {
      return `${book.name}`;
    }
  });
}

conmsole.log(oldBooks());