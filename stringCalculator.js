function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/; // Default delimiters: comma and newline

    // Check for custom delimiter syntax
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0][2]); // Get the custom delimiter
        numbers = parts[1]; // The rest is the number part
    }

    const numArray = numbers.split(delimiter).map(Number);

    // Check for negative numbers
    const negatives = numArray.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };