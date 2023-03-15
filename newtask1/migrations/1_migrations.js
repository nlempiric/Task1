const Mytoken=artifacts.require('../contracts/Mytoken.sol');
const Buyt=artifacts.require('../contracts/Buyt.sol');
module.exports=function(deployer)
{
    deployer.deploy(Mytoken).then(function()
    {
        return deployer.deploy(Buyt,Mytoken.address);
    });
};



// 0xf1Cd27b60cF7a3140bAd3f507772F94eE659CCb7   mytoken
// 0x6726163105Ec10B15f7148F50D64c1c10E5659E8    Buyt