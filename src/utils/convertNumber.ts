export const convertNumberToK = (num: number) => {
    if (num >= 10000) {
        let stringNumber = num / 1000;
        return stringNumber + 'k';
    }
    return num;
}