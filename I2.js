const performCoding = (employee) => {
  employee.code();
};
const performDesigning = (employee) => {
  employee.design();
};
const performTesting = (employee) => {
  employee.test();
};
const performMeeting = (employee) => {
  employee.attendMeeting();
};

const developer = {
  code: () => console.log("Writing code..."),
  name: "Software Developer",
  attendMeeting: () => console.log("Attending meeting..."),
};
const designer = {
  design: () => console.log("Designing UI..."),
  name: "UI Designer",
  attendMeeting: () => console.log("Attending meeting..."),
};
const tester = {
  test: () => console.log("Testing software..."),
  name: "Software Tester",
  attendMeeting: () => console.log("Attending meeting..."),
};
const empTypes = [developer, designer, tester];
empTypes.forEach((e) => {
  if (e.name === "Software Developer") {
    e.code();
  } else if (e.name === "UI Designer") {
    e.design();
  } else if (e.name === "Software Tester") {
    e.test();
  }
  e.attendMeeting();
});
// call the functions
