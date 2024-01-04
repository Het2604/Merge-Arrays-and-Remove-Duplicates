function mergeArrays() {
    const array1Input = document.getElementById('array1');
    const array2Input = document.getElementById('array2');
    const resultDiv = document.getElementById('result');

    const array1 = array1Input.value.split(',').map(item => item.trim());
    const array2 = array2Input.value.split(',').map(item => item.trim());

    const mergedArray = Array.from(new Set([...array1, ...array2]));

    resultDiv.textContent = `Merged Array without Duplicates: [${mergedArray.join(', ')}]`;
}