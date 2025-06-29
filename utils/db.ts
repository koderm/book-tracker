import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('books.db');

interface Book {
  id?: number;
  title: string;
  author: string;
  isbn: string;
  image_url: string;
  description: string;
}

// Create table if it doesn't exist
export const createTable = () => {
  db.withTransactionSync(() => {
    db.execSync(
      `CREATE TABLE IF NOT EXISTS my_books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        author TEXT,
        isbn TEXT UNIQUE,
        image_url TEXT,
        description TEXT
      );`
    );
  });
};

// Insert or update a book based on ISBN
export const insertOrUpdateBook = (
  book: Book,
  onSuccess?: () => void,
  onError?: (err: any) => void
) => {
  db.withTransactionSync(() => {
    try {
      db.runSync(
        `INSERT INTO my_books (title, author, isbn, image_url, description)
         VALUES (?, ?, ?, ?, ?)
         ON CONFLICT(isbn) DO UPDATE SET
           title=excluded.title,
           author=excluded.author,
           image_url=excluded.image_url,
           description=excluded.description;`,
        book.title,
        book.author,
        book.isbn,
        book.image_url,
        book.description
      );
      onSuccess && onSuccess();
    } catch (error: any) {
      onError && onError(error);
    }
  });
};

// Get all books
export const getBooks = (onSuccess: (books: Book[]) => void, onError?: (err: any) => void) => {
  try {
    const result = db.getAllSync(`SELECT * FROM my_books`) as Book[];
    console.log('Books fetched:', result);
    onSuccess(result);
  } catch (error) {
    onError && onError(error);
  }
};

// Delete a book by id
export const deleteBook = (
  id: number,
  onSuccess?: () => void,
  onError?: (err: any) => void
) => {
  db.withTransactionSync(() => {
    try {
      db.runSync(
        `DELETE FROM my_books WHERE id = ?`,
        id
      );
      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  });
};

// Drop the my_books table
export const dropTable = (onSuccess?: () => void, onError?: (err: any) => void) => {
  db.withTransactionSync(() => {
    try {
      db.execSync(`DROP TABLE IF EXISTS my_books;`);
      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  });
};