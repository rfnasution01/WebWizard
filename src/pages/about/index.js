import { Container,useMediaQuery} from "@mui/material"
import { LabtobView, MobileView } from "../../components/organisms/about";

export const AboutPage = () => {
    const isSmScreen = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <Container>
            {
                isSmScreen ?
                <LabtobView/>:
                <MobileView/>
            }
        </Container>
    )
}
