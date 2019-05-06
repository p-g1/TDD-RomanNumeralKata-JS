exports.Converter = decimal => {
    const decimalToRoman = 
            {5:"V", 4:"IV", 3:"III", 2:"II", 1:"I"}
    return decimalToRoman[decimal];


}