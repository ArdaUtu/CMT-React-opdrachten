import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import animals from '../animals.js';
import Card from '../components/Card';

const HomePage = () => {
  const navigate = useNavigate();
  const [animalList, setanimalsList] = useState(animals);

  const goToDetail = (animalsId) => {
    navigate(`/animal/${animalsId}`);
  };

  return (
    <section>
      <h2 class ="h2Animal">Zoo app</h2>
      
      {animalList.map(animal => (
        <Card
          key={animal.id}
          animals={animal}
          onShowDetail={goToDetail}
        />
      ))
      
      }

    
    </section>
  );
};

export default HomePage;