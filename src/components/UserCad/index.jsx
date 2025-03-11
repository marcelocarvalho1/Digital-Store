import './UserCad.css';

export function UserCad() {
    return (
        <div class="cadastro-wrapper">
        <div className='cadastro-container'>
            <h2 className='cadastro-titulo'>Criar Conta</h2>
            
            <div className='cadastro-secao'>
                <h3>Informações Pessoais</h3>
                <div className='input-group'>
                    <label htmlFor='nome'>Nome Completo *</label>
                    <input type='text' id='nome' placeholder='Insira seu nome' required />
                </div>
                <div className='input-group'>
                    <label htmlFor='cpf'>CPF *</label>
                    <input type='text' id='cpf' placeholder='Insira seu CPF' required />
                </div>
                <div className='input-group'>
                    <label htmlFor='email'>E-mail *</label>
                    <input type='email' id='email' placeholder='Insira seu email' required />
                </div>
                <div className='input-group'>
                    <label htmlFor='telefone'>Celular *</label>
                    <input type='tel' id='telefone' placeholder='Insira seu celular' required />
                </div>
            </div>
            
            <div className='cadastro-secao'>
                <h3>Informações de Entrega</h3>
                <div className='input-group'>
                    <label htmlFor='endereco'>Endereço *</label>
                    <input type='text' id='endereco' placeholder='Insira seu endereço' required />
                </div>
                <div className='input-group'>
                    <label htmlFor='bairro'>Bairro *</label>
                    <input type='text' id='bairro' placeholder='Insira seu bairro' required />
                </div>
                <div className='input-group'>
                    <label htmlFor='cidade'>Cidade *</label>
                    <input type='text' id='cidade' placeholder='Insira sua cidade' required />
                </div>
                <div className='input-group'>
                    <label htmlFor='cep'>CEP *</label>
                    <input type='text' id='cep' placeholder='Insira seu CEP' required />
                </div>
                <div className='input-group'>
                    <label htmlFor='complemento'>Complemento</label>
                    <input type='text' id='complemento' placeholder='Insira complemento' />
                </div>
            </div>
            
            <div className='cadastro-checkbox'>
                <input type='checkbox' id='ofertas' />
                <label htmlFor='ofertas'>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</label>
            </div>
            
            <button className='cadastro-botao'>Criar Conta</button>
        </div>
        </div>
    );
}
