import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {

    return (
      <>
         <Navbar/>
         <br /><br /><br />
            <div className="container-fluid col-lg-5 col-12 mt-lg-5 mt-3 shadow mx-auto p-lg-4 p-3 rounded-3">
            <h1 className="text-center my-lg-4 my-3 text-secondary">Dashboard</h1>
            <p className="text-center">Welcome to your dashboard!</p>
            <p className="text-center">Here you can manage your account and settings.</p>
            <p className="text-center">Feel free to explore the features available.</p>
            <p className="text-center">If you have any questions, don't hesitate to reach out.</p>
            <p className="text-center">Enjoy your experience!</p>
            </div>
         <Footer/>
         <hr/>
     </>
);
}

export default Dashboard;