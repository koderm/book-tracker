import { renderHook, waitFor } from '@testing-library/react-native';
import { useMyBooks } from '../../hooks/useMyBooks';
import * as db from '../../utils/db';

jest.mock('../../utils/db');
jest.mock('expo-sqlite');

const mockBooks = [
  {
    id: 1,
    title: 'Test Book',
    author: 'Test Author',
    isbn: '1234567890',
    image_url: 'http://example.com/image.jpg',
    description: 'A test book',
  },
];

describe('useMyBooks', () => {
  beforeEach(() => {
    (db.getBooks as jest.Mock).mockImplementation((onSuccess) => {
      onSuccess(mockBooks);
    });
  });

  it('fetches and returns my books', async () => {
    const { result } = renderHook(() => useMyBooks());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.books).toEqual(mockBooks);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull?.();
  });

  it('handles errors', async () => {
    (db.getBooks as jest.Mock).mockImplementation((_, onError) => {
      onError(new Error('Failed to fetch'));
    });
    const { result } = renderHook(() => useMyBooks());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.books).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeInstanceOf(Error);
  });
});
