const Nav = () => {
    // const handleClick = () =>{
    //     const contacto = document.getElementById('contacto');
    //    .scrollTo(contacto)
       
    // }
  return (
        <div className="nav-container">
            <button className="button" >Contactanos!</button>
        </div>
    
  )
    }

const Title = ({title}) =>{
    return <h1 className="title animate__animated animate__fadeInRight">{title}</h1>
}
const Hello = () =>{
    return(
        <div className="header-container">
            <Title title={'Moderno departamento 2 ambientes'}/>
            {/* <h1 className="title">Moderno departamento 2 ambientes</h1> */}
            <div className="header-subcontainer">
                <span class="material-symbols-outlined">location_on</span>
                <h2 className="header-description">Complejo Alojamientos Valeria del Mar</h2>
                <span>.</span>
                <a href="https://goo.gl/maps/Qe2zYCb7P8kQpc7v7" className="header-link">Vicealmirante Onofre Betbeder 350, Valeria del Mar, Provincia de Buenos Aires</a>
            </div>
        </div>
    )
}

const About = () => {
    return (
        <div className="about">
            <h1 className="subtitle">Departamento</h1>
            <p className="subtext">Para 4 Personas - Living/Comedor - Habitacion - Cocina integrada - Baño - Amplio balcon</p>
            <p className="text">Excepcional departamento para 4 personas. Ventana y balcon al exterior con hermosa vista. Estufas para los dias frios. Tv con chromecast y WiFi. Caja de seguridad.
             Cocina con vajilla completa, microondas, pava electrica. Pileta climatizada, y juegos de jardin en el parque del complejo. 
             Lugar para estacionar. Almohadas y mantas adicionales . Ubicado 150 metros del mar y a 450 metros del Centro Comercial. No incluye art. de higiene, y ropa blanca.
             Está ubicado en el primer piso. Es muy luminoso y amplio. Tiene una cama matrimonial y un futon en el living/comedor. Baño con bañera. Tiene todo lo necesario para disfrutar de una maravillosa estadía.</p>
        
        </div>
    )
}

const Pictures = () => {
    return ( 
        <div className="img-container">
            <div className="img-column">
                <img src="/images/complejo-frente.jpg" className="primary-img"></img>
            </div>
            <div className="img-column">
                <img src='/images/complejo-pileta.JPG' className="secondary-img"/>
                <img src='/images/complejo-jardin.JPG' className="secondary-img"/>
            </div>
            <div className="img-column">
                <img src='/images/vista.jpeg' className="secondary-img"/>
                <img src='/images/pileta.jpeg' className="secondary-img"/>
            </div>
        </div>
    )
}

const Pictures2 = () => {
    return ( 
        <div className="img-container">
            <div className="principal-column">
                <img src='/images/balcon.jpeg' className="primary-img"></img>
            </div>
            <div className="secondary-column">
                <img src='/images/habitacion.jpeg' className="secondary-img"/>
                <img src='/images/living-comedor.jpeg' className="secondary-img"/>
            </div>
            <div className="secondary-column">
                <img src='/images/bano.jpeg' className="secondary-img"/>
                <img src='/images/cocina.jpeg' className="secondary-img"/>
            </div>
        </div>
    )
}

const Amenities = () => {
  return ( 
  <div className="amenities-container">
    <Title title={"Lo que ofrecemos"}/>
    <div className="amenities">
        <div className="amenities-column">
            <div className="amenities-item">
                <span className="material-symbols-outlined">sunny</span>
                <span className="amenities-text">150 metros del mar</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">beach_access</span>
                <span className="amenities-text">Sombrilla y reposeras</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">pool</span>
                <span className="amenities-text">Pileta</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">wifi</span>
                <span className="amenities-text">Wifi</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">outdoor_grill</span>
                <span className="amenities-text">Parrilla en balcon</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">pets</span>
                <span className="amenities-text">Pet Friendly</span>
            </div>
        </div>
        <div className="amenities-column">
            <div className="amenities-item">
                <span className="material-symbols-outlined">tv</span>
                <span className="amenities-text">TV</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">local_laundry_service</span>
                <span className="amenities-text">Lavaropas</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">microwave_gen</span>
                <span className="amenities-text">Microondas</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">checkroom</span>
                <span className="amenities-text">Perchas</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">lock</span>
                <span className="amenities-text">Caja fuerte</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">directions_car</span>
                <span className="amenities-text">Estacionamiento</span>
            </div>
        </div>
    </div>
    </div>
    )
}

const Map = () =>{
    return (
        <div className="map-container">
            <div className="text-container">
                <Title title={'¿Dónde vas a estar?'}/>
                <spam className="map-link">Valeria del Mart, Provincia de Buenos Aires, Argentina.</spam>
                <p className="text">La ubicación es privilegiada. A tan sólo 150 metros del de ingreso a la playa y a 450 metros del centro comercial 
                donde encontrarán variadas propuestas gastronómicas y locales con delicias artesanales entre otros ofrecimientos para disfrutar en pareja y en familia.</p>
                <span className="subtext">Cómo moverse</span>
                <p className="text">A la playa se accede caminando unos pocos metros. Al centro comercial de Valeria del Mar se puede ir en auto o caminando 
                ya que se encuentra a pocos metros del departamento. Colectivo Montemar o auto al centro de Pinamar o Carilo</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3180.4992400644715!2d-56.87708979351423!3d-37.140826971317246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9daeb64d72d3%3A0x7618f66397e31da!2sComplejo%20Ostra%20Negra!5e0!3m2!1ses-419!2sar!4v1676655116575!5m2!1ses-419!2sar" width="600" height="450" className="map" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}


const Available = () =>{
    return (
        <>
            <Title title={"Disponibilidad"}/>
            <p className="text">Alquilamos por semana o por quincena. Contactanos para conocer la disponibilidad y los precios!</p>
        </>
    )

}

const Contact = () =>{
   return (
        <div className="contact-container">
            <div className="contact-container-sub">
                <h3 className="subtitle">Propietarios</h3>
                <div className="contact-item">
                    <span class="material-symbols-outlined">phone_iphone </span>
                    <span className="subtext">011-5122-7269 o 011-3760-8054</span>
                </div>
                <div className="contact-item">
                    <span class="material-symbols-outlined">mail</span>
                    <span className="subtext"> ejaisa1963@yahoo.com.ar</span>
                </div>
            </div>
            <div className="contact-container-sub">
                <h3 className="subtitle">Inmobiliaria</h3>
                <div className="contact-item">
                    <span class="material-symbols-outlined">phone_iphone </span>
                    <span className="subtext">011-5122-7269 o 011-3760-8054</span>
                </div>
                <div className="contact-item">
                    <span class="material-symbols-outlined">mail</span>
                    <span className="subtext"> ejaisa1963@yahoo.com.ar</span>
                </div>
            </div>
        </div>
    )
}

const Main = () => {
    return <>
        <Hello/>
        <Pictures/>
        <About/>
        <Pictures2/>
        <Amenities/>
        <Map/>
        <Available/>
        </>
}


const Footer = () => {
   return  <Contact/>
}


export const Body = () => {
    return (
        <div className='body'>
        <Nav/>
        <Main/>
        <Footer/>
        </div>
    )
}