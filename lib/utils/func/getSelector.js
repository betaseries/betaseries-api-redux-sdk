/**
 * @alias module:BetaSeries.getSelector
 * @category static
 *
 * @param {String} module   Module name
 * @param {String} selector Selector name
 *
 * @returns {Func}
 */
const getSelector = modules =>
  (module, selector) => {
    if (!Object.prototype.hasOwnProperty.call(modules, module)) {
      throw Error(`Module ${module} does not exist.`);
    }
    if (!Object.prototype.hasOwnProperty.call(modules[module], 'selectors')) {
      throw Error(`Module ${module} has no selector.`);
    }
    if (
      !Object.prototype.hasOwnProperty.call(modules[module].selectors, selector)
    ) {
      throw Error(`Selector ${selector} does not exist.`);
    }

    return modules[module].selectors[selector];
  };

export default getSelector;
