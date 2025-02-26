import axios from "axios";
import {IPokemon, IResponse} from "@/src/utils/type";

const apiRequest = {
  async getPokemon(currentPageUrl: string): Promise<IResponse<IPokemon[]>> {
    try {
      const response = await axios.get(currentPageUrl)
      return response.data as IResponse<IPokemon[]>;
    } catch (e: any) {
      throw Error(e.response.data.message);
    }
  }
}

export default apiRequest;