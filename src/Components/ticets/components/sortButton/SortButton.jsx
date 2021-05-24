
export function SortButton({ title, name, sortBy }) {

    return (
        <button
          type="button"
          name={name}
          className=''
          onClick={(e) => sortBy(e.target.name)}
        >
          {title}
        </button>
    );
  }
  