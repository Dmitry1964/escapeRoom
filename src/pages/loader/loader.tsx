const Loader = (): JSX.Element => {
  const a = 2;
  return (
    <div className="wrapper">
      <div className="decorated-page__decor" aria-hidden="true">
        <h2>Идет загрузка</h2>
      </div>
    </div>
  );
};

export default Loader;
