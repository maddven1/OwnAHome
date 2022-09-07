import { initialiseMetamask } from "./metamask";

const connectWallet = async () => {
    if (window.ethereum) { //check if Metamask is installed
        try {
            const address = await window.ethereum.enable(); //connect Metamask
            const obj = {
                connectionStatus: true,
                address: address,
                msg: "🦊 Wallet connected succesfully",
                err: undefined
            }
            localStorage.setItem("userDetails", JSON.stringify(obj))
            // window.location.reload();
            await initialiseMetamask();
            // window.location.href = "/dashboard";
            return obj;

        } catch (error) {
            const obj = {
                connectionStatus: false,
                address: undefined,
                msg: "🦊 Connect to Metamask using the button on the top right.",
                err: error
            }
            localStorage.setItem("userDetails", JSON.stringify(obj))
            await initialiseMetamask();
            return obj;
        }

    } else {
        const obj = {
            connectionStatus: false,
            address: undefined,
            msg: "🦊 You must install Metamask into your browser: https://metamask.io/download.html",
            err: "Metamask not installed"
        }
        localStorage.setItem("userDetails", JSON.stringify(obj))
        await initialiseMetamask();
        return obj;
    }

};

export default connectWallet;