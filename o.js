// student : 10% discount
// senior : 20% discount
// veteran : 30% discount
// govt emps : 5% discount
// I am modifying the code
// writing a function in JSON is it good or bad practice?
// const discountStrategies = {
//   student: 0.1,
//   senior: 0.2,
//   veteran: 0.3,
//   govt_emp: 0.05,
// }; // json, map , enums
// using map key value pair
// can we have a duplicate key in a map? no
// [key, value]

// Enum : enumeration  is a special data structure used to define a set of named constants. it helps to make our code more readable.
// typescript will support direct enum
// but in case java script we have to simulate it .
const DiscountTypes = {
  STUDENT: "student",
  SENIOR: "senior",
  VETERAN: "veteran",
  GOVT_EMP: "govt_emp",
};

const discountStrategies = new Map([
  [DiscountTypes.STUDENT, 0.1],
  [DiscountTypes.SENIOR, 0.2],
  [DiscountTypes.VETERAN, 0.3],
  [DiscountTypes.GOVT_EMP, 0.05],
]);
// const getDiscount = (type) => {
//   if (!discountStrategies.has(type)) {
//     throw new Error("Invalid discount type");
//   }
//   return discountStrategies.get(type);
// };
// function getDiscount(type) {
//   const strategy = discountStrategies[type];
//   if (!strategy) {
//     throw new Error("Invalid discount type");
//   }
//   return strategy;
// }

const strategy = getDiscount("senior");
console.log(strategy);
