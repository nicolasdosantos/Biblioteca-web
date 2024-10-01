import React from 'react';
import '../styles/Recomendacao.css';

const Recomendacao = () => {
    return (
        <div className="recommendation-form">
            <div className="file-upload">
                <img src="/addpapel.png" alt="Arquivo" />
            </div>
            <div className="form-inputs">
                <input type="text" placeholder="Nome do jogo" />
                <textarea placeholder="Comentário"></textarea>
                <button>Recomendar</button>
            </div>
        </div>
    );
}

export default Recomendacao;
