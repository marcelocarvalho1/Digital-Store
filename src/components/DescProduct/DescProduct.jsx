import './DescProduct.css';
import React, { useState } from 'react';
// import Star from '../Stars/Stars';
// import { FaStar } from 'react-icons/fa';
// import ColorShoes from '../ColorsShoes/ColorsShoes';
// import SizeButtonShoes from '../SizeButtonShoes/SizeButtonShoes';
import Tenis1 from '../../../public/TenisSlide.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const coresFundo = ['#E2E3FF', '#FFE8BC', '#FFC0BC', '#DEC699', '#E8DFCF'];

export function DescProduct() {
    const [indiceCor, setIndiceCor] = useState(0);

    const proximaCor = () => setIndiceCor((indiceCor + 1) % coresFundo.length);
    const anteriorCor = () => setIndiceCor((indiceCor - 1 + coresFundo.length) % coresFundo.length);

    return (
        <div className='color-background' style={{ backgroundColor: coresFundo[indiceCor] }}>
            <div className='containerDP'>
                <div className='caminhoTenis'>
                    <h5>Home / Produtos / Tênis / Nike / Tênis Nike Revolution</h5>
                </div>
                <div className='descricaoProduto'>
                    <div className='imgDescProd'>
                        <div className='imagemGrande'>
                            <img src={Tenis1} alt="Tênis Nike Revolution" />
                            <div className='btn-slide'>
                                <FontAwesomeIcon icon={faChevronLeft} className="botaoNavegacao" onClick={anteriorCor} />
                                <FontAwesomeIcon icon={faChevronRight} className="botaoNavegacao" onClick={proximaCor} />
                            </div>
                        </div>
                        <div className='miniImagens'>
                            {coresFundo.map((cor, index) => (
                                <img key={index} src={Tenis1} alt={`Miniatura ${index + 1}`} onClick={() => setIndiceCor(index)} />
                            ))}
                        </div>
                    </div>
                    <div className='dadosProduto'>
                        <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                        <p className='referenciasProduto'>Casual | Nike | REF:38416711</p>
                        <div className='imgDescProdRow'>
                            <Star />
                            <p className='avaliacao'>4.7 <FaStar /></p>
                            <p className='referenciasProduto'>(90 avaliações)</p>
                        </div>
                        <h2 className='precoProd'>R$219,00</h2>
                        <h4 className='referenciasProduto'>Descrição do Produto</h4>
                        <p className='referenciasProduto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, autem nesciunt molestiae est vel perferendis!</p>
                        <h4 className='referenciasProduto'>Tamanho</h4>
                        <div className='tamanhoSapato'><SizeButtonShoes /></div>
                        <h4 className='referenciasProduto'>Cores</h4>
                        <div className='cores'><ColorShoes /></div>
                        <button className='btn-comprar'>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}