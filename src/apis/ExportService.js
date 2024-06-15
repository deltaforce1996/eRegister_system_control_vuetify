import axiosBase from "./AxiosConfig";
// import { Base64 } from "js-base64";
import { saveAs } from "file-saver";

const exportBase64 = async (_name, _type, _url) => {
  try {
    const response = await axiosBase({
      method: 'get',
      url: _url,
      responseType: 'arraybuffer', // Ensure we get the raw binary data
    });

    const mimeTypeMap = {
      'png': 'image/png',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'pdf': 'application/pdf',
      'txt': 'text/plain',
      'xls': 'application/vnd.ms-excel',
      'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    };

    const mimeType = mimeTypeMap[_type.toLowerCase()];
    if (!mimeType) {
      throw new Error('Unsupported file type');
    }

    const blob = new Blob([response.data], { type: mimeType });
    saveAs(blob, `${_name}.${_type}`);
  } catch (error) {
    console.error('Error exporting file:', error);
  }
};

export default {
  exportBase64,
};
