const Card = ({ animals, onShowDetail }) => {

  return (
    <section className="CardBody">
      <h2 class = "AnimalNaam">{animals.name}</h2>
      <img class ="ImageDier" src={animals.imageUrl} alt="" />
      <button class = "ButtonDier" onClick={() => onShowDetail(animals.id)}>
        meer info
      </button>
    </section>
  );
};


export default Card;