import React from "react";
import { Container, Typography, Box, Paper, Grid } from "@mui/material";
import { LibraryBooks, Info, LocalLibrary } from "@mui/icons-material";

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ textAlign: "center", mb: 4, pt: 5 }}>
        <h2 className="text-5xl font-bold text-center">About Us</h2>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LibraryBooks sx={{ fontSize: 60, color: "primary.main" }} />
            <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, textAlign: "center" }}>
              At BookStore, our mission is to inspire a love of reading by
              providing a diverse selection of books and a welcoming space for
              all book lovers. We are committed to offering excellent customer
              service and creating a community of readers.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LocalLibrary sx={{ fontSize: 60, color: "secondary.main" }} />
            <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, textAlign: "center" }}>
              Founded in 2024, BookStore began as a small, independent bookstore
              with a passion for books and community. Over the years, we have
              grown and evolved, but our commitment to providing quality
              literature and a personal touch remains the same.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Info sx={{ fontSize: 60, color: "error.main" }} />
            <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
              Get In Touch
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, textAlign: "center" }}>
              We would love to hear from you! Whether you have questions,
              feedback, or just want to chat about books, feel free to reach out
              to us at contact_us@bookstore.com or visit us at No.25, Bernard
              Ave, Colombo 07.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
