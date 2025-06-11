function handleEmployeeActions(employee) {
  employee.work();
  employee.attendMeeting();
  employee.code();
  employee.design();
}

const designer = {
  name: "UI Designer",
  work: () => console.log("Working..."),
  attendMeeting: () => console.log("Attending meeting..."),
  // Forced to implement unnecessary methods
  code: () => {
    throw new Error("I don't write code");
  },
  design: () => console.log("Designing UI..."),
};
const developer = {
  name: "Software Developer",
  work: () => console.log("Working..."),
  attendMeeting: () => console.log("Attending meeting..."),
  code: () => console.log("Writing code..."),
  design: () => {
    throw new Error("I don't design UI");
  },
};
const tester = {
  name: "Software Tester",
  work: () => console.log("Working..."),
  attendMeeting: () => console.log("Attending meeting..."),
  code: () => {
    throw new Error("I don't write code");
  },
  design: () => {
    throw new Error("I don't design UI");
  },
};

handleEmployeeActions(designer);
