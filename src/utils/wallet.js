import { ethers } from "ethers";

const connectWallet = async () => {
    if (typeof window === "undefined" || !window.ethereum) {
        alert("No Ethereum provider found. Please use a compatible wallet.");
        return null;
    }
    try {
        const provider = new ethers.BrowserProvider(window.ethereum); // Universal provider support
        await provider.send("wallet_requestPermissions", [{ eth_accounts: {} }]); // EIP-1193 standard request
        return provider.getSigner(); // Return signer instance for transactions
    } catch (error) {
        console.error("Wallet connection failed:", error);
        alert("Wallet connection failed. Check the console for details.");
        return null;
    }
};

export default connectWallet;
