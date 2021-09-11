import React from 'react';
import DashboardComponent from "../../pages/dashboard";
import LoginValidator from "../../components/LoginValidator";
import Layout from "../../components/Layout";

const Dashboard = () => {
  return (
    <LoginValidator>
      <Layout isNav>
        <DashboardComponent />
      </Layout>
    </LoginValidator>
  )
}
export default Dashboard;


