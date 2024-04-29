const CircleNumText = ({ index }) => {
    switch (index) {
        case 1:
            return "❶";
        case 2:
            return "❷";
        case 3:
            return "❸";
        case 4:
            return "❹";
        case 5:
            return "❺";
        case 6:
            return "❻";
        case 7:
            return "❼";
        case 8:
            return "❽";
        case 9:
            return "❾";
        case 10:
            return "❿";
        default:
            return "x"
    }
}

export default CircleNumText