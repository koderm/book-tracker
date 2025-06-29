import { renderHook, waitFor } from '@testing-library/react-native';
import { useBooks } from '../../hooks/useBooks';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ title: 'Dune', author: 'Frank Herbert' }]),
  })
) as unknown as jest.Mock;

describe('useBooks', () => {
  it('fetches and returns books', async () => {
    const { result } = renderHook(() => useBooks());
    expect(result.current.loading).toBe(true);
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.books).toEqual([{ title: 'Dune', author: 'Frank Herbert' }]);
  });
});