import { useEffect, useState } from 'react';
import { getBooks } from '../utils/db';

interface Book {
  id?: number;
  title: string;
  author: string;
  isbn: string;
  image_url: string;
  description: string;
}

export const useMyBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    getBooks(
      (result) => {
        setBooks(result);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );
  }, []);

  return { books, loading, error };
};