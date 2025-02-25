import { guardClauseExample } from "./utils/helper";

const main = () => {
  console.log("Application started");

  guardClauseExample({ isValid: true });

  console.log("Application ended");
};

main();
