import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/48132571?s=460&u=8d82380bc35f4b0559972b624f33210a713082ad&v=4" alt="Kawan" />
                <div>
                    <strong>
                        Kawan José da Silva
                            </strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                        <br /><br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;