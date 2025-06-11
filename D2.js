const processPayment = (handleSuccess, handleFailure) => {
  const isSuccess = Math.random() > 0.5; // Simulating a payment process
  const result = isSuccess ? "TXN12345" : "insufficient balance"; // Simulating a transaction result
  if (isSuccess) {
    handleSuccess(result);
  } else {
    handleFailure(result);
  }
};

const logSuccess = (transactionId) => {
  console.log(
    `Payment processed successfully. Transaction ID: ${transactionId}`
  );
};
const logFailure = (error) => {
  console.log(`Payment failed. Error: ${error}`);
};
processPayment(logSuccess, logFailure);
