# React useState Hook: Unexpected Behavior with Consecutive setCount Calls

This repository demonstrates a subtle bug related to how React's `useState` hook behaves when you call the `setCount` function multiple times in quick succession within a single event handler.

## Bug Description
The bug occurs when you try to update a state variable twice using `setCount` within a single function call (for instance, an event handler). In this scenario, the second call to `setCount` may override the first update. This can lead to unexpected behavior because the state won't reflect the cumulative change expected.

## How to Reproduce
Clone this repository, navigate to the project directory, and run the application.
Click the increment button, you'll notice that the count doesn't increment by 2 in the expected way.

## Solution
The most straightforward fix is to use the functional update form of the `setCount` function. This ensures that state updates are handled correctly regardless of the number of `setCount` calls within a single event handler.