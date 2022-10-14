import { useEffect, useState } from 'react';
import { ExampleFormOptions, GetResponse, PostPayload } from '../types';
import { AxiosResponse, default as axios } from 'axios';

export default function useExampleAPI() {
  const [sampleData, setSampleData] = useState<ExampleFormOptions>();

  useEffect(() => {
    axios
      .get('https://frontend-take-home.fetchrewards.com/form')
      .then((response: AxiosResponse<GetResponse>) => {
        setSampleData({
          occupations: response.data.occupations,
          states: response.data.states.map((s) => s.name),
        });
      })
      .catch((error: any) => console.info(error));
  }, []);

  const postFormData = (formData: PostPayload) => {
    return axios
      .post('https://frontend-take-home.fetchrewards.com/form', formData)
      .then((response: AxiosResponse<GetResponse>) => response.status)
      .catch((error: any) => console.info(error));
  };

  return {
    sampleData,
    postFormData,
  };
}
