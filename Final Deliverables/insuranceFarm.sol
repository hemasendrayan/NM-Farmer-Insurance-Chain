// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Insurance {
    struct InsurancePolicy {
        address holder;
        string policyNumber;
        uint256 premiumAmount;
        uint256 coverageAmount;
        uint256 expirationTimestamp;
    }

    mapping(uint256 => InsurancePolicy) public policies;
    uint256 public policyCount;

    event PolicyAdded(uint256 policyId, address holder, string policyNumber, uint256 premiumAmount, uint256 coverageAmount, uint256 expirationTimestamp);
    event PolicyUpdated(uint256 policyId, uint256 premiumAmount, uint256 coverageAmount, uint256 expirationTimestamp);

    modifier onlyHolder(uint256 _policyId) {
        require(policies[_policyId].holder == msg.sender, "Only the policy holder can perform this action");
        _;
    }

    function addPolicy(string memory _policyNumber, uint256 _premiumAmount, uint256 _coverageAmount, uint256 _expirationTimestamp) external {
        policyCount++;
        policies[policyCount] = InsurancePolicy(msg.sender, _policyNumber, _premiumAmount, _coverageAmount, _expirationTimestamp);
        emit PolicyAdded(policyCount, msg.sender, _policyNumber, _premiumAmount, _coverageAmount, _expirationTimestamp);
    }

    function updatePolicy(uint256 _policyId, uint256 _premiumAmount, uint256 _coverageAmount, uint256 _expirationTimestamp) external onlyHolder(_policyId) {
        InsurancePolicy storage policy = policies[_policyId];
        policy.premiumAmount = _premiumAmount;
        policy.coverageAmount = _coverageAmount;
        policy.expirationTimestamp = _expirationTimestamp;
        emit PolicyUpdated(_policyId, _premiumAmount, _coverageAmount, _expirationTimestamp);
    }

    function getPolicyDetails(uint256 _policyId) external view returns (address holder, string memory policyNumber, uint256 premiumAmount, uint256 coverageAmount, uint256 expirationTimestamp) {
        InsurancePolicy memory policy = policies[_policyId];
        return (policy.holder, policy.policyNumber, policy.premiumAmount, policy.coverageAmount, policy.expirationTimestamp);
    }
}