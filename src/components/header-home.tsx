import { HStack, Text } from "native-base";
import localImage from "../../assets/icon.png"
import { UserPhoto } from "./user-photo";
export function HeaderHome (){

  return (
    <HStack pt={16} pb={6} px={4} bg="primary.bgComponents" alignItems="center">
        <UserPhoto
          sizes={12}
          source={localImage}
          alt="imagem de perfil"
          mr={4}
        />
      <Text fontSize={22} fontWeight="bold" color="primary.txtMain">Hi, User 👋</Text>
    </HStack>
  )
}