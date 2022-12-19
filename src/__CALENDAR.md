## User experience

- A scroll position consideration - Scroll item to the top of the list positioning if preference is to direct user to scroll through content. Scroll item to the bottom if preference is to make it easier to tap on the item closer to their finger. 
- Transitions and delays should be further considered

## Performance

- Usage of FlatList / SectionList as ScrollView renders all its react child components at once
- Prevent re-renders in component by keeping functions defined outside the render function
- Ensure unique keys are added to list items

## Accessibility

- With more time integrate accessibility features from - https://reactnative.dev/docs/accessibility