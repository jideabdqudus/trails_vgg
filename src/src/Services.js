import { appHelpers } from "./appHelpers/appHelpers";

export const Service = (baseUrl, Axios, token, history) => {
  const instance = Axios.create({
    baseURL: baseUrl,
    headers: { accessToken: token },
    // you can add other headers here which has been passed from AuthorizedLayout as arguments
  });

  instance.interceptors.response.use(response=>response,
    error=>{
      if(error.response){
      let status = error.response.status
      // debugger
      const url = error.response.config.url
      const module = url  && url.split("/")[0]
      if(status === 403){
        appHelpers.alertError(`Requested Resource '${module && module}' is Forbidden `)
       }
      else if (status === 401){
        appHelpers.alertError("Session expired. Login again")
        localStorage.clear()
        history.push("/")
      }
    }
    }
    );

  const getApiUrl = (controller, action) => {
    return `${controller}/${action}/`;
  };

  const getApiUrlTwo = (controller, action,method) => {
    return `${controller}/${action}/${method}`;
  };
  const getRestUrl = (controller, action) => {
    return `${controller}/${action}`;
  };

  const getApiv1Url = (controller) => {
    return `${controller}/`;
  };


  const createItem = (data, controller, action) => {
    return instance.post(getApiUrl(controller, action), data);
  };



  const getDataUsingId = (controller, id) => {
    return instance.get(`${getApiv1Url(controller)}/${id}`);
  };


  const getDataById = (controller, action,method) => {
    return instance.post(`${getApiUrlTwo(controller, action,method)}`);
  };
  // const editItem = (controller,data,id) => {
  // 	return instance.put(`${getApiv1Url(controller)}/${id}`,data);
  // }
  const editItem = (controller, data) => {
    return instance.put(`${getApiv1Url(controller)}`, data);
  };

  const deleteItem = (controller, id) => {
    return instance.delete(`${getApiv1Url(controller)}/${id}`);
  };

  const userLogin = (data, controller, action) => {
    return instance.post(getRestUrl(controller, action), data);
  };


  const createItemV1 = (data, controller) => {
    return instance.post(getApiv1Url(controller), data);
  };
  const getItems = (controller) => {
    return instance.get(`${getApiv1Url(controller)}`);
  };
  const uploadProgram = (controller, data) => {
    return instance.post(`${getApiv1Url(controller)}`, data);
  }
  // all other api service functions can be created here which is then accessible to other routes and components in the Authorized Layout

  return {
    uploadProgram,
    getDataUsingId,
    getDataById,
    deleteItem,
    createItem,
    userLogin,
    editItem,
    getItems,
    createItemV1,
  };
};
