# 🚀 Usage:

```
npm i nlv-atomic-scss

import "nlv-atomic-scss";
```

# Markdown syntax guide

1. Height Classes:

   - To set a specific height, use the class "h-#" followed by the desired height in pixels (# is the desired height value between 1 to 1000).
   - To set a height relative to the parent container, use the class "h-#p" followed by the desired percentage of the parent container's height.
   - To set a height relative to the viewport height, use the class "h-#vh" followed by the desired percentage of the viewport height.
   - To set a minimum height, use the class "min-h-#" followed by the desired minimum height value in pixels or "min-h-#p" for percentage value.
   - To set a maximum height, use the class "max-h-#" followed by the desired maximum height value in pixels or "max-h-#p" for percentage value.

1. Mobile Classes:

   - To apply the same styles as above but only on mobile devices, use the "mobile-" prefix with the class name.

1. Hover Classes:
   - To set a height on hover, use the class "hover-h-#" followed by the desired height value in pixels or "hover-h-#p" for percentage value.
   - To set a minimum height on hover, use the class "hover-min-h-#" followed by the desired minimum height value in pixels or "hover-min-h-#p" for percentage value.
   - To set a maximum height on hover, use the class "hover-max-h-#" followed by the desired maximum height value in pixels or "hover-max-h-#p" for percentage value.

**You can add these classes to any HTML element to apply the corresponding height, minimum height, or maximum height styles. For example, to set a div's height to 200 pixels, you can add the class "h-200" to it like this:**

```
<div class="h-200">This div has a height of 200 pixels</div>
```

**Similarly, you can use other classes like "min-h-50p" or "max-h-500vh" to set minimum and maximum heights relative to percentage and viewport height, respectively. And if you want to apply these styles only on mobile devices, you can add the "mobile-" prefix to the class name, like "mobile-min-h-50p" for a minimum height of 50% on mobile devices. Finally, you can add hover styles by using the "hover-" prefix with the class name, like "hover-h-300" for setting a height of 300 pixels on hover.**

#### The same usage for width

4. Margin / padding

   - .p-#{$i}: This class sets the padding for all four sides of an element with a value of $i multiplied by 1 pixel.

   - .p-#{$i}p: This class sets the padding for all four sides of an element with a value of $i multiplied by 1 percent of the parent element's width.

   - .p-#{$i}vw: This class sets the padding for all four sides of an element with a value of $i multiplied by 1 viewport width.

   - .p-#{$i}vh: This class sets the padding for all four sides of an element with a value of $i multiplied by 1 viewport height.

   - .pt-#{$i}: This class sets the padding for the top side of an element with a value of $i multiplied by 1 pixel.

   - .pt-#{$i}p: This class sets the padding for the top side of an element with a value of $i multiplied by 1 percent of the parent element's width.

   - .pt-#{$i}vw: This class sets the padding for the top side of an element with a value of $i multiplied by 1 viewport width.

   - .pt-#{$i}vh: This class sets the padding for the top side of an element with a value of $i multiplied by 1 viewport height.

   - .pb-#{$i}: This class sets the padding for the bottom side of an element with a value of $i multiplied by 1 pixel.

   - .pb-#{$i}p: This class sets the padding for the bottom side of an element with a value of $i multiplied by 1 percent of the parent element's width.

   - .pb-#{$i}vw: This class sets the padding for the bottom side of an element with a value of $i multiplied by 1 viewport width.

   - .pb-#{$i}vh: This class sets the padding for the bottom side of an element with a value of $i multiplied by 1 viewport height.

   - .pl-#{$i}: This class sets the padding for the left side of an element with a value of $i multiplied by 1 pixel.

   - .pl-#{$i}p: This class sets the padding for the left side of an element with a value of $i multiplied by 1 percent of the parent element's width.

   - .pl-#{$i}vw: This class sets the padding for the left side of an element with a value of $i multiplied by 1 viewport width.

   - .pl-#{$i}vh: This class sets the padding for the left side of an element with a value of $i multiplied by 1 viewport height.

   - .pr-#{$i}: This class sets the padding for the right side of an element with a value of $i multiplied by 1 pixel.

   - .pr-#{$i}p: This class sets the padding for the right side of an element with a value of $i multiplied by 1 percent of the parent element's width.

   - .pr-#{$i}vw: This class sets the padding for the right side of an element with a value of $i multiplied by 1 viewport width.

   - .pr-#{$i}vh: This class sets the padding for the right side of an element

### Same usage in breakdown mobile and hover

5. Syntax for **display**, **justify-content**, **align-content**, **align-items**, **align-self**:

   [property name]-[value]

   **Example**:

   ```
   d-flex = display: flex
   justify-content-center = justify-content: center
   align-items-center = align-items: center
   ```

Add prefix **mobile** and **hover** for mobile and hover selector
