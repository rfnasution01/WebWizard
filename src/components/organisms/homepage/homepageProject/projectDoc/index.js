import { Grid } from "@mui/material";
import { ProjectStyle1 } from "./projectStyle1";
import { ProjectStyle2 } from "./projectStyle2";
import { ProjectStyle3 } from "./projectStyle3";
import { ProjectStyle4 } from "./projectStyle4";
import { ProjectStyle5 } from "./projectStyle5";

export const ProjectDoc = ({data}) => {
    const style = data?.style;

    return (
        <Grid 
            item 
            xl={1} 
            lg={1} 
            md={1} 
            sm={2} 
            xs={2}
            component='section'
            sx={{
                display: 'flex',
                alignItem: 'center',
                justifyContent: 'center',
                height: {
                    xl: '86vh',
                    lg: '86vh',
                    md: '86vh',
                    sm: '45vh',
                    xs: '30vh',
                },
            }}
        >
            {
                style === 1 ? <ProjectStyle1 data={data} /> : 
                style === 2 ? <ProjectStyle2 data={data} /> :
                style === 3 ? <ProjectStyle3 data={data} /> :
                style === 4 ? <ProjectStyle4 data={data} /> :
                style === 5 ? <ProjectStyle5 data={data} /> :
                <ProjectStyle1 data={data} />
            }
        </Grid>
    )
}