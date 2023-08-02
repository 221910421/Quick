import React, { useContext } from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider
} from "native-base";
import AuthContext from "./Components/Context/AuthContext";

function LoginScreen() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Center w="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="320">
            <Heading
              size="lg"
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
            >
              QuickAccess
            </Heading>
            <Heading
              mt="1"
              _dark={{
                color: "warmGray.200",
              }}
              color="coolGray.600"
              fontWeight="medium"
              size="xs"
            >
              ¡Inicia Sesión para continuar!
            </Heading>

            <VStack space={3} mt="8">
              <FormControl>
                <FormControl.Label>Correo</FormControl.Label>
                <Input
                  placeholder="Ingrese su correo"
                  borderRadius="full"
                  bg="coolGray.100"
                  _placeholder={{
                    color: "coolGray.400",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.nativeEvent.text)}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Contraseña</FormControl.Label>
                <Input
                  type="password"
                  placeholder="Ingrese su contraseña"
                  borderRadius="full"
                  bg="coolGray.100"
                  _placeholder={{
                    color: "coolGray.400",
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.nativeEvent.text)}
                />
              </FormControl>
              <Button
                mt="2"
                colorScheme="cyan"
                borderRadius="full"
                onPress={() => signIn({ email, password })}
              >
                Iniciar Sesión
              </Button>
            </VStack>
          </Box>
        </Center>
      </Center>
    </NativeBaseProvider>
  );
}

export default LoginScreen;
