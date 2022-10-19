import { useState, useEffect } from "react";
import List from "./list";
import Search from "./search";
import axios from "axios";

const Darshboard = () => {
  let [books, setBooks] = useState<any[]>([]);
  let [characters, setCharacters] = useState<any[]>([]);
  let [ searchText, setSearchText ] = useState<String>("");

  useEffect(() => {
    const mergeRequest = () => {
      let bookAPI = 'https://www.anapioficeandfire.com/api/books';
      let charactersApi = 'https://www.anapioficeandfire.com/api/characters';

      let getBooks = axios.get(bookAPI);
      let getCharacters = axios.get(charactersApi);

      axios.all([getBooks, getCharacters]).then((data:any) =>{
        setBooks(data[0].data);
        setCharacters(data[1].data)
      })
      return "Request";
    }
    mergeRequest()
  }, []);


        
  return (
    <section className="flex flex-col justify-center items-center p-5">
      <div className="md:w-[80%]">
        <Search setSearchText={setSearchText} />
        <List books={books} searchText={searchText} characters={characters} />
      </div>
    </section>
  );
};

export default Darshboard;
