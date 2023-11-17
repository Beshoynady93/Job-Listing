import { useState } from 'react';
import Filter from './components/Filter';
import Heading from './components/Heading';
import JobList from './components/JobList';

function App() {
  const [filteredItems, setFilteredItems] = useState([]);

  return (
    <>
      <Heading />
      <main className="bg-neutral-lightGrayishCyanBG">
        <Filter
          filteredItems={filteredItems}
          setFilteredItems={setFilteredItems}
        />
        <JobList filteredItems={filteredItems} />
      </main>
    </>
  );
}

export default App;
