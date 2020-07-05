var day;
function nSidedShape(n) {
    switch (n) {
        case 1:
            day = "circle";
            break;
        case 2:
            day = "semi-circle";
            break;
        case 3:
            day = "triangle";
            break;
        case 4:
            day = "square";
            break;
        case 5:
            day = "pentagon";
            break;
        case 6:
            day = "hexagon";
        case 7:
            day = "heptagon";
        case 8:
            day = "octagon";
        case 9:
            day = "nonagon";
        case 10:
            day = "decagon";
    }
    return day;

}
console.log(nSidedShape(3))
//op:- traingle


/* Second Case */

function nSidedShape(n) {
    const shapesObj = {
        1: "circle",
        2: "semi-circle",
        3: "triangle",
        4: "square",
        5: "pentagon",
        6: "hexagon",
        7: "heptagon",
        8: "octagon",
        9: "nonagon",
        10: "decagon"
    }
    return shapesObj[n]
}

console.log(nSidedShape(5));
    //pentagon
