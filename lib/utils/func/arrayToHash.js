export default elements =>
  elements.reduce(
    (sum, element) => ({
      ...sum,
      [element.id]: element
    }),
    {}
  );
