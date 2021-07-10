import { Sidebar } from "../Sidebar";
import { NothingSelected } from "../NothingSelected";
import { NotesPage } from "../../notes/pages/NotesPage";

export const JournalPage = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>
        {/* <NothingSelected /> */}
        <NotesPage/>
      </main>
    </div>
  );
};
