
const List = (props:any) => {

    return (
      <div className="py-6">
        <h1 className="text-white text-4xl border-b-[1px] border-gray-500">Books</h1>
            {
               props.books.length === 0?
               <div className="py-2 text-white">
                Loading....
               </div>
               :
               (
                <div className="flex flex-col pt-4">
                    {
                        props.books.map((book:any, index:any)=>(
                            <div className="text-white mb-4 bg-[#111620] p-2 rounded" key={index}>
                                <h1>Name: { book.name } </h1>
                                <p>Publisher: {book.publisher}</p>
                                <p>ISBN: {book.isbn}</p>
                                <p>Author: {book.author}</p>
                                <p>End Date: {book.released}</p>
                            </div>
                        ))
                    }
                </div>
               )
            }
      </div>
    );
  };
  
  export default List;
  