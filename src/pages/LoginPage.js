import React from "react";
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Flex,
    Text,
    useToast,
    Box,
  } from '@chakra-ui/react';
import { PATH } from "../constants/path";
import { loginUser, registerUser } from "../fetcher/index";
import { delay } from "../utils/index";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Layout } from "../components/index";
  
function LoginPage() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const toast = useToast();
    const location = useLocation();
  
    const isLoginPage = location.pathname === PATH.login;
  
    const onSubmit = async (data) => {

      console.log(data.confirmPassword);
  
      try {
        const res = isLoginPage ? await loginUser(data) : await registerUser(data);
        isLoginPage && window.localStorage.setItem("token", res.token);
  
        toast({
          title: isLoginPage ? "Login" : "Registered",
          description: isLoginPage
            ? "You have successfully log in"
            : "You have successfully registered. Now, please log in with your account",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        await delay(1500);
        navigate(isLoginPage ? PATH.home : PATH.login);
                   
        }catch (e){
            toast({
            title: "An error occurred.",
            description: "Please try again.",
            status: "error",
            duration: 3000,
            isClosable: true,
            });
        }
    };
  
    return (
        <Layout>
            <Flex
            align="center"
            justify="center"
            height="100vh"
            backgroundColor="green.50">
                <Box mr="10">
                    <Heading>Selamat Datang di My Bookstore</Heading>
                    <Link to={PATH.home}>
                    <Text>Kembali ke utama</Text>
                    </Link>
                </Box>
                <Box
                backgroundColor="white"
                p="5"
                borderRadius='md'>
                    <Heading textAlign="center" mb="3">
                        {isLoginPage
                            ? "Login" : "Registrasi"
                        }
                    </Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    {!isLoginPage && (
                        <FormControl isInvalid={errors.name?.message}>
                        <FormLabel>Nama</FormLabel>
                        <Input
                            type="text"
                            placeholder="Masukan nama"
                            {...register("name", { required: "Nama belum diisi" })}
                        />
                        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                        </FormControl>
                    )}
                    <FormControl isInvalid={errors.email?.message}>
                        <FormLabel>Email</FormLabel>
                        <Input
                        type="email"
                        placeholder="Masukan email"
                        {...register("email", { required: "Email belum diisi" })}
                        />
                        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors?.password?.message}>
                        <FormLabel>Password</FormLabel>
                        <Input
                        type="password"
                        placeholder="Masukan password"
                        {...register("password", { required: "Password belum diisi" })}
                        />
                        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                    </FormControl>
                    {!isLoginPage && (
                        <FormControl isInvalid={errors?.passwordConfirmation?.message}>
                        <FormLabel>Password Confirmation</FormLabel>
                        <Input
                            type="password"
                            placeholder="Konfirmasi password"
                            {...register("passwordConfirmation", {
                            required: "Konfirmasi password belum diisi",
                            })}
                        />
                        <FormErrorMessage>{errors?.passwordConfirmation?.message}</FormErrorMessage>
                        </FormControl>
                    )}
                    <Link to={isLoginPage ? PATH.register : PATH.login}>
                        <Text p='3' color='red'>
                        {isLoginPage
                            ? `Belum memiliki akun? Klik untuk registrasi`
                            : 'Sudah punya akun? Klik untuk login'}
                        </Text>
                    </Link>
                    <Button alignContent="center" colorScheme="blue" type="submit">Submit</Button>
                    </form>
                </Box>
            </Flex>
      </Layout>
    );
  }
  
  export default LoginPage