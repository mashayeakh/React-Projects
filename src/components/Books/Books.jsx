import React, { useEffect, useState } from 'react'
import Book from './Book';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        //fetch
        const url = "/data/booksData.json"; // Fetch from the public folder
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data));
        // console.log(books);
    }, [])
    // console.log(books);


    return (
        <>
            <h2 className='text-center text-4xl'>
                Books
            </h2>
            {/* {books.length} */}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {books.map((eachBook) => (
                    <div
                        key={eachBook.bookId}
                    >
                        <Book props={eachBook} />
                    </div>
                ))}
            </div>

        </>
    )
}

export default Books