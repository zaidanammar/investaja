import {
    createTheme,
} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#82C341",
        },
        secondary: {
            main: "#E5E5E5",
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    padding: "10px",
                    fontSize: ".8rem"
                },
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: "0.8rem",
                    paddingTop: ".2rem"
                },
                shrink: {
                    fontSize: "1rem"
                },
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: "#82C341",
                },
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            }
        },
    }
});