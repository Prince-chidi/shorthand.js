# shorthand.js
Shorthand.js is a lightweight open source JavaScript library designed to simplify DOM manipulation, styling, and long functions in javascript, by providing concise, easy-to-use functions or code peice as a shorthand method to get the work done easily withouth having to write long javascript functions or code blocks

It reduces boilerplate code and speeds up development by offering a variety of shorthand methods for common tasks, such as selecting elements, applying styles, and logging information to the console, etc. //

Lets build shorthand.js together, if you are a javascript developer please note that you can also  contribute to building and expansion of this library.

quick Features guide
Element Selection:

Quickly select elements by ID or class name with intuitive methods.

Simplified Styling:
Apply single or multiple CSS styles to elements using shorter, readable methods.
Built-in support for common CSS properties with shorthand mappings.

Console Logging:
Convenient methods for logging messages, errors, and warnings.

Background and Dimension Management:
Easily modify background colors, heights, and widths of elements.

Customizable Shorthand Functions:
A stylesMapping object allows you to use abbreviations (e.g., bg for background, fs for fontSize) to quickly style elements.

Global Access and Element Prototypes.
$-prefixed shorthand methods for styling elements globally or directly as methods of HTMLElement.

Error Handling:
Built-in error handling for all methods ensures robust and predictable behavior.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Installation
Simply include the script in your HTML file:
<script src="shorthand.js"></script>
This will expose the '$$' and 'sh' namespaces globally, along with $-prefixed shorthand styling methods.

Usage
1. Selecting single Element
// Get an element by ID
const myElement = sh.el("myElementId");

// Get elements by class name
const myElements = sh._el("myClassName");


2. Logging
sh.log("This is a log message");
sh.warn("This is a warning message");
sh.err("This is an error message");



3. Styling Elements
   
Apply a Single Style by ID:
sh.style("myElementId", "color", "blue");

Apply Multiple Styles by ID:
sh.styles("myElementId", {
    color: "blue",
    backgroundColor: "lightgray",
    fontSize: "16px"
});

Background Color:
sh.bg("myElementId", "yellow");
sh._bg("myClassName", "lightblue");

Set Height and Width:
sh.ht("myElementId", "100px");
sh.wt("myElementId", "50%");

Apply Multiple Styles to Elements by Class Name:
sh._styles("myClassName", {
    color: "red",
    bgcl: "black",
    fs: "14px"
});


4. Shorthand $ Methods
Use $-prefixed shorthand methods globally or directly on HTMLElement objects:
// Global usage
$bg(document.getElementById("myElement"), "yellow");

// Directly on HTMLElement
document.getElementById("myElement").$bg("yellow");



5. Shorthand Style Mapping
Use abbreviations for common CSS properties:

javascript
Copy code
sh.stylesMapping = {
    bgcl: 'backgroundColor',
    cl: 'color',
    fs: 'fontSize',
    bd: 'border',
    h: 'height',
    w: 'width',
    pos: 'position'
};



Example
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


Error Handling
Every method includes robust error handling. For example, if you try to style a nonexistent element:

sh.style("nonexistentId", "color", "red");
// Error: Element with ID 'nonexistentId' not found


Future Plans
Add more utility methods for advanced DOM manipulation.
Include comprehensive documentation and examples.
Improve support for event handling and animations.


License
This library is in the development and testing phase. Full documentation, licensing, and policy information will be added in future updates.

Contributions and feedback are welcome! Let me know how Shorthand.js can be improved to meet your development needs. 
