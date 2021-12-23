import { Flex } from "@chakra-ui/react";
import WalletModal from "../components/wallet/WalletModal";

export default function Home() {
  return (
    <Flex justifyContent="center" alignItems="center" mt={5}>
      <WalletModal />
    </Flex>
  );
}
