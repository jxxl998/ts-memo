"use strict";
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.20462;
    }
    else {
        return parseInt(weight) * 2.20462;
    }
}
kgToLbs(10);
kgToLbs('10kg');
//# sourceMappingURL=index.js.map