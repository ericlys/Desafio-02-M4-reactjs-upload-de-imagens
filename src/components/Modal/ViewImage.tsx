import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        mx="auto"
        w="auto"
        h="auto"
        maxW={['300', '500', '900']}
        maxH={['350', '450', '600']}
      >
        <ModalBody padding="0">
          <Image
            src={imgUrl}
            maxW={['300', '500', '900']}
            maxH={['350', '450', '600']}
          />
        </ModalBody>
        <ModalFooter
          bg="pGray.800"
          h={8}
          borderBottomRadius="5px"
          justifyContent="initial"
        >
          <Link href={imgUrl} fontSize="sm" isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
