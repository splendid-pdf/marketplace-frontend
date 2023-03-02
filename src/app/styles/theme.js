import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F15513",
    },
    secondary: grey, //  TODO: Поставить второй цвет от дизайнеров и Разобраться, как его можно использовать
  },
  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  components: {
    MuiTypography: {
      // defaultProps: {
      //   variantMapping: {
      //     h1: 'h2',
      //     h2: 'h2',
      //     h3: 'h2',
      //     h4: 'h2',
      //     h5: 'h2',
      //     h6: 'h2',
      //     subtitle1: 'h2',
      //     subtitle2: 'h2',
      //     body1: 'span',
      //     body2: 'span',
      //   },
      // },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 16,
          fontWeight: 400,
          borderRadius: 20,
          textTransform: "none",
          height: 46,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: 46,
          fieldset: {
            borderRadius: 20,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        inputSizeSmall: { height: 29 },
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});
