import './SectionLogin.css'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import Sapatos from '../../../public/login.png'

export function SectionLogin() {
    return (
        <>
            <section className='section-login'>
                <div className='forms-content'>
                    <form className="form">
                        <h1>Acesse sua conta</h1>
                        <p>Novo cliente? Então registre-se <a href="/register">aqui</a>.</p>
                        <label htmlFor="login">Login *</label>
                        <input type="text" id="login" name="login" placeholder="Insira seu login ou email" required />
                        <label htmlFor="password">Senha *</label>
                        <input type="password" id="password" name="password" placeholder="Insira sua senha" required />
                        <a href="/forgot-password" className="forgot-password">Esqueci minha senha</a>
                        <button>Acessar a Conta</button>
                        <div className='login-rede-sociais'>
                            <span>Ou faça login com</span>
                            <FcGoogle />
                            <FaFacebook />
                        </div>
                    </form>
                </div>
                <div className='image-sapatos'>
                    <img src={Sapatos} className='sapatos-login' alt="sapatos" />
                </div>
            </section>
        </>

    )
}