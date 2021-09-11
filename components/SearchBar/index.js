const SearchBar = ({ ...rest }) => {
  return (
    <>
      <div className="flex items-center m-8 w-80">
        <input
          className="w-full h-full p-4 bg-gray-200 border-transparent rounded"
          {...rest}
        />
      </div>
    </>
  );
};

export default SearchBar;
