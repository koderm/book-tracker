# Book Tracker

Book tracker is a simple app that allows users to select from a list of books that interest them and save them in a personalized book collection, they can also delete an an entry from their books in the instance that they may not need it in their collection any more. Future iterations of the app will allow users to add ratings and read/unread statuses to books in their collections.

If you would like to try it out without local dev setup feel free to download and install via the [.apk](https://drive.google.com/file/d/1ugmbCWCteTxkeLr-p8NMcq0g9INIbnH2/view?usp=drive_link) I have hosted on google drive, otherwise you can just run the local setup with either expo go or a development build.
## Running the App Locally

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the Expo development server:**
   ```sh
   npm start
   ```
   or
   ```sh
   expo startn
   ```

3. **Run on Expo Go: (Recommended)**
   - Download the **Expo Go** app from the Apple App store or Android play store.
   - Start the Expo development server (`npm start` or `expo start`).
   - Scan the QR code shown in your terminal or browser with the Expo Go app to open the project on your device.


4. **Development builds (optional, for native debugging):**
   - Android:  
     ```sh
     npx eas build --profile development --platform android
     ```
   - iOS:  
     ```sh
     npx eas build --profile development --platform ios
     ```
     [Pre built dev build](https://expo.dev/accounts/koderm/projects/book-tracker/builds/124b12a9-6b96-471d-a29c-444e3c5f7c81)
     Just ensure you are connected to the metro bundler when running a development build.

5. **Production build (standalone, not reliant on dev server):**
   ```sh
   npx eas build --profile production --platform android
   ```

6. **Run tests:**
   ```sh
   npm test
   ```

---

## Architecture and stack

- **Expo Router** is used for navigation, enabling file-based routing and easy deep linking.
- **Tabs Navigation**: The app uses a simple tab layout for "My Books" and "Browse" screens, with custom icons mapped to Material Icons for cross-platform consistency.
- **SQLite Storage**: User's books are stored locally using `expo-sqlite` for persistence, with utility functions for CRUD operations.
- **Hooks**: Custom React hooks (`useBooks`, `useMyBooks`) are used for fetching and managing book data, providing a clean and reusable data layer.
- **UI**: The app uses React Native components and a simple, clean style for readability and maintainability.
- **Testing**: Jest and React Testing Library are set up for unit testing hooks and logic.
- **Production Builds**: EAS is configured for both development and production builds, allowing for local development and standalone APK generation.

---

## TODO

- Add user authentication and profiles.
- Implement book search and categoric filtering in the Browse screen.
- Add the ability to add a rating or mark books as read/unread in "My Books".
- Improve error handling throughout the app.
- Enhance unit and integration test coverage.
- Add support for syncing "My Books" to cloud storage.
- Implement push notifications for book updates or recommendations.
- Optimize performance for large datasets and slow devices.
- Refactor code for better modularity and reusability.
