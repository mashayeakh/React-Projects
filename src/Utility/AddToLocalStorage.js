/**

 * * since we need to store in local storage, we will do 2 things. 
 * * 1 - add to local storage
 * * 2 - get from local storage
 * 
 */

import { toast } from "react-toastify";

const addToStorage = (id) => {
    // add the id
    const storedList = getStorage();
    if (storedList.includes(id)) {
        console.log("Already exists");
    } else {
        storedList.push(id);
        //convert into string
        const storedStrBook = JSON.stringify(storedList);
        localStorage.setItem("read-list", storedStrBook);
        toast("Added to read list");
    }
}

const getStorage = () => {
    //get it.
    const storedStrBook = localStorage.getItem("read-list");
    console.log(storedStrBook);

    //converting into json format since it is string formate
    if (storedStrBook) {
        const storedList = JSON.parse(storedStrBook);
        console.log(storedList);
        return storedList;
    } else {
        return [];
    }
}

export { addToStorage, getStorage }