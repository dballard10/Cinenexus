import Card from "./Card";
import dragon from "@/components/assets/dragon.webp";
import knight from "@/components/assets/knight.webp";
import wizard from "@/components/assets/wizard.webp";

const CardGrid = () => {
  const images = [dragon, knight, wizard];

  // Function to get a random image from the array
  const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  const cards = [
    {
      title: "Show 1",
      description: "Show about a cool person.",
      image: getRandomImage(),
    },
    {
      title: "Show 2",
      description: "Show about a cool person.",
      image: getRandomImage(),
    },
    {
      title: "Show 3",
      description: "Show about a cool person.",
      image: getRandomImage(),
    },
    {
      title: "Show 4",
      description: "Show about a cool person.",
      image: getRandomImage(),
    },
    {
      title: "Show 5",
      description: "Show about a cool person.",
      image: getRandomImage(),
    },
    {
      title: "Show 6",
      description: "Show about a cool person.",
      image: getRandomImage(),
    },
    {
      title: "Show 7",
      description: "Show about a cool person.",
      image: getRandomImage(),
    },
    {
      title: "Show 8",
      description: "Show about a cool person.",
      image: getRandomImage(),
    },
    {
      title: "Show 9",
      description: "Show about a cool person.",
      image: getRandomImage(),
    },
    {
      title: "Show 10",
      description: "Show about a cool person.",
      image: getRandomImage(),
    },
    {
      title: "Show 11",
      description: "Show about a cool person.",
      image: getRandomImage(),
    },
    {
      title: "Show 12",
      description: "Show about a cool person.",
      image: getRandomImage(),
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cards.map((card, index) => (
        <Card
          key={`${card.title}-${index}`}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default CardGrid;
