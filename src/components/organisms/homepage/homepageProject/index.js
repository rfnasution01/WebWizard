import { Box, Grid, useMediaQuery } from "@mui/material";
import { DataProject } from "../../../../data/project";
import { DetailProject } from "./detailProject";
import { ProjectDoc } from "./projectDoc";

export const HomepageProject = () => {
    const isXlScreen = useMediaQuery((theme) => theme.breakpoints.up('xl'));
    const isLgScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const isMdScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
        <Box
            component='section'
            sx={{
                minHeight: '86vh',
            }}
        >
            {
                DataProject.map((item, idx)=>(
                    <Grid 
                        container 
                        columns={2} 
                        spacing={2} 
                        sx={{
                            mt: '1px'
                        }}
                        key={idx} 
                    >
                        {/* --- Left Grid --- */}
                        {
                            isXlScreen || isLgScreen || isMdScreen ?  
                            (idx+1)%2 === 0 ? <DetailProject data={item} /> : <ProjectDoc data={item} />: 
                            <DetailProject data={item} />  
                        }
                        {/* --- Right Grid --- */}
                        
                        {
                            isXlScreen || isLgScreen || isMdScreen ? 
                            (idx+1)%2 === 0 ? <ProjectDoc data={item} /> : <DetailProject data={item} /> :
                            <ProjectDoc data={item} />
                        }
                        
                    </Grid>
                ))
            }
        </Box>
    )
}