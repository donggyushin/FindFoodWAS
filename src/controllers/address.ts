import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getAddressByGeoLocation = (req: Request, res: Response) => {
  const { longitude, latitude } = req.query;
  const naverApiQueryKey = process.env.NAVER_API_KEY_QUERIES || "";
  const requestEndpoint = `https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&coords=${longitude},${latitude}&orders=legalcode,admcode,addr,roadaddr&output=json&${naverApiQueryKey}`;
  if (!longitude || !latitude) {
    return res.status(400).json({
      ok: true,
      status: 400,
      error: "클라이언트로 부터 변수를 제대로 전달받지 못하였습니다.",
    });
  }
  axios
    .get(requestEndpoint)
    .then((res) => res.data)
    .then((data) => {
      const { area1, area2, area3 } = data.results[0].region;
      const area1Name = area1.name;
      const area2Name = area2.name;
      const area3Name = area3.name;
      return res.json({
        ok: true,
        status: 200,
        area1Name,
        area2Name,
        area3Name,
        error: null,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        ok: false,
        error: err,
        status: 500,
      });
    });
};
