const URL = 'https://api.giphy.com/v1/gifs/search';
    const API = 'GkS0178B2A8J7KF9y3s2pU2aaIpcCEWt';

const fetchGifs = async (category) => {
    const resp = await fetch(`${URL}?q=${category}&limit=10&api_key=${API}`);
    const {data} = await resp.json();
    const finalData = data.map(gif => {
        return {
            id: gif.id,
            url: gif.images.downsized_medium.url,
            title: gif.title
        }
    });
    return finalData;
}

export default fetchGifs;