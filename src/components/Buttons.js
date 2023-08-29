export function Button(prop) {
  return (
    <>
      <button className={prop.btnClass}>
        {prop.btnText}
        {prop.btnPhoto}
      </button>
    </>
  );
}
