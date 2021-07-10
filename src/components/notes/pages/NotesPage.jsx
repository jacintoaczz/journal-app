import { NotesAppBar } from "../NotesAppBar";

export const NotesPage = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <div className="form-group">
          <input
            type="text"
            name="email"
            className="auth__input notes__title-input"
            required={true}
          />

          <label htmlFor="input" className="control-label">
            Some awesome title
          </label>
          <i className="bar"></i>
        </div>

        <textarea
          name="notesText"
          cols={30}
          rows={10}
          className="notes__textarea"
          placeholder={"What happened today?"}
        ></textarea>

        <div className="notes__image">
          <img
            src="https://pbs.twimg.com/media/EkPdCbxX0AISQVn.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};
