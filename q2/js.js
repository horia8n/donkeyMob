function createObjectFromChars(chars) {
    let result = {};
    for (let i = 0; i < chars.length; i++) {
        result[chars[i]] = `${chars[i]}${i + 1}`;
    } ​
	return result;
} ​

function createObjectFromCharsUsingReduce(chars) {
    return chars.reduce( (accumulator, currentValue, currentIndex) => `${currentValue}${currentIndex + 1}`);
}