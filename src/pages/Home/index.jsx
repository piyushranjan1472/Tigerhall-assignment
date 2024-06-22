import React, { useCallback, useEffect, useState } from "react";
import { HomeWrapper } from "./style";
import Search from "../../components/search";
import { debounce } from "../../utils/common";
import { useLazyQuery } from "@apollo/client";
import { CONTENT_CARDS } from "../../graphql/queries";
import ListingCard from "../../components/listingCard";
import { Input, InputGroup, InputLeftElement, SimpleGrid, Stack } from "@chakra-ui/react";
import { PhoneIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPosts, { loading, data, error }] = useLazyQuery(CONTENT_CARDS);

  const handleSearch = useCallback(
    debounce((term) => {
      searchPosts({ variables: { keywords: term } });
    }, 300), // debounce delay in milliseconds
    []
  );

  const onChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  return (
    <HomeWrapper>
      <Search
        placeHolder="Search for the Podcast"
        value={searchTerm}
        onChange={onChange}
      />
      <SimpleGrid columns={[1, 2, 3]} spacing='40px' marginTop={5}>
        <ListingCard/>
        <ListingCard/>
        <ListingCard/>
        <ListingCard/>
        <ListingCard/>

      </SimpleGrid>
    </HomeWrapper>
  );
}

export default Home;
