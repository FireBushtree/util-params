export const TOKEN_KEY = 'token';
export const ACCESS_TOKEN_KEY = 'access_token';
export const USER_ID_KEY = 'userId';
export const TENANT_ID_KEY = 'tenantId';

/**
 * 获取url中的参数
 * @param {string} key
 * @return {string}
 */
export const getUrlParam = (key: string) => {
  const paramObj = {} as { [key: string]: string };
  const matchList = window.location.href.match(/([^\?&]+)=([^\?#&]+)/g) || [];

  for (let i = 0, len = matchList.length; i < len; i++) {
    const r = matchList[i].match(/([^\?&]+)=([^&]+)/);

    if (r) {
      paramObj[r[1]] = r[2];
    }
  }

  if (key) {
    return paramObj[key];
  } else {
    return '';
  }
};

/**
 * 从 `localStorage` 中获取数据
 * @param {string} key
 * @returns
 */
export const getStorageParam = (key: string) => {
  return localStorage.getItem(key);
};

/**
 * 获取项目中的`token`或者`access_token`
 * 获取顺序的优先级为
 * 1. url的参数
 * 2. localStorage
 * @returns {string | null} token
 */
export const getToken = () => {
  return (
    getUrlParam(TOKEN_KEY) ||
    getUrlParam(ACCESS_TOKEN_KEY) ||
    getStorageParam(TOKEN_KEY) ||
    getStorageParam(ACCESS_TOKEN_KEY)
  );
};

/**
 * 获取项目中的`tenantId`
 * @returns {string | null} tenantId
 */
export const getTenantId = () => {
  return (
    getUrlParam(TENANT_ID_KEY) ||
    getStorageParam(TENANT_ID_KEY)
  );
}

/**
 * 获取项目中的`userId`
 * @returns {string | null} userId
 */
export const getUserId = () => {
  return (
    getUrlParam(USER_ID_KEY) ||
    getStorageParam(USER_ID_KEY)
  );
}
