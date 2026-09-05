# Namaste React 🚀


# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - Support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking
- Different dev and production bundles


# Namaste Food

/**
 * Header
 * --Logo
 * --Nav items
 * Body
 * --Search
 * --Restaurant Container
 * --Restaurant Card
 *    --Image
 *    --Name of Restaurant, Star Rating, Cusines, delivery time, Cost for two
 * Footer
 * --Copyright
 * --Links
 * --Address
 * --Contact
 */


 # There are two types of export/Import :-
 - Default Export/Import
   export default Component;
   import Component from "path";


 - Named Export/Import
   export const Component;
   import {Component} from "path";


   # State variable - Super Powerful variable
   - const [name] = useState();

   # React Hooks
    - (Normal JS utility functions)


# Two very important React Hooks are:-
- useState() - Superpowerful State Variables in React
- useEffect()


# SuperPowerful State Variable
- Whenever a state variable updates, React rerenders the Components.(imp)

# How React Works?
- When Something change on the UI it is known as Reconvciliation(It was introduced in React 16).
- It uses Reconciliation Algorithm (It is also known as React Fibre?)
  - React Creates Virtual DOM(It is just a representation of an actual DOM) of original UI.
  - Virtual DOM is nothing but a normal javaScript Object.



  # Diff Algorithm:
  - It find out the difference between two virtual DOMs. The updated virtual DOMs and previous virtual DOMs.


  # Array Distructuring:

  <!--  const [filteredRes, setFilteredRes] = useState(resList); -->
   
   const arr = useState(resList);
   <!-- const [filteredRes, setFilteredRes] = arr; -->

   const filteredRes = arr[0];
   const setFilteredRes = arr[1];