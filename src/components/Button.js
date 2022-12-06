export default function Button({ url }) {
  return (
    <a href={url} className="btn btn-primary">
      Go somewhere
    </a>
  );
}

/**
 * Original code prior to destructing
 * export default function Button(props) {
  return (
    <a href={props.url} className="btn btn-primary">
      Go somewhere
    </a>
  );
}
 */
