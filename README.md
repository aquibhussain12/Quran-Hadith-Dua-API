# Quran-Hadith-Dua-API


This repository hosts an API providing access to a comprehensive collection of Islamic resources, including the Quran, Hadith, Duas, and Seerah. Developers can use this API to integrate authenticated Islamic texts and references into their applications.

## Endpoints

### Quran API

### Get List of Surahs

- **Endpoint**: `GET /surahs`
- **Description**: Retrieve a list of all Surahs with basic information.
- **Response**: An array of objects, each representing a Surah, containing the following fields:
  - `id`: The Surah ID.
  - `name`: The name of the Surah.
  - `etranslation`: The translation of the Surah in English.
  - `total_verses`: The total number of verses in the Surah.

### Get Specific Surah by ID

- **Endpoint**: `GET /surahs/:id`
- **Description**: Retrieve a specific Surah by its ID.
- **Parameters**:
  - `:id`: The ID of the Surah.
- **Response**: An array of objects representing the verses of the Surah, containing the following fields:
  - `vid`: The Verse ID.
  - `text`: The Arabic text of the verse.
  - `etranslation`: The translation of the verse in English.
  - `utranslation`: The translation of the verse in Urdu.

### Get Ayah by Surah ID and Verse ID

- **Endpoint**: `GET /surahs/:surahId/:verseId`
- **Description**: Retrieve a specific Ayah by its Surah ID and Verse ID.
- **Parameters**:
  - `:surahId`: The ID of the Surah.
  - `:verseId`: The ID of the Verse.
- **Response**: An object representing the requested Ayah, containing the following fields:
  - `Surahid`: The ID of the Surah.
  - `name`: The name of the Surah.
  - `transliteration`: The transliteration of the Surah.
  - `etranslation`: The translation of the Surah in English.
  - `utranslation`: The translation of the Surah in Urdu.
  - `verseID`: The ID of the Verse.
  - `versetext`: The Arabic text of the Verse.
  - `verseEtranslation`: The translation of the Verse in English.
  - `verseUtranslation`: The translation of the Verse in Urdu.

## Error Handling

- If the requested Surah or Verse does not exist, the API will return a 404 Not Found error.
- If there is an internal server error, the API will return a 500 Internal Server Error.


### Hadith API

### Get List of Sources

- **Endpoint**: `GET /sources`
- **Description**: Retrieve a list of all available sources of Hadith.
- **Response**: An array of strings representing the available sources.

### Get List of Chapters of a Source

- **Endpoint**: `GET /chapters/:source`
- **Description**: Retrieve a list of chapters of a specific source.
- **Parameters**:
  - `:source`: The name of the source.
- **Response**: An array of objects representing the chapters of the source, each containing the following fields:
  - `chapter_no`: The chapter number.
  - `chapter`: The name of the chapter.

### Get All Hadith in a Chapter

- **Endpoint**: `GET /hadiths/:source/:chapterNo`
- **Description**: Retrieve all Hadith in a specific chapter of a source.
- **Parameters**:
  - `:source`: The name of the source.
  - `:chapterNo`: The number of the chapter.
- **Response**: An array of objects representing the Hadith in the chapter.

### Search for a Hadith by its Number

- **Endpoint**: `GET /search/:source/:hadithNo`
- **Description**: Search for a Hadith by its number within a specific source.
- **Parameters**:
  - `:source`: The name of the source.
  - `:hadithNo`: The number of the Hadith.
- **Response**: An object representing the requested Hadith.

### Get a Random Hadith

- **Endpoint**: `GET /random`
- **Description**: Retrieve a random Hadith.
- **Response**: An object representing the random Hadith.

## Error Handling

- If the requested Hadith or source does not exist, the API will return a 404 Not Found error.
- If there is an internal server error, the API will return a 500 Internal Server Error.

### Duas API

### Get List of Chapters

- **Endpoint**: `GET /chapters`
- **Description**: Retrieve a list of all chapters of Duas.
- **Response**: An array of objects representing the chapters of Duas, each containing the following fields:
  - `id`: The ID of the chapter.
  - `title`: The title of the chapter.

### Get Dua by ID

- **Endpoint**: `GET /duas/:id`
- **Description**: Retrieve a specific Dua by its ID.
- **Parameters**:
  - `:id`: The ID of the Dua.
- **Response**: An object representing the requested Dua.

## Error Handling

- If the requested Dua or chapter does not exist, the API will return a 404 Not Found error.
- If there is an internal server error, the API will return a 500 Internal Server Error.

### Seerah API

### Get List of Chapters

- **Endpoint**: `GET /seerah`
- **Description**: Retrieve a list of all chapters of the Seerah.
- **Response**: An array of objects representing the chapters of the Seerah, each containing the following fields:
  - `id`: The ID of the chapter.
  - `chapter_name`: The name of the chapter.

### Get Content of a Chapter

- **Endpoint**: `GET /seerah/:id`
- **Description**: Retrieve the content of a specific chapter of the Seerah by its ID.
- **Parameters**:
  - `:id`: The ID of the chapter.
- **Response**: An array of objects representing the content of the chapter.
To use this API in your project, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using the following command:
git clone https://github.com/aquibhussain12/Quran-Hadith-Dua-API


2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using npm:
cd Quran-Hadith-Dua-API
npm install

3. **Configure Environment Variables**: If necessary, configure any environment variables required for the API to run, such as database connection strings or API keys. You may need to create a `.env` file for this purpose.

4. **Run the Server**: Start the API server using the following command:
npm start


5. **Use the Endpoints**: Once the server is running, you can access the API endpoints using HTTP requests. Here are some example requests you can make:
- Retrieve a list of Surahs from the Quran: `GET /quran/surahs`
- Retrieve a specific Surah by ID: `GET /quran/surahs/:id`
- Search for a Hadith by its number: `GET /hadith/search/:source/:hadithNo`
- Retrieve a random Dua: `GET /dua/random`
- Retrieve a list of Seerah chapters: `GET /seerah`

6. **Integrate into Your Application**: Integrate the API endpoints into your application code according to your requirements. You can make HTTP requests to the API endpoints from your frontend or backend code.

7. **Contribute**: If you encounter any issues or have suggestions for improvements
8. **Database Access**: contact aquibaquib.dar12@gmail.com
## License

This API is open-source and licensed under the [MIT License](LICENSE).
