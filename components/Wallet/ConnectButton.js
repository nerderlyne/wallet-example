import { Button } from "@chakra-ui/react";
import React from "react";

function ConnectButton(props) {
  return (
    <Button {...props} colorScheme="pink" size="lg" variant="outline">
      Connect Wallet
    </Button>
  );
}

export default ConnectButton;
