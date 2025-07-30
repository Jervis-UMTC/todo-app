# Todo List App

A modern, responsive todo list application built with vanilla HTML, CSS, and JavaScript. Features a clean interface with task management, filtering, and persistent storage.

## Features

### Core Functionality
- ✅ **Add Tasks** - Create new todos with a simple input field
- ✅ **Mark Complete** - Toggle task completion with checkboxes
- ✅ **Delete Tasks** - Remove individual tasks with delete buttons
- ✅ **Filter Tasks** - View All, Active, or Completed tasks
- ✅ **Clear Completed** - Remove all completed tasks at once
- ✅ **Task Counter** - See how many active tasks remain

### Advanced Features
- 💾 **Persistent Storage** - Tasks saved in localStorage
- 🛡️ **Error Handling** - Graceful fallback when storage fails
- 📱 **Responsive Design** - Works on desktop and mobile
- 🎨 **Modern UI** - Clean, intuitive interface with animations
- ⚡ **Real-time Updates** - Instant visual feedback

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required

### Installation
1. Clone or download the repository
2. Open `index.html` in your web browser
3. Start adding tasks!

```bash
git clone <repository-url>
cd todo-app
open index.html
```

## File Structure

```
todo-app/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Usage

### Adding Tasks
- Type your task in the input field
- Click the "+" button or press Enter
- Task appears in the list immediately

### Managing Tasks
- **Complete**: Click the checkbox next to any task
- **Delete**: Hover over a task and click the red "×" button
- **Filter**: Use "All", "Active", or "Completed" tabs
- **Clear**: Click "Clear Completed" to remove all finished tasks

### Keyboard Shortcuts
- `Enter` - Add new task when input is focused

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11+ (limited support)

## Storage

The app uses localStorage to persist your tasks between sessions. If localStorage is unavailable (private browsing, storage full, etc.), the app will:
- Display a warning message
- Continue working without persistence
- Show notifications when save operations fail

## Customization

### Themes
The app uses CSS custom properties for easy theming. Edit the `:root` section in `styles.css`:

```css
:root {
  --primary: #7749f8;        /* Main accent color */
  --primary-light: #9775fa;  /* Hover states */
  --dark: #333;              /* Text color */
  --light: #f8f9fa;          /* Background accents */
  --gray: #6c757d;           /* Secondary text */
  --danger: #dc3545;         /* Delete buttons */
  --success: #198754;        /* Completed tasks */
  --border: #dee2e6;         /* Borders */
}
```

### Icons
The app uses Font Awesome icons. Replace the CDN link in `index.html` to use different icons or versions.

## Technical Details

### Architecture
- **Vanilla JavaScript** - No frameworks or dependencies
- **Event-driven** - Responsive to user interactions
- **Modular functions** - Clean, maintainable code structure
- **Error handling** - Robust localStorage operations

### Key Functions
- `addTodo()` - Creates new tasks
- `renderTodos()` - Updates the DOM display
- `filterTodos()` - Handles task filtering
- `saveTodos()` - Persists data with error handling
- `loadTodos()` - Retrieves saved data safely

### Performance
- Efficient DOM manipulation
- Event delegation for dynamic content
- Minimal re-rendering
- Lightweight (~500 lines total)

## Browser Storage

The app handles various storage scenarios:
- **Normal operation** - Tasks saved and restored
- **Private browsing** - Warning shown, app works without saving
- **Storage full** - Error caught, user notified
- **Corrupted data** - Gracefully resets to empty state

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

### Development Guidelines
- Keep code vanilla (no frameworks)
- Maintain accessibility standards
- Test in multiple browsers
- Follow existing code style

## Known Issues

- Date format may vary based on system locale
- Very long task names may wrap awkwardly on mobile
- No undo functionality for deleted tasks

## Future Enhancements

- [ ] Task editing functionality
- [ ] Due dates and reminders
- [ ] Task categories/tags
- [ ] Dark/light theme toggle
- [ ] Drag and drop reordering
- [ ] Import/export functionality
- [ ] Keyboard navigation improvements

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Built with ❤️ for productivity enthusiasts.

---

*Last updated: July 2025*
