import { Request, Response } from "express";
import axios from "axios";

export const testController = async (req: Request, res: Response) => {
  // https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&coords=127.1054065,37.3595669&orders=legalcode,admcode,addr,roadaddr&output=json&X-NCP-APIGW-API-KEY-ID=310fs9bh52&X-NCP-APIGW-API-KEY=ucYdCXs1EBCoXUNhhhHyB06SddsprhfDdX8Yv5iC
  // 해당 url로 좌표로부터 주소를 호출할 수 있음. Naver Maps API

  const encodedUri = encodeURI(
    `http://store.naver.com/sogum/api/businesses?start=1&display=100&query=공릉동+맛집&sortingOrder=reviewCount`
  );

  console.log(encodedUri);

  try {
    const please = await axios.get(encodedUri);
    // @ts-ignore
    const datas = please.data.items as [any];

    datas.map((data) => {
      console.log(data);
    });

    res.json({
      ok: true,
    });
  } catch (err) {
    res.json({
      ok: true,
    });
  }
};
