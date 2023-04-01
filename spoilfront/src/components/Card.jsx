import { Box, Text } from "@chakra-ui/react";

function Card({ title, description, imageUrl }) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Box as="img" src={imageUrl} alt={title} h="200px" w="100%" />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text fontWeight="semibold" fontSize="xl" mb={2}>
            {title}
          </Text>
        </Box>

        <Text>{description}</Text>
      </Box>
    </Box>
  );
}

export default Card;