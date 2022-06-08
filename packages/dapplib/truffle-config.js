require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind hospital give argue front skull'; 
let testAccounts = [
"0x0e05865f119241129d40d36ec4d2a66e19a308859a6fe33c965f0dd1930af739",
"0xeb9c633255b59a9a9ddb8c18cce33b6f4abc3201537ee885a51c81ff022de3a2",
"0x08374032a697c2331ba8cd9a28d0f9780da8534736bfb485d52c138507a4a181",
"0x79ce18d9df1f74ec8780b8e159560686a54152eb55508f6d59598c71db405137",
"0x0db36821af62a8e57f4d5d6499c855ca2f085913917727a56a24d129a2313997",
"0x4f38a4650df8f752dff4330c8908a67e0233a93c8dc16837b61413082f10fd30",
"0x43c5c38b8eb9ebe8864e281e06388de5edaf69198d876e1d97e939e792908b7e",
"0x18c213945866efaa646fe1d3624f8c5647ce6ad7a331ff2957bfa7748b982467",
"0xd2863d23e6c84cec61739ec226ca2d2c0d7fac61ff23d8f288d303959ff7ad74",
"0x5941846be8cd671dd39ed6ec9f0bea68c78c1587da83484610b3cf5edc24d049"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

