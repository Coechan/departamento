const Nav = () => {
    const handleClick = () =>{
        //ir a la seccion.
    }
  return(
        <ul className="navbar">
            <li className="navbar-item"><a onClick={handleClick}>Fotos</a></li>
            <li className="navbar-item"><a onClick={handleClick}>Ubicacion</a></li>
            <li className="navbar-item"><a onClick={handleClick}>Contacto</a></li>
        </ul>)
    }
const Title = ({title}) =>{
    return <h1 className="title animate__animated animate__fadeInRight">{title}</h1>
}

const About = () => {
    return (
        <div className="about">
            <Title title={'Departamento'}/>
            <p className="subtext">Para 4 Personas - Living/Comedor - Habitacion - Cocina integrada - Baño - Amplio balcon</p>
        </div>
    )
}


const Pictures = () => {
    return ( 
        <div className="img-container">
            <div className="principal-column">
                <img src="/images/complejo-frente.jpg" className="primary-img"></img>
            </div>
            <div className="secondary-column">
                <img src='/images/complejo-pileta.JPG' className="secondary-img"/>
                <img src='/images/complejo-jardin.JPG' className="secondary-img"/>
            </div>
            <div className="secondary-column">
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

// const Picture = ({src}) => {
//     return  <img className=" img animate__animated animate__fadeInRight" src={src}></img>   
// }

const Amenities = () => {
  return ( <>
    <Title title={"Lo que ofrecemos"}/>
    <div className="amenities">
        <div className="amenities-column">
            <div className="amenities-item">
                <span className="material-symbols-outlined">sunny</span>
                <span>150 metros del mar</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">beach_access</span>
                <span>Sombrilla y reposeras</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">pool</span>
                <span>Pileta</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">wifi</span>
                <span>Wifi</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">outdoor_grill</span>
                <span>Parrilla en balcon</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">pets</span>
                <span>Pet Friendly</span>
            </div>
        </div>
        <div className="amenities-column">
            <div className="amenities-item">
                <span className="material-symbols-outlined">tv</span>
                <span>TV</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">local_laundry_service</span>
                <span>Lavaropas</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">microwave_gen</span>
                <span>Microondas</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">checkroom</span>
                <span>Perchas</span>
            </div>
            <div className="amenities-item">
                <span class="material-symbols-outlined">lock</span>
                <span>Caja fuerte</span>
            </div>
            <div className="amenities-item">
                <span className="material-symbols-outlined">directions_car</span>
                <span>Estacionamiento</span>
            </div>
        </div>
    </div>
    </>
    )
}

const Map = () =>{
    return (
        <div className="container">
            <div className="text-container">
                <Title title={'Ubicacion'}/>
                <p className="text">A solo 150 metros de la playa y a 450 metros del centro comercial</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3180.4992400644715!2d-56.87708979351423!3d-37.140826971317246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c9daeb64d72d3%3A0x7618f66397e31da!2sComplejo%20Ostra%20Negra!5e0!3m2!1ses-419!2sar!4v1676655116575!5m2!1ses-419!2sar" width="600" height="450" className="map" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}


const Available = () =>{
  return (
    <>
        <Title title={"Disponibilidad"}/>
        <p className="text">Alquilamos por semanas o por quincenas. Contactanos para conocer la disponibilidad y los precios!</p>
     </>)
}

const Contact = () =>{
   return (
        <div className="contact-container">
            <div className="contact-item">
                <span class="material-symbols-outlined">phone_iphone </span>
                <span className="text-small">011-5122-7269 o 011-3760-8054</span>
            </div>
            <div className="contact-item">
                <span class="material-symbols-outlined">mail</span>
                <span className="text-small"> ejaisa1963@yahoo.com.ar</span>
            </div>
        </div>
    )
}

const Main = () => {
    return <>
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