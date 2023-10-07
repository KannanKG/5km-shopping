import axios from "axios";

class Service {
  protected readonly service: any;
  protected count: number;
  protected loader: any;

  constructor() {
    let service = axios.create({
      baseURL: "http://localhost:3001",
      withCredentials: false,
    });
    this.addLoader = this.addLoader.bind(this);
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
    this.count = 0;
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  addLoader() {
    if (this.count === 0) {
      var div = document.createElement("div");
      div.setAttribute("class", "loading-indicator");
      div.setAttribute("id", "");
      document.body.appendChild(div);
      document.body.style.pointerEvents = "none";
      this.loader = div;
    }
    this.count++;
    document.onkeydown = function (e) {
      return false;
    };
  }

  removeLoader() {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
    if (this.count === 0) {
      this.loader.parentElement.removeChild(this.loader);
      document.body.style.pointerEvents = "initial";
    }
    setTimeout(() => {
      document.onkeydown = function (e) {
        return true;
      };
    }, 1000);
  }

  handleSuccess = (response: any) => {
    return response;
  };

  handleError = (error: any) => {
    this.removeLoader();
    switch (
      error.response.status
    ) {
      case 401:
        // logout user
        break;
      case 403:
        localStorage.clear();
        break;
    }

    return Promise.reject(error);
  };

  get(
    path: string,
    params = {},
    download?: boolean
  ) {
    let self = this;
    self.addLoader();
    let headers = {
      "Content-Type": "application/json"
    }

    const response = self.service
      .get(path, {
        headers: headers,
        params: params,
        responseType: download ? "blob" : "json",
      })
      .then((response: any) => {
        self.removeLoader();

        return response;
      });

    return response;
  }

  post(path: string, payload: any, isHeader?: any) {
    try {
      let self = this;
      self.addLoader();
      let headers: any = {
        "Content-Type": "application/json"
      };

      if (typeof isHeader === "object") {
        headers = {
          ...headers,
          ...isHeader,
        };
      }

      const response = this.service
        .request({
          method: "POST",
          url: path,
          headers: headers,
          data: payload,
        })
        .then((response: any) => {
          self.removeLoader();
          return response;
        });
      return response;
    } catch (error) {
      return { code: 400, message: "validation failed" };
    }
  }

  put(path: string, payload: any) {
    let self = this;
    self.addLoader();
    let headers: any = {
      "Content-Type": "application/json"
    };

    return this.service
      .request({
        method: "PUT",
        url: path,
        headers: headers,
        data: payload,
      })
      .then((response: any) => {
        self.removeLoader();
        return response;
      });
  }

  delete(path: string, payload: any) {
    let self = this;
    self.addLoader();
    let headers: any = {
      "Content-Type": "application/json"
    };

    return this.service
      .request({
        method: "DELETE",
        url: path,
        headers: headers,
        data: JSON.stringify(payload)
      })
      .then((response: any) => {
        self.removeLoader();
        return response;
      });
  }

  patch(path: any, payload: any, callback: any) {
    return this.service
      .request({
        method: "PATCH",
        url: path,
        responseType: "json",
        data: payload,
        headers: {},
      })
      .then((response: any) => callback(response.status, response.data));
  }
}

export default new Service();
