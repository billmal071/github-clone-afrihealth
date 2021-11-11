import { Grid } from "@chakra-ui/react";
import { ProfileType } from "../interfaces/commonTypes";
import Bio from "./content/Bio";
import MenuContent from "./content/MenuContent";

function Info({ profile }: { profile: ProfileType }) {
  return (
    <Grid
      display={{base: "block", lg: "grid"}}
      templateColumns={{ base: "repeat(1, 1fr)", md: "2fr 5fr" }}
      gap={6}
      mx={{base: "4", md: "6"}}
    >
      <Bio profile={profile} />
      <MenuContent profile={profile} />
    </Grid>
  );
}

export default Info;
