import React from 'react';
    // import logo from './logo.svg';
    import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
    // import './App.css';
    
    const config = {
        reference: (new Date()).getTime(),
        email: "user@example.com",
        amount: 20000,
        publicKey: 'pk_test_6bfbf8b93e180b92765c63f31405a6dc54881b89',
    };
    
    const PaystackHookExample = () => {
        const initializePayment = usePaystackPayment(config);
        return (
            <div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <button onClick={() => {
                    initializePayment()
                }}>Paystack Hooks Implementation</button>
            </div>
        );
    };
    
    function Payment() {
        const componentProps = {
            ...config,
            text: 'Paystack Button Implementation',
            onSuccess: () => null,
            onClose: () => null
        };
    
      return (
        <div className="App">
             <br/><br/><br/><br/><br/><br/><br/><br/>
          <header className="App-header">
            <img src="https://thebulb.africa/Images/homepage/logo.png" className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
            <PaystackHookExample />
            <PaystackButton {...componentProps} />
            <PaystackConsumer {...componentProps} >
                {({initializePayment}) => <button onClick={() => initializePayment()}>Paystack Consumer Implementation</button>}
            </PaystackConsumer>
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
      );
    }
    
    export default Payment;