import { nestedClauseExample } from "./tests/guard.tests";

const main = () => {
  console.log("Application started");

  // Guard clause examples
  var result = nestedClauseExample({ isValid: true });

  console.log("Application ended");
};

main();
