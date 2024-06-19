import React from "react";

const googleDocsLink =
  "https://docs.google.com/document/d/1hqtxe9iwii7zzBRzDM2pcIcLoOrOCCOS2TB6IGXLhEc/edit?usp=drive_link";

const DownloadCVButton = () => (
  <a
    href={googleDocsLink}
    target="_blank"
    rel="noreferrer"
    className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
    title="Download CV"
  >
    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 pointer-events-none">
      Download CV
    </span>
  </a>
);

export default DownloadCVButton;
