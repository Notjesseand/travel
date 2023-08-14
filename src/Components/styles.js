import Background from "../assets/background4.jpeg";
import Discover from "../assets/discover.jpeg";
import { IoMdPin } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { FaGift } from "react-icons/fa";
import { SiHappycow } from "react-icons/si";
import Image1 from "../assets/tour1.jpeg";
import Image2 from "../assets/tour2.jpeg";
import Image3 from "../assets/tour3.jpeg";
import Image4 from "../assets/tour4.jpeg";
import Image5 from "../assets/tour5.jpeg";
import Image6 from "../assets/tour6.jpeg";
import Image7 from "../assets/tour7.jpeg";
import Image8 from "../assets/tour8.jpeg";
import Image9 from "../assets/tour9.jpeg";
import Image10 from "../assets/tour10.jpeg";
import Image11 from "../assets/tour11.jpeg";
import Image12 from "../assets/tour12.jpeg";
import Image13 from "../assets/tour13.jpeg";

export const overlayStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.43)", 
  width: "100%",
  position: "absolute",
  height: "100vh",
  top: 0,
  left: 0,
  zIndex: 0, 
};

export const backgroundImageStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
};

export const PageData = [
  {
    text: " Embark on Unforgettable Journeys with Us",
    icon: IoMdPin,
  },
  {
    text: " Discover the World's Most Breathtaking Destinations",
    icon: BsGlobeAsiaAustralia,
  },
  {
    text: "Explore, Dream, and Wander – Your Adventure Awaits",
    icon: MdOutlineExplore,
  },
  {
    text: "Customize Your Dream Vacation with Our Travel Packages",
    icon: FaGift,
  },
  {
    text: " Adventure Awaits: Choose Your Perfect Tour Package  ",
    icon: SiHappycow,
  }
];

export const ToursAds = [
  {
    image: Image1,
  },
  {
    image: Image2,
  },
  {
    image: Image3,
  },
  {
    image: Image4,
  },
  {
    image: Image5,
  },
  {
    image: Image6,
  },
  {
    image: Image7,
  },
  {
    image: Image8,
  },
  {
    image: Image9,
  },
  {
    image: Image10,
  },
  {
    image: Image11,
  },
  {
    image: Image12,
  },
  {
    image: Image13,
  },
];

export const DiscoverOverlayStyle = {
  backgroundColor: "rgba(0, 0, 0, .6)",
  width: "100%",
  position: "absolute",
  height: "100vh",
  left: 0,
  zIndex: 0,
};

export const DiscoverImageStyle = {
  backgroundImage: `url(${Discover})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
};