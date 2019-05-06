exports.Converter = number => {
    const map = {L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    var output = '';

    for (var numeral in map ) {
        while ( number >= map[numeral] ) {
            output += numeral;
            number -= map[numeral];
        }
    }
    return output;
}