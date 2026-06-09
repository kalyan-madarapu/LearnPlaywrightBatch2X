function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}

const samples = [
  "racecar",
  "Racecar",
  "A man, a plan, a canal, Panama",
  "hello",
];

for (const sample of samples) {
  console.log(`${sample} -> ${isPalindrome(sample)}`);
}
