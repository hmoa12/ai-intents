import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#034D9F',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        subtitle1: {
            color: '#495057'
        },
        h5: {
            fontWeight: 500,
            color: '#212529'
        },
        subtitle2: {
            fontStyle: 'italic'
        }
    }
});

export default theme