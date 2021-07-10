import GosSDK from "gos-js-sdk";

export const configs = {
  host: process.env.REACT_APP_API_HOST || window.location.host,
  appName: "<%= name %>",
  proxy: "proxy",
};

export interface ApiResponse {
  code: number;
  data: any;
  message: string;
}

export const getPrefixParams = [configs.host, configs.appName, configs.proxy];
export const gosSDK = new GosSDK(configs);

export const RESOURCE_ROOT = `${gosSDK.getPrefix(...getPrefixParams)}`;
export const CAMERAS_API_ROOT = `${gosSDK.getPrefix(
                                  ...getPrefixParams
                                )}/cameras/device/api/v1`;

export function getInstalledApps() {
  return gosSDK.request(
    `${gosSDK.getPrefix(...getPrefixParams)}/core/auth/api/v1/apps/installed`
  );
}

export function fetchCameras() {
  return gosSDK.cameras.getCameraList().then((res: ApiResponse) => {
    if (res.code === 200) {
      return res.data;
    } else {
      throw new Error(res.message);
    }
  });
}
