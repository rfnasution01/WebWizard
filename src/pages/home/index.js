import { Box} from "@mui/material";
import { HomepageBanner, HomepageProject } from "../../components/organisms";

export const HomePage = () => {
    return (
        <Box>
            <HomepageBanner />
            <HomepageProject />
        </Box>
    )
}