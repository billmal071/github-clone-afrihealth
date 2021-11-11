import { Box, Flex, Link } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { ProfileContext } from "../context/profile.state";
import Menu from "./Menu";

function Header() {
  const profileContext = useContext(ProfileContext);
  const { loading, profile, error } = profileContext;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Flex
        display={{ base: "none", md: "flex" }}
        py="4"
        px="6"
        bgColor="brand.headerColor"
        justify="space-between"
        alignItems="center"
      >
        <div>
          <Flex>
            <i className={"fab fa-github fa-2x"} style={{ color: "white" }} />
            <Input
              size="sm"
              placeholder="Search or jump to"
              borderColor="brand.borderColor"
              borderRadius="md"
              color="white"
              _focus={{}}
              ml="4"
            />
            <Flex alignItems="center">
              <Link
                href="#"
                ml="4"
                color="white"
                fontSize="sm"
                fontWeight="semibold"
                whiteSpace="nowrap"
                _hover={{ color: "gray" }}
              >
                Pull Request
              </Link>
              <Link
                href="#"
                ml="4"
                fontSize="sm"
                fontWeight="semibold"
                color="white"
                _hover={{ color: "gray" }}
              >
                Issues
              </Link>
              <Link
                href="#"
                ml="4"
                fontSize="sm"
                fontWeight="semibold"
                color="white"
                _hover={{ color: "gray" }}
              >
                Marketplace
              </Link>
              <Link
                href="#"
                ml="4"
                fontSize="sm"
                fontWeight="semibold"
                color="white"
                _hover={{ color: "gray" }}
              >
                Explore
              </Link>
            </Flex>
          </Flex>
        </div>
        <Flex alignItems="center" cursor="pointer">
          <Box mr="3">
            <i className="far fa-bell" style={{ color: "white" }} />
          </Box>
          <Flex mr="3">
            <i
              className="fas fa-plus"
              style={{ color: "white", marginRight: "0.3rem" }}
            />
            <i className="fas fa-caret-down" style={{ color: "white" }}></i>
          </Flex>
          <Flex w="5" h="5">
            <img
              src={profile.avatarUrl}
              alt="avata-img"
              style={{ borderRadius: "50%", marginRight: "0.3rem" }}
            />
            <i className="fas fa-caret-down" style={{ color: "white" }}></i>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        display={{ base: "flex", md: "none" }}
        bgColor="brand.headerColor"
        py="4"
        px="6"
        justifyContent="space-between"
      >
        <Box cursor="pointer">
          <i
            className="fas fa-bars fa-lg fa-white"
            style={{ color: "white" }}
            onClick={() => setShowMenu(!showMenu)}
          />
        </Box>
        <Box>
          <i className={"fab fa-github fa-2x"} style={{ color: "white" }} />
        </Box>
        <Box>
          <i className="far fa-bell fa-lg" style={{ color: "white" }} />
        </Box>
      </Flex>
      <Box
        px="4"
        pb="4"
        display={`${showMenu ? "block" : "none"}`}
        bgColor="brand.headerColor"
      >
        <Menu profile={profile} />
      </Box>
    </>
  );
}

export default Header;
