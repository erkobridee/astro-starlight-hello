export const redefineUrl = (
  url: string,
  baseUrl = `${import.meta.env.BASE_URL}`
) => {
  if (url.startsWith('http')) {
    return url;
  }

  let newUrl = baseUrl;

  const hrefStartWithSlash = url.startsWith('/');

  if (baseUrl === '/') {
    newUrl = hrefStartWithSlash ? url : `/${url}`;
  } else {
    const baseUrlEndWithSlash = baseUrl.endsWith('/');

    newUrl = `${baseUrl}${!baseUrlEndWithSlash && !hrefStartWithSlash ? `/` : ''}${url}`;
  }

  return newUrl;
};

export default redefineUrl;
