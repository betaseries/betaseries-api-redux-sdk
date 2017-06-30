export default (elements = []) =>
  elements.filter((value, index, self) => self.indexOf(value) === index);
