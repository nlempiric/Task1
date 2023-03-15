import {buycontract} from "./index.js";
// let order_id=0;
// const order=
// {
//   addr,
//   amount,
//   time,
//   isclaimed,  
// }
// const omap=new Map(order);
// let orderid;
// const buytokenunc=async(eth)=>
// {
    // order_id+=1;
    // const buytoken=await buycontract.transfer(add,amount);
    // await buytoken.wait();
    // console.log('transaction is done');
    // const n=1;
    // try
    // {
    //     const value={value:ethers.utils.parseEther(`${eth}`)};
    //     const value1 = Number(value);
    //     console.log('----value----------',value);
    //     // console.log('----value----------',value1);
    //     const buytoken=await buycontract.transfer(value);
    //     // console.log('----value----------',Number(buytoken));
    //     const a=await buytoken.wait();
    //     console.log('transaction is done');
    //     console.log('=-=-=-=-=-=-=-',a.events);
    //     // console.log('id----',buycontract.orderId)
    //     // console.log('-----------------', buycontract.orderId());   
    //     orderid=Number(a.events[0].args.orderId);
    //     console.log('-----------------', orderid);
    //     return orderid;    
    // }
    // catch(error)
    // {
    //     console.log('error',error.data.message);
    // }
    
 
// }
const claimtra=async(oi)=>
{
    try
    {
        const c=await buycontract.claim(oi);
        const a=await c.wait();
        console.log('----claimed-----');
        alert('claimed');
        
    }
    catch(error)
    {
        alert(error.data.message);
        console.log('error:',error.data.message)
    
    }
}


// let abal
// async function checkbal()
// {
//     const c=await buycontract.checktokenbalance();
//     // await c.wait();
//     abal=Number(c)
//     console.log('balanceeeeeeee',Number(c));
//     return abal

// }
// checkbal()
// const claim=async()
// export {buytokenunc};
export {claimtra}
// export {abal};
// export {orderid}

// window.addEventListener('load', async () => 

// function windowload()
// {   

//       if(ethereum){

//           const account = window.ethereum.request({
//               method: 'wallet_requestPermissions',
//               params: [{
//                   eth_accounts: {},
//                 }],
//               //   
//             }).then((accounts) => {
//               const account1 = accounts[0]
//               a=account1.caveats[0].value[0]
//               console.log('connected account------',account1.caveats[0].value[0])
//               // array.push(a)
//               // return array;
//               return a;
//             })
          
//         //   .then((permissions) => {
//         //     const accountsPermission = permissions.find(
//         //       (permission) => permission.parentCapability === 'eth_accounts'
//         //     );
//         //     if (accountsPermission) {
//         //       console.log('account address--------',accountsPermission.caveats[0].value[0],'eth_accounts permission successfully requested!');
//         //     ab=accountsPermission.caveats[0].value[0];
//         //     //   document.getElementById('address').setAttribute('value',a);
//         //     //   return ab;
//         //     }
//         //   })
         
         
//     }
//     // retur  n array[0]
//     // console.log('----------',accountsPermission.caveats[0].value[0]);
// }
// windowload();
// });

// var response =  windowload();
// console.log("ddsf",response)
// console.log("dvdcxdvffd",windowload())
// console.log('------')

// export {windowload};
// export {a};
