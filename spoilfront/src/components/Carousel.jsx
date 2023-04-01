import { useState } from "react";
import { Box, Flex, Image, IconButton ,Text} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";


// const cardData = [
//   {
//     id: 1,
//     image: "https://picsum.photos/id/1018/300/200",
//     title: "Card 1",
//   },
//   {
//     id: 2,
//     image: "https://picsum.photos/id/1015/300/200",
//     title: "Card 2",
//   },
//   {
//     id: 3,
//     image: "https://picsum.photos/id/1005/300/200",
//     title: "Card 3",
//   },
//   {
//     id: 4,
//     image: "https://picsum.photos/id/1025/300/200",
//     title: "Card 4",
//   },
//   {
//     id: 5,
//     image: "https://picsum.photos/id/1045/300/200",
//     title: "Card 5",
//   },
//   {
//     id: 6,
//     image: "https://picsum.photos/id/1074/300/200",
//     title: "Card 6",
//   },
// ];

const Carousel = ({cardData}) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleRightArrowClick = () => {
    if (startIndex === cardData.length - 4) {
      setStartIndex(0);
    } else {
      setStartIndex(startIndex + 1);
    }
  };

  const handleLeftArrowClick = () => {
    if (startIndex === 0) {
      setStartIndex(cardData.length - 4);
    } else {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <Flex bg="white" justifyContent="center" alignItems="center">
      <IconButton
        aria-label="Previous"
        icon={<ArrowLeftIcon />}
        onClick={handleLeftArrowClick}
      />
      <Box w="80%" display="flex" justifyContent="space-between">
        {cardData
          .slice(startIndex, startIndex + 4)
          .map((card) => (
            <Box key={card.id}  maxWidth="220px" maxHeight="200px">
              <Image src={card.image} alt={card.title} borderRadius="10px"/>
              <Text textAlign="center" paddingTop={1} fontFamily="Montserrat, sans-serif">{card.title}</Text>
            </Box>
          ))}
      </Box>
      <IconButton
        aria-label="Next"
        icon={<ArrowRightIcon />}
        onClick={handleRightArrowClick}
      />
    </Flex>
  );
};

export default Carousel;
