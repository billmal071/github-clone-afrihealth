import { Flex, Text } from "@chakra-ui/layout";
import { TabProps } from "../../interfaces/commonTypes";

function Tab({ iconName, text, num }: TabProps) {
  return (
    <Flex>
      <i className={`fa ${iconName}`} />
      <Text color="white">{text}</Text>
      {num && <Text color="white">{num}</Text>}
    </Flex>
  );
}

export default Tab;
