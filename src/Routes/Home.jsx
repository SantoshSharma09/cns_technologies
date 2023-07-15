import React from "react";
import styles from "../Styles/Home.module.css";
import { MdPages } from "react-icons/md";
import { TbClipboardTypography } from "react-icons/tb";
import { BsEye } from "react-icons/bs";
import { AiFillFormatPainter } from "react-icons/ai";
import { GiPlatform, GiStarFormation } from "react-icons/gi";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div style={{ display: "flex", paddingLeft: "15px", marginTop: "5px" }}>
      <div style={{ width: "15%", marginTop: "10px" }}>
        <div>
          <img
            src="https://admin.pixelstrap.com/cuba/assets/images/logo/logo.png"
            alt=""
          />
        </div>
        <div className={styles.dashboard}>
          <i className="fa-solid fa-gauge-high"></i>
          <p>Dashboard</p>
        </div>
        <div>
          <p className={styles.box1}>Default</p>
          <div>
            <div className={styles.box}>
              <i className="fa-solid fa-envelope"></i>
              <p>Ecommerce</p>
            </div>
            <div className={styles.box}>
              <i className="fa-brands fa-rocketchat"></i>
              <p>Online Course</p>
            </div>
            <div className={styles.box}>
              <i className="fa-regular fa-calendar"></i>
              <p>Crypto</p>
            </div>
            <div className={styles.box}>
              <i className="fa-solid fa-file-invoice"></i>
              <p>Social</p>
            </div>
            <div className={styles.box}>
              <i className="fa-regular fa-user"></i>
              <p>NFT</p>
            </div>
            <div className={styles.box}>
              <MdPages />
              <p>School Management</p>
            </div>
            <div className={styles.box}>
              <MdPages />
              <p>POS</p>
            </div>
          </div>
        </div>
        <div>
          <p className={styles.box1}>Widgets</p>
        </div>
        <div>
          <p className={styles.box1}>Page Layouts</p>
        </div>
        <p className={styles.box1}>Applications</p>
        <div>
          <div>
            <div className={styles.box}>
              <i class="fa-sharp fa-solid fa-shield"></i>
              <p>Project</p>
            </div>
            <div className={styles.box}>
              <i class="fa-regular fa-compass"></i>
              <p>File Manager</p>
            </div>
            <div className={styles.box}>
              <i class="fa-sharp fa-solid fa-bell-slash"></i>
              <p>Kanban Board</p>
            </div>
            <div className={styles.box}>
              <i class="fa-solid fa-umbrella"></i>
              <p>Ecommerce</p>
            </div>
            <div className={styles.box}>
              <i class="fa-sharp fa-solid fa-book"></i>
              <p>Letter Box</p>
            </div>
            <div className={styles.box}>
              <i class="fa-sharp fa-solid fa-book"></i>
              <p>Chat</p>
            </div>
            <div className={styles.box}>
              <i class="fa-sharp fa-solid fa-book"></i>
              <p>Users</p>
            </div>
            <div className={styles.box}>
              <i class="fa-sharp fa-solid fa-book"></i>
              <p>Bookmarks</p>
            </div>
            <div className={styles.box}>
              <i class="fa-sharp fa-solid fa-book"></i>
              <p>Contacts</p>
            </div>
            <div className={styles.box}>
              <i class="fa-sharp fa-solid fa-book"></i>
              <p>Tasks</p>
            </div>
            <div className={styles.box}>
              <i class="fa-sharp fa-solid fa-book"></i>
              <p>Calender</p>
            </div>
            <div className={styles.box}>
              <i class="fa-sharp fa-solid fa-book"></i>
              <p>Social App</p>
            </div>
            <div className={styles.box}>
              <i class="fa-sharp fa-solid fa-book"></i>
              <p>To-Do</p>
            </div>
            <div className={styles.box}>
              <i class="fa-sharp fa-solid fa-book"></i>
              <p>Search Result</p>
            </div>
            <div className={styles.box}>
              <i class="fa-sharp fa-solid fa-book"></i>
              <p>Letter Box</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div style={{ width: "85%" }}>
        <Navbar />
        <div
          style={{
            textAlign: "left",
            paddingLeft: "10px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontWeight: "900", fontSize: "22px" }}>Default</p>
        </div>
        <div style={{ display: "grid", gap: "15px" }}>
          <img
            style={{ width: "100%" }}
            src="https://github-production-user-asset-6210df.s3.amazonaws.com/109049556/253750192-05c22210-bf9d-4f7d-80f8-20399f737637.PNG"
          />
          <img
            style={{ width: "100%" }}
            src="https://github.com/SantoshSharma09/movie-app-githuhAction/assets/109049556/14d66691-0bbd-4076-8cc4-50ace2793381"
          />
          <img
            style={{ width: "100%" }}
            src="https://github.com/SantoshSharma09/movie-app-githuhAction/assets/109049556/98412a9d-cf78-49ba-a2f9-5e2a93ba158e"
          />
          <img
            style={{ width: "100%" }}
            src="https://github-production-user-asset-6210df.s3.amazonaws.com/109049556/253749565-68522bb1-13c5-4afc-bc16-790a6d8901dc.PNG"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
