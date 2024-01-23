export const fetchSearchResults = async (querry) => {
  const result = {
    success: false,
  };
  try {
    const endpoint = `http://hn.algolia.com/api/v1/search?query=${querry}`;
    let res = await fetch(endpoint);
    const status = res.status;
    res = await res.json();
    console.log(res);
    if (status == 200) {
      result.success = true;
      result.data = res;
    } else {
      throw Error("Error");
    }
  } catch (error) {
    result.error = error;
  }
  return result;
};
