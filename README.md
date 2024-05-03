# React Day 4
Props vs State:
In React, both props and state are important concepts that help manage data within components
Props:
Props (short for properties):
Definition: Props are data that are passed into a component from its parent component.
Immutability: Props are immutable, meaning they cannot be modified by the child component that receives them.
State:
Definition: State is an internal data storage mechanism within a component.
Immutability: State is mutable, and it can be modified using the setState method provided by React.
Role: It is used to manage dynamic data that can change over time within a component.
Working with array lists:
The term "array list" is commonly used to refer to an array—a data structure that stores elements in a sequential order. An array is a way to organize and store multiple values under a single variable name. Each element in an array has a unique index, starting from 0.
Eg: const myList = [1, 2, 3, 4, 5];
Usage of keys:
The key attribute is used to uniquely identify elements in a rendered list of components. This helps React efficiently update the UI by understanding which items have been added, removed, or changed. The key prop should be assigned to the unique identifier of each item in the list.
When the list items can change dynamically (e.g., if they can be added/removed), you can use the index as a key.
Conditional rendering:
	Conditional rendering in React involves rendering different content or components based on certain conditions.
Handling Events:
	handling events involves defining functions (event handlers) that are executed when a specific event occurs. These functions are then attached to the corresponding elements in the JSX code.



