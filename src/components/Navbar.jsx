import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, ButtonGroup, Button, } from "@mui/material";


export function Navbar(){
    return (
        <>
        <AppBar style={{background: '#0097a7'}}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>Context API and Routing</Typography>
                <ButtonGroup variant="outlined" aria-label="Basic button group">
                    <Button style={{
                        color: '#33691e'
                        }}>
                        <Link to="/login-information" style={{
                            color: '#33691e',
                            textDecoration: 'none',
                            fontWeight: '800'
                        }}>
                            Giriş Bilgileri
                        </Link>
                    </Button>
                    <Button>
                        <Link to="/users" style={{
                            color: '#33691e',
                            textDecoration: 'none',
                            fontWeight: '800'
                        }}>
                            Kullanıcılar
                        </Link>
                    </Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
        
        
        </>
    )
}