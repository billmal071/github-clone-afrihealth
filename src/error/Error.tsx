import { Button } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { ErrorProps } from "../interfaces/commonTypes";

function ErrorFallback({ error, resetErrorBoundary }: ErrorProps) {
  return (
    <Flex
      h="100vh"
      direction="column"
      justify="center"
      alignItems="center"
      role="alert"
    >
      <Text fontSize="3xl" color="red.400" fontWeight="bold">
        Something went wrong:
      </Text>
      <Text my="3">{error.message}</Text>
      <Button bgColor="red.200" onClick={resetErrorBoundary}>Try again</Button>
    </Flex>
  );
}

export default ErrorFallback;
