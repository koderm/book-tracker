import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import BrowseScreen from '../../../app/browse/BrowseScreen';

// Mock useBooks to provide test data
jest.mock('../../../hooks/useBooks', () => ({
  useBooks: () => ({
    books: [
      {
        title: 'Test Book',
        author: 'Test Author',
        isbn: '1234567890',
        image_url: 'http://example.com/image.jpg',
        description: 'A test book description.',
      },
    ],
    loading: false,
  }),
}));

// Move this above the jest.mock call!
const mockPush = jest.fn();
jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('BrowseScreen', () => {
  it('renders a list of books', () => {
    const { getByText } = render(<BrowseScreen />);
    expect(getByText('Test Book')).toBeTruthy();
    expect(getByText('by Test Author')).toBeTruthy();
    expect(getByText('1234567890')).toBeTruthy();
    expect(getByText('A test book description.')).toBeTruthy();
  });

  it('navigates to BookDetailsScreen on item press', () => {
    const { getByText } = render(<BrowseScreen />);
    fireEvent.press(getByText('Test Book'));
    expect(mockPush).toHaveBeenCalledWith({
      pathname: '/browse/BookDetailsScreen',
      params: expect.objectContaining({
        title: 'Test Book',
        author: 'Test Author',
        isbn: '1234567890',
        image_url: 'http://example.com/image.jpg',
        description: 'A test book description.',
      }),
    });
  });

  xit('shows loading indicator when loading', () => {
    jest.doMock('../../hooks/useBooks', () => ({
      useBooks: () => ({
        books: [],
        loading: true,
      }),
    }));
    // Re-require after mocking
    const BrowseScreenLoading = require('./BrowseScreen').default;
    const { getByText } = render(<BrowseScreenLoading />);
    expect(getByText('Loading books...')).toBeTruthy();
  });
});