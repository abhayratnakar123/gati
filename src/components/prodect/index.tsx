import React from 'react';
import AboutCard from "@/components/Card/AboutCard";


const MissionVision = [
  {
    title: "Customer Satisfaction",
    description:
      "We don’t believe in a transactional approach, when we present our offerings to clients, we assume the role of technology partners that lasts a lifetime. Our offerings are crafted in a manner that holds with customer satisfaction as a priority, backed by seamless communication channels.",
  },
  {
    title: "Gati Way of life",
    description:
      "We aim to challenging and motivating our employees to perform above their potential. With an encouraging environment and constructive inputs we drive employees to better themselves while nurturing creativity and revolutionary ideas for a better tomorrow.",
  },

  {
    title: "Giving It Back To Society",
    description:
      "Extending an offering of Industrial Training to several college students, we give back to the community. While it furnishes students with exposure to niches it also acts as a unique learning curve.",
  },
];


const ProductCard = ({ icon, title, description }:any) => {
  return (
    <div className="flex gap-20 mt-[100px] justify-center mx-28">
    {MissionVision.map((item, index) => (
      <AboutCard
        key={index}
        title={item.title}
        description={item.description}
        type={index + 1}
      />
    
    ))}

    {/* <AboutCard/>


  <AboutCard/> */}
  </div>
  );
};

export default ProductCard;