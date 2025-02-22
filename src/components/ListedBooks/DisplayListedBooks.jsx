import React from 'react'
import { FaRegStar } from "react-icons/fa";


const DisplayListedBooks = (props) => {
    const { bookId, bookName, image, author, category, rating, tags } = props;

    return (
        <>
            <div className="card bg-base-100 w-65 shadow-xl mt-3">
                <figure>
                    <img
                        src={image}
                        className='h-50 w-45'
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="booksTags flex justify-center gap-10 ">
                        {/* <div className="badge badge-primary badge-sm text-[12px]">{tags[0]}</div>
                                    <div className="badge badge-accent badge-sm text-[12px]">{tags[1]}</div> */}
                        {
                            tags.map(eachTags => <div className="badge badge-primary badge-sm text-[12px]">{eachTags}</div>
                            )
                        }
                    </div>
                    <p className="card-title text-sm">
                        {bookName}
                    </p>
                    <p>By - {author}</p>
                    <div className="border-1 border-dashed"></div>
                    <div className="card-actions flex justify-between">
                        <div className="badge badge-secondary badge-sm text-[12px]">{category}</div>
                        <span className='flex gap-2'>
                            {rating}<FaRegStar style={{ marginTop: "5px" }} />
                        </span>
                        {/* <div className="rating text-sm">
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default DisplayListedBooks