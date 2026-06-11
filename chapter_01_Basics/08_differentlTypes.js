// Identifier naming styles in JavaScript

// camelCase (common for variables and functions)
let userName = "Kalyan";
function calculateTotalPrice(basePrice, taxRate) {
	return basePrice + basePrice * taxRate;
}

// PascalCase (common for classes and constructors)
class UserProfile {
	constructor(displayName) {
		this.displayName = displayName;
	}
}

// snake_case (less common in JS, but still valid)
let user_age = 25;

// SCREAMING_SNAKE_CASE (common for constants)
const MAX_RETRY_COUNT = 3;

// lowercase (simple identifiers)
let status = "active";

// UPPERCASE (valid but uncommon for non-constants)
let STATUS = "ACTIVE";

// kebab-case is not valid for identifiers, use strings instead
const kebabCaseLabel = "first-name";

// Hungarian Notation (older style, generally avoided)
let strFirstName = "Kalyan";

// Train-Case is not valid for identifiers, use strings instead
const trainCaseLabel = "First-Name";

// UPPER_SNAKE_CASE (constant style variation)
const MAX_API_TIMEOUT_MS = 15000;

// lowerCamelCase (alias for camelCase)
let orderId = 1024;

// mixedCase (not recommended, but valid)
let userIDNumber = 42;

// Title Case (not valid for identifiers, use strings instead)
const titleCaseLabel = "Order Total";

const totalPrice = calculateTotalPrice(100, 0.08);
const profile = new UserProfile(userName);

console.log("camelCase:", userName, totalPrice);
console.log("PascalCase:", profile.displayName);
console.log("snake_case:", user_age);
console.log("SCREAMING_SNAKE_CASE:", MAX_RETRY_COUNT);
console.log("lowercase:", status);
console.log("UPPERCASE:", STATUS);
console.log("kebab-case (string):", kebabCaseLabel);
console.log("Hungarian Notation:", strFirstName);
console.log("Train-Case (string):", trainCaseLabel);
console.log("UPPER_SNAKE_CASE:", MAX_API_TIMEOUT_MS);
console.log("lowerCamelCase:", orderId);
console.log("mixedCase:", userIDNumber);
console.log("Title Case (string):", titleCaseLabel);
