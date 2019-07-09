const BASE_API =  "https://yts.lt/api/v2/"

class Api{
    async getSuggestions(id){
        const responce = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
        const { data } = await responce.json();

        return data.movies;
    }

    async getCategories(){
        const responce = await fetch(`${BASE_API}list_movies.json`);
        const { data } = await responce.json();

        return data.movies;
    }

    async searchMovie(title){
        const responce = await fetch(`${BASE_API}list_movies.json?limit=1&sort_by=rating&query_term=${title}`);
        const { data } = await responce.json();

        return data.movies;
    }
}

export default new Api()