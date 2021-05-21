import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    fontWeight: "bold",
    color: theme.palette.text.secondary,
    borderRadius: "1.5rem",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
}));

export default function Guidlines() {
  const classes = useStyles();

  return (
    <>
      <Navigation />

      <div style={{ padding: "1rem 0rem" }}>
        <Container>
          <Row>
            <Col>
              <h2
                style={{
                  paddingBottom: "1rem",

                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 30,
                  color: "#58547E",
                }}
              >
                {" "}
                Guidlines
              </h2>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div className={classes.root}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      1. Make wearing a mask a normal part of being around other
                      people. The appropriate use, storage and cleaning or
                      disposal are essential to make masks as effective as
                      possible.
                    </Paper>
                  </Grid>{" "}
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      2. Avoid touching your eyes, nose and mouth. Hands touch
                      many surfaces and can pick up viruses. Once contaminated,
                      hands can transfer the virus to your eyes, nose or mouth.
                      From there, the virus can enter your body and infect you.
                    </Paper>
                  </Grid>{" "}
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      3. Regularly and thoroughly clean your hands with an
                      alcohol-based hand rub or wash them with soap and water.
                      This eliminates germs including viruses that may be on
                      your hands.
                    </Paper>
                  </Grid>{" "}
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      4. Cover your mouth and nose with your bent elbow or
                      tissue when you cough or sneeze. Then dispose of the used
                      tissue immediately into a closed bin and wash your hands.
                      By following good ‘respiratory hygiene’, you protect the
                      people around you from viruses, which cause colds, flu and
                      COVID-19.
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      6. Maintain at least a 1-metre distance between yourself
                      and others to reduce your risk of infection when they
                      cough, sneeze or speak. Maintain an even greater distance
                      between yourself and others when indoors. The further
                      away, the better.
                    </Paper>
                  </Grid>
                </Grid>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}
