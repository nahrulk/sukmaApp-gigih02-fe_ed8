import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { dbStore, storage } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useHistory } from "react-router-dom";
import { uid } from "uid";
import {
  getDownloadURL,
  uploadBytes,
  ref as sRef,
  listAll,
} from "firebase/storage";
import { ref } from "firebase/database";

const Update = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState("");
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  //   Database Variable
  const usersCollectionRef = collection(dbStore, "users");
  const [users, setUsers] = useState([]); // Kumpulan data user
  let { userProfiles } = useState([]); // tempat nyimpen user yang terfilter

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addDoc(usersCollectionRef, {
        fullname: fullname,
        username: username,
        userId: currentUser.uid,
        img: imageUrls,
      });

      history.push("/profile");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleUpload = async (e, id) => {
    const uuid = uid();
    const imageRef = sRef(storage, `images/${imageUpload?.name + uuid}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  userProfiles = users.filter((item) => item.userId === currentUser.uid); // data user
  let disableAddTrue = userProfiles.find((fa) => fa.userId === currentUser.uid);

  const saveDisabled = disableAddTrue ? true : false;

  return (
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <label htmlFor="file">
              <img class="rounded-circle mt-5" width="150px" src={imageUrls} />
            </label>
            <input
              class="upload-image"
              type="file"
              id="file"
              onChange={(e) => setImageUpload(e.target.files[0])}
            />{" "}
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Username</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="@username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Fullname</label>
                <input
                  type="text"
                  class="form-control"
                  value={fullname}
                  placeholder="Fullname"
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                />
              </div>
            </div>

            <div class="mt-5 text-center">
              <button
                class="btn btn-primary profile-button"
                type="submit"
                onClick={handleAdd}
                disabled={saveDisabled}
              >
                add Profile
              </button>
              <button
                class="btn btn-info profile-button"
                type="submit"
                onClick={handleUpload}
              >
                Upload photo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
