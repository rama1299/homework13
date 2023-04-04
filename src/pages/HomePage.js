import React, { useState, useEffect } from "react";
import { InfoCard, Layout } from "../components/index";
import { getAllBooks } from "../fetcher";
import { SimpleGrid, Heading } from "@chakra-ui/react";

function HomePage() {
    const [books, setBooks] = useState(null)

    useEffect(() => {
        const fetchBooks = async () =>{
            const {books} = await getAllBooks();
            setBooks(books);
        }

        fetchBooks()
    }, [])
    
    return(
        <>
            <Layout>
                <Heading textAlign="center" mt="7">Daftar Buku</Heading>
                <SimpleGrid p="10" columns={3} spacing={6} justifyContent="center">
                    {books?.map((book, idx)=>(
                    <InfoCard key={idx} {...book}/>
                    ))}
                </SimpleGrid>
            </Layout>
        </>
    )
}

export default HomePage;