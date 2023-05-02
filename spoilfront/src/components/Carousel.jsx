import { useState, useRef, useEffect, useContext } from "react";
import {
  Box,
  Flex,
  Image,
  IconButton,
  Button,
  Text,
  useColorModeValue,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { CardsDataContext } from "./CardContext";


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

const Carousel = ({ cardData }) => {
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

  // const navigate = useNavigate();
  // const handleClick=(id)=>{
  //   navigate(`/view/${id}`);
  // }
  //  const { isOpen, onOpen, onClose } = useDisclosure();

  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const btnRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [clickedCards, setClickedCards] = useState([]);
  const { cardsData, setCardsData } = useContext(CardsDataContext);

  useEffect(() => {
    console.log("clickedCards", clickedCards);
      const newCardsData = clickedCards
      setCardsData(newCardsData);
    
    console.log(cardsData);
  }, [clickedCards]);

  const handleOpen = (card) => {
    setSelectedCard(card);
    setIsOpen(true);
    setClickedCards((prevCards) => [...prevCards, card.title]);
  };

  const handleClose = () => {
    setSelectedCard(null);
    setIsOpen(false);
  };

  const handleSave = () => {
    const jsonData = JSON.stringify(clickedCards);
  };

  return (
    <Flex
      bg={useColorModeValue("white", "black")}
      justifyContent="center"
      alignItems="center"
    >
      <IconButton
        aria-label="Previous"
        icon={<ArrowLeftIcon />}
        onClick={handleLeftArrowClick}
      />
      <Box w="80%" display="flex" justifyContent="space-between">
        {cardData.slice(startIndex, startIndex + 4).map((card) => (
          <Box
            ref={btnRef}
            // onClick={onOpen}
            onClick={() => {
              handleOpen(card);
              console.log(cardsData);
            }}
            cursor="pointer"
            key={card.id}
            maxWidth="220px"
            maxHeight="200px"
          >
            <Image src={card.image} alt={card.name} borderRadius="10px" />

            {selectedCard && (
              <Modal
                isOpen={isOpen}
                onClose={handleClose}
                scrollBehavior={scrollBehavior}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>{selectedCard.name}</ModalHeader>
                  <ModalBody whiteSpace="pre-line">
                    <Image src={selectedCard.image} mx="auto" />

                    <p>{selectedCard.spoilers}</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button as="a" href={selectedCard.source} marginRight={"10px"}>
                      Watch Here
                    </Button>
                    <Button onClick={handleClose}>Close</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            )}

            <Text
              textAlign="center"
              paddingTop={1}
              fontFamily="Montserrat, sans-serif"
              fontWeight={"bold"}
            >
              {card.name}
            </Text>
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
