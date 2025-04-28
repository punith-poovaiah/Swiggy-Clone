import React, { useState, useEffect } from "react";
import { Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { SwiggyData } from "../../Utils/Data";
import useFetchData from "../Hooks/useFetchData";

function Details() {
  // const swiggyData = useFetchData();
  const [swiggyData, setSwiggyData] = useState(null);
  const { id } = useParams();
  console.log(id);

  const fetchdetails = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=${id}&catalog_qa=undefined&query=South%20Indian&submitAction=ENTER`
    );

    const detailsdata = await response.json();
    console.log(detailsdata);

    const adata =
      detailsdata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards;
    console.log(adata);

    setSwiggyData(adata);
  };
  useEffect(() => {
    fetchdetails();
  }, []);

  return (
    <div className="container mt-4 d-flex flex-wrap justify-content-between">
      {swiggyData?.map((items, index) => {
        const menu = items.card.info;
        return (
          <Col key={index}>
            <Card
              style={{
                width: "20rem",
                height: "25rem",
                margin: "1rem",
                border: "none",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#f8f9fa",
                transition: "transform 0.2s",
                cursor: "pointer",
              }}
            >
              <Card.Body>
                {/* Card Image */}
                <Card.Img
                  variant="top"
                  onClick={() => navigate(`/details/${items.info.id}`)}
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${menu.imageId}`}
                  style={{
                    height: "160px",
                    objectFit: "cover",
                  }}
                />
                <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {menu.name}
                </Card.Title>
                <Card.Text style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                  {menu.description}
                </Card.Text>
                <Card.Text style={{ fontSize: "1rem", fontWeight: "bold" }}>
                  Price: {menu.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </div>
  );

  // ------------------------------------------------------------------------------------------------------------------------------------

  // const restaurantData =
  //   SwiggyData?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants.find(
  //     (items) => items.info.id === id
  //   );

  // if (!restaurantData) {
  //   return <h2>Restaurant not found</h2>;
  // }

  // return (
  //   <div className="container mt-4">
  //     <h1>{restaurantData.info.name}</h1>
  //     <img
  //       src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurantData.info.cloudinaryImageId}`}
  //       alt={restaurantData.info.name}
  //       className="img-fluid w-50 h-50"
  //     />
  //     <p>
  //       <b>Rating:</b> {restaurantData.info.avgRating}
  //     </p>
  //     <p>
  //       <b>Delivery Time:</b> {restaurantData.info.sla.slaString}
  //     </p>

  //     <p>
  //       <b>Address:</b> {restaurantData.info.locality}
  //     </p>
  //     <p>
  //       <b>Cuisines:</b> {restaurantData.info.cuisines.join(", ")}
  //     </p>
  //   </div>
  // );
}

export default Details;
