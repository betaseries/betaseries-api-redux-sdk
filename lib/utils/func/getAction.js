export default modules => (module, action) => {
  if (!Object.prototype.hasOwnProperty.call(modules, module)) {
    throw Error(`Module ${module} does not exist.`);
  }
  if (!Object.prototype.hasOwnProperty.call(modules[module], 'actions')) {
    throw Error(`Module ${module} has no action.`);
  }
  if (!Object.prototype.hasOwnProperty.call(modules[module].actions, action)) {
    throw Error(`Action ${action} does not exist.`);
  }

  return modules[module].actions[action];
};
