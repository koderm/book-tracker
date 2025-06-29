import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Alert } from 'react-native';
import BookDetailsScreen from './BookDetailsScreen';

// Mock dependencies
jest.mock('expo-router', () => ({
  useLocalSearchParams: () => ({
    title: 'Test Book',
    author: 'Test Author',
    isbn: '1234567890',
    image_url: 'http://example.com/image.jpg',
    description: 'A test book description.',
  }),
  useRouter: () => ({
    back: jest.fn(),
  }),
}));

jest.mock('../../utils/db', () => ({
  createTable: jest.fn(),
  insertOrUpdateBook: jest.fn((book, onSuccess) => onSuccess && onSuccess()),
}));

jest.spyOn(Alert, 'alert');

describe('BookDetailsScreen', () => {
  it('renders book details and adds to My Books', async () => {
    const { getByText, getByRole } = render(<BookDetailsScreen />);

    // Check that book details are rendered
    expect(getByText('Test Book')).toBeTruthy();
    expect(getByText('by Test Author')).toBeTruthy();
    expect(getByText('1234567890')).toBeTruthy();
    expect(getByText('A test book description.')).toBeTruthy();

    // Simulate pressing the "Add to My Books" button
    fireEvent.press(getByRole('button', { name: /ADD TO MY BOOKS/i }));

    // Assert Alert.alert was called
    expect(Alert.alert).toHaveBeenCalledWith(
      'Added!',
      'Test Book has been added to My Books.'
    );
  });
});