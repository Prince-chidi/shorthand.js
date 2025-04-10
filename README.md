```markdown
# shorthand.js ✨

**A lightweight JavaScript library for simplified DOM manipulation and styling**


## Features 🌟
- 🎯 Concise DOM selection
- 🎨 Simplified element styling
- 📝 Built-in logging utilities
- 📏 Dimension management
- 🛠️ Customizable shortcuts
- 🛡️ Robust error handling
- short one-liner codes

## Installation 📦
```html
<script src="path/to/shorthand.js"></script>
```

## Usage 📚

### Element Selection
```javascript
// Single element by ID
const elem = sh.el('elementId');

// Multiple elements by class
const elems = sh._el('className');
```

### Styling Methods
```javascript
// Single style
sh.style('elementId', 'property', 'value');

// Multiple styles
sh.styles('elementId', {
    bg: 'value',
    cl: 'value',
    fs: 'value'
});

// Background shortcut
sh.bg('elementId', '#color');
```

### Dimension Management
```javascript
sh.ht('elementId', '300px');  // Set height
sh.wt('elementId', '50%');    // Set width
```

### Shorthand Mappings 🔤
| Shortcut | Maps to          |
|----------|------------------|
| `bg`     | backgroundColor  |
| `cl`     | color            |
| `fs`     | fontSize         |
| `bd`     | border           |
| `h`      | height           |
| `w`      | width            |
| `pos`    | position         |

## Example Usage 🖥️
```html
<div id="demo" class="box"></div>

<script>
    // Set dimensions
    sh.h('demo', '200px');
    sh.w('demo', '300px');

    // Apply styles
    sh.styles('demo', {
        bg: '#3498db',
        cl: 'white',
        bd: '2px solid #2980b9'
    });

    // Prototype methods
    sh.el('demo')
        .$bg('#e74c3c')
        .$cl('#fff')
        .$fs('1.5rem');
</script>
```


```

## Roadmap 🗺️
- [x] Core DOM manipulation
- [ ] Animation utilities
- [ ] Event handling shortcuts
- [ ] Plugin system

## Contributing 👥
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

```bash
# Development setup
git clone https://github.com/Prince-chidi/shorthand.js.git
npm install
npm run build
```

## License 📄
MIT License | *Currently in active development*
```
