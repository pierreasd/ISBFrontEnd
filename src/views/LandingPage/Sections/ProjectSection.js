import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Collapse, Hidden } from "@material-ui/core";

// images
import pic from "assets/img/proyek.jpg";
import pic1 from "assets/img/taliwang.jpg";
import pic2 from "assets/img/temp.jpg";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// custom css and other dependencies
import Fade from "react-reveal/Fade";
import styles from "assets/jss/material-kit-react/views/landingPageSections/projectStyle.js";

// custom component
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);

export default function ProjectSection() {
  const classes = useStyles();
  const [more, setMore] = React.useState(false);

  const handleReadMore = () => {
    setMore((more) => !more)
  };

  return (
    <div className={classes.section}>
      <Fade bottom cascade>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Hidden xsDown>
              <h2 className={classes.title}>Our Projects</h2>
            </Hidden>
            <Hidden smUp>
              <h3 className={classes.title}>Our Projects</h3>
            </Hidden>

            <div className={classes.description}>
              <img src={pic} className={classes.pic} />

              <h5>
                <strong>TALIWANG PROPERTY</strong>
              </h5>
              <h5>
                Adjacent to Newmont’s world-class Batu Hijau Cu-Au mine (17.2
                Moz Au/14.1Blb Cu). 24,772 hectares highly prospective for Au,
                Ag, Cu with three main prospects. Near-surface porphyry Cu-Au
                with surface high-sulphidation epithermal signature.
              </h5>

              <h5>
                <strong>TALIWANG GEOLOGY</strong>
              </h5>
              <h5>
                The Taliwang project is located on the island of Sumbawa, which
                is located immediately to the east of Lombok Island in the
                central part of Indonesia’s tectonically active, east-west
                trending Sunda-Banda magmatic arc. The geology of Sumbawa is
                characterized by an island arc-type volcano-sedimentary
                succession of Late Oligocene to Quaternary age. The southern
                parts of Sumbawa Island are overlain by Late Oligocene to Middle
                Miocene, calc-alkaline to weakly alkaline andesitic volcanic and
                interbedded volcaniclastic rocks, associated intermediate
                intrusions and shallow marine sedimentary rocks and limestones
                (Garwin, 2002). The geology of the Taliwang property presents
                three main structural grains, northwest, north-south and
                north-east trends, relating to copper and gold mineralization in
                the region. The NNE to NE trends form the mineralized corridors
                hosting porphyry Cu-Au mineralization, whereas late-stage
                epithermal veins and post mineral dykes are developed along the
                northwest and north-south trending faults. The Maps page
                contains three maps showing details of the overall geology of
                the Taliwang property, namely: West Sumbawa Structural Elements
                map; Sumbawa – Taliwang SIPP Geochemical Anomalies map; and
                Sumbawa – Taliwang SIPP Geology map.
              </h5>

              <Collapse in={more}>
                <img src={pic1} className={classes.pic} />

                <h5>
                  <strong>LEMONGA PROSPECT GEOLOGY</strong>
                </h5>
                <h5>
                  The Lemonga prospect is a low-sulphidation epithermal system
                  over which surface mapping by Southern Arc and previous
                  operators confirmed hydrothermal argillic alteration within an
                  area approximately 1 km east-west by 1.5 km north-south. Five
                  gold-bearing quartz veins, named Amy, Betty, Cici, Dessy and
                  Evi, were identified within the alteration zone. These veins
                  generally trend between north-south and northeast-southwest
                  and have widths up to 10 meters at the surface. The best
                  exposed vein, the Amy Vein, has a mapped strike extent of at
                  least 950 metres. The area appears structurally complex, yet
                  it is highly prospective. For instance, Aneka Tambang, the
                  Indonesian state-owned mining company, in 1991 had reported
                  seven diamond drill holes totaling 260.1 m with intersections
                  of up to 12 m and grades ranging between 1.84 g/t and 3.63 g/t
                  Au. The veins typically pinch and swell, with strike and dip
                  orientations often variable. Localized stockworks and
                  orthogonal cross-cutting veinlets occur, contained within
                  irregular patchy argillic alteration envelopes. Further
                  geological mapping and selective sampling of the breccia zone
                  underlying Olat Beleong, east of drill hole LDG-013, was
                  carried out in September 2005 by Southern Arc. The current
                  consensus on the appearance and origin of the extensive
                  breccia body is that it represents an original capping of
                  dacitic volcanic breccia, hydrothermally altered and
                  re-brecciated, with some silica-quartz rich zones
                  preferentially hosting gold-silver-minor barite
                  mineralization, with adjacent, but non-correlative (in a
                  geochemical sense) base metal anomalous zones. Rare narrow
                  quartz veins/veinlets found within the extension area mostly
                  tend to parallel the strike of the main Lemonga vein set.
                </h5>

                <img src={pic2} className={classes.pic} />

                <h5>
                  <strong>JEREWEH PROSPECT GEOLOGY</strong>
                </h5>
                <h5>
                  The J3 Prospect is situated in the southeastern corner of the
                  property, approximately 12km north of Newmont’s Batu Hijau
                  porphyry Cu-Au mine. It was initially identified by Newmont
                  during first pass regional drainage sampling in 1987 and
                  subsequently prospected using grid-based geologic, geochemical
                  and geophysical (magnetics and gradient array IP/resistivity)
                  programs.
                </h5>

                <h5>
                  <strong>SEMOAN {"&"} RABOYA PROSPECT GEOLOGY</strong>
                </h5>
                <h5>
                  The Semoan {"&"} Reboya Prospect appears to be a coupled,
                  genetically related set of prospects. They are a
                  helimag-inferred silica alteration of epithermal veins. These
                  two areas of alteration lie to the immediate north and south
                  of the Ramit Prospect, a deeper porphyry/structural
                  vein/stockwork target that could be genetically related to the
                  Semoan {"&"} Reboya Propsect. The geology of the road cuttings
                  between Poto Batu and Labuhan Lalat on the western edge of the
                  Semoan {"&"} Reboya prospect is dominated by an andestic
                  sequence of fine to coarse pyroclastics and columnar-jointed
                  lava. The exposures are strongly argillically altered at both
                  northern and southern extremities, with a weakly
                  propylitically altered central section rarely visible beneath
                  the scree cover. Quartz-limonite veinlets, 2-5 cm wide,
                  trending N-S and dipping generally 70°E, are sporadically
                  dispersed within the northern argillic zone. Channel sampling
                  here revealed the presence of sulfides (pyrite,
                  chalcopyrite-malachite, sphalerite/galena) and anhydrite(?)
                  coatings along fracture and joint planes.
                </h5>
              </Collapse>

              <Button className={classes.button} color="facebook" onClick={() => handleReadMore()}>
                Read {more ? "Less" : "More"}
              </Button>

            </div>
          </GridItem>
        </GridContainer>
      </Fade>
    </div>
  );
}
