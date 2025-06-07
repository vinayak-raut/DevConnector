
# DevConnector
DevConnector is a simple web application that fetches and displays GitHub user profiles. It allows users to enter a GitHub username and view profile information including avatar, name, bio, location, and key statistics like public repositories, followers, and following count. The app also supports a light/dark theme toggle and is responsive for mobile devices.

## Current Features

- Search GitHub users by their username.
- Display user profile details:
  - Avatar
  - GitHub username (`login`)
  - Name
  - Bio (truncated to 50 characters if longer)
  - Location (with icon)
  - Public repositories count
  - Followers count
  - Following count
- Dark mode toggle button to switch between light and dark themes.
- Make Enter key explicitly submit the form and trigger search.
- Responsive layout for desktop and mobile.
- Basic error handling: displays a friendly message and placeholder image if user is not found.
- Smooth UI updates with loading placeholders while fetching data.

## Planned Features (To Be Added)
- local storage or session storsge
- Improved error handling: Show user-friendly messages and retry options.
- Offline support: Cache last searched profiles with service workers.
- Animations and transitions: Enhance UI with smooth animations for better UX.
- Code refactoring: Modularize JavaScript for better maintainability.

## Technologies Used
- HTML5 & CSS3.
- JavaScript (ES6+).
- Axios for HTTP requests.
- Font Awesome for icons.
