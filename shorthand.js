// shorthand.js

// Started writing library on 4:59 AM 11th August 2024

// _More info, policy and Documentation will be added soon (this version you're reading now is a development and test version)

(function (global) {
  // Define a namespace for all functions to avoid variable collisions
  const shorthand = {
    // shorthand function to get element by ID
    el(id) {
      try {
        return document.getElementById(id);
      } catch (err) {
        console.error(`Error in el(): ${err.message}`);
      }
    },

    // shorthand function to get element by className
    _el(elementclassName) {
      try {
        return document.getElementsByClassName(elementclassName);
      } catch (err) {
        console.error(`Error in _el(): ${err.message}`);
      }
    },

    // shorthand function to write to console
    log(input) {
      try {
        console.log(input);
      } catch (err) {
        console.error(`Error in log(): ${err.message}`);
      }
    },

    // shorthand function to log error to console
    err(err) {
      try {
        console.error(err);
      } catch (errorLoggingError) {
        console.warn("Error logging failed:", errorLoggingError.message);
      }
    },

    // shorthand function to log warning to console
    warn(warn) {
      try {
        console.warn(warn);
      } catch (err) {
        console.error(`Error in warn(): ${err.message}`);
      }
    },

    // shorthand apply any single style to element using ID
    style(elementId, prop, stylevalue) {
      try {
        const element = document.getElementById(elementId);
        if (!element)
          throw new Error(`Element with ID '${elementId}' not found`);
        element.style[prop] = stylevalue;
      } catch (err) {
        console.error(`Error in style(): ${err.message}`);
      }
    },

    // shorthand apply multiple styles to element using ID
    styles(elementId, styles) {
      try {
        const element = document.getElementById(elementId);
        if (!element)
          throw new Error(`Element with ID '${elementId}' not found`);
        for (let props in styles) {
          if (styles.hasOwnProperty(props)) {
            const fullProps = this.stylesMapping[props] || props;
            element.style[fullProps] = styles[props];
          }
        }
      } catch (err) {
        console.error(`Error in styles(): ${err.message}`);
      }
    },

    // shorthand for applying backgroundColor to element using ID
    bg(elementId, backgroundColor) {
      try {
        const element = document.getElementById(elementId);
        if (!element)
          throw new Error(`Element with ID '${elementId}' not found`);
        element.style.backgroundColor = backgroundColor;
      } catch (err) {
        console.error(`Error in bg(): ${err.message}`);
      }
    },

    // shorthand for applying backgroundColor to element using className
    _bg(elementclassName, BackgroundColor) {
      try {
        const elements = document.getElementsByClassName(elementclassName);
        if (!elements.length)
          throw new Error(
            `Elements with class '${elementclassName}' not found`
          );
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.backgroundColor = BackgroundColor;
        }
      } catch (err) {
        console.error(`Error in _bg(): ${err.message}`);
      }
    },

    // shorthand to apply height to element using ID
    ht(elementId, height) {
      try {
        const element = document.getElementById(elementId);
        if (!element)
          throw new Error(`Element with ID '${elementId}' not found`);
        element.style.height = height;
      } catch (err) {
        console.error(`Error in ht(): ${err.message}`);
      }
    },

    // shorthand to apply width to element using ID
    wt(elementId, width) {
      try {
        const element = document.getElementById(elementId);
        if (!element)
          throw new Error(`Element with ID '${elementId}' not found`);
        element.style.width = width;
      } catch (err) {
        console.error(`Error in wt(): ${err.message}`);
      }
    },

    // shorthand to apply multiple styles to elements using class name
    _styles(elementclassName, _styles) {
      try {
        const elements = document.getElementsByClassName(elementclassName);
        if (!elements.length)
          throw new Error(
            `Elements with class '${elementclassName}' not found`
          );
        for (let i = 0; i < elements.length; i++) {
          for (let props in _styles) {
            if (_styles.hasOwnProperty(props)) {
              const fullProps = this.stylesMapping[props] || props;
              elements[i].style[fullProps] = _styles[props];
            }
          }
        }
      } catch (err) {
        console.error(`Error in _styles(): ${err.message}`);
      }
    },

    // shorthand mapping for common CSS properties
    stylesMapping: {
      bgcl: "backgroundColor",
      bg: "background",
      cl: "color",
      fs: "fontSize",
      bd: "border",
      h: "height",
      w: "width",
      r: "right",
      l: "left",
      t: "top",
      b: "bottom",
      pos: "position",
      pd : "padding",
      trfm : "transform"
    },
  };

  // shorthand functions with $ prefix (e.g., $bg, $cl, etc.)
  Object.keys(shorthand.stylesMapping).forEach((shortProp) => {
    const fullProp = shorthand.stylesMapping[shortProp];
    global[`$${shortProp}`] = function (el, value) {
      try {
        if (!el) throw new Error("Element not provided");
        el.style[fullProp] = value;
      } catch (err) {
        console.error(`Error in $${shortProp}(): ${err.message}`);
      }
    };

    // Add shorthand as a method on the HTMLElement prototype
    HTMLElement.prototype[`$${shortProp}`] = function (value) {
      try {
        if (arguments.length === 1) {
          this.style[fullProp] = value;
        } else {
          return this.style[fullProp];
        }
      } catch (err) {
        console.error(
          `Error in HTMLElement.prototype.$${shortProp}(): ${err.message}`
        );
      }
    };
  });

  // Attached shorthand functions to global namespace
  global.$$ = shorthand;
  global.sh = shorthand;
})(window);
