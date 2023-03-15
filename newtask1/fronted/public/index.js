// import abi from "./MyToken.json" assert {type: 'json'};
// import {ethers} from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.0.3/ethers.min.js";
// import { ethers } from "https://cdn.ethers.io/lib/ethers-5.2.umd.min.js";  

//  const abi =require("./contracts/MyToken.json")
// const { ethers }=required("ethers");

// import * as ethers from "./ethers.js";
// import Web3 from 'web3';

// import {ethers} from "ethers";

// import "ethers";
// const { ethers }='ethers';

// import {ethers} from "../node_modules/ethers/src.ts/ethers";
// const { ethers } = requries("ethers")

// const fetch_data = fetch('./MyToken.json')
//   .then(response => response.json())
//   .then(data => {
    // Do something with the data
//     // console.log("abc=============>", data)  
//     ab=data.abis
//     return ab;
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });

// var json = (function() {
//     var json = null;
//     $.ajax({
//       'async': false,
//       'global': false,
//       'url': "../build/contracts/MyToken.json",
//       'dataType': "json",
//       'success': function(data) {
//         json = data;
//       }
//     });
//     return json;
//   })();

  // var json1 = (function() {
  //   var json1 = null;
  //   $.ajax({
  //     'async': false,
  //     'global': false,
  //     'url': "../build/contracts/Buyt.json",
  //     'dataType': "json",
  //     'success': function(data) {
  //       json1 = data;
  //     }
  //   });
  //   return json;
  // })();

import abi from "./Mytoken.json" assert { type: "json" }
import Abi from "./Buyt.json" assert { type: "json" }

const provider=new ethers.providers.Web3Provider(window.ethereum);
const signer=provider.getSigner();

const contractAddress = "0x884cAB9bCA33C3aBD7A4f533FE53c8B9645af745";
const buycontractaddress="0x545CcE0Fccd5d3A4194A27f1c7cF9fbf30f7158b";

const contractAbi = abi.abi;
const buycontractabi = Abi.abi;
console.log('contractAbi-------',contractAbi)
console.log('buycontractabi-------',buycontractabi)


export const contract = new ethers.Contract(contractAddress, contractAbi, signer);
export const buycontract=new ethers.Contract(buycontractaddress,buycontractabi,signer);
// window.addEventListener('load', async () => 

export const cw=async()=>
{   

  try{
    if (typeof window.ethereum !== "undefined") 
    {

        const account = window.ethereum.request({
            method: 'wallet_requestPermissions',
            params: [{
                eth_accounts: {},
            }],
           }).then((permissions) => {
        const accountsPermission = permissions.find(
          (permission) => permission.parentCapability === 'eth_accounts'
        );
        if (accountsPermission) {
          console.log('account address--------',accountsPermission.caveats[0].value[0],'eth_accounts permission successfully requested!');
          const ab=accountsPermission.caveats[0].value[0];

        }
        }).catch((error) => {
            if (error.code === 4001) {
      
               
            } else {
                alert(error.message);
                console.error('error-----',error);
            }
         }); 
    }   
      // if (typeof window.ethereum !== "undefined") 
      // {
      //   ethereum
      //     .request({ method: "eth_requestAccounts" })
      //     .then((accounts) => {
      //       const account = accounts[0]
    
      //       console.log('connected account------',account)
      //     },
      //     ()=>
      //     {
      //       console.log('user rejected the request-----');
      //     })
      // } 
    }
    catch(error)
    {
      console.log('error:---',error);
    }
};
