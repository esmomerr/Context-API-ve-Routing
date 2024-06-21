import { Button, TextField } from "@mui/material"

export function LoginInformation(){
    return (
        <> 
        <br /><br /><br /><br />
        <form>
            <TextField id="filled-basic" label="İsim Soyisim" variant="filled" /> <br />
            <TextField id="filled-basic" label="Telefon Numarası" variant="filled" /> <br />
            <TextField id="filled-basic" label="Email" variant="filled" /> <br />
            <TextField id="filled-basic" label="Şifre" variant="filled" /> <br /> <br />
            <Button variant="contained">Gönder</Button>
        </form>
        </>
    )
}