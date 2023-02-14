import React, { useState } from "react";
import ReactSlickCenterMode from "react-slick";
import "./../index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
  dots: true,
  infinite: false,
};
var settings2 = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};
const Home = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  console.log("items", items);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "68%" }}>
          <ReactSlickCenterMode {...settings}>
            <div>
              <img src="http://placekitten.com/g/800/350" />
            </div>
            <div>
              <img src="http://placekitten.com/g/800/350" />
            </div>
            <div>
              <img src="http://placekitten.com/g/800/350" />
            </div>
            <div>
              <img src="http://placekitten.com/g/800/350" />
            </div>
          </ReactSlickCenterMode>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              width: "90%",
              color: "#fff",
              backgroundColor: "pink",
              alignSelf: "center",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "50px",
            }}
          >
            ADD
          </div>
        </div>
        <div
          style={{
            width: "29%",
            height: "506px",
            color: "green",
            backgroundColor: "red",
            overflowY: "auto",
          }}
        >
          {items.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                  width: "100%",
                  color: "#fff",
                  backgroundColor: "green",
                  marginTop: "5px",
                }}
                key={item}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div style={{ marginTop: "10px" }}>
          <h3>Trending</h3>
          <ReactSlickCenterMode {...settings2}>
            <div>
              <img src="http://placekitten.com/g/295/195" />
            </div>
            <div>
              <img src="http://placekitten.com/g/295/195" />
            </div>
            <div>
              <img src="http://placekitten.com/g/295/195" />
            </div>
            <div>
              <img src="http://placekitten.com/g/295/195" />
            </div>
            <div>
              <img src="http://placekitten.com/g/295/195" />
            </div>
            <div>
              <img src="http://placekitten.com/g/295/195" />
            </div>
          </ReactSlickCenterMode>
        </div>
      </div>
    </div>
  );
};

export default Home;
