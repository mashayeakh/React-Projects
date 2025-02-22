import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStorage } from '../../Utility/AddToLocalStorage';
import Books from '../Books/Books';
import DisplayListedBooks from './DisplayListedBooks';

const ListedBooks = () => {

    const allBooks = useLoaderData();
    // console.log(allBooks);

    const [readBooks, setReadBooks] = useState([]);


    useEffect(() => {
        const booksInStorage = getStorage();

        // console.log(booksInStorage, allBooks);

        const storedBooksInt = booksInStorage.map(id => parseInt(id));

        // console.log(booksInStorage, storedBooksInt, allBooks);

        const readList = allBooks.filter(book => storedBooksInt.includes(book.bookId));

        // console.log(readList);

        // console.log(
        //     readList.map(b => b.bookName)
        // );

        setReadBooks(readList);
    }, [])

    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <h2>{readBooks.length}</h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                        {
                            readBooks.map(eachBook => <DisplayListedBooks
                                key={eachBook.bookId} {...eachBook} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </>
    )
}

export default ListedBooks