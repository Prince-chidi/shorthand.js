```markdown
# ✨ Shorthand.js

**Shorthand.js** is a lightweight, open-source JavaScript library designed to simplify **DOM manipulation**, **styling**, and **long function calls** using concise and intuitive shorthand methods.

---

## 🚀 Why Use Shorthand.js?

- ⏱️ Speeds up development  
- ✍️ Reduces boilerplate code  
- 🎯 Offers clear, readable, and reusable shorthand functions  
- ⚙️ Adds robust error handling out of the box  

Let’s build **Shorthand.js** together! If you're a JavaScript developer, contributions are welcome.

---

## 📦 Installation

Include the script in your HTML file:

```html
<script src="shorthand.js"></script>
```

> This exposes the `$$` and `sh` namespaces globally, along with `$`-prefixed shorthand styling methods.

---

## ✨ Features

### 🔍 Element Selection

```javascript
// Get element by ID
const el = sh.el("myElementId");

// Get elements by class name
const els = sh._el("myClassName");
```

---

### 🖋️ Console Logging

```javascript
sh.log("This is a log message");
sh.warn("This is a warning message");
sh.err("This is an error message");
```

---

### 🎨 Styling Elements

#### ✅ Apply Single Style by ID

```javascript
sh.style("myElementId", "color", "blue");
```

#### 🎯 Apply Multiple Styles by ID

```javascript
sh.styles("myElementId", {
  cl: "blue",
  bg: "lightgray",
  fs: "16px"
});
```

#### 🌈 Background Color

```javascript
sh.bg("myElementId", "yellow");
sh._bg("myClassName", "lightblue");
```

#### 📏 Set Height and Width

```javascript
sh.h("myElementId", "100px");
sh.w("myElementId", "50%");
```

#### 💼 Apply Multiple Styles to Class

```javascript
sh._styles("myClassName", {
  color: "red",
  bgcl: "black",
  fs: "14px"
});
```

---

### 💡 `$` Shorthand Methods

Use globally or directly on HTML elements:

```javascript
// Global usage
$bg(document.getElementById("myElement"), "yellow");

// Directly on HTMLElement
document.getElementById("myElement").$bg("yellow");
```

---

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



---

## 🧪 Example

```html
<div id="example" style="width: 100px; height: 100px;"></div>
<script src="shorthand.js"></script>
<script>
  // Set background color
  sh.bg("example", "blue");

  // Apply multiple styles
  sh.styles("example", {
    bgcl: "red",
    h: "150px",
    w: "150px"
  });

  // Log a message
  sh.log("Styles applied successfully!");
</script>
```

---

## 🛡️ Error Handling

All methods come with built-in error handling:

```javascript
sh.style("nonexistentId", "color", "red");
// Error: Element with ID 'nonexistentId' not found
```

---

## 🔮 Future Plans

- Add advanced DOM manipulation utilities  
- Improve event handling and animation support  
- Release full documentation and licensing  

---

## 🤝 Contribute

Have ideas? Feedback? PRs?  
You're welcome to join in the development of **Shorthand.js** and help make it better.

---

## 📃 License

Currently in development & testing phase.  
License and policy will be added in future releases.

---

**Made with ❤️ by chidi prince.**
```
