import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addToStorage } from '../../Utility/AddToLocalStorage';

const BooksDetails = () => {

    const { bookId } = useParams();
    console.log(parseInt(bookId));

    const data = useLoaderData();
    console.log("Book Data -> ", data);

    const singleBook = data.find(book => book.bookId === parseInt(bookId));
    console.log("singleBook -> ", singleBook);

    // console.log(typeof parseInt(bookId));

    //structuring
    const { bookId: currBookId,
        bookName,
        author,
        category,
        review,
        tags,
        image,
        totalPages,
        publisher,
        yearOfPublishing,
        rating

    } = singleBook;



    const handleAddToRead = (id) => {
        /**
         * 1 . the thing is, we want to read a book, so we need to store it's id. 
         * 2. if id exist then, alert-> id already exists
         * 3. else add the id as a collection of array. like- > ["3","7"]
         */

        addToStorage(id);
    }


    return (
        <div>
            {/* {bookId} */}
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content ">
                        <img
                            src={image}
                            className="w-90 flex justify-center rounded-lg shadow-2xl" />
                        <div className='ms-8'>
                            <h1 className="bookTitle text-3xl font-bold">{bookName}</h1>
                            <span className="author mt-3">By: {author}</span>
                            <div className="divider"></div>

                            <span className='category'>
                                {category}
                            </span>
                            <div className="divider"></div>

                            <p className="review py-6">
                                <span className='font-bold me-2'>Review :</span>
                                {review}
                            </p>
                            <p className='tags'>
                            </p>

                            <div className="booksTags flex justify-start gap-10 ">
                                <span className=''>Tags: </span>
                                {
                                    tags.map(eachTags => <div className="badge badge-accent text-[15px]">
                                        #{eachTags}
                                    </div>
                                    )
                                }
                            </div>
                            <div className="divider"></div>


                            <div className="othersInfo flex">
                                <div className='leftSide me-20'>
                                    <div className="pages">
                                        <span className=''>Number of pages :</span>

                                    </div>
                                    <div className="publisher">
                                        <span className=''>Publisher :</span>
                                    </div>
                                    <div className="yearOfPublish">
                                        <span className=''>Year of Publish :</span>
                                    </div>
                                    <div className=''>
                                        <span className=''>Rating:</span>
                                    </div>
                                </div>
                                <div className='rightSide'>
                                    <div>

                                        <span>{totalPages}</span>
                                    </div>
                                    <div>

                                        <span>{publisher}</span>
                                    </div>
                                    <div>

                                        <span>{yearOfPublishing}</span>
                                    </div>
                                    <div>

                                        <span>{rating}</span>
                                    </div>
                                </div>

                            </div>
                            <div className='flex gap-8 mt-8'>
                                <button onClick={() => handleAddToRead(bookId)} className="btn btn-outline">Add to Read</button>
                                <button className="btn btn-info">WishList</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BooksDetails