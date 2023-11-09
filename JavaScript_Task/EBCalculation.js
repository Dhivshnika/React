function ESCalculation(unit) {
    let charge;
    if (unit <= 100) {
        charge = 0;
    }
    else {
        var unit1 = unit - 100;
        if (unit1 <= 100) {
            charge = unit1 * 2;
        }
        else {
            charge = 100 * 2;
            var sub1 = unit1 - 100;
            if (sub1 <= 300) {
                charge = charge + (sub1 * 5);
            }
            else {
                charge = charge + (300 * 5);
                var sub2 = sub1 - 300;
                charge = charge + (sub2 * 10);
            }
        }
    }
    console.log(charge);
}
ESCalculation(100);
ESCalculation(150);
ESCalculation(250);
ESCalculation(650);