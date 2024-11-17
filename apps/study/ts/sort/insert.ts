function sortList(unsortedList) {
    for (let i = 0; i < unsortedList.length; i++) {
        let current = i;
        // gets the smallest element and inserts at current index
        while (current > 0 && unsortedList[current] < unsortedList[current - 1]) {
            const temp = unsortedList[current];
            // swaps current smaller element with the element before it
            unsortedList[current] = unsortedList[current - 1];
            unsortedList[current - 1] = temp;
            current--;
        }
    }
    return unsortedList;
}
