import React, { useCallback, useEffect, useState } from "react";
import { Header, HomeWrapper } from "./style";
import Search from "../../components/search";
import { debounce } from "../../utils/common";
import { useLazyQuery } from "@apollo/client";
import { CONTENT_CARDS } from "../../graphql/queries";
import ListingCard from "../../components/listingCard";
import { SimpleGrid } from "@chakra-ui/react";
import ListingShimmerCard from "../../components/listingShimmerCard";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPosts, { loading, data }] = useLazyQuery(CONTENT_CARDS);

  useEffect(()=>{
    searchPosts({ variables: { keywords: "" } });
  },[])

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
      <Header>
      <Search
        placeHolder="Search for the Podcast"
        value={searchTerm}
        onChange={onChange}
      />
      </Header>
      <section>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing='40px' marginTop={5}>
      {loading && Array.from({length:10})?.map((_,index)=>{
        return <ListingShimmerCard key={index} />
      })}
        {!loading && data?.contentCards?.edges?.map((item,index)=>{
         return <ListingCard key={index} item={item} />
        })}
      </SimpleGrid>
      </section>
    </HomeWrapper>
  );
}

export default Home;
