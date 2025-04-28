import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { SwiggyData } from "../../Utils/Data";
import { MdStars } from "react-icons/md";

function Contents() {
  const MyData = SwiggyData;

  const navigate = useNavigate();

  return (
    <div className="d-flex flex-wrap justify-content-between">
      {MyData?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (items) => {
          console.log(items);
          return (
            <Card
              style={{
                width: "18rem",
                margin: "1rem",
                border: "none",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                overflow: "hidden",
              }}
              key={items.info.id}
            >
              {/* Card Image */}
              <Card.Img
                variant="top"
                onClick={() => navigate(`/details/${items.info.id}`)}
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${items.info.cloudinaryImageId}`}
                style={{
                  height: "160px",
                  objectFit: "cover",
                }}
              />

              {/* Card Body */}
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  {items.info.name}
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: "0.9rem",
                    color: "gray",
                  }}
                >
                  {items.info.cuisines.join(", ")}
                </Card.Text>

                {/* Ratings and Delivery Time */}
                <Card.Text>
                  <span style={{ color: "#4CAF50", fontWeight: "bold" }}>
                    <MdStars style={{ verticalAlign: "middle" }} />{" "}
                    {items.info.avgRating}
                  </span>{" "}
                  • {items.info.sla.slaString}
                </Card.Text>

                <Card.Text style={{ fontSize: "0.9rem", color: "gray" }}>
                  {items.info.locality}
                </Card.Text>

                <Button
                  variant="dark"
                  onClick={() => navigate(`/details/${items.info.id}`)}
                  style={{
                    backgroundColor: "#343a40",
                    border: "none",
                    width: "100%",
                    fontWeight: "bold",
                  }}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          );
        }
      )}
    </div>
  );
}

export default Contents;
