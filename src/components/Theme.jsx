import { createTheme } from '@mui/material/styles';

const GRAY = "#161515"


export const  Theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
        default: GRAY,
    },
    golding:{
        main:"#e5c233",
        contrastText:"#000"
    },
    dark:{
        main:"rgb(16, 15, 15)",
        contrastText:"#fff"
    },
    light:{
        main:"#fff",
        contrastText:"#000",
    },
    primary:{
        main:GRAY,
        contrastText:"#fff"
    },
    secondary:{
        main:"rgb(255, 55, 55)",
        contrastText:"#000"
    },
    green:{
        main:"#13ba8c",
        contrastText:"#fff"
    },
    yellow:{
        main:"#FCD535",
        contrastText:"#000"
    },
    purple:{
        main:"rgb(167, 52, 196)",
        contrastText:"#000"
    },
    grey:{
        main:"rgb(40, 40, 40)",
        contrastText:"#fff",
    },
    greycolor:{
        main:"rgb(132, 142, 156)",
        contrastText:"#000"
    },
    pink:{
        main:"rgb(255, 62, 136)",
        contrastText:"#000"
    },
    orange:{
        main:"rgb(255, 94, 0)",
        contrastText:"#000"
    },
    brown:{
        main:"rgb(143, 95, 63)",
        contrastText:"#000"
    },
    btn:{
        main:"rgb(71, 77, 87)",
        contrastText:"#000"
    },
    firoozeh: {
        main: "#0ead98",
        contrastText: "#fff"
    },
    action: {
        hoverOpacity: 0,
        hover: "rgba(255,255,0,0)"
    },
   contrastThreshold: 4,
   tonalOffset: 1   


  },
  components:{
     MuiButton:{
        styleOverrides:{
            root: ({ ownerState }) => ({
                ...(ownerState.variant === 'outlined' &&
                  ownerState.color === 'light' && {
                    "&:hover": {
                        background: '#fff',
                        color: '#111',
                    },
                    background: 'rgba(0,0,0,0)'
                  }),
                  ...(ownerState.variant === 'text' &&
                  ownerState.color === 'grey' && {
                    
                    "&:hover": {
                        color: '#fff',
                    }
                  }),
                  textTransform: 'none',
                  ...(ownerState.variant === 'outlined' &&
                  ownerState.color === 'grey' && {
                    color: "#888",
                    "&:hover": {
                        color: '#fff',
                    }
                  }),
              }),
        },
        
     },
     MuiPaper:{
        styleOverrides:{
            root:{
                background: GRAY,
                
            }
        }
     },
    MuiTab:{
        styleOverrides:{
            root:{
                textTransform:"none",
                '&.Mui-selected':{
                    color:"#fff",
                    backgroundColor:GRAY,
                },
                '&.MuiTabs-indicator':{
                    backgroundColor:'orange'
                }
            },
            selected:{
                textTransform:"none",
            }
        }
    },
  }
});


export default Theme;
