import { Flex, Link, Text } from "@chakra-ui/layout";
import React from "react";

function Footer() {
  return (
    <Flex
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems="center"
      wrap="wrap"
      py="12"
      borderTop="1px solid gray"
      mx={{base: "4", md: "8", lg: "16"}}
      mt="4"
    >
      <Flex
        wrap="wrap"
        justifyContent={{ base: "center", lg: "space-between" }}
        alignItems="center"
        mx="auto"
        px="5"
      >
        <Flex wrap="wrap" justifyContent="center">
          <Text color="brand.grayColor" fontSize="xs">
            &copy; 2021 Github inc
          </Text>
          <Link
            href="#"
            whiteSpace="nowrap"
            fontSize="xs"
            color="brand.textColor"
            ml="8"
            _hover={{ textDecoration: "underline" }}
          >
            Terms
          </Link>
          <Link
            href="#"
            whiteSpace="nowrap"
            fontSize="xs"
            color="brand.textColor"
            ml="8"
            _hover={{ textDecoration: "underline" }}
          >
            Privacy
          </Link>
          <Link
            href="#"
            whiteSpace="nowrap"
            fontSize="xs"
            color="brand.textColor"
            ml="8"
            _hover={{ textDecoration: "underline" }}
          >
            Security
          </Link>
          <Link
            href="#"
            whiteSpace="nowrap"
            fontSize="xs"
            color="brand.textColor"
            ml="8"
            _hover={{ textDecoration: "underline" }}
          >
            Status
          </Link>
          <Link
            href="#"
            whiteSpace="nowrap"
            fontSize="xs"
            color="brand.textColor"
            ml="8"
            mr="4"
            _hover={{ textDecoration: "underline" }}
          >
            Docs
          </Link>
        </Flex>
        <Flex display={{ base: "none", lg: "flex" }} mx="16">
          <i className="fab fa-github fa-lg" style={{ color: "gray" }} />
        </Flex>
        <Flex wrap="wrap" justifyContent="center">
          <Link
            href="#"
            whiteSpace="nowrap"
            fontSize="xs"
            color="brand.textColor"
            ml="4"
            _hover={{ textDecoration: "underline" }}
          >
            Contact Github
          </Link>
          <Link
            href="#"
            whiteSpace="nowrap"
            fontSize="xs"
            color="brand.textColor"
            ml="8"
            _hover={{ textDecoration: "underline" }}
          >
            Pricing
          </Link>
          <Link
            href="#"
            whiteSpace="nowrap"
            fontSize="xs"
            color="brand.textColor"
            ml="8"
            _hover={{ textDecoration: "underline" }}
          >
            Api
          </Link>
          <Link
            href="#"
            whiteSpace="nowrap"
            fontSize="xs"
            color="brand.textColor"
            ml="8"
            _hover={{ textDecoration: "underline" }}
          >
            Training
          </Link>
          <Link
            href="#"
            whiteSpace="nowrap"
            fontSize="xs"
            color="brand.textColor"
            ml="8"
            _hover={{ textDecoration: "underline" }}
          >
            Blog
          </Link>
          <Link
            href="#"
            whiteSpace="nowrap"
            fontSize="xs"
            color="brand.textColor"
            ml="8"
            _hover={{ textDecoration: "underline" }}
          >
            About
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
