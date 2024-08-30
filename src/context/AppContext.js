import { createContext, useState } from "react";
import { baseUrl } from '../baseUrl';

// First Rule = Create Context
// Step 1
export const AppContext = createContext(); 

// Second Rule = Provider
export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    // data filling pending 
    
    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        const url = `${baseUrl}?page=${page}`;
        console.log("Printing the final URL");
        console.log(url);
        
        try {
            const result = await fetch(url);
            // Always after that I mean second step is API ka data JSON format me convert karna
            const data = await result.json();
            console.log(data);
            // sets the current page no, total pages, & get all posts
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);   
            
        } catch(error) {
            console.log("Error in fetching the data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page) {
        // First set the page number using "setPage"
        setPage(page);
        // Second is call the above code
        fetchBlogPosts(page);
    }

    // Sending the data to the consumer / pass the data to the consumer
    const value = {
        loading,
        setLoading,
        posts, 
        setPosts,
        page, 
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    // Step 2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}