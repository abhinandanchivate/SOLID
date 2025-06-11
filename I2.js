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
// call the functions
performCoding(developer);
performDesigning(designer);
performTesting(tester);
performMeeting(developer);
performMeeting(designer);
performMeeting(tester);
