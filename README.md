
# animestream-api

this is my first time web scraping, all this data API from [Kuramanime](https://kuramanime.red/).

# Usage

1. Clone this repository

    ```bash
    git clone https://github.com/sidoelz123/animestream-api.git
    ```

2. Install dependecies (`yarn` or `npm install`)

    ```bash
    npm install
    ```

3. Start the development environment

    ```bash
    npm run dev or npm run start
    ```

4. visit <http://localhost:8000> or another port if you changed it

# Documentation

</br>__ApI__ Version = `v1.0`

### Get Ongoing Anime

Fetch a list of ongoing anime.

- __Endpoint__: `/api/v1/ongoing/:page`
- __Parameters__: `[page]` - Page number (1-3, depending on database)
- __Example__:

```
/api/v1/ongoing/1
```

### Get Completed Anime

Fetch a list of completed anime.

- __Endpoint__: `/api/v1/completed/:page`
- __Parameters__: `[page]` - Page number (1-46, depending on database)
- __Example__:

```
/api/v1/completed/1
```

### Get Anime List

Fetch a complete list of anime with optional search and pagination.

- __Endpoint__: `/api/v1/anime`
- __Query Parameters__:
- `q` (optional): Search query to filter anime by title.
- `page` (optional): Page number for pagination.
- __Example__:

```
/api/v1/anime?q=dandandan&page=1
```

### Get Anime Detail

Fetch detailed information about a specific anime.

- __Endpoint__: `/api/v1/anime/:id/:name`
- __Parameters__: `[id]` - Anime ID, `[name]` - Anime name
- __Example__:

```
/api/v1/anime/3149/kimi-wa-meido-sama
```

### Get Episode Detail

Fetch details for a specific episode of an anime, with options for choosing video server.

- __Endpoint__: `/api/v1/anime/:id/:name/episode/:no`
- __Parameters__:
  - `[id]` - The unique identifier for the anime.
  - `[name]` - The name of the anime.
  - `[no]` - The episode number.
- __Query Parameters__:
  - `server` (optional): Choose from one of the available servers `[kuramadrive, archive, archive-v2, filelions, filemoon, mega, streamtape]`.
    - Default is `kuramadrive`.
- __Example__:

    ```
    /api/v1/anime/3138/dandadan/episode/1?server=mega
    ```
