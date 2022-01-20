import { Flex, Text } from "@chakra-ui/react";
import WalletModal from "../components/wallet/WalletModal";
import { useWeb3React } from "@web3-react/core";
export default function Home() {
  return (
    <Flex justifyContent="center" alignItems="center" mt={5}>
      <WalletModal />
    </Flex>
  );
}
