import { Box, Flex, Grid, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/react";
import { ProfileType } from "../../interfaces/commonTypes";

function MenuContent({ profile }: { profile: ProfileType }) {
  return (
    <Flex direction="column" mt={{ base: "0", md: "4" }}>
      <Flex
        position="sticky"
        top={"0px"}
        direction="row"
        overflowX="auto"
        overflowY="hidden"
        display={{ base: "flex", md: "none" }}
      >
        <Flex
          bgColor="brand.bodyColor"
          mb="1"
          pt="1"
          w="100%"
          borderBottom="1px solid #26212d"
          justifyContent="space-between"
        >
          <Box alignSelf="center" mr="3">
            <Text
              alignSelf="center"
              fontSize="sm"
              color="brand.textColor2"
              fontWeight="semibold"
              borderBottom="2px solid #f78166"
              whiteSpace="nowrap"
              pb="2"
            >
              <i className="fas fa-book-open" style={{ marginRight: "8px" }} />
              Overview
            </Text>
          </Box>
          <Box alignSelf="center" mr="3">
            <Text
              color="brand.textColor2"
              fontSize="sm"
              whiteSpace="nowrap"
              pb="2"
            >
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
            <Text
              color="brand.textColor2"
              fontSize="sm"
              whiteSpace="nowrap"
              pb="2"
            >
              <i className="fas fa-book-open" style={{ marginRight: "8px" }} />
              Projects
            </Text>
          </Box>
          <Box alignSelf="center">
            <Text
              color="brand.textColor2"
              fontSize="sm"
              whiteSpace="nowrap"
              pb="2"
            >
              <i className="fas fa-book-open" style={{ marginRight: "8px" }} />
              Packages
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex justify="space-between">
        <Text color="brand.textColor2">Popular Respositories</Text>
        <Text color="brand.textColor2" fontSize="13px">
          Customize your pins
        </Text>
      </Flex>
      <Grid
        templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        justifyContent="space-between"
        gap="5"
        mt="2"
      >
        {profile.repositories.nodes.map((repo) => (
          <Flex
            key={repo.name}
            direction="column"
            align="flex-start"
            border="1px solid #30363D"
            borderRadius="md"
            p="3"
            justifyContent="space-between"
          >
            <Flex w="100%" justifyContent="space-between">
              <Text textTransform="capitalize" color="brand.textColor">
                {repo.name}
              </Text>
              <Text
                borderRadius="3xl"
                py="1px"
                px="1.5"
                fontWeight="medium"
                fontSize="sm"
                textTransform="capitalize"
                border="1px solid #39363d"
                color="brand.grayColor"
              >
                Public
              </Text>
            </Flex>
            <Text fontSize="sm" color="brand.grayColor" mt="8px" mb="12px">
              {repo.description}
            </Text>
            <Flex alignItems="center">
              <Box
                w="12px"
                h="12px"
                borderRadius="50%"
                display="inline"
                bgColor={repo.primaryLanguage.color}
              ></Box>
              <Text
                ml="1"
                fontSize="sm"
                display="inline"
                color="brand.textColor2"
              >
                {repo.primaryLanguage.name}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Grid>
      <Flex direction="column" justify="space-between" mt="4">
        <Flex justify="space-between" mb="2">
          <Text color="brand.textColor2" fontSize="md">
            {
              profile.contributionsCollection.contributionCalendar
                .totalContributions
            }{" "}
            contributions in 2021
          </Text>
          <Text color="brand.grayColor" fontSize="sm">
            Contribution settings
          </Text>
        </Flex>
        <Box border="1px solid #30363d" p="3" borderRadius="md">
          <Flex justify="space-between" mb="2">
            {profile.contributionsCollection.contributionCalendar.months.map(
              (month) => (
                <Text color="brand.textColor2" fontSize="9px">
                  {month.name}
                </Text>
              )
            )}
          </Flex>
          <Grid
            templateColumns="repeat(54, 1fr)"
            gap="3px"
            overflowX="auto"
            overflowY="hidden"
          >
            <Flex direction="column">
              <Text color="brand.textColor2" fontSize="9px">
                Mon
              </Text>
              <Text color="brand.textColor2" fontSize="9px" visibility="hidden">
                Tue
              </Text>
              <Text color="brand.textColor2" fontSize="9px">
                Wed
              </Text>
              <Text color="brand.textColor2" fontSize="9px" visibility="hidden">
                Thu
              </Text>
              <Text color="brand.textColor2" fontSize="9px">
                Fri
              </Text>
              <Text color="brand.textColor2" fontSize="9px" visibility="hidden">
                Sat
              </Text>
              <Text color="brand.textColor2" fontSize="9px" visibility="hidden">
                Sun
              </Text>
            </Flex>
            {profile.contributionsCollection.contributionCalendar.weeks.map(
              (contribution, index) => (
                <>
                  <Grid gap="1px" templateRows="repeat(7, 1fr)">
                    {contribution.contributionDays.map((day) => (
                      <Box
                        w="0.6em"
                        h="0.6em"
                        color={day.color}
                        bgColor={day.color}
                        borderRadius="sm"
                      ></Box>
                    ))}
                  </Grid>
                </>
              )
            )}
          </Grid>
          <Flex justify="space-around" mt="2">
            <Text color="brand.textColor2" fontSize="9px">
              Learn how we count contributions{" "}
            </Text>
            <Text color="brand.textColor2" fontSize="9px">
              less{" "}
              {/* <Box
                w="0.6em"
                h="0.6em"
                color={day.color}
                bgColor={day.color}
                borderRadius="sm"
              />
              <Box
                w="0.6em"
                h="0.6em"
                color={day.color}
                bgColor={day.color}
                borderRadius="sm"
              />
              <Box
                w="0.6em"
                h="0.6em"
                color={day.color}
                bgColor={day.color}
                borderRadius="sm"
              />
              <Box
                w="0.6em"
                h="0.6em"
                color={day.color}
                bgColor={day.color}
                borderRadius="sm"
              />
              <Box
                w="0.6em"
                h="0.6em"
                color={day.color}
                bgColor={day.color}
                borderRadius="sm"
              /> */}
              More
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default MenuContent;
