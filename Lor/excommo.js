const formatNumber = thresholdFormat("en-US", 1000, { style: "currency", currency: "USD" });

console.log(formatNumber(500)); // Output: $500
console.log(formatNumber(1500)); // Output: 1.5K
