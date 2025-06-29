import { useEffect, useState } from 'react';

const DATA_URL = 'https://raw.githubusercontent.com/arielpedraza/book-list-client/refs/heads/master/data/books.json';

export const useBooks = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(DATA_URL)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch(() => setBooks([]))
      .finally(() => setLoading(false));
  }, []);

  return { books, loading };
};