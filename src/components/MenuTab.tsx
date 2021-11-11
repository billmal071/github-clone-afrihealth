import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { useEffect, useRef } from "react";
import { ProfileType } from "../interfaces/commonTypes";

function MenuTab({ profile }: { profile: ProfileType }) {
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  }, [avatarRef]);

  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      bgColor="brand.bodyColor"
      zIndex="2"
      mt="6"
      borderBottom="1px solid gray"
      position="sticky"
      top={"0px"}
      py="2"
    >
      <Flex w="100%">
        <Flex id="avatar" ref={avatarRef} mx="4" style={{ flex: 2 }}>
          <Avatar size="sm" src={profile.avatarUrl} alt="avatar-img" />
          <Text
            ml="3"
            fontSize="sm"
            alignSelf="center"
            color="brand.textColor2"
            fontWeight="semibold"
          >
            billmal071
          </Text>
        </Flex>
        <Flex style={{ flex: 5 }}>
          <Box alignSelf="center" mr="3">
            <Text
              alignSelf="center"
              fontSize="sm"
              color="brand.textColor2"
              fontWeight="semibold"
              borderBottom="2px solid #f78166"
            >
              <i className="fas fa-book-open" style={{ marginRight: "8px" }} />
              Overview
            </Text>
          </Box>
          <Box alignSelf="center" mr="3">
            <Text color="brand.textColor2" fontSize="sm">
              <i className="fas fa-book-open" style={{ marginRight: "8px" }} />
              Repositories{" "}
              <Tag
                p="1"
                fontSize="sm"
                bgColor="gray.700"
                color="white"
                borderRadius="50%"
              >
                {profile.topRepositories.totalCount}
              </Tag>
            </Text>
          </Box>
          <Box alignSelf="center" mr="3">
            <Text color="brand.textColor2" fontSize="sm">
              <i className="fas fa-book-open" style={{ marginRight: "8px" }} />
              Projects
            </Text>
          </Box>
          <Box alignSelf="center">
            <Text color="brand.textColor2" fontSize="sm">
              <i className="fas fa-book-open" style={{ marginRight: "8px" }} />
              Packages
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default MenuTab;
