import { Input, Label } from "components/ContactForm/ContactFormStyled"


export const Filter = ({ onChange, value }) => {
    return (
        <Label htmlFor="filter">
            Find contacts by name
            <Input type="text" name="filter" value={value} onChange={onChange} />
        </Label>
    )

}


