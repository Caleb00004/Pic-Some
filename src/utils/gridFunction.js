// This is a plain javascript function is to dynamically assgigns classNames to the Imgae compoent
// so it can be styked dynamically for the grid.

// for every 5th item, it returns a class Name of Big
// and for every 6th item, it returns a class of wide
export function getClass(i) {
    if (i % 5 === 0) {
        return 'big';
    }
    else if (i % 6 === 0) {
        return 'wide'
    }
}