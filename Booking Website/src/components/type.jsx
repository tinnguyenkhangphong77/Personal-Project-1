import "../static/type.scss";
import typeData from "../data/type.json";

const Type = () => {
  return (
    <>
      <h2>Browse by property type</h2>
      <div className="flex Type-card">
        {typeData.map((item) => {
          return (
            <span key={item.name} className="type-item">
              <div className="type-img">
                <img src={require(`../images/${item.image}`)} alt="qqq" />
              </div>
              <div className="type-title">
                <p>
                  <strong>{item.name}</strong>
                </p>
                <p>{item.count} hotels</p>
              </div>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Type;
