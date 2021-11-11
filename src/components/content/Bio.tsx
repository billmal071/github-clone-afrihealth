import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import {
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ProfileType } from "../../interfaces/commonTypes";

function Bio({ profile }: { profile: ProfileType }) {
  return (
    <Flex direction="column">
      <Flex direction={{ base: "row", md: "column" }}>
        <Image
          src={profile.avatarUrl}
          borderRadius="50%"
          alignSelf="center"
          boxSize={{ base: "50px", md: "256px" }}
          maxW="256px"
          pos="relative"
          top={{ base: "0", md: "-20px" }}
          zIndex="3"
        />
        <Flex direction="column" ml={{ base: "2", md: "0" }}>
          <Text color="brand.textColor2" fontSize="2xl" fontWeight="semibold">
            {profile.name.split(" ")[0]}
          </Text>
          <Text color="brand.textColor2" fontSize="2xl" fontWeight="semibold">
            {profile.name.split(" ")[1]}
          </Text>
          <Text color="brand.textColor2" fontSize="2xl" fontWeight="semibold">
            {profile.name.split(" ")[2]}
          </Text>
          <Text color="brand.grayColor" fontSize="xl" fontWeight="light" mt="1">
            {profile.email.slice(0, profile.email.indexOf("@"))}
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<i className="far fa-smile" />}
          />
          <Input
            type="text"
            placeholder="set status"
            display={{ base: "block", md: "none" }}
          />
        </InputGroup>
          <Text color="brand.textColor2" fontSize="md" my="3">
            {profile.bio}
          </Text>
          <Button
            size="sm"
            color="brand.textColor2"
            style={{ border: "1px solid #21262d", backgroundColor: "#21262d" }}
          >
            Edit Profile
          </Button>
      </Flex>
      <Flex mt="4">
        <Text color="brand.grayColor">
          <i className="fas fa-user-friends" style={{ marginRight: "2px" }} />{" "}
          {profile.followers.totalCount} followers
        </Text>
        <Text color="brand.grayColor" ml="1">
          {profile.following.totalCount} . following
        </Text>
        <Text color="brand.grayColor" ml="1">
          . <i className="far fa-star" />{" "}
          {profile.starredRepositories.totalCount}
        </Text>
      </Flex>
      <Flex borderBottom="1px solid #21262d" mt="5" pb="4">
        <i className="far fa-envelope" />{" "}
        <Text color="white">{profile.email}</Text>
      </Flex>
      <Flex direction="column" mb="5">
        <Text color="white" my="3">
          Achievements
        </Text>
        <Image
          src={
            "https://github.githubassets.com/images/modules/profile/badge--acv-64.png"
          }
          boxSize="65px"
        />
      </Flex>
      <Flex
        direction="column"
        borderTop="1px solid #21262d"
        borderBottom="1px solid #21262d"
        pb="3"
        display={{ base: "none", md: "flex" }}
      >
        <Text color="white" pt="3" mb="2">
          Highlights
        </Text>
        <Box>
          <i className="far fa-star" />{" "}
          <Text
            display="inline"
            fontSize="xs"
            borderRadius="2xl"
            color="brand.proColor"
            bgColor=""
            borderColor="brand.proBorderColor"
            borderWidth="1px"
            borderStyle="solid"
            p="1"
          >
            PRO
          </Text>
        </Box>
      </Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        direction="column"
        pt="3"
      >
        <Text color="white" mb="2">
          Organizations
        </Text>
        <Flex>
          {profile.organizations.nodes.map((item, index) => (
            <Image
              src={item.avatarUrl}
              boxSize="32px"
              borderRadius="md"
              objectFit="cover"
              mr="2"
              mb="3"
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Bio;
