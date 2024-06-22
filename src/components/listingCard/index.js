import React from "react";
import PropTypes from "prop-types";
import { ListingCardWrapper } from "./style";
import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  Center,
  Circle,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Progress,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ShareIcon } from "../../assets/icons/shareIcon";
import TimerIcon from "../../assets/icons/timer";
import { RiHeadphoneFill } from "react-icons/ri";
import { PiClockBold } from "react-icons/pi";
import { LuShare2, LuBookmark } from "react-icons/lu";

function ListingCard(props) {
  const isLoaded = true;
  return (
    <Box
      borderWidth="0px"
      borderRadius="lg"
      overflow="hidden"
      maxW="244px"
      backgroundColor={"white"}
    >
      <Skeleton position="relative" height='120px' isLoaded={isLoaded}>
      <Box position="relative" height='120px'>
        <Image
          src="https://images.staging.tigerhall.io/users/2023-09-13/7f7ec0b5-c32c-4f70-89ed-c7f80925c449-460114c6-a8d7-498c-8541-567e82bc4069.png"
          alt="Course Image"
          objectFit='cover'
          height={'100%'}
          width={'100%'}
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
        >
          <Flex>
            <Center>
              <TimerIcon mr={1} />
              <Text ml={1}>30% Completed</Text>
            </Center>
          </Flex>
        </Badge>
        <Flex
          position="absolute"
          bottom="0rem"
          width={"100%"}
          padding={2}
          justifyContent="space-between"
        >
          <Circle bg={"red"} size="24px">
            <RiHeadphoneFill color="white" />
          </Circle>
          <Center px={2} py={1} bg="black" borderRadius="100px" opacity={"0.7"}>
            <PiClockBold />
            <Badge bg="none" textTransform={"none"} color={"white"}>
              20m
            </Badge>
          </Center>
        </Flex>
        <Progress
          colorScheme="orange"
          size="sm"
          value={30}
          width="full"
          height={"2px"}
        />
      </Box>
      </Skeleton>
      <Box p="2">
        <VStack align="start" spacing={2}>
          <Box>
          <Skeleton isLoaded={isLoaded}>
            <Text fontSize="12px" color="gray.700">
              COMMUNICATING AS A LEADER
            </Text>
          </Skeleton>
          <Skeleton isLoaded={isLoaded} marginTop={'2px'}>
            <Text
              fontSize="16px"
              color={"black"}
              fontWeight="700"
              lineHeight={"19.2px"}
              letterSpacing={"-moz-initial"}
            >
              Peak Performance: Going From Good to Great with Simon Taudel
            </Text>
            </Skeleton>
          </Box>
          <Box fontSize="12px">
          <Skeleton isLoaded={isLoaded}>
            <Text color="gray.800" lineHeight='14.4px' letterSpacing={'1.5%'} fontWeight={500}>
              Jane Doe
            </Text>
            </Skeleton>
          <Skeleton isLoaded={isLoaded} marginTop={'2px'}>

            <Text color="gray.700" lineHeight='14.4px' letterSpacing={'1.5%'} fontWeight={700}>
              Subway APAC
            </Text>
          </Skeleton>

          </Box>
          
          <Box
            display="flex"
            justifyContent="flex-end"
            width="100%"
            color={"orange"}
          >
            <Skeleton width={'30%'} display="flex"
            justifyContent="flex-end" isLoaded={isLoaded}>
            <Box width="max-content">
              <LuShare2 />
            </Box>
            <Box width="max-content" ml={2}>
              <LuBookmark />
            </Box>
            </Skeleton>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

// ListingCard.propTypes = {}

export default ListingCard;
