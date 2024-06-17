import { Box, Text, Link, HStack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" py={4} bg="gray.800" color="white" textAlign="center">
      <Text mb={2}>Contact us: contact@example.com</Text>
      <HStack spacing={4} justify="center">
        <Link href="https://facebook.com" isExternal>
          <Icon as={FaFacebook} boxSize={6} />
        </Link>
        <Link href="https://twitter.com" isExternal>
          <Icon as={FaTwitter} boxSize={6} />
        </Link>
        <Link href="https://instagram.com" isExternal>
          <Icon as={FaInstagram} boxSize={6} />
        </Link>
      </HStack>
      <Text mt={2}>© {new Date().getFullYear()} Your Company. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;