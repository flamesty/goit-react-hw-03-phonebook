
const Name = ({ name, hendleInputChange, idInput, htmlFor}) => {
     
    return (
        <label htmlFor={htmlFor}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              id = {idInput}
              value={name}
              onChange = {hendleInputChange}
                
            />
        </label>
    )
}

export default Name;