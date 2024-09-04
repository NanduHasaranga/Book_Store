import React from "react";
import { Container, Grid, Paper, Typography, Box, Avatar } from "@mui/material";
import { teal, orange, deepPurple, lime } from "@mui/material/colors";
import { Book, DateRange, Person } from "@mui/icons-material";

const blogPosts = [
  {
    title: "The Best Summer Reads for 2024",
    author: "Jane Doe",
    date: "August 15, 2024",
    description:
      "Discover our top picks for the best summer reads this year. From thrilling mysteries to heartwarming romances, we’ve got something for every book lover.",
    color: teal[500],
    icon: <Book sx={{ fontSize: 60, color: "white" }} />,
  },
  {
    title: "How to Build a Personal Library",
    author: "John Smith",
    date: "July 22, 2024",
    description:
      "Looking to create your own personal library? Here are some tips on how to build a collection of books that reflects your interests and personality.",
    color: orange[500],
    icon: <DateRange sx={{ fontSize: 60, color: "white" }} />,
  },
  {
    title: "Author Spotlight: Meet the Modern Masters",
    author: "Emily Davis",
    date: "June 30, 2024",
    description:
      "We take a closer look at some of the most influential authors of our time. Learn about their works, inspirations, and impact on contemporary literature.",
    color: deepPurple[500],
    icon: <Person sx={{ fontSize: 60, color: "white" }} />,
  },
  {
    title: "The Evolution of Book Genres",
    author: "Michael Lee",
    date: "May 18, 2024",
    description:
      "Explore how book genres have evolved over the years and what this means for readers and writers alike. A fascinating journey through the world of literature.",
    color: lime[500],
    icon: <Book sx={{ fontSize: 60, color: "white" }} />,
  },
];

const Blog = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ textAlign: "center", mb: 4, pt: 5 }}
      >
        <h2 className="text-5xl font-bold text-center">Blog</h2>
      </Typography>
      <Grid container spacing={3}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{ p: 3, backgroundColor: post.color, color: "white" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {post.icon}
                <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  By {post.author} - {post.date}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  {post.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
