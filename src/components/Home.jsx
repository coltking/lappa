import React from 'react'
import light from '../img/Light.png'
import dark from '../img/Dark.png'
import './Home.css'
import { Truck } from 'react-bootstrap-icons'
import { useHistory } from 'react-router'





const Home = ({ theme }) => {
    const history = useHistory()
    const Light = light;
    const Dark = dark;
    console.log(eval(theme));
    return (
        <div className='homeContainer'>
            <img className='LappaLogo' src={eval(theme)} alt='LAPPA, buscador de transportes, logo' />
            <div className={"btn" + theme + " btnTransportista " + theme} onMouseEnter={() => {
                document.querySelectorAll(".btnSecundario").forEach(element => {
                    element.style.display = "initial";
                })
            }} onMouseLeave={() => {
                document.querySelectorAll(".btnSecundario").forEach(element => {
                    element.style.display= "none"
                })
            }}>
                <div className="btnSecundario" size="5vh"><a onClick={() => {
                    const element = document.querySelector(".LappaLogo")
                    element.style.animation = "quieroIngresarAnimation 0.5s 1"
                    setTimeout(() => {
                        return history.push("/register")
                    }, 400);
                }}>Quiero Registrarme</a></div>
                <div className="btnSecundario" size="5vh"><a onClick={() => {
                    const element = document.querySelector(".LappaLogo")
                    element.style.animation = "quieroIngresarAnimation 0.5s 1"
                    setTimeout(() => {
                        return history.push("/login")
                    }, 400);
                }} >Quiero Ingresar</a></div>
                <Truck size="3vh" />
                <div size="5vh">Soy Transportista</div>
            </div>
        </div>)
}

export default Home;
