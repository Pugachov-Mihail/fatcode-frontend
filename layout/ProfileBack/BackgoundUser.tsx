import React, {ReactChildren, ReactNode} from "react";
import {Container, Grid} from "@mui/material";
import LeftMenu from "../profile/LeftMenu";


const BackgoundUser = ({children}) => {
    return(
            <Container fixed sx={{
                background: "white",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                paddingBottom: 10,
                marginBottom: 10
            }}>
                <Grid container>
                    <Grid xs={3}>
                        <LeftMenu/>
                    </Grid>
                    <Grid ml={5} mt={2} xs={8}>
                        {children}
                    </Grid>
                </Grid>
            </Container>
    )
}

export default BackgoundUser