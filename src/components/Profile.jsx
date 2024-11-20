import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const { user, handelUpdateProfile, setLoading } = useContext(AuthContext);
  const { displayName, photoURL, email } = user;

  function handelUpdateProfileInfo(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    const info = {
      displayName: name,
      photoURL: photo,
    };

    handelUpdateProfile(info).then(() => {
      setLoading(false);
    });
  }

  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="my-10 gap-2 flex flex-col items-center">
        <figure>
          <img
            src={photoURL}
            className="w-32 h-32 object-cover rounded-full border-2"
            alt="Profile Photo"
          />
        </figure>
        <h1 className="font-bold text-2xl">{displayName}</h1>
        <p className="text-sm text-gray-500">{email}</p>
      </div>

      <div className="border rounded text-center px-4 pb-4 pt-8 mb-20 ">
        <h2 className="font-semibold text-lg">Update Profile</h2>

        <form
          onSubmit={handelUpdateProfileInfo}
          className="space-y-5 my-10 max-w-md mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              defaultValue={displayName}
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered rounded"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              defaultValue={photoURL}
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered rounded"
              required
            />
          </div>
          <div className="pt-3">
            <button className="btn rounded  bg-primary text-white hover:bg-primaryDark">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
