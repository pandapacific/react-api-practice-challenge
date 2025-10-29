const fetchCall = async (url = null, optionsObj = {}) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw new Error(`Fetch failed - ${response.status} ${response.statusText}`);
        return await response.json();
    } catch (error) {
        return error;
    } 
}

export default fetchCall;