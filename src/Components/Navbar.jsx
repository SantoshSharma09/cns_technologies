import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "15px",
        position: "sticky",
      }}
    >
      <div style={{ width: "70%", paddingLeft: "5px" }}>
        <div style={{ display: "flex" }}>
          <img src="https://admin.pixelstrap.com/cuba/assets/images/giftools.gif" />
          <p style={{ marginTop: "8px" }}>
            Something you love is now on sale! Buy now !
          </p>
        </div>
      </div>
      <div style={{ width: "30%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
          }}
        >
          <img
            style={{}}
            src="https://github.com/SantoshSharma09/movie-app-githuhAction/assets/109049556/f804a98a-314c-4028-b4eb-c2a5a083aea7"
          />
          <img src="https://github.com/SantoshSharma09/movie-app-githuhAction/assets/109049556/b97f353e-3242-463f-a5b3-3933a24cd871" />
          <img src="https://github.com/SantoshSharma09/movie-app-githuhAction/assets/109049556/3c3f13ea-8476-4f91-9841-7f7783641dc5" />
          <img src="https://github.com/SantoshSharma09/movie-app-githuhAction/assets/109049556/db9c7751-26b5-41ac-aa3e-333889070585" />
          <img src="https://github.com/SantoshSharma09/movie-app-githuhAction/assets/109049556/a52b61d4-44e4-4566-a16c-5b18b6d1aae9" />
          <img src="https://github.com/SantoshSharma09/movie-app-githuhAction/assets/109049556/941e1583-7769-4fcd-a676-3605c3879d6a" />
          <img src="https://github.com/SantoshSharma09/movie-app-githuhAction/assets/109049556/83193439-9e38-4311-a844-53b5be7ccd6b" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
