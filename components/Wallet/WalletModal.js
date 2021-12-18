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
import ConnectButton from "./ConnectButton";
import Disclaimer from "./Disclaimer";

function WalletModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ConnectButton onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} borderRadius="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="semibold">Connect a wallet</ModalHeader>
          <Disclaimer
            bg="blackAlpha.50"
            p={3}
            mr={3}
            ml={3}
            borderWidth="1px"
            borderRadius="2xl"
          />
          <ModalCloseButton />
          <ModalBody>MetaMask WalletConnect</ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default WalletModal;
