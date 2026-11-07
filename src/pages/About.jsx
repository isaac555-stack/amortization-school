import React from "react";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        mt: { xs: 10, md: 10 },
        mb: { xs: 10, md: 10 },
        py: 6,
        background: "linear-gradient(to bottom right, #f3e5f5, #ede7f6)",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        {/* Project Title */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontWeight="bold"
          sx={{
            color: "#4a148c",
            fontSize: { xs: "1.8rem", sm: "2.3rem" },
            mb: 2,
          }}
        >
          About This Project
        </Typography>

        {/* Main Description */}
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "#444",
            mb: 5,
            fontSize: { xs: "0.95rem", sm: "1rem" },
            maxWidth: "750px",
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          The <b>Amortization Project</b> was created as an application of the
          topic Amortization in Mathematics. This entire system was{" "}
          <b>coded and designed by Ziko Technologies</b>, inspired by the vision
          to solve real academic challenges with technology.
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "#444",
            mb: 6,
            fontSize: { xs: "0.95rem", sm: "1rem" },
            maxWidth: "750px",
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          This project welcomes financial support and belief from amazing
          classmates who want to help the dream become a full reality.
        </Typography>

        {/* Contributors Section - Empty State */}
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          sx={{
            mb: 3,
            color: "#6a1b9a",
            fontSize: { xs: "1.3rem", sm: "1.7rem" },
          }}
        >
          Contributors & Supporters
        </Typography>

        <Box sx={{ maxWidth: "500px", mx: "auto", textAlign: "center" }}>
          <Card
            sx={{
              borderRadius: "22px",
              p: 4,
              backgroundColor: "white",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <CardContent>
              <Typography
                variant="body1"
                sx={{
                  color: "#616161",
                  fontStyle: "italic",
                }}
              >
                No contributors yet. Be the first to support this vision and
                have your name featured here!
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
