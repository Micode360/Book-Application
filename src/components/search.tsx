
const Search = (props:any) => {
  const searchChange = (e:any) => {
      props.searchText(e.target.value)
  }
    return (
      <div className="flex items-center w-full bg-[#111620] p-2 text-white rounded">
            <input className="w-full bg-transparent outline-none" onChange={searchChange} placeholder="Search by name, publisher, ISBN, Authors, End Date, Character's name, Characters Culture" type="text" />
            <button className="w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
      </div>
    );
  };
  
  export default Search;
   