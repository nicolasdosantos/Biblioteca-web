import React, { useState } from 'react';
import './Cadastro.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import fundo from './fundo.png';

function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
    };
    return (
        <div className="App">
            <div className="background" style={{ backgroundImage: `url(${fundo})` }}></div>
            <div className="container">
                <div className="left-side">
                    <img src="/logo.png" alt="Logo" className="logo" />
                    <p>“O conhecimento é a única coisa que ninguém pode tirar de você”</p>
                </div>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <h2>Crie sua conta</h2>
                        <div className="input-container">
                            <FaUser className="input-icon" />
                            <input
                                type="text"
                                placeholder="Insira seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="input-container">
                            <FaEnvelope className="input-icon" />
                            <input
                                type="email"
                                placeholder="Insira seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-container">
                            <FaLock className="input-icon" />
                            <input
                                type="password"
                                placeholder="Insira sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Cadastrar</button>
                        {success && <p className="success-message">Cadastro feito com sucesso!</p>}
                        <p className="login-link">Já possui conta? <a href="/login">Entrar</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
