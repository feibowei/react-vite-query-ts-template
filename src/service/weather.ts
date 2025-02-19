import { getData } from '../utils/request';

interface WeatherData {
  air_tips: string;
}
interface WeatherRes {
  cityid: string;
  city: string;
  cityEn: string;
  country: string;
  countryEn: string;
  update_time: string;
  data: WeatherData[];
}

export const getWeather = () => {
  return getData<WeatherRes>(
    'http://gfeljm.tianqiapi.com/api?unescape=1&version=v9&appid=43552355&appsecret=SPjQ2mO2'
  );
};
