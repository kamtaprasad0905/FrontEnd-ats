import axios from "axios";
const BASE_URL = "https://a626-112-79-203-247.in.ngrok.io";
const get = async (url: string, _config: any = {}) => {
  const config: any = { ..._config };
  return await axios.get(url, { ...config }).then((res: any) => res.data);
};
const post = async (url: string, data = {}, _config = {}) => {
  const config: any = { ..._config };
  return axios
    .post(url, data, { ...config })
    .then((res: any) => {
      if (res.status) {
        const { data, status } = res;
        return { data, status };
      } else {
        return {
          status: 200,
          data: res,
        };
      }
    })
    .catch(({ response }: any) => {
      return response;
    });
};

const put = async (url: string, data = {}, _config = {}) => {
  const config: any = { ..._config };
  return axios
    .put(url, data, { ...config })
    .then((res) => {
      if (res.status === 201) {
        const { data, status } = res;
        return { data, status };
      } else {
        return {
          status: 201,
          data: res,
        };
      }
    })
    .catch(({ response }) => {
      if (response.status === 400) {
        return response.data;
      }
      return response;
    });
};

const httpDelete = async (url: string, token: string | null) => {
  const config: any = {};
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return await axios.delete(url, { ...config }).then((res) => res.data);
};

const user = {
  addEmployee: async (params: any) => {
    return await post(`${BASE_URL}/add_employee`, params);
  },
  getAllEmployees: async () => {
    return await get(`${BASE_URL}/all_employee`, null);
  },
  getEmployeeById: async (id: any) => {
    return await get(`${BASE_URL}/employee/${id}`, null);
  },
  updateEmployeeById: async (id: any, params: any) => {
    return await put(`${BASE_URL}/employee/edit/${id}`, params);
  },
  deleteEmployeeById: async (id: any) => {
    return await httpDelete(`${BASE_URL}/employee/${id}`, null);
  },
};
export default user;
