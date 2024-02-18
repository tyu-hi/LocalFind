import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap/lib/InputGroup";
  //there is an issue here!
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

interface MenuData {
  id: number;
  title: string;
  description: string;
}

interface RestaurantData {
  name: string;
  image: string;
  mapApi: string;
  address: string;
}

const [restaurantInfo, setRestaurantInfo] = useState({
  name: "",
  image: "",
  mapApi: "",
  address: "",
});

const [menuItems, setMenuItems] = useState<MenuData[]>([]);

useEffect(() => {
  // Fetch restaurant information from your database
  // Example: fetch('/api/restaurant').then(response => response.json()).then(data => setRestaurantInfo(data));
  // Fetch menu items from your database
  // Example: fetch('/api/menu').then(response => response.json()).then(data => setMenuItems(data));
  // Replace the above lines with the actual fetching logic from your database
  // For demonstration purpose, let's assume you have static data
  const restaurantData: RestaurantData = {
    name: "Restaurant Name",
    image: "restaurant-image-url",
    mapApi: "Map API",
    address: "Restaurant Address",
  };
  const menuData: MenuData[] = [
    { id: 1, title: "Item 1", description: "Description for Item 1" },
    { id: 2, title: "Item 2", description: "Description for Item 2" },
    { id: 3, title: "Item 3", description: "Description for Item 3" },
    { id: 4, title: "Item 4", description: "Description for Item 4" },
    // Add more items as needed
  ];
  setRestaurantInfo(restaurantData);
  setMenuItems(menuData);
}, []);

function RestaurantView() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>{restaurantInfo.name}</h1>
          <img src={restaurantInfo.image} alt="Restaurant" />
        </Col>
      </Row>

      <Row>
        <Col sm={6}>
          <Row>Title</Row>
          <Row>Description</Row>
        </Col>
        <Col sm={{ span: 4, offset: 2 }}>
          <h1>Map Component</h1>
          <Row>{restaurantInfo.mapApi}</Row>
          <Row>{restaurantInfo.address}</Row>
          <Row>
            <Button>Reserve</Button>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <h1>Menu</h1>
          <Slider {...settings}>
            {menuItems.map((item) => (
              <div key={item.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>

      <Row>
        <Col>Reviews</Col>
      </Row>
    </Container>
  );
}

export default RestaurantView;
