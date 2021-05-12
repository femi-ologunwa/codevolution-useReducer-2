## Differences Between useState and useReducer

1. Type of state - useState is best suited for managing primitive types (number, string, boolean) while useReducer is best suite for array and object state eg person object that contains firstname, lastname and age properties
2. Number of state transitions - useState is more suited for updating one or 2 state variables; when there is a tendency of 5 or seperate set-state calls, useReducer is a better option. This makes the state transitions predictable as all state variable will be together as a unit.
3. Related state transitions? - if the transition of one independent state will trigger a transition in only one/two other independent states, useState is good to go, otherwise, useReducer is a better option.
4. Business logic for a state transition - if the state transition from an old value to a new value requires a complex data transformation/manipulation use useReducer, otherwise, useState is the way to go.
5. Local vs global state - To maintain local component state, useState is a better option; to maintain a global state that can be altered by a component deep in the component tree, useReducer is the way to go.

### Implementation

1. Illustrate fetching data from an API with useState and useEffect.

2. Illustrate fetching data from an API with useReducer and useEffect.
