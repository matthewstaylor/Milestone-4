import campusImage from '../../assets/campus_boca_raton.png';

import { fade, makeStyles } from '@material-ui/core/styles';

//@ts-ignore
const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(1),
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    logoTitle: {
        [theme.breakpoints.down('md')]: {
            display: "none"
        },
    },
    welcome: {
        [theme.breakpoints.down('md')]: {
            fontSize: "10px"
        },
    },
    postTag: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    ratingZone:{
        textAlign: 'center'
    },
    inputRoot: {
        color: 'inherit',
    },
    userName: {
        [theme.breakpoints.down('md')]: {
            display: "none"
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade("rgba(192,192,192, 0.5)", 0.15),
        '&:hover': {
            backgroundColor: fade("rgba(105,105,105, 0.5)", 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
        alignSelf: 'center'
    },
    fab: {
        margin: theme.spacing(1),
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    postsToolbar: {
        justifyContent: 'flex-end',
        overflowX: 'auto',
        margin: "10px"
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        fontSize: "18px"
    },
    createPost: {
        marginRight: theme.spacing(1),
        //@ts-ignore
        textTransform: "none !important",
        flexShrink: 0,
    },
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[1000],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        background: "linear-gradient(72deg, rgba(0, 0, 0, 0.5), rgba(256, 256, 256, 0.2) ), url(" + campusImage + ")",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
}));

export default useStyles;