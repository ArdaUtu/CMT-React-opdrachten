import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import  animals  from '../animals.js';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animalsList, setanimalsList] = useState(animals);
  
  // Zoek het juiste animals
  const animal = animalsList.find(p => p.id === Number(id));

  console.log(id)

  if (!animal) {
    return <div>animals niet gevonden!</div>;
  }

  return (
    <section>
      <button onClick={() => navigate('/')}>
        ← Terug naar home
      </button>
      <br></br>
      <img className='ImageDier' src={animal.imageUrl} alt="" />
      <h1 class = "NameAnimal">{animal.name}</h1>
      <p class ="TextClass">Leefomgeving: {animal.habitat}</p>
      <p class ="TextClass">Dieet: {animal.diet}</p>
      <p class ="BeschrijvingClass">Beschrijving: {animal.description}</p>
    </section>
  );
};

export default DetailPage;
