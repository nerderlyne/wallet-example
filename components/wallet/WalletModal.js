import {
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Disclaimer from "./Disclaimer";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "./Connectors";

// const ChainId = () => {
//   const chainId = useChainId();

//   return chainId;
// };

const WalletModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { active, account, chainId, activate, deactivate } = useWeb3React();

  async function connectInjected() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function connectWalletConnect() {
    try {
      await activate(walletconnect);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <>
      <Button colorScheme="pink" size="lg" variant="outline" onClick={onOpen}>
        Connect Wallet
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} borderRadius="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="semibold">Connect a wallet</ModalHeader>
          <Disclaimer />
          <ModalCloseButton />
          <ModalBody display="grid" gap={2}>
            {!active && !account ? (
              <>
                <Button onClick={connectInjected}>MetaMask</Button>
                <Button onClick={connectWalletConnect}>Wallet Connect</Button>
              </>
            ) : (
              <Button onClick={disconnect}>Disconnect</Button>
            )}
          </ModalBody>
          <ModalFooter>
            {active && `Connected ${account} on ${chainId}`}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WalletModal;
