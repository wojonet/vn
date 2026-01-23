var calculateWidth = function caclulateWidth(pixelWidth) {
  const ratio = pixelWidth / 160;
  const inches = ratio * ((11 * 12) + 10); // 11 feet 10 inches
  const feet = Math.floor(inches / 12);
  const remainingInches = Math.round(inches % 12);
  return `${feet}ft ${remainingInches}in`;
};

var calculateHeight = function calculateHeight(pixelHeight) {
  const ratio = pixelHeight / 210;
  const inches = ratio * ((15 * 12) + 8); // 15 feet 8 inches
  const feet = Math.floor(inches / 12);
  const remainingInches = Math.round(inches % 12);
  return `${feet}ft ${remainingInches}in`;
};

// get command line args
const args = process.argv.slice(2);
if (args.length === 1) {
  const dimesion = args[0];
  console.log(`Width: ${calculateWidth(parseInt(dimesion, 10))}`);
  console.log(`Height: ${calculateHeight(parseInt(dimesion, 10))}`);
}