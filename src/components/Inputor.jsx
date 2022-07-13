const Inputor = ({ text, state }) => {
  return (
    <div className="w-full max-w-lg form-control">
      <label className="input-group">
        <span className="justify-center w-52">{text}</span>
        <input
          type="text"
          className="w-full input input-bordered"
          onChange={(e) => state(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Inputor;
