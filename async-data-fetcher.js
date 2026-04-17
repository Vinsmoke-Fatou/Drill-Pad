const  fetchWithRetry = async (url, maxAttempts) => {
    for (let i = 0; i < maxAttempts; i++) {
        try {            
            const response = await fetch(url);
            if (!response.ok) throw new Error();
            return await response.json();
        } catch (error) {
            console.log(`Essaie numéro ${i + 1}`);
        }
    }  
}


const fetch1 = fetchWithRetry("hiriehue");
const fetch2 = fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1");