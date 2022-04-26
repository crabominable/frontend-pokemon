import {
  Text,
  Flex } from "@chakra-ui/react";

import {
  ChevronLeftIcon,
  ChevronRightIcon  } from '@chakra-ui/icons'

function Header() {
  return (
    <Flex
      align="center"
      borderRadius={6}
      height={12}
      justify="space-between"
      margin={1}
    >
      <Flex
        align='center'
        backgroundColor='gray.100'
        borderBottomLeftRadius={6}
        borderTopLeftRadius={6}
        height={12}
        justify="center"
        paddingLeft={6}
        width="20%"
      >
        <Text
          color='black.100'
          fontFamily='Nunito'
          fontSize={22}
          fontWeight="bold"
        >
          Tech Pokedex
        </Text>
      </Flex>
      <Flex
        align='center'
        backgroundColor='blackAlpha.800'
        borderBottomRightRadius={6}
        borderTopRightRadius={6}
        height={12}
        justify="center"
        width="80%"
      >
        <button>
          <ChevronLeftIcon w={6} h={6} color='#FFFFFF' />
        </button>
        <Text
          color='#FFFFFF'
          fontFamily='Nunito'
          fontSize={20}
          fontWeight="bold"
          marginLeft={4}
          marginRight={2}
          opacity='40%'
        >
          Letra
        </Text>
        <Text
          color='#FFFFFF'
          fontFamily='Nunito'
          fontSize={20}
          fontWeight="bold"
          marginLeft={2}
          marginRight={4}
        >
          Número
        </Text>
        <button>
          <ChevronRightIcon w={6} h={6} color='#FFFFFF' />
        </button>
      </Flex>
    </Flex>
  )
}

export default Header;