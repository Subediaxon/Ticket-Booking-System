import Hotel1 from "../pictures/ciudad-maderas-MXbM1NrRqtI-unsplash.jpg";
import Hotel2 from "../pictures/edvin-johansson-rlwE8f8anOc-unsplash.jpg";
import Hotel3 from "../pictures/marten-bjork-n_IKQDCyrG0-unsplash.jpg";
import Hotel4 from "../pictures/sara-dubler-Koei_7yYtIo-unsplash.jpg";
import Hotel5 from "../pictures/kelsey-curtis--27u_GzlAFw-unsplash.jpg";
import Hotel6 from "../pictures/prometey-sanchez-noskov-pB7e8JL5KMI-unsplash.jpg";

export const hotelList = [
  {
    id: 1,
    hotel_name: "Dwarika Hotel",
    description: "This is how a description is supposed to look.",
    location: "Gaushala, Kathmandu",
    price: "$2",
    contact: "01-000001, +977 9909090",
    picture: Hotel1,
  },
  {
    id: 2,
    hotel_name: "Naya Hotel",
    description:
      "This is how a multiline description is supposed to look. This may look big. But I need to manage this in any possible way.This is how a multiline description is supposed to look. This may look big. But I need to manage this in any possible way.",
    location: "Gaushala, Kathmandu",
    price: "$2",
    contact: "01-000001",
    picture: Hotel2,
  },
  {
    id: 3,
    hotel_name: "Rooftop hotel",
    location: "Gaushala, Kathmandu",
    price: "$2",
    contact: "01-000001",
    picture: Hotel3,
  },
  {
    id: 4,
    hotel_name: "Bharatpur Resport",
    location: "Bharatpur, Chitwan",
    price: "$100",
    contact: "01-000001",
    picture: Hotel4,
  },
  {
    id: 5,
    hotel_name: "Pokhara paradise Resort",
    location: "Gaushala, Kathmandu",
    price: "$2",
    contact: "01-000001",
    picture: Hotel5,
  },
  {
    id: 6,
    hotel_name: "Hotel Moonlight Dreams",
    location: "Jhapa, Nepal",
    price: "$2",
    contact: "01-000001",
    picture: Hotel6,
  },
];

export const tickets = [
  { id: 1, from: "kathmandu", to: "pokhara" },
  { id: 2, from: "kathmandu", to: "Biratnagar" },
  { id: 3, from: "Chitwan", to: "Biratnagar" },
];
