import React, { useState } from 'react';
import css from './Login.module.css';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleEntrar = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Senha:', senha);
        setEmail('');
        setSenha('');
    };

    return (
        <div className={css.container}>
            <div className={css.loginBox}>
                <div className={css.logoSection}>
                    <img className={css.logo} src="./logo.png" alt="" />
                    <p>"O verdadeiro conhecimento é aquele que capacita as pessoas a se transformarem."</p>
                </div>
                <div className={css.formSection}>
                    <h1>Entre na sua conta</h1>
                    <form className={css.form} onSubmit={handleEntrar}>
                        <div className={css.inputContainer}>
                            <input
                                type="email"
                                id="email"
                                placeholder="Insira seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={css.inputContainer}>
                            <input
                                type="password"
                                id="senha"
                                placeholder="Insira sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>
                        <button className={css.botao} type="submit">Entrar</button>
                    </form>
                    <p>
                        Ainda nao possui conta? <a href="/Cadastro">Cadastre-se</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;

