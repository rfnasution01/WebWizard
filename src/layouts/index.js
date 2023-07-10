import { Box } from "@mui/material";
import { MainArticle, MainFooter, MainHeader } from "./mainLayout";

export const MainLayout = () => {
    return (
        <Box
            component='main'
            sx={{
                minHeight: '100vh',
                bgcolor: '#fff'
            }}
        >   
            <MainHeader />
            <MainArticle />
            <MainFooter />
        </Box>
    )
}