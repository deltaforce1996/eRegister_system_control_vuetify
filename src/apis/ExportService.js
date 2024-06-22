import axiosBase from "./AxiosConfig";
// import { Base64 } from "js-base64";
import { saveAs } from "file-saver";

const exportBase64 = async (_name, _type, _url) => {
  try {
    const response = await axiosBase({
      method: "get",
      url: _url,
      responseType: "arraybuffer", // Ensure we get the raw binary data
    });

    const mimeTypeMap = {
      png: "image/png",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      pdf: "application/pdf",
      txt: "text/plain",
      xls: "application/vnd.ms-excel",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    };

    const mimeType = mimeTypeMap[_type.toLowerCase()];
    if (!mimeType) {
      throw new Error("Unsupported file type");
    }

    const blob = new Blob([response.data], { type: mimeType });
    saveAs(blob, `${_name}.${_type}`);
  } catch (error) {
    console.error("Error exporting file:", error);
  }
};

async function downloadFile(file_path) {
  try {
    const response = await fetch(file_path, {
      mode: "cors", // Ensure CORS is enabled if fetching from a different domain
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blob = await response.blob();
    const mimeType =
      response.headers.get("Content-Type") || "application/octet-stream";
    const url = window.URL.createObjectURL(
      new Blob([blob], { type: mimeType })
    );

    const a = document.createElement("a");
    a.href = url;
    a.download = file_path.substr(file_path.lastIndexOf("/") + 1);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url); // Clean up the object URL
  } catch (error) {
    console.error("Error downloading file:", error);
  }
}

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export default {
  exportBase64,
  getBase64,
  downloadFile,
};
