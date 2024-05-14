import Background from "@/public/background4.jpeg";
import Discover from "@/public/discover.jpeg";
import { IoMdPin } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { FaGift } from "react-icons/fa";
import { SiHappycow } from "react-icons/si";
import Image1 from "@/public/tour1.jpeg";
import Image2 from "@/public/tour2.jpeg";
import Image3 from "@/public/tour3.jpeg";
import Image4 from "@/public/tour4.jpeg";
import Image5 from "@/public/tour5.jpeg";
import Image6 from "@/public/tour6.jpeg";
import Image7 from "@/public/tour7.jpeg";
import Image8 from "@/public/tour8.jpeg";
import Image9 from "@/public/tour9.jpeg";
import Image10 from "@/public/tour10.jpeg";
import Image11 from "@/public/tour11.jpeg";
import Image12 from "@/public/tour12.jpeg";
import Image13 from "@/public/tour13.jpeg";

export const overlayStyle: React.CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.43)",
  width: "100%",
  position: "absolute",
  height: "100vh",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundAttachment: "fixed",
};

export const backgroundImageStyle: React.CSSProperties = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundAttachment: "fixed",
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
  },
];

export const ToursAds = [
  {
    image: "tour1.jpeg",
  },
  {
    image: "tour2.jpeg",
  },
  {
    image: "tour3.jpeg",
  },
  {
    image: "tour4.jpeg",
  },
  {
    image: "tour5.jpeg",
  },
  {
    image: "tour6.jpeg",
  },
  {
    image: "tour7.jpeg",
  },
  {
    image: "tour8.jpeg",
  },
  {
    image: "tour9.jpeg",
  },
  {
    image: "tour10.jpeg",
  },
  {
    image: "tour11.jpeg",
  },
  {
    image: "tour12.jpeg",
  },
  {
    image: "tour13.jpeg",
  },
];

export const DiscoverOverlayStyle: React.CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, .6)",
  width: "100%",
  position: "absolute",
  height: "100vh",
  backgroundAttachment: "fixed",
  left: 0,
  zIndex: 0,
};

export const DiscoverImageStyle: React.CSSProperties = {
  backgroundImage: `url(${Discover})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundAttachment: "fixed",
};
