import React from 'react'
import {Link as ReachLink} from 'react-router-dom'
import { useContext } from 'react'
import Icon from '../../../Style/Icon'
import { AuthContext } from '../../../State/AuthContext'
import {Flex, Spacer, Box, Button, Image, Text, chakra, Link} from '@chakra-ui/react';
import coverFood from '../../../assets/coverFood.png'
function ProfileOptions({ }) {
  const {currentUser} = useContext(AuthContext)
  const bg = 'transparent'

  

  return (
    <Box pos="relative" overflow="hidden" bg={bg} mt={10}>
    <Box maxW="7xl" mx="auto">
      <Box
        pos="relative"
        pb={{
          base: 8,
          sm: 16,
          md: 20,
          lg: 28,
          xl: 32,
        }}
        maxW={{
          lg: "2xl",
        }}
        w={{
          lg: "full",
        }}
        zIndex={1}
        bg={bg}
        border="solid 1px transparent"
      >
        <Icon
          display={{
            base: "none",
            lg: "block",
          }}
          position="absolute"
          right={0}
          top={0}
          bottom={0}
          h="full"
          w={48}
          color={bg}
          transform="translateX(50%)"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </Icon>
   
        <Box
          mx="auto"
          maxW={{
            base: "7xl",
          }}
          px={{
            base: 4,
            sm: 6,
            lg: 8,
          }}
          mt={{
            base: 10,
            sm: 12,
            md: 16,
            lg: 20,
            xl: 28,
          }}
        >
               <chakra.h1
              fontSize={{
                base: "2xl",
                sm: "md",
                md: "2xl",
              }}
              letterSpacing="tight"
              lineHeight="short"
              fontWeight="extrabold"
              color="gray.900"
              _dark={{
                color: "white",
              }}
            >Welcome back {currentUser.name}</chakra.h1>
          <Box
            w="full"
            textAlign={{
              sm: "center",
              lg: "left",
            }}
            justifyContent="center"
            alignItems="center"
          >
            <chakra.h1
              fontSize={{
                base: "4xl",
                sm: "5xl",
                md: "6xl",
              }}
              letterSpacing="tight"
              lineHeight="short"
              fontWeight="extrabold"
              color="gray.900"
              _dark={{
                color: "white",
              }}
            >
              <chakra.span
                display={{
                  base: "block",
                  xl: "inline",
                }}
              >
                Sharing and finding food{" "}
              </chakra.span>
              <chakra.span
                display={{
                  base: "block",
                  xl: "inline",
                }}
                color="brand.600"
                _dark={{
                  color: "brand.400",
                }}
              >
               made easy!
              </chakra.span>
            </chakra.h1>
            <chakra.p
              mt={{
                base: 3,
                sm: 5,
                md: 5,
              }}
              fontSize={{
                sm: "lg",
                md: "xl",
              }}
              maxW={{
                sm: "xl",
              }}
              mx={{
                sm: "auto",
                lg: 0,
              }}
              color="gray.900"
            >
              Did you cook too much and want to share with others? Generosity is a beautiful trait, share with them. Instead, you want to see what your community has made, go find food in your area!
            </chakra.p>
            <Box
              mt={{
                base: 5,
                sm: 8,
              }}
              display={{
                sm: "flex",
              }}
              justifyContent={{
                sm: "center",
                lg: "start",
              }}
              fontWeight="extrabold"
              fontFamily="fantasy"
            >
              <Box rounded="full" shadow="lg">
                <Link as={ReachLink} to="sharefood"
                  w="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="solid 1px transparent"
                  fontSize={{
                    base: "md",
                    md: "lg",
                  }}
                  rounded="md"
                  color="black"
                  bg='rgb(200,204,231)'
                  _hover={{
                    transition: "all 0.3s ease-in",
                    color: "rgb(200,204,231)",
                    bg: "black",
                  }}
                  px={{
                    base: 8,
                    md: 10,
                  }}
                  py={{
                    base: 3,
                    md: 4,
                  }}
                  cursor="pointer"
                >
                  Share in your area!
                </Link>
              </Box>
              <Box mt={[3, 0]} ml={[null, 3]}>
              <Link as={ReachLink} to="findfood"
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
                  Find food near you
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    <Box
      position={{
        lg: "absolute",
      }}
      top={{
        lg: 0,
      }}
      bottom={{
        lg: 0,
      }}
      right={{
        lg: 0,
      }}
      w={{
        lg: "50%",
      }}
      border="solid 1px transparent"
    >
      <Image
        h={[56, 72, 96, "full"]}
        w="full"
        fit="contain"
        src={coverFood}     
        alt="DisplayImageFood"
        loading="lazy"
        zIndex={10}
      />
    </Box>
  </Box>

   
  )
}

export default ProfileOptions