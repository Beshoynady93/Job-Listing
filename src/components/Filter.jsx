// eslint-disable-next-line react/prop-types
const Filter = ({ filteredItems, setFilteredItems }) => {
  const chooseToFilter = (e) => {
    // eslint-disable-next-line react/prop-types
    if (!filteredItems.includes(e.target.innerText)) {
      // e.target.disabled = true;
      setFilteredItems((prev) => [...prev, e.target.innerText]);
    }
  };

  const removeItemFromFiltered = (e) => {
    setFilteredItems((prev) =>
      prev.filter((item) => item !== e.target.dataset.type)
    );
  };

  const clearFilteredItemsHandler = () => {
    setFilteredItems([]);
  };

  return (
    <section className="px-4 py-2 bg-neutral-50 rounded-md w-11/12 shadow-lg mx-auto -translate-y-8">
      {/* <h2 className="font-heading font-bold text-center">Choose your filter</h2> */}
      <div className="p-2 flex items-center font-heading">
        <div className="flex flex-wrap gap-4">
          <div>
            <button
              className="bg-neutral-lightGrayishCyanBG font-bold text-primary p-2 rounded-full cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-500"
              onClick={(e) => chooseToFilter(e)}
            >
              Frontend
            </button>
            <button
              onClick={(e) => removeItemFromFiltered(e)}
              className="bg-primary text-white px-2 py-1 rounded-r-sm font-bold"
              data-type="Frontend"
            >
              X
            </button>
          </div>
          <div>
            <button
              className="bg-neutral-lightGrayishCyanBG font-bold text-primary p-2 rounded-full cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-500"
              onClick={(e) => chooseToFilter(e)}
            >
              CSS
            </button>
            <button
              className="bg-primary text-white px-2 py-1 font-bold rounded-r-sm"
              data-type="CSS"
              onClick={(e) => removeItemFromFiltered(e)}
            >
              X
            </button>
          </div>
          <div>
            <button
              className="bg-neutral-lightGrayishCyanBG font-bold text-primary p-2 rounded-full cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-500"
              onClick={(e) => chooseToFilter(e)}
            >
              Javascript
            </button>
            <button
              className="bg-primary text-white px-2 py-1 font-bold rounded-r-sm"
              data-type="Javascript"
              onClick={(e) => removeItemFromFiltered(e)}
            >
              X
            </button>
          </div>
        </div>
        <button
          className="text-neutral-darkGrayishCyan font-bold"
          onClick={clearFilteredItemsHandler}
        >
          Clear
        </button>
      </div>
    </section>
  );
};

export default Filter;
