const Number = ({ number, hendleInputChange, idInput, htmlFor }) => {
    return (
        <label htmlFor={htmlFor}>
            Number
            <input
               type="tel"
               name="number"
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
               required
               id = {idInput}
               value={number}
               onChange = {hendleInputChange}
            />
        </label>
    )
}
export default Number;