import React from "react";
import { Typography, Container, Box, Link, SvgIcon } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import cn from "classnames";

import goodboye from "./goodboye.png";
import splash from "./assets/photos/carmen.jpg";

import torus from "./assets/blueshape1.png";
import twisty from "./assets/blueshape3.png";
import sheets from "./assets/blueshape2.png";
import hole from "./assets/blueshape5.png";
import ball from "./assets/blueshape4.png";

import mushroom from "./assets/games/mushroom.png";
import fall from "./assets/games/fall.png";
import lone from "./assets/games/lone.png";
import sock from "./assets/games/sock.png";
import charmer from "./assets/games/charmer.png";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import YouTubeIcon from "@material-ui/icons/YouTube";

import { ReactComponent as DiscordIcon } from "./assets/Discord-Logo-White.svg";

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        backgroundImage: `linear-gradient(${theme.palette.gradient.primary} 0%, ${theme.palette.gradient.secondary} 75%, ${theme.palette.gradient.tertiary} 100%)`,
    },
    splash: {
        height: "100vh",
        textAlign: "center",
        backgroundImage: `url(${splash})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    splashText: {
        color: "white",
        position: "relative",
        zIndex: "2",
        fontFamily: "inherit",
        fontWeight: "bold",
        letterSpacing: "0.069em",
        paddingLeft: "0.069em",
    },
    splashTextBox: {
        position: "absolute",
        top: "80%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "16px",
        backgroundColor: "rgba(0,0,0,0.420)",
        borderRadius: "8px",
    },
    textBox: {
        padding: "16px",
        backgroundColor: "rgba(0,0,0,0.420)",
        borderRadius: "8px",
    },
    splashImg: {
        height: "100%",
        verticalAlign: "top",
    },
    footer: {
        backgroundColor: theme.palette.primary,
        color: "#1296da",
    },
    box0: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "69%",
        padding: "32px",
        margin: "16px auto",
        position: "relative",
    },
    box1: {
        padding: "32px",
        color: theme.palette.text.primary,
        width: "50%",
        minWidth: "300px",
        position: "relative",
        zIndex: "2",
        boxSizing: "border-box",
        fontFamily: "inherit",
    },
    goodBoye: {
        width: "100%",
        position: "relative",
    },
    bestBoye: {
        width: "100%",
        verticalAlign: "top",
        borderRadius: "6.90px",
    },
    bestBoyeBox: {
        border: "4px solid white",
        borderRadius: "6.90px",
        padding: "0",
        width: "100%",
        display: "inline-block",
        margin: "auto",
        position: "relative",
    },
    boxShadowLeft: {
        boxShadow: "-8px 8px 4px rgba(0,0,0,0.3)",
    },
    boxShadowRight: {
        boxShadow: "8px 8px 4px rgba(0,0,0,0.3)",
    },
    bestBoyeBorderRight: {
        position: "absolute",
        border: `4px solid ${theme.palette.text.title}`,
        width: "100%",
        height: "100%",
        top: "2.5px",
        left: "4px",
        borderRadius: "6.90px",
    },
    bestBoyeBorderLeft: {
        position: "absolute",
        border: `4px solid ${theme.palette.text.title}`,
        width: "100%",
        height: "100%",
        top: "2.5px",
        left: "-12px",
        borderRadius: "6.90px",
    },
    titleLeft: {
        color: theme.palette.text.title,
        padding: "8px",
        paddingRight: "0",
        fontFamily: "inherit",
        fontWeight: "bold",
        textShadow: "-1px 2px 1px rgba(0,0,0,0.3)",
    },
    titleRight: {
        color: theme.palette.text.title,
        padding: "8px",
        paddingLeft: "0",
        fontFamily: "inherit",
        fontWeight: "bold",
        textShadow: "1px 2px 1px rgba(0,0,0,0.3)",
    },
    titleMiddle: {
        color: theme.palette.text.title,
        padding: "8px",
        fontFamily: "inherit",
        fontWeight: "bold",
        textAlign: "center",
        textShadow: "0px 2px 1px rgba(0,0,0,0.3)",
    },
    paragraph: {
        fontFamily: "inherit",
    },
    link: {
        fontFamily: "inherit",
        color: theme.palette.text.title,
        underline: "hover",
        fontWeight: "bold",
    },
    body: {
        backgroundColor: theme.palette.background.default,
        maxWidth: "100vw",
        position: "relative",
        overflow: "hidden",
        top: "100%",
    },
    leftBox: {
        textAlign: "right",
        textShadow: "-1px 2px 1px rgba(0,0,0,0.3)",
    },
    rightBox: {
        textAlign: "left",
        textShadow: "1px 2px 1px rgba(0,0,0,0.3)",
    },
    centerBox: {
        textAlign: "center",
        textShadow: "0px 2px 1px rgba(0,0,0,0.3)",
    },
    shape: {
        position: "absolute",
        height: "auto",
        minWidth: "500px",
    },
    torus: {
        top: "10%",
        left: "-33%",
        width: "60%",
    },
    twisty: {
        top: "-17%",
        right: "-27%",
        width: "60%",
    },
    sheets: {
        top: "60%",
        left: "-30%",
        width: "60%",
    },
    hole: {
        top: "35%",
        right: "-25%",
        width: "60%",
    },
    ball: {
        top: "85%",
        right: "-30%",
        width: "60%",
    },
    blurBox: {
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.069420)",
        zIndex: "1",
        borderRadius: "8px",
        backdropFilter: "blur(4.20px)",
    },
    social: {
        paddingLeft: "20px",
        paddingRight: "20px",
        color: "inherit",
    },
    connectBox: {
        alignItems: "normal",
    },
    transparentBox: {
        backgroundColor: "rgba(0,0,0,0.2)",
        borderRadius: "32px",
        padding: "16px",
        "&:hover": {
            backgroundColor: "rgba(0,0,0,0.30)",
        },
    },
    inlineBlock: {
        display: "inline-block",
    },
    lessTopPadding: {
        paddingTop: "20px",
    },
    heWoof: {
        width: "15%",
        "&:hover": {
            color: "black",
        },
    },
    discord: {
        height: "45px",
        width: "45px",
        textAlign: "center",
    },
    discordBox: {
        paddingTop: "15px",
        paddingBottom: "15px",
    },
    gameText: {
        paddingTop: "15px",
        fontSize: "18px",
    },
    gameTextRight: {
        textAlign: "right",
        paddingBottom: "12px",
        fontSize: "18px",
    },
    quoteText: {
        fontSize: "20px",
        vairant: "h4",
    }
});

const games = [
    {
        name: "MY MINI MUSHROOM",
        img: "./assets/games/mushroom.png",
        ref: "google.com",
        alt: "good game"
    }
]

const Game = ({game, classes, ...props}) => {
    return (<Box className={cn(classes.box0)}>
                    <Box className={cn(classes.blurBox)}></Box>
                    <Box className={cn(classes.box1)}>
                        <Box
                            className={cn(
                                classes.bestBoyeBox,
                                classes.boxShadowLeft
                            )}
                        >
                            <a href={game.ref}>
                            <img
                                src={game.img}
                                alt={game.alt}
                                className={cn(classes.bestBoye)}
                            />
                            </a>
                            <div className={cn(classes.bestBoyeBorderLeft)}>
                                {" "}
                            </div>
                            
                        </Box>
                        <Typography className={cn(classes.gameText)}>
                            {game.name}
                        </Typography>
                    </Box>
                    </Box>)
}

const GameShowcase = ({ classes, rootClassName, className, ...props }) => {
    return (
        <div className={cn(classes.root, rootClassName, className)}>
            <Container className={cn(classes.splash)}>
                <Box className={cn(classes.splashTextBox)}>
                    <Box className={cn(classes.blurBox)}></Box>
                    <Typography className={cn(classes.splashText)}>
                        EGaDS! Game Showcase
                    </Typography>
                </Box>
            </Container>

            <Container className={cn(classes.body)} id="info">
                <Box className={cn(classes.box0)}>
                    <Box className={cn(classes.blurBox)}></Box>
                    <Box className={cn(classes.box1)}>
                        <Typography
                            variant="h4"
                            className={cn(classes.titleMiddle)}
                        >
                            GAMES
                        </Typography>
                        <Typography className={cn(classes.paragraph)}>
                            EGaDS! members make some omega cute video games blah 
                            blah blah blah blah blahblah blah blahblah blah 
                            blahblah blah blahblah blah blah 
                            EGaDS! members make some omega cute video games blah 
                            blah blah blah blah blahblah blah blahblah blah 
                            blahblah blah blahblah blah blah
                            EGaDS! members make some omega cute video games blah 
                            blah blah blah blah blahblah blah blahblah blah 
                            blahblah blah blahblah blah blah
                        </Typography>
                    </Box>
                </Box>

                <Box className={cn(classes.box0)}>
                    <Box className={cn(classes.blurBox)}></Box>
                    <Box className={cn(classes.box1)}>
                        <Box
                            className={cn(
                                classes.bestBoyeBox,
                                classes.boxShadowLeft
                            )}
                        >
                            <img
                                src={mushroom}
                                alt="a very good boye"
                                className={cn(classes.bestBoye)}
                            />
                            <div className={cn(classes.bestBoyeBorderLeft)}>
                                {" "}
                            </div>
                            
                        </Box>
                        <Typography className={cn(classes.gameText)}>
                            MY MINI MUSHROOM
                        </Typography>
                    </Box>
                    <Box className={cn(classes.box1)}>
                        <Typography className={cn(classes.gameTextRight)}>
                            THE FALL
                        </Typography>
                        <Box
                            className={cn(
                                classes.bestBoyeBox,
                                classes.boxShadowLeft
                            )}
                        >
                            <img
                                src={fall}
                                alt="a very good boye"
                                className={cn(classes.bestBoye)}
                            />
                            <div className={cn(classes.bestBoyeBorderLeft)}>
                                {" "}
                            </div>
                        </Box>
                    </Box>
                </Box>

                <Box className={cn(classes.box0)}>
                    <Box className={cn(classes.blurBox)}></Box>
                    <Box className={cn(classes.box1)}>
                        <Box
                            className={cn(
                                classes.bestBoyeBox,
                                classes.boxShadowLeft
                            )}
                        >
                            <img
                                src={sock}
                                alt="a very good boye"
                                className={cn(classes.bestBoye)}
                            />
                            <div className={cn(classes.bestBoyeBorderLeft)}>
                                {" "}
                            </div>
                            
                        </Box>
                        <Typography className={cn(classes.gameText)}>
                            SOCK
                        </Typography>
                    </Box>
                    <Box className={cn(classes.box1, classes.rightBox)}>
                        <Typography className={cn(classes.quoteText)}>
                            "just socks."
                        </Typography>
                    </Box>
                </Box>

                <Box className={cn(classes.box0)}>
                    <Box className={cn(classes.blurBox)}></Box>
                    <Box className={cn(classes.box1, classes.leftBox)}>
                        <Typography
                            variant="h4"
                            className={cn(classes.titleLeft)}
                        >
                            SOCIAL EVENTS
                        </Typography>
                        <Typography className={cn(classes.paragraph)}>
                            Members will have the opportunity to attend socials
                            to meet fellow developers. Professionals such as
                            artists, designers, programmers where you will have
                            the chance to learn about various companies around
                            Austin and the gaming culture here, in addition to
                            networking!
                        </Typography>
                    </Box>
                    <Box className={cn(classes.box1)}>
                        <Box
                            className={cn(
                                classes.bestBoyeBox,
                                classes.boxShadowRight
                            )}
                        >
                            <img
                                src={lone}
                                alt="a very good boye"
                                className={cn(classes.bestBoye)}
                            />
                            <div
                                className={cn(classes.bestBoyeBorderRight)}
                            ></div>
                        </Box>
                    </Box>
                </Box>
                <Typography variant="h4" className={cn(classes.titleMiddle)}>
                    CONNECT WITH US
                </Typography>

                <Box className={cn(classes.box0, classes.connectBox)}>
                    <Box className={cn(classes.blurBox)}></Box>

                    <Box className={cn(classes.box1, classes.centerBox)}>
                        <Typography
                            variant="h4"
                            className={cn(classes.titleMiddle)}
                        >
                            GAMES
                        </Typography>

                        <Typography
                            align="center"
                            className={cn(classes.paragraph)}
                        >
                            A variety of games made by EGaDS members during past
                            game jams are all hosted on our itch.io page! The
                            pages include in-depth information about each game,
                            as well as download links to run the games yourself.
                        </Typography>
                        <br />
                        <Box className={cn(classes.transparentBox)}>
                            <Typography
                                className={cn(
                                    classes.paragraph,
                                    classes.titleMiddle
                                )}
                            >
                                <Link
                                    href="https://itch.io/c/737435/games-by-egads-members"
                                    target="_blank"
                                    rel="noopener"
                                    className={cn(classes.link)}
                                >
                                    Check out all the games here!
                                </Link>
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        className={cn(classes.box1, classes.centerBox)}
                        id="socialMedia"
                    >
                        <Typography
                            variant="h4"
                            className={cn(classes.titleMiddle)}
                        >
                            SOCIALS
                        </Typography>

                        <Box
                            className={cn(
                                classes.transparentBox,
                                classes.lessTopPadding,
                                classes.inlineBlock
                            )}
                        >
                            <Typography
                                className={cn(classes.paragraph)}
                                align="center"
                            >
                                <Link
                                    href="https://discord.com/invite/JnNPF6d"
                                    target="_blank"
                                    rel="noopener"
                                    className={cn(classes.social)}
                                >
                                    <SvgIcon
                                        component={DiscordIcon}
                                        viewBox="0 0 220 220"
                                        fontSize="large"
                                    />
                                </Link>
                                <Link
                                    href="https://facebook.us16.list-manage.com/subscribe?u=91470f849ef822234cb47861a&id=34673605c6"
                                    target="_blank"
                                    rel="noopener"
                                    className={cn(classes.social)}
                                >
                                    <MailIcon fontSize="large" />
                                </Link>
                                <Link
                                    href="https://twitter.com/EGaDSAustin"
                                    target="_blank"
                                    rel="noopener"
                                    className={cn(classes.social)}
                                >
                                    <TwitterIcon fontSize="large" />
                                </Link>

                                <Link
                                    href="https://www.facebook.com/groups/egadsaustin"
                                    target="_blank"
                                    rel="noopener"
                                    className={cn(classes.social)}
                                >
                                    <FacebookIcon fontSize="large" />
                                </Link>
                                <Link
                                    href="https://www.youtube.com/user/egadsaustin"
                                    target="_blank"
                                    rel="noopener"
                                    className={cn(classes.social)}
                                >
                                    <YouTubeIcon fontSize="large" />
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <img
                    src={torus}
                    alt="torus"
                    className={cn(classes.shape, classes.torus)}
                />
                <img
                    src={twisty}
                    alt="twisty"
                    className={cn(classes.shape, classes.twisty)}
                />
                <img
                    src={sheets}
                    alt="sheets"
                    className={cn(classes.shape, classes.sheets)}
                />
                <img
                    src={hole}
                    alt="hole"
                    className={cn(classes.shape, classes.hole)}
                />
                <img
                    src={ball}
                    alt="ball"
                    className={cn(classes.shape, classes.ball)}
                />
            </Container>

            <Container align="center" className={cn(classes.footer)}>
                <div className={cn(classes.inlineBlock, classes.heWoof)}>
                    <Typography align="center">bork</Typography>
                    <img
                        src={goodboye}
                        alt="a very good boye"
                        className={cn(classes.goodBoye)}
                    />
                </div>
            </Container>
        </div>
    );
};

export default withStyles(styles)(GameShowcase);