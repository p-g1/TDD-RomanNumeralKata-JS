exports.Converter = number => {
    const map = {V:5,IV:4,I:1};
    var output = '';

    for (var numeral in map ) {
        while ( number >= map[numeral] ) {
            output += numeral;
            number -= map[numeral];
        }
    }
    return output;
}