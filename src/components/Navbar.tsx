"use client";
import { Box, Text, Flex, HStack, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box>
      {/* Logo Part */}
      <Flex>
        <Box
          ml="150px"
          mt="50px"
          border="3px solid black"
          w="25px"
          h="25px"
          borderRadius="90px"
          fontWeight="extrabold "
        >
          <Text mx="4px" mt="-3px">
            A
          </Text>
        </Box>
        <Box ml="3px" mt="50px" fontWeight="extrabold">
          Logo
        </Box>
      </Flex>

      {/* Link Part */}
      <Flex
        justify="flex-end"
        mt="-40px"
        mr="150px"
        display={{ base: "none", lg: "flex" }}
      >
        <HStack fontWeight="bold" spacing="40px">
          <Link href="/">How its Works</Link>
          <Link href="/">Crypto</Link>
          <Link href="/">MarketPlace</Link>
          <Link href="/">Sign In</Link>
          <Button bg="black" px="40px" color="white" border="2px solid black">
            Get Started
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
