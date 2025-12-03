import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import animals from '../animals.js';
import Card from '../components/Card';

const HomePage = () => {
  const navigate = useNavigate();


  const [animalList] = useState(animals);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredAnimals = animalList.filter((animal) =>
    animal.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const goToDetail = (animalsId) => {
    navigate(`/animal/${animalsId}`);
  };

  return (
    <section>
      <h2 className="h2Animal">Zoo app</h2>

      <div className="search">
        <input
          type="text"
          placeholder="zoek een dier op..."
          onChange={handleChange}
          value={searchInput}
        />
      </div>


      {filteredAnimals.map(animal => (
        <Card
          key={animal.id}
          animals={animal}
          onShowDetail={goToDetail}
        />
      ))}
    </section>
  );
};

export default HomePage;
