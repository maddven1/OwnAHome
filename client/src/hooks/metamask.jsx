let installed = false;
let accounts = [];


export async function initialiseMetamask() {
    if (window.ethereum) {

        installed = Boolean(window.ethereum && window.ethereum.isMetaMask);
        accounts = await ethereum.request({ method: 'eth_accounts' });
    }
    else {
        installed = false;
        accounts = [undefined];
    }
}

export function getAccount() {
    return accounts[0];
}

export function isMetaMaskInstalled() {
    return installed;
}

export function isMetaMaskConnected() {
    return Boolean(accounts.length > 0);
}

