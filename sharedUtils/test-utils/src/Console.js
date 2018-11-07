/**
 * This function is meant to replace console.error in jest tests
 * so that an console logged errors will make a test fail
 */
export const consoleThrow = (error) => {
  // Comment this line (temporarily) if you see the message:
  // "Warning: Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed...."
  throw Error(error);
};
