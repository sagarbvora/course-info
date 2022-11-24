import axios from "axios";

const defaultHeaders = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
};

export function apiClient({
  url,
  data = {},
  method = "",
  headers = {},
  noHeaders,
  ...rest
}) {
  return new Promise(async (resolve, reject) => {
    axios({
      method,
      url,
      headers: {
        ...(noHeaders ? {} : defaultHeaders),
        ...headers,
      },
      data,
      ...rest,
    })
      .then(async (res) => {
        if (res) {
          resolve(res);
        } else {
          if (res.data && res.data.error) {
            console.error(res.data.error);
            reject(res.data.error);
          } else {
            reject(res.data.error);
          }
        }
      })
      .catch(async (err) => {
        reject(err);
      });
  });
}
