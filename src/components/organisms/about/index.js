import { LabtobView } from "./labtobView";
import { MobileView } from "./mobileView";

export {
    LabtobView,
    MobileView,
}
// import { Container, Typography } from "@mui/material"
// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { AboutMenu } from "../../../data/aboutMenu";

// export const AboutTabPanel = () => {
//     const [hover, setHover] = useState(false);
//     const [id, setId] = useState(null)
//     const pathname = useLocation().pathname;
//     const pathArr = pathname.split('/');
//     const path = pathArr[2]

//     const menuHoverEnter = (id) => {
//         setId(id)
//         setHover(true)
//     }

//     const menuHoverLeave = (id) => {
//         setId(id)
//         setHover(false)
//     }

//     console.log({path});

//     return (
//         <Container
//             component='article'
//         >
//             {
//                 AboutMenu.map((item, idx)=>(
//                     <Link
//                         to={item.path}
//                         style={{
//                             textDecoration: 'none',
//                             color:
//                                 id !== null &&
//                                 ((idx === id && hover) || 
//                                 path === item.path) ? 
//                                     '#bfbfbf': 
//                                     path === undefined && item.path === 'summary' ?
//                                     '#bfbfbf': 
//                                     '#5c5c5c',
//                         }}
//                         onMouseEnter={() => menuHoverEnter(idx)}
//                         onMouseLeave={() => menuHoverLeave(idx)}
//                         key={idx}
//                     >
//                         <Typography
//                             sx={{
//                                 fontFamily: 'fantasy',
//                                 fontStyle: 'normal',
//                                 fontWeight: 600,
//                                 fontSize: '20px',
//                                 lineHeight: '180%',
//                                 letterSpacing: '1px',
//                             }}
//                         >{item.title}</Typography>
//                     </Link>
//                 ))
//             }
//         </Container>
//     )
// }