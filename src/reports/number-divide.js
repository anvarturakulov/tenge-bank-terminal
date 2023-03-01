const NumberDivide = (text) => {
    let val = text.replace(/[^0-9.]/g, '');
    if (val.indexOf(".") != '-1') {
        val = val.substring(0, val.indexOf(".") + 3);
    }
    val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return val
}

export default NumberDivide
