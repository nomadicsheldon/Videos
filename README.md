# Videos
**A Basic App using youtube API and mainly focusing on searching features and listing out results like youtube.**

---

## Implementation description

Folder Structure -

- apis
  - youtube.js
- components
  - App.js
  - SearchBar.js
  - VideoDetail.js
  - VideoItem.css
  - VideoItem.js
  - VideoList.js
  
---

### `youtube.js` -
This file includes baseURL setup for API calls.

### `App.js` -
This is starting file for project.

- search API call is happening in this file.

### `SearchBar.js` -
It is a component for the search field and responsible for UI and passing props to App.js.

### `VideoDetail.js` -
It is a component for the video player, description and responsible for UI and passing props to App.js.

### `VideoItem.js` -
It is a component for the list UI and passing a callback on selecting this component.

### `VideoItem.css` -
Responsible for styling.

### `VideoList.js` -
Mapping all VideoItems and showing as a list.

---



