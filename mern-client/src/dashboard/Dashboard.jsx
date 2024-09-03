import React from "react";
import { Container, Grid, Paper, Typography, Box } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  AccountBalanceWallet,
  Group,
  TaskAlt,
  MonetizationOn,
  DesktopMac,
  Tablet,
  Phone,
} from "@mui/icons-material";

const Dashboard = () => {
  const salesData = [
    { name: "Jan", sales: 15000 },
    { name: "Feb", sales: 12000 },
    { name: "Mar", sales: 17000 },
    { name: "Apr", sales: 13000 },
    { name: "May", sales: 14000 },
    { name: "Jun", sales: 11000 },
    { name: "Jul", sales: 15000 },
    { name: "Aug", sales: 16000 },
    { name: "Sep", sales: 17000 },
    { name: "Oct", sales: 18000 },
    { name: "Nov", sales: 14000 },
    { name: "Dec", sales: 20000 },
  ];

  const trafficData = [
    { name: "Desktop", value: 63, color: "#8884d8" },
    { name: "Tablet", value: 15, color: "#82ca9d" },
    { name: "Phone", value: 22, color: "#ffc658" },
  ];

  return (
    <Container className="px-4 my-12"  maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <h2 className="mb-8 text-3xl font-bold">Dashboard</h2>
      <Grid container spacing={3}>
        {/* Budget Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <AccountBalanceWallet color="error" sx={{ fontSize: 40 }} />
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">$24k</Typography>
              <Typography color="textSecondary">Budget</Typography>
            </Box>
          </Paper>
        </Grid>
        {/* Total Customers Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Group color="success" sx={{ fontSize: 40 }} />
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">1.6k</Typography>
              <Typography color="textSecondary">Total Customers</Typography>
            </Box>
          </Paper>
        </Grid>
        {/* Task Progress Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TaskAlt color="primary" sx={{ fontSize: 40 }} />
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">75.5%</Typography>
              <Typography color="textSecondary">Task Progress</Typography>
            </Box>
          </Paper>
        </Grid>
        {/* Total Profit Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <MonetizationOn color="secondary" sx={{ fontSize: 40 }} />
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">$15k</Typography>
              <Typography color="textSecondary">Total Profit</Typography>
            </Box>
          </Paper>
        </Grid>
        {/* Sales Chart */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 2, height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Sales
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        {/* Traffic Source Pie Chart */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              Traffic Source
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={trafficData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {trafficData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            {/* Icons for traffic sources */}
            <Box
              sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}
            >
              <Box sx={{ textAlign: "center" }}>
                <DesktopMac sx={{ fontSize: 40, color: "#8884d8" }} />
                <Typography variant="caption">Desktop</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Tablet sx={{ fontSize: 40, color: "#82ca9d" }} />
                <Typography variant="caption">Tablet</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Phone sx={{ fontSize: 40, color: "#ffc658" }} />
                <Typography variant="caption">Phone</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
