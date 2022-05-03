import axios from "axios";

export const getForecast = (cityName: string, locale: string): Promise<any> => {
  const city = cityName;
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      headers: {
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        "X-RapidAPI-Key": "846b76f7dbmshaacaee29e276dafp1b8cbfjsn880cc4b8b5c1",
      },
      params: { q: city, days: "3", lang: locale },
    })
      .then((response) => {
        console.log("response in request");
        resolve(response.data);
      })
      .catch((err) => {
        console.log(err);
        reject("Error: Response Rejected");
      });
  });
};
