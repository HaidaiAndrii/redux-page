import Button from '@material-ui/core/Button';

export function SortButton({ title, name, sortBy }) {
  return (
    <Button
      variant="contained"
      color="primary"
      type="button"
      name={name}
      onClick={(e) => {sortBy(e.currentTarget.name)}}
    >
      {title}
    </Button>
  );
}
