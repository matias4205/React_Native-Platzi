export const getMMSSFromMillis = (millis) => {
    const seconds = Math.floor(millis % 60);
    const minutes = Math.floor(millis / 60);
    
    const padWithZero = number => {
        const string = number.toString();
        if (number < 10) {
        return `0${string}`;
        }
        return string;
    };
    return `${padWithZero(minutes)}:${padWithZero(seconds)}`;
}