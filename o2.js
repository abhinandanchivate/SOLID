var DiscountType;
(function (DiscountType) {
    DiscountType["STUDENT"] = "student";
    DiscountType["SENIOR"] = "senior";
    DiscountType["VETERAN"] = "veteran";
    DiscountType["GOVT_EMP"] = "govt_emp";
})(DiscountType || (DiscountType = {}));
function getDiscount(type) {
    var _a;
    var discountMap = (_a = {},
        _a[DiscountType.STUDENT] = 0.1,
        _a[DiscountType.SENIOR] = 0.2,
        _a[DiscountType.VETERAN] = 0.3,
        _a[DiscountType.GOVT_EMP] = 0.05,
        _a);
    return discountMap[type];
}
