import { useState } from 'react'
import chris from './assets/image.webp'
import './App.css'

function App() {
  const perfil = {
    name: "Chris",
    surname: "Evans",
    age: 43,
    nationality: "EEUU",
    experience: ["Capitán América", "Los 4 Fantásticos", "Los Vengadores"],
    education: ["University of Arts", "University of UCLA"],
    bio: "Chris Evans es un actor estadounidense nacido el 13 de junio de 1981 en Boston, Massachusetts. Es conocido principalmente por su papel como Steve Rogers, también conocido como Capitán América.",
    profilePic: chris
  };
  return (
    <>
    <main>
  <div class="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Career</a>
        <a href="#">Education</a>
    </div>
    <div class="container">
        <div class="profile-pic">
            <img src={chris} alt="Profile Picture"/>
        </div>

        <div class="personal-info">
            <h2>Personal information:</h2>
            <p><strong>Nombre: {perfil.name}</strong></p>
            <p><strong>Apellido: {perfil.surname}</strong></p>
            <p><strong>Edad: {perfil.age}</strong></p>
            <p><strong>Nacionalidad: {perfil.nationality}</strong></p>

            <h2>Experiencia en peliculas:</h2>
            <ul>
            {perfil.experience.map((movie, index) => (
            <li key={index}>{movie}</li>
            ))}
            </ul>

            <h2>Educacion:</h2>
            <ul>
                {perfil.education.map((school, index) => (
                <li key={index}>{school}</li>
                ))}
                
            </ul>

            <h2>Biografia:</h2>
            <p>{perfil.bio}</p>
            
        </div>
    </div>
    </main>
    </>
  )
}
export default App
