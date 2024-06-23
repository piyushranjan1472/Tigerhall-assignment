import React from "react";
import {
  Badge,
  Box,
  Center,
  Circle,
  Flex,
  Image,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";
import TimerIcon from "../../assets/icons/timer";
import { RiHeadphoneFill } from "react-icons/ri";
import { PiClockBold } from "react-icons/pi";
import { LuShare2, LuBookmark } from "react-icons/lu";
import { LISTING_CARD_DETAILS } from "../../utils/constants";
import { convertSecondsToMinuteString } from "../../utils/common";

function ListingCard({ item = {} }) {
  const { categories = [], image = {}, name, length = 0, experts = [] } = item;
  return (
    <Box
      borderWidth="0px"
      borderRadius="lg"
      overflow="hidden"
      width="244px"
      height={"272px"}
      backgroundColor={"white"}
      position={"relative"}
    >
      <Box position="relative" height="120px">
        <Image
          src={image?.uri}
          alt="Course Image"
          objectFit="cover"
          height={"100%"}
          width={"100%"}
        />
        <Badge
          position="absolute"
          top="0rem"
          left="0rem"
          color={"grey.900"}
          fontWeight={"700"}
          backgroundColor={"white"}
          justifyContent={"Center"}
          padding={"8px"}
          textTransform={"none"}
          borderBottomRightRadius={"md"}
          lineHeight={"14px"}
        >
          <Flex>
            <Center>
              <TimerIcon mr={1} />
              <Text ml={1}>{LISTING_CARD_DETAILS.CARD_PROGRESS}</Text>
            </Center>
          </Flex>
        </Badge>
        <Flex
          position="absolute"
          bottom="0rem"
          width={"100%"}
          padding={"8px"}
          justifyContent="space-between"
        >
          <Circle bg={"orange.600"} size="24px">
            <RiHeadphoneFill color="white" />
          </Circle>
          <Center px={2} py={1} bg="black" borderRadius="100px" opacity={"0.7"}>
            <PiClockBold />
            <Badge bg="none" textTransform={"none"} color={"white"}>
              {convertSecondsToMinuteString(length)}
            </Badge>
          </Center>
        </Flex>
        <Progress
          sx={{
            "& > div:first-of-type": {
              bg: "orage.600", // Custom color for the progress bar
            },
            bg: "grey.400", // Custom color for the track
          }}
          colorScheme="orange"
          size="sm"
          value={30}
          width="full"
          height={"2px"}
        />
      </Box>
      <Box p="2">
        <VStack align="start" spacing={2}>
          <Box>
            <Text
              fontSize="12px"
              color="grey.700"
              lineHeight={"18px"}
              textTransform={"uppercase"}
            >
              {categories?.length > 0 && categories[0]?.name}
            </Text>
            <Text
              fontSize="16px"
              color={"black"}
              fontWeight="700"
              lineHeight={"19.2px"}
              letterSpacing={"-moz-initial"}
              textTransform={"capitalize"}
            >
              {name}
            </Text>
          </Box>
          <Box fontSize="12px">
            <Text
              color="grey.800"
              lineHeight="14.4px"
              letterSpacing={"1.5%"}
              fontWeight={500}
              textTransform={"capitalize"}
            >
              {experts?.length > 0 &&
                `${experts[0]?.firstName} ${experts[0]?.lastName}`}
            </Text>
            <Text
              color="grey.700"
              lineHeight="14.4px"
              letterSpacing={"1.5%"}
              fontWeight={700}
              textTransform={"capitalize"}
            >
              {experts?.length > 0 && `${experts[0]?.company}`}
            </Text>
          </Box>
        </VStack>
      </Box>
      <Box
        position={"absolute"}
        bottom={"12px"}
        right={"8px"}
        display="flex"
        color={"orange.600"}
      >
        <Box width="max-content">
          <LuShare2 />
        </Box>
        <Box width="max-content" ml={2}>
          <LuBookmark />
        </Box>
      </Box>
    </Box>
  );
}


export default ListingCard;
