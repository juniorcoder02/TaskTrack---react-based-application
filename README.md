# Task Manager App

A simple and user-friendly Task Manager application built with React.js. This app allows users to add, edit, delete, and toggle tasks as completed, with persistent storage using `localStorage`.

## Features

- **Add Tasks**: Create new tasks easily using the input field.
- **Edit Tasks**: Modify existing tasks with a single click.
- **Delete Tasks**: Remove tasks you no longer need.
- **Mark Tasks as Complete**: Use checkboxes to mark tasks as completed or pending.
- **Show/Hide Completed Tasks**: Toggle visibility of completed tasks.
- **Persistent Storage**: All tasks are saved in `localStorage`, so they remain even after refreshing the page.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/task-manager-app.git
   cd task-manager-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

1. **Add a Task**: Type a task in the input field and click the `Add Task` button.
2. **Edit a Task**: Click the `Edit` button next to a task, make changes, and save.
3. **Delete a Task**: Click the `Delete` button next to a task.
4. **Mark as Complete**: Check the checkbox next to a task to mark it as completed.
5. **Clear All Tasks**: Click the `Clear Tasks` button to remove all tasks.

## Technologies Used

- **React.js**: Component-based UI library.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: Icon library for modern and scalable icons.

## Folder Structure

```
.
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   └── Navbar.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── utils
│       └── localStorage.js (optional for abstraction)
├── package.json
└── README.md
```

## Customization

- **Styling**: Modify `App.css` or `Tailwind` classes directly in the components.
- **Icons**: Replace or add new icons using the `react-icons` library.
- **Features**: Enhance functionality by adding new features such as due dates, task priorities, or categories.

## Issues and Improvements

- **Current Limitations**:
  - No backend integration (all data is client-side).
  - No authentication or user management.

- **Future Enhancements**:
  - Integrate with a backend for multi-user support.
  - Add drag-and-drop reordering of tasks.
  - Include reminders and notifications.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
