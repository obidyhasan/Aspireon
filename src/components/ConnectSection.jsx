const ConnectSection = () => {
  function handelForm(e) {
    e.preventDefault();
    e.target.reset();
  }

  return (
    <div className="border py-10 rounded">
      <div className="space-y-3">
        <h1 className="text-center font-bold text-3xl">
          <span className="text-primary">Connect</span> With Us
        </h1>
        <p className="max-w-2xl text-sm text-center mx-auto text-gray-600">
          Have questions or need guidance? Fill out the form below to connect
          with our experts. We are here to help you achieve your career
          aspirations.
        </p>
      </div>

      <div className="mt-10 max-w-3xl mx-auto">
        <form onSubmit={handelForm} className="flex flex-col gap-5">
          <div className="flex gap-5">
            <input
              type="text"
              required
              placeholder="First name*"
              className="input input-bordered w-full rounded"
            />
            <input
              required
              type="text"
              placeholder="Last name*"
              className="input input-bordered w-full rounded"
            />
          </div>
          <div className="flex gap-5">
            <input
              required
              type="email"
              placeholder="Email*"
              className="input input-bordered w-full rounded"
            />
            <input
              type="Number"
              required
              placeholder="Phone Number*"
              className="input input-bordered w-full rounded"
            />
          </div>
          <textarea
            required
            placeholder="Message*"
            className="textarea textarea-bordered textarea-md w-full rounded min-h-40"
          ></textarea>

          <button
            to={"/login"}
            className="btn rounded bg-primary text-white hover:bg-primaryDark w-min mx-auto min-w-32"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConnectSection;
