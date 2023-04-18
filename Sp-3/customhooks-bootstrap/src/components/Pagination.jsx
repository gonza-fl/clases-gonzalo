import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

function CustomPagination({ page, setPage, reFetch, margin }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    reFetch(page);
    defineItems();
  }, [page]);

  function defineItems() {
    let newArrayItems = [];
    for (let number = 1; number <= 2; number++) {
      newArrayItems.push(
        <Pagination.Item
          key={number}
          onClick={() => setPage(number)}
          active={number === page}
        >
          {number}
        </Pagination.Item>
      );
    }
    setItems(newArrayItems);
  }
  return <Pagination className={`${margin}`}>{items}</Pagination>;
}

export default CustomPagination;
