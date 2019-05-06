exports.Converter = number => {
    const map = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    var output = '';

    for (var numeral in map ) {
        while ( number >= map[numeral] ) {
            output += numeral;
            number -= map[numeral];
        }
    }
    return output;
}