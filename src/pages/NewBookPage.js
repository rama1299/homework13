import React from "react";
import { 
    FormControl,
    Container,
    FormLabel,
    Input,
    Button,
    VStack,
    useToast,
    Heading } from "@chakra-ui/react";
import {Layout} from "../components/index";
import { createNewBook } from "../fetcher/index";

function NewBookPage() {
  const toast = useToast();

  async function handleSubmit(event) {
    
    event.preventDefault();
    const formData = new FormData(event.target);

    await createNewBook(formData);
    toast({
      title: "Create New Book",
      description: "You have successfully created a new book",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <Layout>
        <Container>
            <form onSubmit={handleSubmit}>
                <VStack mt="10">
                    <Heading>Create New Book</Heading>
                    <FormControl>
                        <FormLabel>Title</FormLabel>
                        <Input name="title" required />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Author</FormLabel>
                        <Input name="author" required />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Publisher</FormLabel>
                        <Input name="publisher" required />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Year</FormLabel>
                        <Input name="year" type="number" required />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Pages</FormLabel>
                        <Input name="pages" type="number" required />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Image</FormLabel>
                        <Input name="image" type="file" accept="image/*" required />
                    </FormControl>
                    <Button color="blue" type="submit">Create New Book</Button>
                </VStack>
            </form>
        </Container>
    </Layout>
  );
}

export default NewBookPage;