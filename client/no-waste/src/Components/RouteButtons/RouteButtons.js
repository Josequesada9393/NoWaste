import React from 'react'
import {Flex, Spacer, Box, Button, Image, Text, chakra, Link} from '@chakra-ui/react';
import coverFood from '../../assets/coverFood.png';
import { Link as ReachLink } from 'react-router-dom';
function RouteButtons({route, text}) {
  return (
    <Flex
  bg="transparent"
  p={30}
  w="full"
  alignItems="center"
  justifyContent="center"
>
<Box mt={[3, 0]} ml={[null, 3]}>
              <Link as={ReachLink} to={route}
                  w="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  px={{
                    base: 8,
                    md: 10,
                  }}
                  py={{
                    base: 3,
                    md: 4,
                  }}
                  border="solid 1px transparent"
                  fontSize={{
                    base: "md",
                    md: "lg",
                  }}
                  fontWeight={'bolder'}
                  rounded="md"
                  color="rgb(200,204,231)"
                  bg="black"
                  _hover={{
                    transition: "all 0.3s ease-in",
                    bg: "rgb(200, 204, 231)",
                    color: "black"
                  }}
                  cursor="pointer"
                >
                  {text}
                </Link>
              </Box>
</Flex>
  )
}

export default RouteButtons