import React from 'react';
import '../styles/Chat.css';

const Chat = () => {
    return (
        <div style={{width:'100%'}}>
            <h1>Chat de Suporte</h1>
            <main className="main-section">

                <div className="recommendation-options">
                    <RecommendationCard title="Recomende Jogos" icon="/Dado.png"/>
                    <RecommendationCard title="Recomende Livros" icon="/livro.png"/>
                    <RecommendationCard title="Envie fotos dos alunos" icon="/imagem.png"/>
                </div>
            </main>
        </div>
    );
};

const RecommendationCard = ({title, icon}) => {
    return (
        <div className="recommendation-card">
            <img src={icon} alt={title}/>
            <p>{title}</p>
            <button>Recomendar</button>
        </div>
    );
};

export default Chat;
