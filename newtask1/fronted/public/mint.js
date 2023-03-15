import {contract,buycontract} from "./index.js";
// const contract=require("./app.js");
// const c= './app.js';

// function mintfunction(add2,amount) 
const mintfunction=async(add2,amount)=>
{
    // console.log('contract address---------',contract.address);
    // console.log('buycontract address---------',buycontract.address);
    
    try{
        const transfer=await contract.mint(add2,amount);
        await transfer.wait();
        console.log('transaction is done');
        location.reload();
    }
    catch(error)
    {
        console.log('errrr',error.data.message);
        alert(error.data.message);
    }

    
}
let tbal;
async function bal()
{   
    // const balan= await contract.balanceOf(";
    const balan = await contract.balanceOf(buycontract.address);
    // console.log("xdvcfvfvf",buycontract.address);    
    // return tbalance;
    tbal = Number(balan);
    console.log('-------tb---',tbal);
    // tbal=tbalance;

    return tbal;
    
}

bal();
// const checkBalance=()=> 
// {
//     balance=
// }
export {mintfunction};
export {buycontract};
export {bal};
export {tbal};


