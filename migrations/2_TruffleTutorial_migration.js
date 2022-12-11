// Help Truffle find `TruffleTutorial.sol` in the `/contracts` directory
const TruffleTutorial = artifacts.require("TruffleTutorial");
const ToDoList = artifacts.require("TodoList");
module.exports = function(deployer) {
  // Command Truffle to deploy the Smart Contract
  deployer.deploy(TruffleTutorial);
  deployer.deploy(ToDoList);
};
