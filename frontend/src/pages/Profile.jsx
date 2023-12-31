import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import bg from "../assets/bg-yellow.png";
import { Button, Card } from "flowbite-react";
import Navigation2 from "../components/Navigation2";
import FooterResto from "../components/FooterResto";
import profilePicture from "../assets/profpic.png";
import { format } from "date-fns";

const Profile = () => {
  const [user, setUser] = useState({});
  const [birthdate, setBirthDate] = useState("");
  const { username } = useParams();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/users/login/find/${username}`)
      .then((response) => {
        const userData = response.data.data;
        setUser(userData);

        const originalDate = userData.birthdate;
        const formattedDate = new Date(originalDate).toLocaleDateString();
        setBirthDate(formattedDate);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navigation2 />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          height: "682px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: "1200px", height: "600px", textAlign: "center" }}>
          <form className="flex flex-col gap-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={`https://ui-avatars.com/api/?name=${username}`}
                alt="Profile Picture"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  marginBottom: "20px",
                }}
              />
              <p className="text-2xl mb-4" style={{ fontWeight: "bold" }}>
                {user.name}
              </p>
              <ul className="w-full text-sm font-medium ">
                <li
                  className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100"
                  style={{}}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    Email
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    {user.email}
                  </span>
                </li>
                <li
                  className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100"
                  style={{}}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    Alamat
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    {user.address}
                  </span>
                </li>
                <li
                  className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100"
                  style={{}}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    Jenis Kelamin
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    {user.gender}
                  </span>
                </li>
                <li
                  className="w-full px-4 py-2 grid grid-cols-2 gap-4 hover:bg-gray-100"
                  style={{}}
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    Tanggal Lahir
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                  >
                    {birthdate}
                  </span>
                </li>
              </ul>
              <Button
                href={`edit/${user.username}`}
                className="mt-8"
                style={{
                  backgroundColor: "#FFA90A",
                  color: "white",
                  width: "150px",
                }}
              >
                Edit Profile
              </Button>
            </div>
          </form>
        </Card>
      </div>
      <FooterResto />
    </div>
  );
};

export default Profile;
