enum DiscountType {
  STUDENT = "student",
  SENIOR = "senior",
  VETERAN = "veteran",
  GOVT_EMP = "govt_emp",
}

function getDiscount(type: DiscountType): number {
  const discountMap = {
    [DiscountType.STUDENT]: 0.1,
    [DiscountType.SENIOR]: 0.2,
    [DiscountType.VETERAN]: 0.3,
    [DiscountType.GOVT_EMP]: 0.05,
  };
  return discountMap[type];
}
