import { Link } from 'react-router-dom'
import logo from '../../Image/Logo_Ecomarket.png'
import styles from "../module/Home.module.css"
import stylesMeioUm from '../module/PartMeioUm.module.css'
import stylesFinal from '../module/ParteFinal.module.css'


function Home(){
    return(
        <div className={styles.Container}>
            <div className={styles.ContainerHeader}>
                <div className={styles.ContainerLogoHeader}>
                    <img src={logo}></img>
                </div>
                <div className={styles.ContainerRegistrar}>
                    <Link to='/registro'> Registrar</Link>
                   
                </div>
                <div className={styles.ContainerCadastrar}>
                    <Link to = '/login'>Login</Link>
                </div>
            </div>

            <div className={stylesMeioUm.ContainerPartUm}>
                <div className={stylesMeioUm.ContainerLogoMeio}>
                    <div className={stylesMeioUm.ContainerLogoImg}>
                        <img src={logo}></img>
                    </div>
                </div>
                <div className={stylesMeioUm.ContainerMessage}>
                    <p>Unidos para um mundo mais sustentável</p>
                </div>
            </div>

            <div className={stylesFinal.ContainerFinal}>
                <div className={stylesFinal.ContainerPartUmMessage}>
                    <div className={stylesFinal.ContainerMessageUm}>
                        <div className={stylesFinal.ContainerMessagestyleUm}>
                            <h2>Quem somos</h2>
                            <p> Nós somos mais do que apenas um mercado online. Somos um coletivo apaixonado por negócios sustentáveis e pequenos empreendimentos. Acreditamos que o futuro dos negócios está enraizado na responsabilidade social e ambiental. Por isso, criamos este espaço para conectar consumidores conscientes a pequenos negócios que compartilham dessa visão.</p>
                        </div>
                    </div>

                    <div className={stylesFinal.ContainerMessageDois}>
                        <div className={stylesFinal.ContainerMessagestyleDois}>
                            <h2>Nossos propositos</h2>
                            <p>Nosso propósito é simples e poderoso: ajudar pequenos negócios a expandir seus horizontes. Queremos ser o impulso que eles precisam para crescer de maneira sustentável e alcançar um público mais amplo. Ao mesmo tempo, estamos comprometidos em promover práticas comerciais responsáveis que beneficiam tanto o planeta quanto a sociedade.</p>
                        </div>
                    </div>

                </div>
                <div className={stylesFinal.ContainerPartDoisMessage}>
                    <div className={stylesFinal.ContainerPartDois}>

                        <h2>O que oferecemos</h2>
                        <div className={stylesFinal.ContainerMessageDoisP}>
                            <p>Em nosso marketplace, você encontrará uma ampla variedade de produtos de pequenos negócios que se dedicam a práticas sustentáveis. Desde roupas orgânicas até produtos reciclados e artesanato, nossa seleção é uma celebração da criatividade e do respeito ao meio ambiente.</p>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )

}

export default Home