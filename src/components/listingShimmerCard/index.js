import { Box, Skeleton, VStack } from '@chakra-ui/react'
import React from 'react'

function ListingShimmerCard() {
    const loading = true;
    const lineHeight = '18px';
  return (
    <Box
    borderWidth="0px"
    borderRadius="lg"
    overflow="hidden"
    width="244px"
    height={"272px"}
    backgroundColor={"white"}
  >
    <Skeleton position="relative" height="120px" isLoaded={!loading}>
    </Skeleton>
    <Box p="2">
      <VStack align="start" spacing={2}>
        <Box width={'100%'}>
          <Skeleton height={lineHeight} isLoaded={!loading} >
          </Skeleton>
          <Skeleton height={'40px'} isLoaded={!loading} marginTop={"2px"}>
          </Skeleton>
        </Box>
        <Box width={'40%'} fontSize="12px">
          <Skeleton height={lineHeight} isLoaded={!loading}>
          </Skeleton>
          <Skeleton height={lineHeight} isLoaded={!loading} marginTop={"2px"}>
          </Skeleton>
        </Box>

        <Box
          display="flex"
          justifyContent="flex-end"
          width="100%"
        >
          <Skeleton
            width={"30%"}
            display="flex"
            justifyContent="flex-end"
            isLoaded={!loading}
            height={lineHeight}
          >
          </Skeleton>
        </Box>
      </VStack>
    </Box>
  </Box>
  )
}

export default ListingShimmerCard