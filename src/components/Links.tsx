import { Avatar } from "@chakra-ui/avatar";
import { Link } from "@chakra-ui/layout";
import React from "react";
import { LinksType } from "../interfaces/commonTypes";

function Links({ imgSrc, iconName, imgAlt, linkText }: LinksType) {
  return (
    <Link
      href="#"
      fontSize="sm"
      fontWeight="semibold"
      color="white"
      _hover={{ color: "gray" }}
      py="2"
      borderTop={"1px solid gray"}
    >
      {imgSrc && <Avatar size="xs" src={imgSrc} name={imgAlt} />}{" "}
      {iconName && <i className={iconName} />} {linkText}
    </Link>
  );
}

export default Links;
