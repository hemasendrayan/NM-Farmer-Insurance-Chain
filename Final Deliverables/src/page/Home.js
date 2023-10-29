import React, { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { contract } from "./connector";

function Home() {
   const [number, setNumber] = useState("");
   const [Premium, setPremium] = useState("");
   const [Coverage, setCoverage] = useState("");
   const [Expiration, setExpiration] = useState("");
   
   const [numbers, setNumbers] = useState("");
   const [Premiums, setPremiums] = useState("");
   const [Coverages, setCoverages] = useState("");
   const [Expirations, setExpirations] = useState("");
   

   const [gId, setGIds] = useState("");
   const [Details, setDetails] = useState("");
   const [Wallet, setWallet] = useState("");

 
   const handlePolicyNumber = (e) => {
      setNumber(e.target.value)
   } 

   const handlePremium = (e) => {
      setPremium(e.target.value)
   } 

   const handleCoverage = (e) => {
      setCoverage(e.target.value)
   } 

   const handleExp = (e) => {
      setExpiration(e.target.value)
   } 

   


   

   const handleAddPolicy = async () => {
      try {
         let tx = await contract.addPolicy(number, Premium.toString(), Coverage.toString(), Expiration.toString())
         let wait = await tx.wait()
         alert(wait.transactionHash)
         console.log(wait);
      } catch (error) {
         alert(error)
      }
   }


   const handlePolicyNumbers = (e) => {
      setNumbers(e.target.value)
   }

   const handlePremiums = (e) => {
      setPremiums(e.target.value)
   }

   const handleCoverages = (e) => {
      setCoverages(e.target.value)
   }

   const handleExps = (e) => {
      setExpirations(e.target.value)
   } 
  

   const handleUpdate = async () => {
      try {
         let tx = await contract.updatePolicy(numbers, Premiums.toString(), Coverages.toString(), Expirations.toString())
         let wait = await tx.wait()
         console.log(wait);
         alert(wait.transactionHash)
      } catch (error) {
         alert(error)   
      }
   }

   
   const handleGetIds = async (e) => {
      setGIds(e.target.value)
   }

   const handleGetDetails = async () => {
      try {
         let tx = await contract.getPolicyDetails(gId.toString())
         
         let arr = []
         tx.map(e => {
            arr.push(e)
         })
         
         console.log(tx);
         setDetails(arr)
      } catch (error) {
         alert(error)
         console.log(error);
      }
   }

   const handleWallet = async () => {
      if (!window.ethereum) {
         return alert('please install metamask');
      }

      const addr = await window.ethereum.request({
         method: 'eth_requestAccounts',
      });

      setWallet(addr[0])

   }

 return (
  <div>
   <h1 style={{ marginTop: "30px", marginBottom: "80px" }}>Insurance policy on Blockchain</h1>
       {!Wallet ?

          <Button onClick={handleWallet} style={{ marginTop: "30px", marginBottom: "50px" }}>Connect Wallet </Button>
          :
          <p style={{ width: "250px", height: "50px", margin: "auto", marginBottom: "50px", border: '2px solid #2096f3' }}>{Wallet.slice(0, 6)}....{Wallet.slice(-6)}</p>
       }
   <Container>
    <Row>
     <Col style={{marginRight:"100px"}}>
      <div>
         <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handlePolicyNumber} type="string" placeholder="Policy number" value={number} /> <br />
         <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handlePremium} type="number" placeholder="premium Amount" value={Premium} /> <br />
         <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleCoverage} type="number" placeholder="Coverage Amount" value={Coverage} /> <br />
         <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleExp} type="number" placeholder="Expiration Timestamp" value={Expiration} /> <br />

       <Button onClick={handleAddPolicy} style={{ marginTop: "10px" }} variant="primary"> Add Policy</Button>
      </div>
     </Col>

             <Col style={{ marginRight: "100px" }}>
                <div>
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handlePolicyNumbers} type="string" placeholder="Policy number" value={numbers} /> <br />
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handlePremiums} type="number" placeholder="premium Amount" value={Premiums} /> <br />
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleCoverages} type="number" placeholder="Coverage Amount" value={Coverages} /> <br />
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleExps} type="number" placeholder="Expiration Timestamp" value={Expirations} /> <br />

                   <Button onClick={handleUpdate} style={{ marginTop: "10px" }} variant="primary"> Update Policy</Button>
                </div>
             </Col>
               
   </Row>    
   <Row>
             <Col >
                <div style={{ margin: "auto" , marginTop:"100px"}}>
                   <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleGetIds} type="number" placeholder="Enter Policy Id" value={gId} /><br />

                   <Button onClick={handleGetDetails} style={{ marginTop: "10px" }} variant="primary">Get Product Details</Button>
                   {Details ? Details?.map(e => {
                      return <p>{e.toString()}</p>
                   }) : <p></p>}
                </div>
             </Col> 
   </Row>
   </Container>

  </div>
 )
}

export default Home;
