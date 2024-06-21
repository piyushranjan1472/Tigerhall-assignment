import React from "react";
import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {SearchWrapper} from './style'

function Search({ placeHolder = "", value = "", onChange = () => {} }) {
  return (
    <SearchWrapper>
      <Stack spacing={4} width={"100%"}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="white" />
          </InputLeftElement>
          <Input
            backgroundColor="grey.900"
            type="text"
            placeholder={placeHolder}
            focusBorderColor="white"
            border="1px"
            borderColor={"grey.700"}
            color={"white"}
            value={value}
            onChange={onChange}
          />
        </InputGroup>
      </Stack>
    </SearchWrapper>
  );
}

export default Search;
