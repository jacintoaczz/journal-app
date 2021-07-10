import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar mt-5">
        <h3>
          <span>
            <i className="far fa-moon"></i>
            &nbsp; Jacinto
          </span>
        </h3>

        <button className="btn">Logout</button>
      </div>

      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
