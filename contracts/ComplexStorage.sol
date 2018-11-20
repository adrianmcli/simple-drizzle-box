pragma solidity ^0.4.24;

contract ComplexStorage {
  uint public storeduint1 = 15;
  uint public constant constuint = 16;
  uint128 public investmentsLimit = 17055;
  uint32 public investmentsDeadlineTimeStamp = uint32(now);

  bytes16 public string1 = "test1";
  bytes32 public string2 = "test1236";
  string public string3 = "lets string something";

  mapping (address => uint) public uints1;
  mapping (address => DeviceData) public structs1;

  uint[] public uintarray;
  DeviceData[] public deviceDataArray;
  DeviceData public singleDD;
  address[] public deviceAddresses;

  struct DeviceData {
    string deviceBrand;
    string deviceYear;
    string batteryWearLevel;
  }

  constructor() public {
    address address1 = 0xbCcc714d56bc0da0fd33d96d2a87b680dD6D0DF6;
    address address2 = 0xaee905FdD3ED851e48d22059575b9F4245A82B04;

    uints1[address1] = 88;
    uints1[address2] = 99;

    structs1[address1] = DeviceData("deviceBrand", "deviceYear", "wearLevel");
    structs1[address2] = DeviceData("deviceBrand2", "deviceYear2", "wearLevel2");
    singleDD = DeviceData("deviceBrand3", "deviceYear3", "wearLevel3");

    uintarray.push(8000);
    uintarray.push(9000);

    deviceDataArray.push(structs1[address1]);
    deviceDataArray.push(structs1[address2]);

    deviceAddresses.push(address1);
    deviceAddresses.push(address2);
  }

  function newDevice(string _brand, string _year, string _wearLevel) public {
    structs1[msg.sender] = DeviceData(_brand, _year, _wearLevel);
    deviceDataArray.push(structs1[msg.sender]);
    deviceAddresses.push(msg.sender);
  }

  function getDeviceAddresses() external view returns (address[] memory) {
      return deviceAddresses;
  }
}
