const { ethers } = require("ethers");

const abi = [
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "policyId",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "address",
    "name": "holder",
    "type": "address"
   },
   {
    "indexed": false,
    "internalType": "string",
    "name": "policyNumber",
    "type": "string"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "premiumAmount",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "coverageAmount",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "expirationTimestamp",
    "type": "uint256"
   }
  ],
  "name": "PolicyAdded",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "policyId",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "premiumAmount",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "coverageAmount",
    "type": "uint256"
   },
   {
    "indexed": false,
    "internalType": "uint256",
    "name": "expirationTimestamp",
    "type": "uint256"
   }
  ],
  "name": "PolicyUpdated",
  "type": "event"
 },
 {
  "inputs": [
   {
    "internalType": "string",
    "name": "_policyNumber",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "_premiumAmount",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "_coverageAmount",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "_expirationTimestamp",
    "type": "uint256"
   }
  ],
  "name": "addPolicy",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "_policyId",
    "type": "uint256"
   }
  ],
  "name": "getPolicyDetails",
  "outputs": [
   {
    "internalType": "address",
    "name": "holder",
    "type": "address"
   },
   {
    "internalType": "string",
    "name": "policyNumber",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "premiumAmount",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "coverageAmount",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "expirationTimestamp",
    "type": "uint256"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "name": "policies",
  "outputs": [
   {
    "internalType": "address",
    "name": "holder",
    "type": "address"
   },
   {
    "internalType": "string",
    "name": "policyNumber",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "premiumAmount",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "coverageAmount",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "expirationTimestamp",
    "type": "uint256"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "policyCount",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "_policyId",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "_premiumAmount",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "_coverageAmount",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "_expirationTimestamp",
    "type": "uint256"
   }
  ],
  "name": "updatePolicy",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 }
]

if (!window.ethereum) {
 alert('Meta Mask Not Found')
 window.open("https://metamask.io/download/")
}

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const address = "0xA7cC7856Db48E835c43eb149B7682074133Afe43"

export const contract = new ethers.Contract(address, abi, signer)
