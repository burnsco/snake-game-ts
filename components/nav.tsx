import {
  chakra,
  Flex,
  HStack,
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/core"
import NextLink from "next/link"
import React from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import { GiSnakeBite } from "react-icons/gi"
import NavLink from "./nav-link"

const navlinks = [{ id: "top-link", title: "SNAKE", href: "/" }]

const HeaderContent = () => {
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
      <Flex align="center">
        <NextLink href="/" passHref>
          <chakra.a display="block" aria-label="Chakra UI, Back to homepage">
            <Icon as={GiSnakeBite} boxSize={8} />
          </chakra.a>
        </NextLink>
        <HStack
          as="nav"
          spacing="4"
          ml="24px"
          display={{ base: "none", md: "flex" }}
        >
          {navlinks.map(link => (
            <NavLink
              fontSize="2xl"
              letterSpacing="widest"
              key={link.id}
              href={link.href}
            >
              {link.title}
            </NavLink>
          ))}
        </HStack>
      </Flex>

      <Flex maxW="720px" align="center" color="gray.400">
        <HStack spacing="5"></HStack>
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${text} mode`}
          variant="ghost"
          color="current"
          ml="3"
          onClick={toggleMode}
          icon={<SwitchIcon />}
        />
      </Flex>
    </Flex>
  )
}

const Header = props => {
  const bg = useColorModeValue("white", "gray.800")
  return (
    <chakra.header
      pos="fixed"
      top="0"
      zIndex="1"
      bg={bg}
      left="0"
      right="0"
      borderBottomWidth="2px"
      width="full"
      {...props}
    >
      <chakra.div height="4.5rem" mx="auto" maxW="1200px">
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  )
}

export default Header
