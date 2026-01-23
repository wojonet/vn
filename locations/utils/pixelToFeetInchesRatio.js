var calculateWidth = function caclulateWidth(pixelWidth) {
  const ratio = pixelWidth / 160;
  const inches = ratio * (11 * 12 + 10); // 11 feet 10 inches
  const feet = Math.floor(inches / 12);
  const remainingInches = Math.round(inches % 12);
  return `${feet}ft ${remainingInches}in`;
};

var calculateHeight = function calculateHeight(pixelHeight) {
  const ratio = pixelHeight / 210;
  const inches = ratio * (15 * 12 + 8); // 15 feet 8 inches
  const feet = Math.floor(inches / 12);
  const remainingInches = Math.round(inches % 12);
  return `${feet}ft ${remainingInches}in`;
};

HEIGHT = 28;

console.log(calculateHeight(HEIGHT)); // Example usage
