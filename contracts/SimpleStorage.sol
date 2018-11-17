pragma solidity ^0.4.24;

contract SimpleStorage {
  uint public storedData;

  event StorageSet(string _message);

  function set(uint x) public {
    storedData = x;

    emit StorageSet("Data stored successfully!");
  }
}
