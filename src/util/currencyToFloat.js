function currencyToFloat(currencyString) {
  if (typeof currencyString === 'number') {
    return currencyString; // If it's already a number, return it directly
  }

  if (typeof currencyString !== 'string') {
    throw new TypeError('Expected a string');
  }

  // Remove any non-numeric characters except for the decimal point
  const numericString = currencyString.replace(/[^0-9.,]/g, '');

  // Replace comma with dot for decimal point if necessary
  const normalizedString = numericString.replace(',', '.');

  // Convert to float
  const floatValue = parseFloat(normalizedString);

  // Check if the conversion was successful
  if (isNaN(floatValue)) {
    throw new Error('Invalid currency format');
  }

  return floatValue;
}

export default currencyToFloat;
