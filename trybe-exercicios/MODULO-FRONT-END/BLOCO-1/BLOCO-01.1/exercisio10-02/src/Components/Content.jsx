import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {

  render() {
    return (
      <div className="content">
        <h1>Conteúdos</h1>
        <ul>
          {conteudos.map(conteudo => (
            <li key={conteudo.conteudo}>
              <span>{conteudo.conteudo}</span>
              <span>Bloco {conteudo.bloco} </span>
              <span> {conteudo.status}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Content;