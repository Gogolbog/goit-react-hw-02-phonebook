import { ContactListWrapper } from "./ContactListStyled"

export const ContactList = ({ filtredContact, onDeleteContact }) => {
    return (
        <ContactListWrapper>
            {filtredContact.map(({ id, name, number }) => (
                <li key={id}>{name}: {number}
                    <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
                </li>
            ))}
        </ContactListWrapper>
    )
}
