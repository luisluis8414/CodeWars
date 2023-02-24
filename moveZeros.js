function moveZeros(array) {
    let filter = array.filter(element => element !== 0);
    array = [...filter, ...Array(array.length - filter.length).fill(0)];
    return array;
}

