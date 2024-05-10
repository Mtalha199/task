import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Web3 from 'web3';
const Header = () => {
    const [account, setAccount] = useState('');
    const [balance, setBalance] = useState('');

    const connectWalletHandler = async () => {
        try {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                try {
                    await window.ethereum.enable();
                    const accounts = await web3.eth.getAccounts();
                    setAccount(accounts[0]);
                    const balanceWei = await web3.eth.getBalance(accounts[0]);
                    const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
                    setBalance(balanceEth);
                } catch (error) {
                    console.error("User denied account access...");
                }
            } else {
                alert('Please install MetaMask Extension! ');

            }
        } catch (error) {
            console.error("Error accessing MetaMask", error);
        }
    };

    useEffect(() => {
        const load = async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                    const balanceWei = await web3.eth.getBalance(accounts[0]);
                    const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
                    setBalance(balanceEth);
                }
            }
        };

        load();
    }, []);

    return (
        <header>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#060608"}}>
        <div className="container">
          <Link className="navbar-brand" to="/"><img alt='not working link' src='https://staging.frontend.moviemint.net/static/media/logo.c8743748796ba7fefd35.png' style={{width:"100px"}}></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{paddingLeft:"10rem"}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About Us</Link>
              </li>
            </ul>
          </div>
          <button className=" connect-button me-2" onClick={connectWalletHandler}>
            {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect with Metamask'}
          </button>
          {account && <span className="connect-button" >Balance: {balance} ETH</span>}
        </div>
      </nav>
    </header>
    );
};

export default Header;