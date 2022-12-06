const CardsFound = ({ filtered }) => {
  return (
    <div className="cardsNumber">
      <button className="btn btn-primary disabled cardsNumber mt-4 ">
        Cards Found: {filtered.length}
      </button>
    </div>
  );
};
export default CardsFound;
