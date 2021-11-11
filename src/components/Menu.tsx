import { Flex, Input } from "@chakra-ui/react";
import { profile } from "console";
import React from "react";
import { ProfileType } from "../interfaces/commonTypes";
import Links from "./Links";

function Menu({ profile }: { profile: ProfileType }) {
  return (
    <>
      <Input
        size="sm"
        placeholder="Search or jump to"
        borderColor="brand.borderColor"
        borderRadius="md"
        color="white"
        _focus={{}}
      />
      <Flex direction="column" mt="4">
        <Links linkText={"Dashboard"} />
        <Links linkText={"Pull Request"} />
        <Links linkText={"Issues"} />
        <Links linkText={"Marketplace"} />
        <Links linkText={"Explore"} />
        <Links linkText={"Codespaces"} />
        <Links linkText={"Sponsors"} />
        <Links linkText={"Settings"} />
        <Links
          imgSrc={profile.avatarUrl}
          imgAlt="avatar-img"
          linkText={"billmal071"}
        />
        <Links iconName="fas fa-sign-out-alt fa-lg" linkText={"Sign out"} />
      </Flex>
    </>
  );
}

export default Menu;
