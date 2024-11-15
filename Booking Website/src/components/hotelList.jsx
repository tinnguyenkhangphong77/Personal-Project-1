import { useNavigate } from "react-router-dom";
import "../static/hotelList.scss";

const HotelList = (props) => {
  // Sử dụng hook useNavigate để điều hướng đến các route trong ứng dụng
  const navigate = useNavigate();

  return (
    <>
      <h2>Home guests love</h2>

      <div className="flex hotel-list">
        {props.data.map((item) => {
          return (
            <div key={item.city} className="hotel-card flex-column">
              <img
                src={require(`../images/${item.image_url}`)}
                alt={item.name}
                className="hotel-list-img"
              />

              <p
                className="link-detail"
                onClick={() => {
                  navigate("/detail");
                  window.scrollTo(0, 0); // Scroll về đầu trang
                }}
              >
                {item.name}
              </p>
              <p>{item.city}</p>
              <p className="hotel-price">Starting from {item.price}</p>
              <div>
                <span className="hotel-rate">{item.rate}</span>
                <span>{item.type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HotelList;
